import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboardlinks from "../components/Dashboardlinks";

function Bookmanagement() {

    const [offertext, setOffertext] = useState('')
    const [btntext, setBtntext] = useState('')
    const [offertextid, setOffertextid] = useState('')
    const id = offertextid

    useEffect(() => {
        fetch('/admin/adminshowbookdata').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setOffertext(data.bRecord.text)
                setBtntext(data.bRecord.btntext)
                setOffertextid(data.bRecord._id)
            } else {
                alert(data.message)
            }
        })
    }, [])

    return (
        <>
            <section id="dashboard">
                <h2 className="text-center pt-4">Book Management Page</h2>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-3'>
                            <Dashboardlinks />
                        </div>
                        <div className='col-md-9'>
                            <table className="table table-bordered text-center align-middle">
                                <thead>
                                    <tr>
                                        <th>Button Text</th>
                                        <th>Offer Text</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{btntext}</td>
                                        <td>{offertext}</td>
                                        <td><Link to={`/bookdataform/${id}`}><button className="btn btn-danger form-control">Update</button></Link></td>
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

export default Bookmanagement;