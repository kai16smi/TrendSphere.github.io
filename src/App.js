

import './App.css';

import React,  { useState } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

const App = ()=> {

   const pageSize=12;
   const apiKey=process.env.REACT_APP_NEWS_API
   const [progress, setProgress] = useState(0)
  

  // setProgress = (progress)=>{
  //    setState({progress: progress})
  // }


  
    return (
      <div>
        <Router> 
       <NavBar/>
       <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
      
       <Routes>
          <Route exact path="/" element={ <News setProgress={ setProgress} apikey={ apiKey}  key="general" pageSize={ pageSize} country="in" category="general"/> }></Route>
          <Route exact  path="/business" element={ <News setProgress={ setProgress} apikey={ apiKey}  key="business" pageSize={ pageSize} country="in" category="business"/> }></Route>    
         
       <Route exact path="/entertainment" element={ <News setProgress={ setProgress} apikey={ apiKey}  key="entertainment" pageSize={ pageSize} country="in" category="entertainment"/>}></Route>
       <Route exact path="/general" element={ <News setProgress={ setProgress} apikey={ apiKey}  key="general" pageSize={ pageSize} country="in" category="general"/> }></Route>
       <Route exact path="/health" element={ <News setProgress={ setProgress} apikey={ apiKey}  key="health" pageSize={ pageSize} country="in" category="health"/>} ></Route>
       <Route exact path="/science" element={ <News setProgress={ setProgress} apikey={ apiKey}  key="science" pageSize={ pageSize} country="in" category="science"/> }></Route>
       <Route exact path="/sports" element={ <News setProgress={ setProgress} apikey={ apiKey}  key="sports" pageSize={ pageSize} country="in" category="sports"/> }></Route>
       <Route exact path="/technology" element={ <News setProgress={ setProgress} apikey={ apiKey}  key="technology" pageSize={ pageSize} country="in" category="technology"/>} ></Route>
        </Routes>
    
     </Router>
      </div>
      //  <Route exact path="/about"
      //  element= {< About  mode={mode}/>}>                                    
      //  </Route>
    )
    }
    export default App;


