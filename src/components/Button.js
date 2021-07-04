import React from 'react';
const Button = (props) => {
    return (
        <>
            <button onClick={props.addTask} className='btn'>Add</button>
        </>
    )
}
//() => { alert("Cringe"); console.log("didsmth");}
export default Button
