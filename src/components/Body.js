// const Body = () => {
//     return (
//         <div className='form-control'>
//          <body>
//               <form>
//                  <label>
//                       Task Name: <br></br>
//                      <input type="text" name="name" placeholder="Task Name"/><br></br>
//                  </label>
//                  <label>
//                       Date: <br></br>
//                      <input type="text" name="date" placeholder="MM/DD/YYYY"/> <br></br>
//                  </label>
//                  <input type="submit" value="Submit" />
//              </form>
//          </body>
//         </div>
//     )
// }

// export default Body

// import React from "react"
// class Body extends React.Component {
//   state = {
//     cats: [{name:"", age:""}],
//   }
//   render() {
//     let {cats} = this.state
//     return (
//       <form>
//         <label htmlFor="name">Owner</label> 
//         <input type="text" name="owner" id="owner" />
//         <label htmlFor="description">Description</label> 
//         <input type="text" name="description" id="description" />
//         <button>Add new cat</button>
//         {
//           cats.map((val, idx)=> {
//             let catId = `cat-${idx}`, ageId = `age-${idx}`
//             return (
//               <div key={idx}>
//                 <label htmlFor={catId}>{`Cat #${idx + 1}`}</label>
//                 <input
//                   type="text"
//                   name={catId}
//                   data-id={idx}
//                   id={catId}
//                   className="name"
//                 />
//                 <label htmlFor={ageId}>Age</label>
//                 <input
//                   type="text"
//                   name={ageId}
//                   data-id={idx}
//                   id={ageId}
//                   className="age"
//                 />
//               </div>
//             )
//           })
//         }
//         <input type="submit" value="Submit" /> 
//       </form>
//     )
//   }
// }
// export default Body

import React from "react"
class Body extends React.Component {
  
  render() {
    return (
      <form>
        <label htmlFor="owner">Owner</label> 
        <input type="text" name="owner" id="owner" />
        <label htmlFor="description">Description</label> 
        <input type="text" name="description" id="description" />
        <button>Add new cat</button>
        <input type="submit" value="Submit" /> 
      </form>
    )
  }
}
export default Body