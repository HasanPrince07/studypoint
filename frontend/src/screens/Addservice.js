import { useState } from "react";

function Addservice() {
    const [sname, setSname] = useState('')
    const [sdesc, setSdesc] = useState('')
    const [sldesc, setSldesc] = useState('')
    const [simg, setSimg] = useState('')

    const [thanks, setThanks] = useState('')

    function handleform(e) {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('file', simg)
        formdata.append('sname', sname)
        formdata.append('sdesc', sdesc)
        formdata.append('sldesc', sldesc)
        fetch('/admin/addservice', {
            method: 'POST',
            body: formdata
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 201) {
                setThanks('service was added')
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
                <h2 className="text-center">Add Service Here</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <form method="post" onSubmit={(e) => { handleform(e) }}>
                                <label className="pt-2">Service Heading</label>
                                <input onChange={(e) => { setSname(e.target.value) }} value={sname} maxLength={24} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Service Description</label>
                                <input onChange={(e) => { setSdesc(e.target.value) }} value={sdesc} maxLength={140} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Service Long Description</label>
                                <textarea onChange={(e) => { setSldesc(e.target.value) }} value={sldesc} maxLength={500} required type='text' className="form-control mt-1"></textarea>
                                <label className="pt-2">Service Image</label>
                                <input onChange={(e) => { setSimg(e.target.files[0]) }} required type='file' className="form-control mt-1" />
                                <button type="submit" className="form-control btn btn-danger my-2">Add Service</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Addservice;