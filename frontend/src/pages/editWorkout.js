import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditWorkouts = () => {
    
    //parametreyi aldık süslü parantezler bu kısımda kullanılmazsa hata veriyor (ne tür parametre aldığını göstermemiz lazım).
    const {_id} = useParams();

    //seçilen nesneyi buradan getireceğiz gelecek nesneler tanımlanmalı
    const [prev_workout, setWorkout] = useState({
        title: "",
        load: "",
        sets: "",
    });

    //Get işlemi yaptığımız kısım
    useEffect(() => {
        const fetchWorks = async () => {
            const response = await fetch(`/workout/get/${_id}`);
            const json = await response.json();

            if (response.ok) {
                setWorkout(json);
            }
            else{
                console.log('bulunamadi')
            }
        };

        fetchWorks();
    },[_id]);

    //Doldurulacak alanları belirledik
    const [title, setTitle] = useState("");
    const [load, setLoad] = useState("");
    const [sets, setSets] = useState("");
    const [error, setError] = useState(null);

    //Doldurulacak alanlara ilk değerlerini verdik.
    useEffect(()=>{
        setTitle(prev_workout.title)
        setLoad(prev_workout.load)
        setSets(prev_workout.sets)
    },[prev_workout])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = { title, load, sets, _id };

        const response = await fetch("/workout/update", {
            method: "PATCH",
            body: JSON.stringify(workout),
            headers: {
            "Content-type": "application/json",
            },
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        } else {
            setTitle("");
            setLoad("");
            setSets("");
            setError(null);
            console.log("success");
            window.location.href = "/";
        }
    };

    return (
        <div className="EditWorkout">
            <div className="card">
                <div className="card-body d-flex justify-content-center">
                    <form className="Create" onSubmit={handleSubmit}>
                        <h1 className="card-title">Edit Workout</h1>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <input
                                className="form-control"
                                type="hidden"
                                name="_id"
                                value={prev_workout._id}
                            />
                        <div className="mb-3">
                            <label className="form-label">
                            Title:
                            <input
                                className="form-control"
                                type="text"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            </label>
                        </div>

                        <div>
                            <label className="form-label">
                            Load (kg):
                            <input
                                className="form-control"
                                type="number"
                                name="load"
                                value={load}
                                onChange={(e) => setLoad(e.target.value)}
                            />
                            </label>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                            Sets:
                            <input
                                className="form-control"
                                type="number"
                                name="sets"
                                value={sets}
                                onChange={(e) => setSets(e.target.value)}
                            />
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
};

export default EditWorkouts;
