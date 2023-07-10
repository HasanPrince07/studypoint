import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboardlinks from "../components/Dashboardlinks";

function Thirdslider() {

    const [headingone, setHeadinone] = useState('')
    const [textone, setTextone] = useState('')
    const [headingtwo, setHeadingtwo] = useState('')
    const [texttwo, setTexttwo] = useState('')
    const [img, setImg] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        fetch('/admin/showadminthirdslider').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setHeadinone(data.bRecord.headingone)
                setTextone(data.bRecord.textone)
                setHeadingtwo(data.bRecord.headingtwo)
                setTexttwo(data.bRecord.texttwo)
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
                <h2 className="text-center pt-4">Third Slider Management Page</h2>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-3'>
                            <Dashboardlinks />
                        </div>
                        <div className='col-md-9 table-responsive'>
                            <table className="table table-bordered text-center align-middle">
                                <thead>
                                    <tr>
                                        <th>Heading One</th>
                                        <th>Text One</th>
                                        <th>Heading Two</th>
                                        <th>Text Two</th>
                                        <th>Third Slider Image</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <td>{headingone}</td>
                                        <td>{textone}</td>
                                        <td>{headingtwo}</td>
                                        <td>{texttwo}</td>
                                        <td><img src={`/upload/${img}`} alt='error' /></td>
                                        <td><Link to={`/thirdsliderform/${id}`}><button className="btn btn-danger form-control">Update</button></Link></td>
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

export default Thirdslider;