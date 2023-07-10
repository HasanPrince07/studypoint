import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboardlinks from "../components/Dashboardlinks";

function Firstslider() {

    const [recordtxt, setRecordtxt] = useState('')
    const [recordimg, setRecordimg] = useState('')
    const [recordid, setRecordid] = useState('')

    useEffect(() => {
        fetch('/admin/showadminfisrtslider').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setRecordtxt(data.bRecord.text)
                setRecordimg(data.bRecord.img)
                setRecordid(data.bRecord._id)
            } else {
                alert(data.message)
            }
        })
    }, [])

    return (
        <>
            <section id="dashboard">
                <h2 className="text-center pt-4">First Slider Management Page</h2>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-3'>
                            <Dashboardlinks />
                        </div>
                        <div className='col-md-9'>
                            <table className="table table-bordered text-center align-middle">
                                <thead>
                                    <tr>
                                        <th>First Slider Text</th>
                                        <th>First Slider Image</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <td>{recordtxt}</td>
                                        <td><img src={`upload/${recordimg}`} alt='error' /></td>
                                        <td><Link to={`/firstsliderform/${recordid}`}><button className="btn btn-danger">update</button></Link></td>
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

export default Firstslider;