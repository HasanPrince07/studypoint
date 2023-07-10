import { useState } from "react";

function Testi() {

    const [cname, setCname] = useState('')
    const [cdesc, setCdesc] = useState('')
    const [cimg, setCimg] = useState('')
    const [thanks, setThanks] = useState('')

    function handleimage(e) {
        setCimg(e.target.files[0])
    }
    function handleform(e) {
        e.preventDefault()
        let data = new FormData()
        data.append('file', cimg)
        data.append('name', cname)
        data.append('desc', cdesc)
        fetch('/user/addtesti', {
            method: 'POST',
            body: data
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 201) {
                setThanks('thanks for review')
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
                <h2 className="text-center">Testimonials</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <form method="post" onSubmit={(e) => { handleform(e) }}>
                                <label className="pt-2">Candidate Name</label>
                                <input maxLength={24} required value={cname} onChange={(e) => { setCname(e.target.value) }} type='text' className="form-control mt-1" />
                                <label className="pt-2">Candidate Description</label>
                                <input maxLength={200} required value={cdesc} onChange={(e) => { setCdesc(e.target.value) }} type='text' className="form-control mt-1" />
                                <label className="pt-2">Candidate Image</label>
                                <input required onChange={(e) => { handleimage(e) }} type='file' className="form-control mt-1" />
                                <button type="submit" className="form-control btn btn-danger my-2">Submit Review</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testi;