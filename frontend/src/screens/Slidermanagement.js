import { Link } from "react-router-dom";
import Dashboardlinks from "../components/Dashboardlinks";

function Slidermanagement() {

    return (
        <>
            <section id="dashboard">
                <h2 className="text-center pt-4">Slider Management Page</h2>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-3'>
                            <Dashboardlinks />
                        </div>
                        <div className='col-md-9'>
                            <table className="table table-bordered text-center align-middle">
                                <thead>
                                    <tr>
                                        <th>First Slider</th>
                                        <th>Second Slider</th>
                                        <th>Third Slider</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Link to='/firstslider'><button className="btn btn-danger">Manage</button></Link></td>
                                        <td><Link to='/secondslider'><button className="btn btn-danger">Manage</button></Link></td>
                                        <td><Link to='/thirdslider'><button className="btn btn-danger">Manage</button></Link></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Slidermanagement;