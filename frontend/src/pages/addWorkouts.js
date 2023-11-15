import { useState } from "react";

const AddWorkouts = () => {

    const [title , setTitle] = useState('');
    const [load , setLoad] = useState('');
    const [sets , setSets] = useState('');
    const [error , setError] = useState(null);

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const workout = {title,load,sets}

        const response = await fetch('/workout/create',{
            method:"POST",
            body: JSON.stringify(workout),
            headers:{
                'Content-type':'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        else{
            setTitle('')
            setLoad('')
            setSets('')
            setError(null)
            console.log('success')
            window.location.href = '/';
        }

    }

    return (
        <div className="AddWorkout">
            <div className="card">
                <div className="card-body d-flex justify-content-center">
                    <form className="Create" onSubmit={handleSubmit}>
                        <h1 className="card-title">Add Workout</h1>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <div className="mb-3">
                            <label className="form-label">
                                Title:
                                <input className="form-control" type="text" name="title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                            </label>
                        </div>

                        <div>
                            <label className="form-label">
                                Load (kg):
                                <input className="form-control" type="number" name="load" value={load} onChange={(e)=>setLoad(e.target.value)}/>
                            </label>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Sets:
                                <input className="form-control" type="number" name="sets" value={sets} onChange={(e)=>setSets(e.target.value)}/>
                            </label>
                        </div>
                        <div className="mb-3">
                            <input className="form-control" type="submit" value="Submit" />
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default AddWorkouts;