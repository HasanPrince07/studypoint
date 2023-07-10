import { useContext, useState } from "react";
import { Link } from 'react-router-dom'
import { contextapi } from "../components/Contextapi";

function Changepassword() {

    const { globalemail } = useContext(contextapi)

    const [cpass, setCpass] = useState('')
    const [npass, setNpass] = useState('')
    const [thanks, setThanks] = useState('')

    function handleform(e) {
        e.preventDefault()
        const formdata = { cpass, npass, globalemail }
        fetch('/user/changepassword', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formdata)
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setThanks('password is changed')
            } else if (data.status === 500) {
                setThanks(data.message)
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
                            <Link><button className="btn btn-danger form-control">change password</button></Link>
                            <Link to='/resetpage' className="ms-2"><button className="btn btn-danger form-control">forgot password</button></Link>
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
                <h2 className="text-center">Change Password</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <form method="post" onSubmit={(e) => { handleform(e) }}>
                                <label className="pt-2">Current Password</label>
                                <input value={cpass} onChange={(e) => { setCpass(e.target.value) }} required type='text' className="form-control mt-1" />
                                <label className="pt-2">New Password</label>
                                <input value={npass} onChange={(e) => { setNpass(e.target.value) }} required type='text' className="form-control mt-1" />
                                <button type="submit" className="form-control btn btn-danger my-2">Change Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Changepassword;