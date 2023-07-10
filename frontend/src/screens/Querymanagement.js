import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboardlinks from "../components/Dashboardlinks";

function Querymanagement() {

    const [queryrecords, setQueryrecords] = useState([])
    const [status, setStatus] = useState('')
    const [change, setChange] = useState(0)

    useEffect(() => {
        fetch('/admin/showadminquery').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setQueryrecords(data.bRecord)
            } else {
                alert(data.message)
            }
        })
    }, [change])

    function handledelete(e, id) {
        fetch(`/admin/querydelete/${id}`, {
            method: 'DELETE'
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setChange(change + 1)
            }
        })
    }

    function handlestatus(e) {
        e.preventDefault()
        if (status === '') {
            return
        }
        const formdata = { status }
        fetch('/admin/status', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formdata)
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setQueryrecords(data.bRecord)
            }
        })
    }

    return (
        <>
            <section id="dashboard">
                <h2 className="text-center pt-4">Query Management Page</h2>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-3'>
                            <Dashboardlinks />
                        </div>
                        <div className='col-md-9 table-responsive'>
                            <form method="post">
                                <select value={status} onChange={(e) => { setStatus(e.target.value) }} className="form-select" required>
                                    <option value=''>select</option>
                                    <option value='send'>send</option>
                                    <option value='unsend'>unsend</option>
                                </select>
                                <button onClick={(e) => { handlestatus(e) }} className="btn btn-danger form-control my-2">search</button>
                            </form>
                            <table className="table table-bordered text-center align-middle">
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th>Emails</th>
                                        <th>Number</th>
                                        <th>Queries</th>
                                        <th>Reply</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {queryrecords.map((data, key) => (
                                        <tr key={data._id}>
                                            <td>{key + 1}</td>
                                            <td>{data.email}</td>
                                            <td>{data.number}</td>
                                            <td>{data.query}</td>
                                            {data.status === 'unsend' ?
                                                <td><Link to={`/queryform/${data._id}`}><button className="btn btn-danger">{data.status}</button></Link></td>
                                                :
                                                <td><button disabled className="btn btn-danger">{data.status}</button></td>
                                            }
                                            <td><Link onClick={(e) => { handledelete(e, data._id) }}><button className="btn btn-danger">delete</button></Link></td>
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

export default Querymanagement;