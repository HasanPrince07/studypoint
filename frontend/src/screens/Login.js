import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contextapi } from "../components/Contextapi";

function Login() {

    const { setGlobalemail } = useContext(contextapi)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    function handleform(e) {
        e.preventDefault()
        const formdata = { email, password }
        fetch('/user/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formdata)
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                window.localStorage.setItem('email', data.bRecord.email)
                setGlobalemail(window.localStorage.getItem('email'))
                if (data.bRecord.email === 'admin@gmail.com') {
                    navigate('/dashboard')
                } else {
                    navigate('/')
                }
            } else if (data.status === 400) {
                setMessage(`Wrong Credentials`)
            } else {
                setMessage(data.message)
            }
        })
    }

    return (
        <>
            <section id="signup">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '160px' }}>
                        {message ?
                            <div className="alert alert-danger col-md-5 col-12 d-flex justify-content-center align-items-center m-0 py-3" role='alert'>{message}</div>
                            : ''}
                    </div>
                </div>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-5 border border-danger">
                            <h2 className="text-center">Login</h2>
                            <form method="post" onSubmit={(e) => { handleform(e) }}>
                                <label>Email</label>
                                <input value={email} onChange={(e) => { setEmail(e.target.value) }} type='email' className="form-control" required />
                                <label>Password</label>
                                <input value={password} onChange={(e) => { setPassword(e.target.value) }} type='text' className="form-control" required />
                                <button className="btn btn-danger form-control mt-5">Login</button>
                                <Link to='/signup' className="text-decoration-none d-block text-center pt-2 text-danger">Don't have an Account?Click Here</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;