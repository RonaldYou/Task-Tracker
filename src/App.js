import Header from './components/Header'
import Button from './components/Button'
import Body from './components/Body'
import Tasks from './components/Tasks'
import pdf from "./pdf/pdf";
//import React, { useState } from 'react';
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

const App = ()=> {
  return (
    // <div className='container2'>
    //   <div className='container'>
    //     <Header/>
    //     <Button/>
    //     <div className='form-control'>
    //      <Body/>
    //     </div>
    //   </div>
    //   <div className='container'>
    //     <div className='task'>
    //       <Tasks/>
    //     </div>
        
    //   </div>
    // </div>
    <Router history={button}>
                <Switch>
                    <Route path="/pdf" exact component={pdf} />
                </Switch>
            </Router>
  );
}


export default App;
