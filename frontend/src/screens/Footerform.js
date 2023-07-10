import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Footerform() {

    const { id } = useParams()
    const [website, setWebsite] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [linkdin, setLinkdin] = useState('')
    const [snapchat, setSnapchat] = useState('')
    const [facebook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')
    const [thanks, setThanks] = useState('')

    useEffect(() => {
        fetch(`/admin/showfooterbyid/${id}`).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setWebsite(data.bRecord.website)
                setLocation(data.bRecord.location)
                setEmail(data.bRecord.email)
                setPhone(data.bRecord.phone)
                setLinkdin(data.bRecord.linkdin)
                setSnapchat(data.bRecord.snapchat)
                setFacebook(data.bRecord.facebook)
                setInstagram(data.bRecord.instagram)
            } else {
                alert(data.message)
            }
        })
    }, [id])

    function handleform(e) {
        e.preventDefault()
        const formdata = { website, location, email, phone, linkdin, snapchat, instagram, facebook }
        fetch(`/admin/updatefooter/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formdata)
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setThanks('Footer is updated')
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
                <h2 className="text-center">Update Footer Here</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <form method="post" onSubmit={(e) => { handleform(e) }} >
                                <label className="pt-2">Footer Name</label>
                                <input value={website} onChange={(e) => { setWebsite(e.target.value) }} maxLength={20} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Footer Location</label>
                                <input value={location} onChange={(e) => { setLocation(e.target.value) }} maxLength={40} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Footer Email</label>
                                <input value={email} onChange={(e) => { setEmail(e.target.value) }} maxLength={40} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Footer Phone</label>
                                <input value={phone} onChange={(e) => { setPhone(e.target.value) }} required type='number' className="form-control mt-1" />
                                <label className="pt-2">Footer Linkdin</label>
                                <input value={linkdin} onChange={(e) => { setLinkdin(e.target.value) }} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Footer Snapchat</label>
                                <input value={snapchat} onChange={(e) => { setSnapchat(e.target.value) }} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Footer Facebook</label>
                                <input value={facebook} onChange={(e) => { setFacebook(e.target.value) }} required type='text' className="form-control mt-1" />
                                <label className="pt-2">Footer Instagram</label>
                                <input value={instagram} onChange={(e) => { setInstagram(e.target.value) }} required type='text' className="form-control mt-1" />
                                <button type="submit" className="form-control btn btn-danger my-2">Update Footer</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footerform;