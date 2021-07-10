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
//                  <input className="btn" type="submit" value="Add" />
//              </form>
//          </body>
//         </div>
//     )
// }

// export default Body
import React from "react";

class Body extends React.Component {

    constructor(props){
      super(props);
      this.state = { username: '' };
    }
   
    handleChange = event => {
      this.setState({ username: event.target.value });
    };
   
    render() {
      return (
        <React.Fragment>
          <form>
                <label>
                    Task Name: <br></br>
                     <input type="text" name="name" value={this.state.username} onChange={this.handleChange} placeholder="Task Name"/><br></br>
                 </label>
                 <label>
                      Date: <br></br>
                     <input type="text" name="date" placeholder="MM/DD/YYYY"/> <br></br>
                 </label>
                 <input className="btn" type="submit" value="Add" />
             </form>
   
          <h3>Your username is: {this.state.username}</h3>
        </React.Fragment>
      );
    }
   }

export default Body




// import React from "react"
// class Body extends React.Component {
//   state = {
//     task: [{name:"", date:""}],
//   }
// handleChange = (e) => {
//     if (["name", "date"].includes(e.target.className) ) {
//       let task = [...this.state.task]
//       task[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
//       this.setState({ task }, () => console.log(this.state.task))
//     } else {
//       this.setState({ [e.target.name]: e.target.value.toUpperCase() })
//     }
//   }
// addCat = (e) => {
//     this.setState((prevState) => ({
//       task: [...prevState.task, {name:"", date:""}],
//     }));
//   }
// handleSubmit = (e) => { e.preventDefault() }
// render() {
//     let {task} = this.state
//     return (
//       <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
//         <button onClick={this.addCat} className='btn'>Add New Task</button>
//         {
//           task.map((val, idx)=> {
//             let taskId = `task-${idx}`, dateId = `date-${idx}`
//             return (
//               <div key={idx}>
//                 <label htmlFor={taskId}>{`Task # ${idx + 1} `}</label>
//                 <input
//                   type="text"
//                   name={taskId} 
//                   data-id={idx}
//                   id={taskId}
//                   value={task[idx].name} 
//                   className="name"
//                   placeholder="Task Name"
//                 /> <br></br>
//                 <label htmlFor={dateId}>Age </label>
//                 <input
//                   type="text"
//                   name={dateId}
//                   data-id={idx}
//                   id={dateId}
//                   value={task[idx].date} 
//                   placeholder="MM/DD/YYYY"
//                   className="date"
//                 /> <br></br>
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

