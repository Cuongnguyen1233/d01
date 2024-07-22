import { useState } from 'react'
export default function StudentCreate({ db }) {
    let [Id, setID] = useState('S20');
    let [Name, setName] = useState('abc');
    let [Email, setEmail] = useState('abc@gmail.com');
    let [Yob, setYob] = useState('2002');

    const fnInsert = (ev) => {
        ev.preventDefault();

        let new_st = { "id": Id, "name": Name, "email": Email, "yob": Yob };
        db.push(new_st);
        alert("create new student successfully.");
    }
    return (
        <div style={{ width: "50%", margin: "auto" }}>
            <h3>Create new student</h3>
            <hr />
            <form className="mt-3" onSubmit={fnInsert}>

                <div className="mt-3">
                    <label for="id" className="form-label">ID:</label>
                    <input type="text" className="form-control" id="id"
                        pattern="S\d{2}" name="id" required onChange={(ev) => setID(ev.target.value)} />
                </div>

                <div className="mt-3">
                    <label for="name" className="form-label">Full Name:</label>
                    <input type="text" className="form-control" id="name" name="name" required onChange={(ev) => setName(ev.target.value)} />
                </div>

                <div className="mt-3">
                    <label for="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required onChange={(ev) => setEmail(ev.target.value)} />
                </div>

                <div className="mt-3 mb-3">
                    <label for="yob" className="form-label">Year of Birth:</label>
                    <input type="number" className="form-control" id="yob" name="yob" min="1900" max="2020" required onChange={(ev) => setYob(ev.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>

        </div>

    )
}
