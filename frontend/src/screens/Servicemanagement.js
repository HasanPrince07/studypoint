import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboardlinks from "../components/Dashboardlinks";

function Servicemanagement() {

    const [servicerecords, setServicerecords] = useState([])
    const [change, setChange] = useState(0)

    useEffect(() => {
        fetch('/admin/showadminservice').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setServicerecords(data.bRecord)
            } else {
                alert(data.message)
            }
        })
    }, [change])

    function handledelete(e, id) {
        fetch(`/admin/servicedelete/${id}`, {
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
                <h2 className="text-center pt-4">Service Management Page</h2>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-3'>
                            <Dashboardlinks />
                        </div>
                        <div className='col-md-9 table-responsive'>
                            <Link to='/addservice'><button className="btn btn-danger form-control mb-4">Add Service</button></Link>
                            <table className="table table-bordered text-center align-middle">
                                <thead>
                                    <tr className="align-middle">
                                        <th>S.No.</th>
                                        <th>Service Image</th>
                                        <th>Service Heading</th>
                                        <th>Service Description</th>
                                        <th>Service Long Description</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {servicerecords.map((data, key) => (
                                        <tr key={data._id}>
                                            <td>{key + 1}</td>
                                            <td><img src={`/upload/${data.simg}`} alt='error' /></td>
                                            <td>{data.sname}</td>
                                            <td>{data.sdesc}</td>
                                            <td>{data.sldesc}</td>
                                            <td><Link to={`/serviceform/${data._id}`}><button className="btn btn-danger">update</button></Link></td>
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

export default Servicemanagement;