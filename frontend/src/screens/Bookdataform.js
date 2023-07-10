import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Bookdataform() {

    const [offertext, setOffertext] = useState('')
    const [btntext, setBtntext] = useState('')
    const { id } = useParams()

    const [thanks, setThanks] = useState('')

    useEffect(() => {
        fetch(`/admin/adminupdatebookdata/${id}`).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setOffertext(data.bRecord.text)
                setBtntext(data.bRecord.btntext)
            } else {
                alert(data.message)
            }
        })
    }, [id])

    function handleform(e) {
        e.preventDefault()
        const formdata = { offertext, btntext }
        fetch(`/admin/adminupdatebookdataone/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formdata)
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setThanks('book data is updated')
            } else {
                setThanks(data.message)
            }
        })
    }

    return (
        <>
            <section id="dashboard">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '120px' }}>
                        {thanks ?
                            <div className="alert alert-danger col-md-5 col-12 d-flex justify-content-center align-items-center m-0 py-3" role='alert'>{thanks}</div>
                            : ''}
                    </div>
                </div>
                <h2 className="text-center pt-4">Update Book Data</h2>
                <div className='container'>
                    <div className='row d-flex align-items-center justify-content-center'>
                        <div className='col-md-6'>
                            <form onSubmit={(e) => { handleform(e) }}>
                                <label className="fs-3">Button Text</label>
                                <input maxLength={80} type='text' className="form-control my-3" value={btntext} onChange={(e) => { setBtntext(e.target.value) }} />
                                <label className="fs-3">Offer Text</label>
                                <input maxLength={110} type='text' className="form-control my-3" value={offertext} onChange={(e) => { setOffertext(e.target.value) }} />
                                <button className="form-control btn btn-danger">Update Book Data</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Bookdataform;