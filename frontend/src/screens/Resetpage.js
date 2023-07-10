import { useContext, useState } from "react";
import { Link } from 'react-router-dom'
import { contextapi } from "../components/Contextapi";

function Resetpage() {

    const { globalemail } = useContext(contextapi)

    const [email, setEmail] = useState('')
    const [thanks, setThanks] = useState('')

    function handleform(e) {
        e.preventDefault()
        const formdata = { email, globalemail }
        fetch('/user/sendlink', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formdata)
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setThanks('link is sent')
            } else if (data.status === 400) {
                setThanks('email is not valid')
            } else {
                setThanks(data.message)
            }
        })
    }

    return (
        <>
            <div className="container-fluid bg-light mt-2">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between">
                        <div>
                            <button className="btn btn-danger">Email : {globalemail}</button>
                        </div>
                        <div className="d-flex justify-content-between">
                            <Link to='/changepasswordpage'><button className="btn btn-danger form-control">change password</button></Link>
                            <Link className="ms-2"><button className="btn btn-danger form-control">forgot password</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <section id="testipage">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '120px' }}>
                        {thanks ?
                            <div className="alert alert-danger col-md-5 col-12 d-flex justify-content-center align-items-center m-0 py-3" role='alert'>{thanks}</div>
                            : ''}
                    </div>
                </div>
                <h2 className="text-center">Forgot Password</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <form method="post" onSubmit={(e) => { handleform(e) }}>
                                <label className="pt-2">Email</label>
                                <input value={email} onChange={(e) => { setEmail(e.target.value) }} required type='email' className="form-control mt-1" />
                                <button type="submit" className="form-control btn btn-danger my-2">Send Link</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Resetpage;