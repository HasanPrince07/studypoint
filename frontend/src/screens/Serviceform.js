import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Serviceform() {

    const { id } = useParams()

    const [sname, setSname] = useState('')
    const [sdesc, setSdesc] = useState('')
    const [sldesc, setSldesc] = useState('')
    const [simg, setSimg] = useState('')

    const [thanks, setThanks] = useState('')

    useEffect(() => {
        fetch(`/admin/showservicebyid/${id}`).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setSname(data.bRecord.sname)
                setSdesc(data.bRecord.sdesc)
                setSldesc(data.bRecord.sldesc)
            } else {
                alert(data.message)
            }
        })
    }, [id])

    function handleform(e) {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('sname', sname)
        formdata.append('sdesc', sdesc)
        formdata.append('sldesc', sldesc)
        formdata.append('file', simg)
        fetch(`/admin/updateservice/${id}`, {
            method: 'PUT',
            body: formdata
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setThanks('service is updated')
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
                <h2 className="text-center">Update Service Here</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <form method="post" onSubmit={(e) => { handleform(e) }}>
                                <label className="pt-2">Service Heading</label>
                                <input value={sname} onChange={(e) => { setSname(e.target.value) }} maxLength={28} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Service Description</label>
                                <input value={sdesc} onChange={(e) => { setSdesc(e.target.value) }} maxLength={140} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Service Long Description</label>
                                <textarea value={sldesc} onChange={(e) => { setSldesc(e.target.value) }} maxLength={500} required className="form-control mt-1"></textarea>
                                <label className="pt-2">Service Image</label>
                                <input type='file' onChange={(e) => { setSimg(e.target.files[0]) }} className='form-control mt-1' required />
                                <button type="submit" className="form-control btn btn-danger my-2">Update Service</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Serviceform;