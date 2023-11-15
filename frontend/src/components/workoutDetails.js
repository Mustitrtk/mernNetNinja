import {Link} from 'react-router-dom';

function WorkoutDetails({ workout }) {

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load-kg:</strong> {workout.load}</p>
      <p><strong>Sets:</strong> {workout.sets}</p>
      <p>{workout.createdAt}</p>
      <Link className='btn btn-primary mx-2' to={`/edit/${workout._id}`}>Edit</Link>
      <Link className='btn btn-danger mx-2' onClick={async ()=>{
        const response = await fetch(`/workout/del/${workout._id}`,{
          method:"DELETE",
        })
        const json = await response.json();

        if(!response.ok){
          console.log(json.error)
        }
        else{
          window.location.href = "/";
        }
      }}>Delete</Link>
    </div>
  );
}

export default WorkoutDetails;
