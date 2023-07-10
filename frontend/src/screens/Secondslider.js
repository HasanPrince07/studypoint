import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboardlinks from "../components/Dashboardlinks";

function Secondslider() {

    const [numberone, setNumberone] = useState('')
    const [textone, setTextone] = useState('')
    const [txtone, setTxtone] = useState('')
    const [numbertwo, setNumbertwo] = useState('')
    const [texttwo, setTexttwo] = useState('')
    const [txttwo, setTxttwo] = useState('')
    const [numberthree, setNumberthree] = useState('')
    const [textthree, setTextthree] = useState('')
    const [txtthree, setTxtthree] = useState('')
    const [numberfour, setNumberfour] = useState('')
    const [textfour, setTextfour] = useState('')
    const [txtfour, setTxtfour] = useState('')
    const [img, setImg] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        fetch('/admin/showadminsecondslider').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setNumberone(data.bRecord.numberone)
                setTextone(data.bRecord.textone)
                setTxtone(data.bRecord.txtone)
                setNumbertwo(data.bRecord.numbertwo)
                setTexttwo(data.bRecord.texttwo)
                setTxttwo(data.bRecord.txttwo)
                setNumberthree(data.bRecord.numberthree)
                setTextthree(data.bRecord.textthree)
                setTxtthree(data.bRecord.txtthree)
                setNumberfour(data.bRecord.numberfour)
                setTextfour(data.bRecord.textfour)
                setTxtfour(data.bRecord.txtfour)
                setImg(data.bRecord.img)
                setId(data.bRecord._id)
            } else {
                alert(data.message)
            }
        })
    }, [])

    return (
        <>
            <section id="dashboard">
                <h2 className="text-center pt-4">Second Slider Management Page</h2>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-3'>
                            <Dashboardlinks />
                        </div>
                        <div className='col-md-9 table-responsive'>
                            <table className="table table-bordered text-center align-middle">
                                <thead>
                                    <tr>
                                        <th>Number One</th>
                                        <th>Text One</th>
                                        <th>Text One Second Line</th>
                                        <th>Number Two</th>
                                        <th>Text Two</th>
                                        <th>Text Two Second Line</th>
                                        <th>Number Three</th>
                                        <th>Text Three</th>
                                        <th>Text Three Second Line</th>
                                        <th>Number Four</th>
                                        <th>Text Four</th>
                                        <th>Text Four Second Line</th>
                                        <th>Second Slider Image</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <td>{numberone}</td>
                                        <td>{textone}</td>
                                        <td>{txtone}</td>
                                        <td>{numbertwo}</td>
                                        <td>{texttwo}</td>
                                        <td>{txttwo}</td>
                                        <td>{numberthree}</td>
                                        <td>{textthree}</td>
                                        <td>{txtthree}</td>
                                        <td>{numberfour}</td>
                                        <td>{textfour}</td>
                                        <td>{txtfour}</td>
                                        <td><img src={`/upload/${img}`} alt='error' /></td>
                                        <td><Link to={`/secondsliderform/${id}`}><button className="btn btn-danger form-control">Update</button></Link></td>
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

export default Secondslider;