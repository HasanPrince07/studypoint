import { useContext } from "react";
import { Link } from "react-router-dom";
import { contextapi } from "./Contextapi";

function Header() {

    const { globalemail, setGlobalemail } = useContext(contextapi)

    function handlelogout() {
        window.localStorage.removeItem('email')
        setGlobalemail(window.localStorage.getItem('email'))
    }

    return (
        <>
            {globalemail
                ?
                <section id="header">
                    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center">
                                <Link to="/"><img src="images/coachinglogo.png" alt="..." className="img-fluid" /></Link>
                                <Link to="/" className="ms-3 text-decoration-none"><h3>Study Point</h3></Link>
                            </div>
                            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/module'>module</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/profile'>Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={() => { handlelogout() }}>LogOut</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>
                :
                <section id="header">
                    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center">
                                <Link to="/"><img src="images/coachinglogo.png" alt="..." className="img-fluid" /></Link>
                                <Link to="/" className="ms-3 text-decoration-none"><h3>Study Point</h3></Link>
                            </div>
                            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/login">LogIn</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/signup">SignUp</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>
            }
        </>
    );
}


export default Header;