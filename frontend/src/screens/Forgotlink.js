import { useContext, useState } from "react"
import { contextapi } from "../components/Contextapi"

function Forgotlink() {

    const { globalemail } = useContext(contextapi)

    const [npass, setNpass] = useState('')
    const [thanks, setThanks] = useState('')

    function handleform(e) {
        e.preventDefault()
        const formdata = { npass, globalemail }
        fetch('/user/forgotpassword', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formdata)
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setThanks('password is changed')
            } else {
                setThanks(data.message)
            }
        })
    }

    return (
        <>
            <div className="container-fluid bg-light mt-2">
                <div className="row">
                    <div>
                        <button className="btn btn-danger">Email : {globalemail}</button>
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
                <h2 className="text-center">Enter New Password</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <form method="post" onSubmit={(e) => { handleform(e) }}>
                                <label className="pt-2">New Password</label>
                                <input value={npass} onChange={(e) => { setNpass(e.target.value) }} required type='text' className="form-control mt-1" />
                                <button type="submit" className="form-control btn btn-danger my-2">set Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Forgotlink;