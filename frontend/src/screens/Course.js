import { useContext, useEffect, useState } from "react";
import Modal from "../components/Modal";
import { contextapi } from '../components/Contextapi'
import Rmodal from "../components/Rmodal";

function Course() {

    const [showmodal, setShowmodal] = useState(false)
    const [showrmodal, setShowrmodal] = useState(false)
    const { globalemail } = useContext(contextapi)

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [number, setNumber] = useState('')
    const [dob, setDob] = useState('')
    const [course, setCourse] = useState('')

    const [cname, setCname] = useState('')
    const [cduration, setCduration] = useState('')
    const [cformat, setCformat] = useState('')
    const [cfees, setCfees] = useState('')
    const [ctool, setCtool] = useState('')

    const [thanks, setThanks] = useState('')

    function closemodal() {
        setShowmodal(false)
        document.body.style.overflowY = ''
    }

    function closermodal() {
        setShowrmodal(false)
        document.body.style.overflowY = ''
    }

    function handleform(e) {
        e.preventDefault()
        if (globalemail === null) {
            setShowmodal(true)
            setShowrmodal(true)
            document.body.style.overflowY = 'hidden'
        } else {
            const formdata = { fname, lname, number, dob, course, globalemail }
            fetch('/user/addcourse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formdata)
            }).then((result) => { return result.json() }).then((data) => {
                if (data.status === 201) {
                    setShowmodal(true)
                    setThanks('thanks for registration')
                } else if (data.status === 500) {
                    setShowrmodal(true)
                }
            })
        }
    }

    useEffect(() => {
        fetch('/user/showcoursedetaile').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setCname(data.bRecord.cname)
                setCduration(data.bRecord.cduration)
                setCformat(data.bRecord.cformat)
                setCfees(data.bRecord.cfees)
                setCtool(data.bRecord.ctool)
            }
        })
    }, [])

    return (
        <>
            {showrmodal ? <Rmodal closermodal={closermodal} thanks={thanks} /> : ''}
            {showmodal ? <Modal closemodal={closemodal} thanks={thanks} /> : ''}
            <section id="course">
                <div className="container-fluid my-5 bg-light py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="bg-danger text-white text-center">Course Details</h2>
                            <div className="d-flex align-items-center coursedetail">
                                <ul>
                                    <li>Course Name : {cname}</li>
                                    <li>Course Duration : {cduration}</li>
                                    <li>Learning Format : {cformat}</li>
                                    <li>Course Fees : {cfees}</li>
                                    <li>Tools Covered : {ctool}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h2 className="bg-danger text-white text-center">Registration</h2>
                            <form method="post" onSubmit={(e) => { handleform(e) }}>
                                <label className="p-2">First Name</label>
                                <input required onChange={(e) => { setFname(e.target.value) }} value={fname} type='text' className="form-control mt-1" />
                                <label className="p-2">Last Name</label>
                                <input required onChange={(e) => { setLname(e.target.value) }} value={lname} type='text' className="form-control mt-1" />
                                <label className="p-2">Mobile Number</label>
                                <input required onChange={(e) => { setNumber(e.target.value) }} value={number} type='number' className="form-control mt-1" />
                                <label className="p-2">Date Of Birth</label>
                                <input required onChange={(e) => { setDob(e.target.value) }} value={dob} type='date' className="form-control mt-1" />
                                <label className="p-2">Select Course</label>
                                <select value={course} onChange={(e) => { setCourse(e.target.value) }} className="form-select" required>
                                    <option value=''>select</option>
                                    <option value='webdevolpment'>web development</option>
                                    <option value='mobileapplicationdevolpment'>mobile application development</option>
                                </select>
                                <button className="btn btn-danger form-control mt-3">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Course;