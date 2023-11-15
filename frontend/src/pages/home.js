import { useEffect, useState } from "react"

import WorkoutDetails from '../components/workoutDetails'
import { Link } from "react-router-dom"

const Home = ()=>{

    const [workouts, setWorkouts] = useState(null)

    useEffect(()=>{
        const fetchWorks =  async()=>{
            const response = await fetch('/workout/get') //req gönderiyor
            const json = await response.json()

            if(response.ok){
                setWorkouts(json)
            }
        }

        fetchWorks()
    },[])

    return(
        <div className="Home">
            <div className="d-flex justify-content-start">
                <Link to={'/add'} className="btn btn-success">+</Link>
            </div>
            <div className="workouts">
                {workouts && workouts.map(workout => (
                <WorkoutDetails workout={workout} key={workout._id} />
                ))}
            </div>
        </div>
    )
}

export default Home