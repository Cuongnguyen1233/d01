import { useState } from "react"
import studentview from './student-view.css'
export default function StudentView({db}){
    
    return(
        <div className="continer mt-5">
            <h3>list of student</h3>
            <table className="table table-hover table-stripper">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>full name</th>
                        <th>email</th>
                        <th>year of bỉth</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        db.map(x => 
                            <tr>
                                <td>{x.id}</td> 
                                <td style={{textAlign:"left"}}>{x.name}</td>
                                <td style={{textAlign:"left"}}>{x.email}</td>
                                <td>{x.yob}</td>
                                <td><button type="button" className="btn btn-info"> delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}