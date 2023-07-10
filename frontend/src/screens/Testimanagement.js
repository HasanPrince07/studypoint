import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboardlinks from "../components/Dashboardlinks";

function Testimanagement() {

    const [testirecords, setTestirecords] = useState([])
    const [totaltesi, setTotaltesti] = useState(0)
    const [publishtesi, setPublishtesti] = useState(0)
    const [unpublishtesi, setUnpublishtesti] = useState(0)
    const [change, setChange] = useState(0)
    const [changestatus, setChangestatus] = useState(0)

    useEffect(() => {
        fetch('/admin/adminshowtestidata').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setTestirecords(data.bRecord)
                setTotaltesti(data.tRecord)
                setPublishtesti(data.pRecord)
                setUnpublishtesti(data.uRecord)
            } else {
                alert(data.message)
            }
        })
    }, [change, changestatus])

    function handledelete(e, id) {
        fetch(`/admin/testidelete/${id}`, {
            method: 'DELETE'
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setChange(change + 1)
            } else {
                alert(data.message)
            }
        })
    }

    function handlestatus(e, id) {
        fetch(`/admin/testistatus/${id}`, {
            method: 'PUT'
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setChangestatus(changestatus + 1)
            }
        })
    }

    return (
        <>
            <section id="dashboard">
                <h2 className="text-center pt-4">Testimonials Management Page</h2>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-3'>
                            <Dashboardlinks />
                        </div>
                        <div className='col-md-9 table-responsive'>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: '33.3%', padding: '8px 18px' }}>Total Testimonials : <span className="float-end">{totaltesi}</span></th>
                                        <th style={{ width: '33.3%', padding: '8px 18px' }}>Total Publish Testimonials : <span className="float-end">{publishtesi}</span></th>
                                        <th style={{ width: '33.3%', padding: '8px 18px' }}>Total Unpublish Testimonials : <span className="float-end">{unpublishtesi}</span></th>
                                    </tr>
                                </thead>
                            </table>
                            <table className="table table-bordered text-center align-middle">
                                <thead>
                                    <tr className="align-middle">
                                        <th>S.No.</th>
                                        <th>Testimonials Image</th>
                                        <th>Testimonials Heading</th>
                                        <th>Testimonials Description</th>
                                        <th>Posted Date</th>
                                        <th>Status</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {testirecords.map((data, key) => (
                                        <tr key={data._id}>
                                            <td>{key + 1}</td>
                                            <td><img src={`/upload/${data.cimg}`} alt='error' /></td>
                                            <td>{data.cname}</td>
                                            <td>{data.cdesc}</td>
                                            <td>{data.date}</td>
                                            {data.status === 'unpublish' ?
                                                <td><Link onClick={(e) => { handlestatus(e, data._id) }}><button className="btn btn-danger">{data.status}</button></Link></td>
                                                :
                                                <td><Link onClick={(e) => { handlestatus(e, data._id) }}><button className="btn btn-success">{data.status}</button></Link></td>
                                            }
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

export default Testimanagement;