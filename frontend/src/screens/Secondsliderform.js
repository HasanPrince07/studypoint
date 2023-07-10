import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Secondsliderform() {

    const { id } = useParams()

    const [numberone, setNumberone] = useState('')
    const [textone, setTextone] = useState('')
    const [txtone, setTxtone] = useState('')
    const [numbertwo, setNumbertwo] = useState('')
    const [texttwo, setTexttwo] = useState('')
    const [txttwo, setTxttwo] = useState('')
    const [numberthree, setNumberthree] = useState('')
    const [textthree, setTextthree] = useState('')
    const [txtthree, setTxtthree] = useState('')
    const [numberfour, setNumberfour] = useState('')
    const [textfour, setTextfour] = useState('')
    const [txtfour, setTxtfour] = useState('')
    const [img, setImg] = useState('')

    const [thanks, setThanks] = useState('')

    useEffect(() => {
        fetch(`/admin/secondsliderbyid/${id}`).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setNumberone(data.bRecord.numberone)
                setTextone(data.bRecord.textone)
                setTxtone(data.bRecord.txtone)
                setNumbertwo(data.bRecord.numbertwo)
                setTexttwo(data.bRecord.texttwo)
                setTxttwo(data.bRecord.txttwo)
                setNumberthree(data.bRecord.numberthree)
                setTextthree(data.bRecord.textthree)
                setTxtthree(data.bRecord.txtthree)
                setNumberfour(data.bRecord.numberfour)
                setTextfour(data.bRecord.textfour)
                setTxtfour(data.bRecord.txtfour)
            } else {
                alert(data.message)
            }
        })
    }, [id])

    function handleform(e) {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('file', img)
        formdata.append('numberone', numberone)
        formdata.append('textone', textone)
        formdata.append('txtone', txtone)
        formdata.append('numbertwo', numbertwo)
        formdata.append('texttwo', texttwo)
        formdata.append('txttwo', txttwo)
        formdata.append('numberthree', numberthree)
        formdata.append('textthree', textthree)
        formdata.append('txtthree', txtthree)
        formdata.append('numberfour', numberfour)
        formdata.append('textfour', textfour)
        formdata.append('txtfour', txtfour)
        fetch(`/admin/updatesecondslider/${id}`, {
            method: 'PUT',
            body: formdata
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setThanks('second slider is updated')
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
                <h2 className="text-center mt-2">Update Second Slider Here</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <form method="post" onSubmit={(e) => { handleform(e) }}>
                                <label className="pt-2">Number One</label>
                                <input value={numberone} onChange={(e) => { setNumberone(e.target.value) }} maxLength={7} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Text One</label>
                                <input value={textone} onChange={(e) => { setTextone(e.target.value) }} maxLength={12} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Text One Second Line</label>
                                <input value={txtone} onChange={(e) => { setTxtone(e.target.value) }} maxLength={12} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Number Two</label>
                                <input value={numbertwo} onChange={(e) => { setNumbertwo(e.target.value) }} maxLength={7} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Text Two</label>
                                <input value={texttwo} onChange={(e) => { setTexttwo(e.target.value) }} maxLength={12} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Text Two Second Line</label>
                                <input value={txttwo} onChange={(e) => { setTxttwo(e.target.value) }} maxLength={12} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Number Three</label>
                                <input value={numberthree} onChange={(e) => { setNumberthree(e.target.value) }} maxLength={7} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Text Three</label>
                                <input value={textthree} onChange={(e) => { setTextthree(e.target.value) }} maxLength={12} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Text Three Second Line</label>
                                <input value={txtthree} onChange={(e) => { setTxtthree(e.target.value) }} maxLength={12} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Number Four</label>
                                <input value={numberfour} onChange={(e) => { setNumberfour(e.target.value) }} maxLength={7} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Text Four</label>
                                <input value={textfour} onChange={(e) => { setTextfour(e.target.value) }} maxLength={12} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Text Four Second Line</label>
                                <input value={txtfour} onChange={(e) => { setTxtfour(e.target.value) }} maxLength={12} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Second Second Image</label>
                                <input onChange={(e) => { setImg(e.target.files[0]) }} required type='file' className="form-control mt-1" />
                                <button type="submit" className="form-control btn btn-danger my-2">Update Second Slider</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Secondsliderform;