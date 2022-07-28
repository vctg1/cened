import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import Education from './Pages/Education';
import Home from './Pages/Home';
import Institution from './Pages/Institution';
import List from './Pages/List';
import Login from './Pages/Login';
import StepByStep from './Pages/StepByStep';
import WorkWithUs from './Pages/WorkWithUs';
import Register from './Pages/Register';
import StudentArea from './Pages/StudentArea';
import { CircularProgress } from '@mui/material';
import Documents from './Pages/Documents';

function App() {
  let [loading, setLoading] = useState(true);
    useEffect(()=>{if(window.location){setTimeout(()=>{setLoading(false)},1000)}},[loading])
  if(!loading){return (
    <div className="App w-screen flex flex-col h-screen overflow-x-hidden overflow-y-auto">
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/instituicao' element={<Institution/>}/>
          <Route path='/cursos' element={<Courses/>}/>
          <Route path='/passoapasso' element={<StepByStep/>}/>
          <Route path='/programaeducacional' element={<Education/>}/>
          <Route path='/contato' element={<Contact/>}/>
          <Route path='/trabalheconosco' element={<WorkWithUs/>}/>
          <Route path='/lista/:idState' element={<List/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/areadoaluno' element={<StudentArea/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/documentos' element={<Documents/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
    
  }
  else{
    return <div className='flex bg-blue-400 items-center justify-center w-screen h-screen'><CircularProgress size='5em'/></div>
  }
}

export default App;
