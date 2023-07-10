import { Link } from "react-router-dom";

function Dashboardlinks() {
    return (
        <>
            <Link to='/slidermanagement'><button className='btn btn-danger form-control my-1'>Slider Management</button></Link>
            <Link to='/bookmanagement'><button className='btn btn-danger form-control my-1'>Book Management</button></Link>
            <Link to='/testimanagement'><button className='btn btn-danger form-control my-1'>Testimonials Management</button></Link>
            <Link to='/servicemanagement'><button className='btn btn-danger form-control my-1'>Service Management</button></Link>
            <Link to='/querymanagement'><button className='btn btn-danger form-control my-1'>Query Management</button></Link>
            <Link to='/coursedetailmanagement'><button className='btn btn-danger form-control my-1'>Course Details Management</button></Link>
            <Link to='/footermanagement'><button className='btn btn-danger form-control my-1'>Footer Management</button></Link>
            <Link to='/registermanagement'><button className='btn btn-danger form-control my-1'>Course Management</button></Link>
            <Link to='/topicmanagement'><button className='btn btn-danger form-control my-1'>Topic Management</button></Link>
        </>
    );
}

export default Dashboardlinks;