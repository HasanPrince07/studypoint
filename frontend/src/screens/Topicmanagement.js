import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboardlinks from "../components/Dashboardlinks";

function Topicmanagement() {

    const [topicrecords, setTopicrecords] = useState([])
    const [change, setChange] = useState(0)

    useEffect(() => {
        fetch('/admin/showadmintopic').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setTopicrecords(data.bRecord)
            } else {
                alert(data.message)
            }
        })
    }, [change])

    function handledelete(e, id) {
        fetch(`/admin/topicdelete/${id}`, {
            method: 'DELETE'
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setChange(change + 1)
            }
        })
    }

    return (
        <>
            <section id="dashboard">
                <h2 className="text-center pt-4">Topic Management Page</h2>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-3'>
                            <Dashboardlinks />
                        </div>
                        <div className='col-md-9 table-responsive'>
                            <Link to='/addtopic'><button className="btn btn-danger form-control my-3">Add Topic</button></Link>
                            <table className="table table-bordered text-center align-middle">
                                <thead>
                                    <tr className="align-middle">
                                        <th>S.No.</th>
                                        <th>Topic Name</th>
                                        <th>Topic Link</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topicrecords.map((result, key) => (
                                        <tr key={result._id}>
                                            <td>{key + 1}</td>
                                            <td>{result.name}</td>
                                            <td>{result.video}</td>
                                            <td><Link to={`/topicform/${result._id}`}><button className="btn btn-danger form-control">update</button></Link></td>
                                            <td><Link onClick={(e) => { handledelete(e, result._id) }}><button className="btn btn-danger form-control">delete</button></Link></td>
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

export default Topicmanagement;