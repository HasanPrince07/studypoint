import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Home() {

    const [offertext, setOffertext] = useState('')
    const [btntext, setBtntext] = useState('')

    const [slideronetxt, setSlideronetxt] = useState('')
    const [slideroneimg, setSlideroneimg] = useState('')

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
    const [secondsliderimg, setSecondsliderimg] = useState('')

    const [headingone, setHeadingone] = useState('')
    const [textonee, setTextonee] = useState('')
    const [headingtwo, setHeadingtwo] = useState('')
    const [texttwoo, setTexttwoo] = useState('')
    const [thirdsliderimg, setThirdsliderimg] = useState('')

    const [testi, setTesti] = useState([])
    const [service, setService] = useState([])

    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [query, setQuery] = useState('')
    const [thanks, setThanks] = useState('')

    useEffect(() => {
        fetch('/user/showsliderone').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setSlideronetxt(data.bRecord.text)
                setSlideroneimg(data.bRecord.img)
            } else {
                alert(data.message)
            }
        })
        fetch('/user/showslidertwo').then((result) => { return result.json() }).then((data) => {
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
                setSecondsliderimg(data.bRecord.img)
            } else {
                alert(data.message)
            }
        })
        fetch('/user/showsliderthree').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setHeadingone(data.bRecord.headingone)
                setTextonee(data.bRecord.textone)
                setHeadingtwo(data.bRecord.headingtwo)
                setTexttwoo(data.bRecord.texttwo)
                setThirdsliderimg(data.bRecord.img)
            } else {
                alert(data.message)
            }
        })
        fetch('/user/showbookdata').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setOffertext(data.bRecord.text)
                setBtntext(data.bRecord.btntext)
            } else {
                alert(data.message)
            }
        })
        fetch('/user/showtesti').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setTesti(data.bRecord)
            } else {
                alert(data.message)
            }
        })
        fetch('/user/showservice').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setService(data.bRecord)
            } else {
                alert(data.message)
            }
        })
    }, [])

    function handleform(e) {
        e.preventDefault()
        const formdata = { email, number, query }
        fetch('/user/addquery', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formdata)
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 201) {
                setThanks('thanks for query')
            }
        })
    }

    return (
        <>
            {/* slider-start */}
            <section id='slider'>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button className='mx-1 indicatorbtn active' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                        <button className='mx-1 indicatorbtn ' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button className='mx-1 indicatorbtn ' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={`/upload/${slideroneimg}`} className="d-block" alt="..." />
                            <div className="captiondiv1 carousel-caption d-none d-md-block">
                                <h2>{slideronetxt}</h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={`/upload/${secondsliderimg}`} className="d-block" alt="..." />
                            <div className="captiondiv2 carousel-caption d-none d-md-block">
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <h2>{numberone}</h2>
                                            <h3>{textone}</h3>
                                            <h3>{txtone}</h3>
                                        </div>
                                        <div className='col-md-3'>
                                            <h2>{numbertwo}</h2>
                                            <h3>{texttwo}</h3>
                                            <h3>{txttwo}</h3>
                                        </div>
                                        <div className='col-md-3'>
                                            <h2>{numberthree}</h2>
                                            <h3>{textthree}</h3>
                                            <h3>{txtthree}</h3>
                                        </div>
                                        <div className='col-md-3'>
                                            <h2>{numberfour}</h2>
                                            <h3>{textfour}</h3>
                                            <h3>{txtfour}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={`/upload/${thirdsliderimg}`} className="d-block" alt="..." />
                            <div className="captiondiv3 carousel-caption d-none d-md-block">
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-6 innercaptiondiv2'>
                                            <h3>{headingone}</h3>
                                            <h5>{textonee}</h5>
                                        </div>
                                        <div className='col-md-6'>
                                            <h3>{headingtwo}</h3>
                                            <h5>{texttwoo}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            {/* slider-end */}

            {/* book-start */}
            <section id='book'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 bg-light p-5'>
                            <h2 className='text-center'>{btntext}</h2>
                            <div className='d-flex justify-content-center'>
                                <Link to='/course'><button className='btn btn-outline-danger mt-4'>Click Here</button></Link>
                            </div>
                        </div>
                        <div className='col-md-6 bg-danger p-5 d-flex align-items-center justify-content-center'>
                            <h2>{offertext}</h2>
                        </div>
                    </div>
                </div>
            </section>
            {/* book-end */}

            {/* testimonials-start */}
            <section id='testi'>
                <div className='container-fluid bg-light my-5 p-5'>
                    <div className='row'>
                        <h3 className='text-center pb-4'>See What Our <span className='fw-bolder text-danger'>Learners Say</span></h3>
                        {testi.map((data) => (
                            <div key={data._id} className='col-md-3'>
                                <div className="card border-0">
                                    <img src={`/upload/${data.cimg}`} className="card-img-top img-fluid d-block align-self-center" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.cname}</h5>
                                        <p className="card-text">{data.cdesc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='d-flex justify-content-center mt-4'>
                        <div className='col-md-3 d-flex justify-content-center'>
                            <Link to='/testi'><button className='btn btn-danger form-control'>Share Your Thoughts<img src='images/thinking.png' alt='...' className='img-fluid emoji' /></button></Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* testimonials-end */}

            {/* services-start */}
            <section id='testi'>
                <div className='container-fluid bg-light my-5 p-5'>
                    <div className='row'>
                        <h3 className='text-center pb-4'>Our <span className='fw-bolder text-danger'>Services</span></h3>
                        {service.map((data) => (
                            <div key={data._id} className='col-md-3'>
                                <div className="card border-0">
                                    <img src={`/upload/${data.simg}`} alt='error' />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.sname}</h5>
                                        <div>
                                            <p className="card-text">{data.sdesc}</p>
                                        </div>
                                        <Link to={`/moredetaile/${data._id}`} className="btn btn-danger">More detailes..</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* services-end */}

            {/* query-start */}
            <section id='query'>
                <div className='container-fluid bg-light px-5 py-4'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="container">
                                <div className="d-flex justify-content-center align-items-center" style={{ height: '120px' }}>
                                    {thanks ?
                                        <div className="alert alert-danger col-md-5 col-12 d-flex justify-content-center align-items-center m-0 py-3" role='alert'>{thanks}</div>
                                        : ''}
                                </div>
                            </div>
                            <h2 className='text-danger text-center'>Enter Query</h2>
                        </div>
                        <div className='col-md-6'>
                            <form method='post' onSubmit={(e) => { handleform(e) }}>
                                <label>Email</label>
                                <input onChange={(e) => { setEmail(e.target.value) }} value={email} type='email' className='form-control mt-1' required />
                                <label className='pt-2'>Number</label>
                                <input onChange={(e) => { setNumber(e.target.value) }} value={number} type='number' className='form-control mt-1' required />
                                <label className='pt-2'>Query</label>
                                <textarea onChange={(e) => { setQuery(e.target.value) }} value={query} className='form-control mt-1' required></textarea>
                                <button className='btn btn-danger form-control mt-2'>Submit Query</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* query-end */}

        </>
    );
}

export default Home;