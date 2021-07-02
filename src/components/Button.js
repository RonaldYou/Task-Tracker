import ReactDOM from 'react-dom'
const Button = () => {
    const element = (
        <div id='root'>
          <h1>Hello, world!</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
      );
    return (
        <>
            <button onClick={() => { alert("Cringe"); console.log("didsmth"); ReactDOM.render(element, document.getElementById('root'));}} className='btn'>Add</button>
        </>
    )
}

setInterval(Button, 1000);





// function Custom(){
//     var val = One();
//     alert("Great Shot!")

//     val = Two();
//     console.log("didsmth");
// }


// function shoot() {
//     alert("Great Shot!");
    
// }
export default Button
