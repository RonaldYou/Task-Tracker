import Header from './components/Header'
import Button from './components/Button'
import Body from './components/Body'
import Tasks from './components/Tasks'
import pdf from "./pdf/pdf";
import React, { useState } from 'react';

const App = ()=> {
  return (
    <div className='container2'>
      <div className='container'>
        <Header/>
        <Button/>
        <div className='form-control'>
         <Body/>
        </div>
      </div>
      <div className='container'>
        <div className='task'>
          <Tasks/>
        </div>
        
      </div>
    </div>
  );
}


export default App;
