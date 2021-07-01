import Header from './components/Header'
import Button from './components/Button'
import Body from './components/Body'
import Tasks from './components/Tasks'

const App = ()=> {
  return (
    <div className='container2'>
      <div className='container'>
        <Header/>
        <Button/>
        {/* <Body/> */}
      </div>
      <div className='container'>
        <Tasks/>
      </div>
    </div>
  );
}

export default App;
