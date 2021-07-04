import Header from './components/Header'
import Button from './components/Button'
import Body from './components/Body'
import Tasks from './components/Tasks'
import React, { useState } from 'react';

// const App = ()=> {
//   return (
//     <div className='container2'>
//       <div className='container'>
//         <Header/>
//         <Button/>
//         <div className='form-control'>
//          <Body/>
//         </div>
//       </div>
//       <div className='container'>
//         <div className='task'>
//           <Tasks/>
//         </div>
        
//       </div>
//     </div>
//   );
// }


// export default App;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isEmptyState: true }
  }

  triggerAddTaskState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true
    })
  }
}


function App() {
  const [state, setState] = useState('start')

  triggerAddTaskState = () => {
    setState('add-Task')
  }

  return (
    <div>
      {state === 'start' && (
        <Button addTask={this.triggerAddTaskState} />
      )}

      {state === 'add-Task' && <Body />}
    </div>
  )
  // return (
  //       <div className='container2'>
  //         <div className='container'>
  //           <Header/>
  //           <Button/>
  //           <div className='form-control'>
  //            <Body/>
  //           </div>
  //         </div>
  //         <div className='container'>
  //           <div className='task'>
  //             <Tasks/>
  //           </div>
            
  //         </div>
  //       </div>
  //     );
}

export default App;