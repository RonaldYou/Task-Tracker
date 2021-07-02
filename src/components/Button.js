import ReactDOM from 'react-dom'
const Button = () => {
    return (
        <>
            <button onClick={() => { alert("Cringe"); console.log("didsmth");}} className='btn'>Add</button>
        </>
    )
}

export default Button
