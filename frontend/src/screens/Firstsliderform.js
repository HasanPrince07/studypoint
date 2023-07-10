import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Firstsliderform() {

    const { id } = useParams()
    const [text, setText] = useState('')
    const [img, setImg] = useState('')

    const [thanks, setThanks] = useState('')

    useEffect(() => {
        fetch(`/admin/firstsliderbyid/${id}`).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setText(data.bRecord.text)
            } else {
                alert(data.message)
            }
        })
    }, [id])

    function handleform(e) {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('file', img)
        formdata.append('text', text)
        fetch(`/admin/updatefirstslider/${id}`, {
            method: 'PUT',
            body: formdata
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setThanks('first slider is updated')
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
                <h2 className="text-center">Update First Slider Here</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <form method="post" onSubmit={(e) => { handleform(e) }}>
                                <label className="pt-2">First Slider Text</label>
                                <input value={text} onChange={(e) => { setText(e.target.value) }} maxLength={80} required type='text' className="form-control mt-1" />
                                <input onChange={(e) => { setImg(e.target.files[0]) }} required type='file' className="form-control mt-1" />
                                <button type="submit" className="form-control btn btn-danger mt-2">Update First Slider</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Firstsliderform;