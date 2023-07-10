import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { contextapi } from "../components/Contextapi";

function Profile() {

    const { globalemail } = useContext(contextapi)

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [img, setImg] = useState('')

    const [thanks, setThanks] = useState('')
    const [change, setChange] = useState('')

    useEffect(() => {
        const formdata = { globalemail }
        if(globalemail===null){
            return
        }
        fetch('/user/showprofile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formdata)
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setFname(data.bRecord.fname)
                setLname(data.bRecord.lname)
                setImg(data.bRecord.img)
            }
        })
    }, [change,globalemail])

    function handleform(e) {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('file', img)
        formdata.append('fname', fname)
        formdata.append('lname', lname)
        formdata.append('globalemail', globalemail)
        fetch('/user/updateprofile', {
            method: 'PUT',
            body: formdata
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setThanks('your profile updated')
                setChange(change + 1)
            }
        })
    }

    return (
        <>
            <div className="container-fluid bg-light mt-2">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between align-items-center">
                        <div>
                            <img style={{ width: '100px', padding: '10px 10px 10px 0px' }} src={`upload/${img}`} alt='error' />
                            <button className="btn btn-danger">Email : {globalemail}</button>
                        </div>
                        <div className="d-flex justify-content-between">
                            <Link to='/changepasswordpage'><button className="btn btn-danger form-control">change password</button></Link>
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
                <h2 className="text-center">Profile</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <form method="post" onSubmit={(e) => { handleform(e) }}>
                                <label className="pt-2">First Name</label>
                                <input required value={fname} onChange={(e) => { setFname(e.target.value) }} type='text' className="form-control mt-1" />
                                <label className="pt-2">Last Name</label>
                                <input required value={lname} onChange={(e) => { setLname(e.target.value) }} type='text' className="form-control mt-1" />
                                <label className="pt-2">Profile Pic</label>
                                <input required onChange={(e) => { setImg(e.target.files[0]) }} type='file' className="form-control mt-1" />
                                <button type="submit" className="form-control btn btn-danger my-2">Update Profile</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;