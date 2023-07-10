import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Thirdsliderform() {

    const { id } = useParams()

    const [headingone, setHeadinone] = useState('')
    const [textone, setTextone] = useState('')
    const [headingtwo, setHeadingtwo] = useState('')
    const [texttwo, setTexttwo] = useState('')
    const [img, setImg] = useState('')

    const [thanks, setThanks] = useState('')

    useEffect(() => {
        fetch(`/admin/thirdsliderbyid/${id}`).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setHeadinone(data.bRecord.headingone)
                setTextone(data.bRecord.textone)
                setHeadingtwo(data.bRecord.headingtwo)
                setTexttwo(data.bRecord.texttwo)
            } else {
                alert(data.message)
            }
        })
    }, [id])

    function handleform(e) {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('file', img)
        formdata.append('headingone', headingone)
        formdata.append('textone', textone)
        formdata.append('headingtwo', headingtwo)
        formdata.append('texttwo', texttwo)
        fetch(`/admin/updatethirdslider/${id}`, {
            method: 'PUT',
            body: formdata
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setThanks('third slider is updated')
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
                <h2 className="text-center mt-2">Update Third Slider Here</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <form method="post" onSubmit={(e) => { handleform(e) }}>
                                <label className="pt-2">Number One</label>
                                <input value={headingone} onChange={(e) => { setHeadinone(e.target.value) }} maxLength={20} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Text One</label>
                                <input value={textone} onChange={(e) => { setTextone(e.target.value) }} maxLength={40} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Number Two</label>
                                <input value={headingtwo} onChange={(e) => { setHeadingtwo(e.target.value) }} maxLength={20} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Text Two</label>
                                <input value={texttwo} onChange={(e) => { setTexttwo(e.target.value) }} maxLength={40} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Third Slider Image</label>
                                <input onChange={(e) => { setImg(e.target.files[0]) }} required type='file' className="form-control mt-1" />
                                <button type="submit" className="form-control btn btn-danger my-2">Update Third Slider</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Thirdsliderform;