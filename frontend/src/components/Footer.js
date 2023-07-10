import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Footer() {

    const [website, setWebsite] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [linkdin, setLinkdin] = useState('')
    const [snapchat, setSnapchat] = useState('')
    const [facebook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')

    useEffect(() => {
        fetch('/user/showfooter').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setWebsite(data.bRecord.website)
                setLocation(data.bRecord.location)
                setEmail(data.bRecord.email)
                setPhone(data.bRecord.phone)
                setLinkdin(data.bRecord.linkdin)
                setSnapchat(data.bRecord.snapchat)
                setFacebook(data.bRecord.facebook)
                setInstagram(data.bRecord.instagram)
            }
        })
    }, [])


    return (
        <>
            <section id='footer'>
                <div className='container-fluid bg-danger'>
                    <div className='row p-3'>
                        <div className='col-md-4 d-flex align-items-center'>
                            <img src='images/coachinglogo.png' alt='error' />
                            <h4>{website}</h4>
                        </div>
                        <div className='col-md-4'>
                            <h3>Contact Us</h3>
                            <p><i className="bi bi-geo-alt-fill"></i> <span> {location}</span></p>
                            <p><i className="bi bi-envelope-fill"></i> <span> {email}</span></p>
                            <p><i className="bi bi-telephone-fill"></i> <span> {phone}</span></p>
                        </div>
                        <div className='col-md-4'>
                            <h3>Follow Us</h3>
                            <div id='links'>
                                <Link to={linkdin} target='_blank'><i className="bi bi-linkedin"></i></Link>
                                <Link to={snapchat} target='_blank'><i className="bi bi-snapchat"></i></Link>
                                <Link to={facebook} target='_blank'><i className="bi bi-facebook"></i></Link>
                                <Link to={instagram} target='_blank'><i className="bi bi-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-light'>
                    <p className='text-center fs-5'><i className="bi bi-c-circle-fill"></i>Copyright 2022 | studypoint</p>
                </div>
            </section>
        </>
    );
}

export default Footer;