import Header from './components/Header'
import Button from './components/Button'
import Body from './components/Body'
import Tasks from './components/Tasks'

const App = ()=> {
  return (
    <div className='container'>
      <div className='container'>
        <Header/>
        <Button/>
        {/* <Body/> */}
      </div>
      <Tasks/>
    </div>
  );
}

export default App;
