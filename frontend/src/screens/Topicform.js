import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Topicform() {

    const { id } = useParams()

    const [name, setName] = useState('')
    const [video, setVideo] = useState('')

    const [thanks, setThanks] = useState('')

    useEffect(() => {
        fetch(`/admin/showtopicbyid/${id}`).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setName(data.bRecord.name)
                setVideo(data.bRecord.video)
            } else {
                alert(data.message)
            }
        })
    }, [id])

    function handleform(e) {
        e.preventDefault()
        const formdata = { name, video }
        fetch(`/admin/updatetopic/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formdata)
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setThanks('topic is updated')
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
                <h2 className="text-center">Update Topic Here</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <form method="post" onSubmit={(e) => { handleform(e) }}>
                                <label className="pt-2">Topic Name</label>
                                <input value={name} onChange={(e) => { setName(e.target.value) }} maxLength={28} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Topic Link</label>
                                <input value={video} onChange={(e) => { setVideo(e.target.value) }} maxLength={140} required type='text' className="form-control mt-1" />
                                <button type="submit" className="form-control btn btn-danger my-2">Update Service</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Topicform;