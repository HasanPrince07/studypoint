import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Coursedetaileform() {

    const { id } = useParams()
    const [cname, setCname] = useState('')
    const [cduration, setCduration] = useState('')
    const [cformat, setCformat] = useState('')
    const [cfees, setCfees] = useState('')
    const [ctool, setCtool] = useState('')

    const [thanks, setThanks] = useState('')

    useEffect(() => {
        fetch(`/admin/showcoursedetailbyid/${id}`).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setCname(data.bRecord.cname)
                setCduration(data.bRecord.cduration)
                setCformat(data.bRecord.cformat)
                setCfees(data.bRecord.cfees)
                setCtool(data.bRecord.ctool)
            } else {
                alert(data.message)
            }
        })
    }, [id])

    function handleform(e) {
        e.preventDefault()
        const formdata = { cname, cduration, cformat, cfees, ctool }
        fetch(`/admin/updatecoursedetail/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formdata)
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setThanks('course detaile is updated')
            } else {
                setThanks(data.message)
            }
        })
    }

    return (
        <>
            <section id="testipage">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '120px' }}>
                        {thanks ?
                            <div className="alert alert-danger col-md-5 col-12 d-flex justify-content-center align-items-center m-0 py-3" role='alert'>{thanks}</div>
                            : ''}
                    </div>
                </div>
                <h2 className="text-center">Course Detaile Update Here</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <form method="post" onSubmit={(e) => { handleform(e) }}>
                                <label className="pt-2">Course Name</label>
                                <input onChange={(e) => { setCname(e.target.value) }} value={cname} required maxLength={50} type='text' className="form-control mt-1" />
                                <label className="pt-2">Course Duration</label>
                                <input onChange={(e) => { setCduration(e.target.value) }} value={cduration} required maxLength={50} type='text' className="form-control mt-1" />
                                <label className="pt-2">Course Format</label>
                                <input onChange={(e) => { setCformat(e.target.value) }} value={cformat} required maxLength={50} type='text' className="form-control mt-1" />
                                <label className="pt-2">Course Fees</label>
                                <input onChange={(e) => { setCfees(e.target.value) }} value={cfees} required maxLength={50} type='number' className="form-control mt-1" />
                                <label className="pt-2">Course Tool</label>
                                <input onChange={(e) => { setCtool(e.target.value) }} value={ctool} required maxLength={50} type='text' className="form-control mt-1" />
                                <button type="submit" className="form-control btn btn-danger my-2">Update Course Detail</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Coursedetaileform;