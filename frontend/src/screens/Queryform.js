import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Queryform() {

    const { id } = useParams()
    const [email, setEmail] = useState('')
    const [from, setFrom] = useState('hasandeveloper07@gmail.com')
    const [query, setQuery] = useState('')
    const [body, setBody] = useState('')

    const [thanks, setThanks] = useState('')

    useEffect(() => {
        fetch(`/admin/showquerybyid/${id}`).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setEmail(data.bRecord.email)
                setQuery(data.bRecord.query)
            } else {
                alert(data.message)
            }
        })
    }, [id])

    function handleform(e) {
        e.preventDefault()
        const formdata = { email, from, query, body }
        fetch(`/admin/queryreply/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formdata)
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setThanks('your email sent')
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
                <h2 className="text-center">Reply Query Here</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <form method="post" onSubmit={(e) => { handleform(e) }} encType='multipart/form-data'>
                                <label className="pt-2">To</label>
                                <input onChange={(e) => { setEmail(e.target.value) }} value={email} required type='email' className="form-control mt-1" />
                                <label className="pt-2">From</label>
                                <input onChange={(e) => { setFrom(e.target.value) }} value={from} required type='email' className="form-control mt-1" />
                                <label className="pt-2">Subject</label>
                                <input onChange={(e) => { setQuery(e.target.value) }} value={query} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Body</label>
                                <textarea value={body} onChange={(e) => { setBody(e.target.value) }} required type='text' className="form-control mt-1"></textarea>
                                <label className="pt-2">Attachment</label>
                                <button type="submit" className="form-control btn btn-danger my-2">reply</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Queryform;