const Header = () => {
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <button onClick={shoot} className='btn'>Add</button>
        </header>
    )
}
function shoot() {
    alert("Great Shot!");
    console.log("didsmth")
}

export default Header
