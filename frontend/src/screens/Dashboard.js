import Dashboardlinks from '../components/Dashboardlinks';

function Dashboard() {
    return (
        <>
            <section id="dashboard">
                <h2 className="text-center pt-4">dashboard page</h2>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-3'>
                            <Dashboardlinks />
                        </div>
                        <div className='col-md-9 d-flex justify-content-center align-items-center'>
                            <img src='images/dashboard.png' alt='error' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Dashboard;