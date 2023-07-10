import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboardlinks from "../components/Dashboardlinks";

function Registermanagement() {

    const [registerrecords, setRegisterrecords] = useState([])

    const [change, setChange] = useState(0)

    useEffect(() => {
        fetch('/admin/showadminregister').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setRegisterrecords(data.bRecord)
            } else {
                alert(data.message)
            }
        })
    }, [change])

    function handlerole(e, id) {
        fetch(`/admin/updaterole/${id}`, {
            method: 'PUT'
        }).then((result) => { return result.json() }).then((data) => {
            setChange(change + 1)
        })
    }

    function handledelete(e, id) {
        fetch(`/admin/coursedelete/${id}`, {
            method: 'DELETE'
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setChange(change + 1)
            } else {
                alert(data.message)
            }
        })
    }

    return (
        <>
            <section id="dashboard">
                <h2 className="text-center pt-4">Course Management Page</h2>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-3'>
                            <Dashboardlinks />
                        </div>
                        <div className='col-md-9 table-responsive'>
                            <table className="table table-bordered text-center align-middle">
                                <thead>
                                    <tr className="align-middle">
                                        <th>S.No.</th>
                                        <th>Email</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Date Of Birth</th>
                                        <th>Number</th>
                                        <th>Role</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {registerrecords.map((data, key) => (
                                        <tr key={data._id}>
                                            <td>{key + 1}</td>
                                            <td>{data.email}</td>
                                            <td>{data.fname}</td>
                                            <td>{data.lname}</td>
                                            <td>{data.dob}</td>
                                            <td>{data.number}</td>
                                            <td><button onClick={(e) => { handlerole(e, data._id) }} className="btn btn-danger form-control">{data.role}</button></td>
                                            <td><Link onClick={(e) => { handledelete(e, data._id) }}><button className="btn btn-danger form-control">Delete</button></Link></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Registermanagement;