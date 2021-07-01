const Button = () => {
    return (
        <>
            <button onClick={shoot} className='btn'>Add</button>
        </>
    )
}
function shoot() {
    alert("Great Shot!");
    console.log("didsmth")
}
export default Button
