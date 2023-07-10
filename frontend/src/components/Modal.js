function Modal(props) {
    return (
        <>
            <section id="modal">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-5 bg-white py-4">
                            {props.thanks === 'thanks for registration' ?
                                <h2 className="text-danger text-center">thanks for registration</h2>
                                :
                                <h2 className="text-danger text-center">First You Have To LogIn</h2>
                            }
                            <div className="d-flex justify-content-center mt-4">
                                <div className="col-md-4">
                                    <button className="btn btn-danger form-control" onClick={props.closemodal}>OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Modal;