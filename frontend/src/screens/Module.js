import { useContext, useEffect, useState } from "react";
import { contextapi } from "../components/Contextapi";

function Module() {

    const { globalemail } = useContext(contextapi)
    const [module, setModule] = useState('')

    const [topicrecords, setTopicrecords] = useState([])

    useEffect(() => {
        const formdata = { globalemail }
        fetch('/user/modulecheck', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formdata)
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setModule(data.bRecord)
            }
        })
        fetch('/user/showtopic').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setTopicrecords(data.bRecord)
            } else {
                alert(data.message)
            }
        })
    }, [globalemail])
    return (
        <>
            {module === 'public' ?
                <section id="module">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="text-center">you dont have right to see this page</h2>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <section id="module">
                    <div className="container">
                        <h2 className="text-center my-4">Topics</h2>
                        <div className="row">
                            {topicrecords.map((result) => (
                                <div className='col-md-6'>
                                    <div className="card border-0">
                                        <iframe width="100%" height='315px' src={result.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <div className="card-body">
                                            <h4 className="card-title">{result.name}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            }
        </>
    );
}

export default Module;