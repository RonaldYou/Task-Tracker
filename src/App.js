import Header from './components/Header'
import Button from './components/Button'
import Body from './components/Body'
import Tasks from './components/Tasks'

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

function App() {
  // const [state, setState] = useState('start')

  // triggerAddTripState = () => {
  //   setState('add-trip')
  // }

  // return (
  //   <div>
  //     {state === 'start' && (
  //       <AddTripButton addTrip={this.triggerAddTripState} />
  //     )}

  //     {state === 'add-trip' && <AnotherComponent />}
  //   </div>
  // )
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