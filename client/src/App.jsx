import {Outlet,Navigate,Route,Routes,useLocation} from 'react-router-dom';
import React,{useState} from 'react';

import {Footer, Navbar} from "./components";

import {FindOppurtunities,Companies,CompanyProfile,UploadOppurtunity,OppurtunityDetail,UserProfile,About,AuthPage} from "./pages";
import { useSelector } from 'react-redux';

function Layout()
{
   const {user}= useSelector((state)=>state.user);
   const location=useLocation();

   return( <Outlet />)

}

function App() {
  //const user={};
  const {user}=useSelector((state)=>state.user);
  const [isRegister,setIsRegister]=useState(true);
  const [isLogin,setIsLogin]=useState(false);

  return(
    <div>
    <main className='relative'>
      <Navbar/>

      <Routes>

        <Route element={<Layout/>}>

          <Route path='/' element={<Navigate to='find-oppurtunities' replace={true}/>}
          />
          <Route path='/find-oppurtunities' element={<FindOppurtunities />}/>
          <Route path='/companies' element={<Companies />}/>
          
          <Route path='/user-profile' element={<UserProfile />}/>
          <Route path='/user-profile/:id' element={<UserProfile />}/>
          
          <Route path='/company-profile' element={<CompanyProfile />}/>
          <Route path='/company-profile/:id' element={<CompanyProfile />}/>
          <Route path='/upload-oppurtunity' element={<UploadOppurtunity />}/>
          <Route path='/oppurtunity-detail/:id' element={<OppurtunityDetail />}/>

        </Route>

        <Route path='/about-us' element={<About />}/>
        <Route path='/user-auth' element={<AuthPage isRegister={isRegister} setIsRegister={setIsRegister} />}/>
         <Route path='/user-login' element={<AuthPage isRegister={isLogin} setIsRegister={setIsLogin}/>}/>
        

      </Routes>

    </main>
      {user && <Footer/>}
      </div>
  )
}

export default App;