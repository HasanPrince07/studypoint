import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboardlinks from "../components/Dashboardlinks";

function Footermanagement() {

    const [website, setWebsite] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [linkdin, setLinkdin] = useState('')
    const [snapchat, setSnapchat] = useState('')
    const [facebook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        fetch('/admin/showadminfooter').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setWebsite(data.bRecord.website)
                setLocation(data.bRecord.location)
                setEmail(data.bRecord.email)
                setPhone(data.bRecord.phone)
                setLinkdin(data.bRecord.linkdin)
                setSnapchat(data.bRecord.snapchat)
                setFacebook(data.bRecord.facebook)
                setInstagram(data.bRecord.instagram)
                setId(data.bRecord._id)
            } else {
                alert(data.message)
            }
        })
    }, [])

    return (
        <>
            <section id="dashboard">
                <h2 className="text-center pt-4">Footer Management Page</h2>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-3'>
                            <Dashboardlinks />
                        </div>
                        <div className='col-md-9 table-responsive'>
                            <table className="table table-bordered text-center align-middle table-responsive">
                                <thead>
                                    <tr className="align-middle">
                                        <th>Footer Name</th>
                                        <th>Footer Location</th>
                                        <th>Footer Email</th>
                                        <th>Footer Phone</th>
                                        <th>Footer Linkdin</th>
                                        <th>Footer Snapchat</th>
                                        <th>Footer Facebook</th>
                                        <th>Footer Instagram</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <td>{website}</td>
                                        <td>{location}</td>
                                        <td>{email}</td>
                                        <td>{phone}</td>
                                        <td>{linkdin}</td>
                                        <td>{snapchat}</td>
                                        <td>{facebook}</td>
                                        <td>{instagram}</td>
                                        <td><Link to={`/footerform/${id}`}><button className="btn btn-danger">update</button></Link></td>
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

export default Footermanagement;