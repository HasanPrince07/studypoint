import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboardlinks from "../components/Dashboardlinks";

function Coursedetailmanagement() {

    const [cname, setCname] = useState('')
    const [cduration, setCduration] = useState('')
    const [cformat, setCformat] = useState('')
    const [cfees, setCfees] = useState('')
    const [ctool, setCtool] = useState('')
    const [id, setCid] = useState('')

    useEffect(() => {
        fetch('/admin/showadmincoursedetail').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setCname(data.bRecord.cname)
                setCduration(data.bRecord.cduration)
                setCformat(data.bRecord.cformat)
                setCfees(data.bRecord.cfees)
                setCtool(data.bRecord.ctool)
                setCid(data.bRecord._id)
            } else {
                alert(data.message)
            }
        })
    }, [])

    return (
        <>
            <section id="dashboard">
                <h2 className="text-center pt-4">Course Detail  Management Page</h2>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-3'>
                            <Dashboardlinks />
                        </div>
                        <div className='col-md-9 table-responsive'>
                            <table className="table table-bordered text-center align-middle">
                                <thead>
                                    <tr className="align-middle">
                                        <th>Course Name</th>
                                        <th>Course Duration</th>
                                        <th>Course Format</th>
                                        <th>Course Fees</th>
                                        <th>Course Tool</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{cname}</td>
                                        <td>{cduration}</td>
                                        <td>{cformat}</td>
                                        <td>{cfees}</td>
                                        <td>{ctool}</td>
                                        <td><Link to={`/coursedetaileform/${id}`}><button className="btn btn-danger">update</button></Link></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Coursedetailmanagement;