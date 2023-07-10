import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function Moredetail() {

    const { id } = useParams()
    const [sldesc, setLdesc] = useState('')
    const [title, setTitle] = useState('')

    useEffect(() => {
        fetch(`/user/showmoredetaile/${id}`).then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setTitle(data.bRecord.sname)
                setLdesc(data.bRecord.sldesc)
            }
        })
    }, [id])

    return (
        <>
            <section id='moredetaile'>
                <div className='container'>
                    <div className='row'>
                        <h2 className='text-center py-3'>{title}</h2>
                        <div className='col-md-12 d-flex justify-content-center align-items-center'>
                            <h4>{sldesc}</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Moredetail;