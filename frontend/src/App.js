import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { contextapi } from './components/Contextapi';
import Footer from './components/Footer';
import Header from './components/Header';
import Addservice from './screens/Addservice';
import Addtopic from './screens/Addtopic';
import Bookdataform from './screens/Bookdataform';
import Bookmanagement from './screens/Bookmanagement';
import Changepassword from './screens/Changepassword';
import Course from './screens/Course';
import Coursedetaileform from './screens/Coursedetaileform';
import Coursedetailmanagement from './screens/Coursedetailemanagement';
import Dashboard from './screens/Dashboard';
import Firstslider from './screens/Firstslider';
import Firstsliderform from './screens/Firstsliderform';
import Footerform from './screens/Footerform';
import Footermanagement from './screens/Footermanagement';
import Forgotlink from './screens/Forgotlink';
import Home from './screens/Home';
import Login from './screens/Login';
import Module from './screens/Module';
import Moredetail from './screens/Moredetaile';
import Profile from './screens/Profile';
import Queryform from './screens/Queryform';
import Querymanagement from './screens/Querymanagement';
import Registermanagement from './screens/Registermanagement';
import Resetpage from './screens/Resetpage';
import Secondslider from './screens/Secondslider';
import Secondsliderform from './screens/Secondsliderform';
import Serviceform from './screens/Serviceform';
import Servicemanagement from './screens/Servicemanagement';
import Signup from './screens/Signup';
import Slidermanagement from './screens/Slidermanagement';
import Testi from './screens/Testi';
import Testimanagement from './screens/Testimanagement';
import Thirdslider from './screens/Thirdslider';
import Thirdsliderform from './screens/Thirdsliderform';
import Topicform from './screens/Topicform';
import Topicmanagement from './screens/Topicmanagement';

function App() {

  const [globalemail, setGlobalemail] = useState(window.localStorage.getItem('email'))

  return (
    <>
      <Router>
        <contextapi.Provider value={{ globalemail, setGlobalemail }}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/course' element={<Course />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/module' element={<Module />} />
            <Route path='/testi' element={<Testi />}></Route>
            <Route path='/profile' element={<Profile />} />
            <Route path='/forgotlink' element={<Forgotlink />} />
            <Route path='/changepasswordpage' element={<Changepassword />} />
            <Route path='/resetpage' element={<Resetpage />} />
            <Route path='/addservice' element={<Addservice />}></Route>
            <Route path='/addtopic' element={<Addtopic />}></Route>
            <Route path='/firstslider' element={<Firstslider />}></Route>
            <Route path='/secondslider' element={<Secondslider />}></Route>
            <Route path='/thirdslider' element={<Thirdslider />} />
            <Route path='/testimanagement' element={<Testimanagement />}></Route>
            <Route path='/slidermanagement' element={<Slidermanagement />}></Route>
            <Route path='/servicemanagement' element={<Servicemanagement />}></Route>
            <Route path='/querymanagement' element={<Querymanagement />} />
            <Route path='/coursedetailmanagement' element={<Coursedetailmanagement />} />
            <Route path='/footermanagement' element={<Footermanagement />} />
            <Route path='/registermanagement' element={<Registermanagement />} />
            <Route path='/bookmanagement' element={<Bookmanagement />}></Route>
            <Route path='/topicmanagement' element={<Topicmanagement />}></Route>
            <Route path='/moredetaile/:id' element={<Moredetail />} />
            <Route path='/bookdataform/:id' element={<Bookdataform />}></Route>
            <Route path='/serviceform/:id' element={<Serviceform />}></Route>
            <Route path='/topicform/:id' element={<Topicform />}></Route>
            <Route path='/firstsliderform/:id' element={<Firstsliderform />}></Route>
            <Route path='/secondsliderform/:id' element={<Secondsliderform />} />
            <Route path='/thirdsliderform/:id' element={<Thirdsliderform />} />
            <Route path='/queryform/:id' element={<Queryform />} />
            <Route path='/coursedetaileform/:id' element={<Coursedetaileform />} />
            <Route path='/footerform/:id' element={<Footerform />} />
          </Routes>
          <Footer />
        </contextapi.Provider>
      </Router>
    </>
  );
}

export default App;