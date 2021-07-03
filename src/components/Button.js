// import React, { useState } from 'react';
// const Button = () => {
//     return (
//         <>
//             <button onClick={() => { alert("Cringe"); console.log("didsmth");}} className='btn'>Add</button>
//         </>
//     )
// }

// export default Button
import React, { useState } from 'react';

function Example() {
  const [showForm, setShowForm] = useState(false);

  const showForm = () => {
    setShowForm(!showForm);
  }

  return (
    <div>
      <form>
        <button onClick={showForm}></button>
      </form>

      {showForm && (
        <form>
        <label>
             Task Name: <br></br>
            <input type="text" name="name" placeholder="Task Name"/><br></br>
        </label>
        <label>
             Date: <br></br>
            <input type="text" name="date" placeholder="MM/DD/YYYY"/> <br></br>
        </label>
        <input type="submit" value="Submit" />
    </form>
      )}
    </div>
  )
}
