import { useState } from "react";

function Addtopic() {
    const [name, setName] = useState('')
    const [video, setVideo] = useState('')

    const [thanks, setThanks] = useState('')

    function handleform(e) {
        e.preventDefault()
        const formdata = { name, video }
        fetch('/admin/addtopic', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formdata)
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 201) {
                setThanks('topic was added')
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
                <h2 className="text-center">Add Topic Here</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <form method="post" onSubmit={(e) => { handleform(e) }} >
                                <label className="pt-2">Topic Name</label>
                                <input onChange={(e) => { setName(e.target.value) }} value={name} maxLength={24} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Topic Videos link</label>
                                <input onChange={(e) => { setVideo(e.target.value) }} value={video} maxLength={140} required type='text' className="form-control mt-1" />
                                <button type="submit" className="form-control btn btn-danger my-2">Add Topic</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Addtopic;