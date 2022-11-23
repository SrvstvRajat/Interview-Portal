// import logo from '../src/front-view-virtual-studio-background-260nw-1883360125.webp';
import './App.css';
import React from 'react'
import { Routes, Route} from "react-router-dom";
import Schedule from './Components/Schedule';
import Home from './Components/Home';
import Participants from './Components/Participants';
import UpcomingInterviewes from './Components/UpcomingInterviewes';

function App() {
  return (
    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/allInterviewes' element={<UpcomingInterviewes/>}/>
          <Route path='/allParticipants' element={<Participants/>}/>
          <Route path="/Schedule" element={<Schedule/>}/>
    </Routes>
  )
}

export default App;
