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

import React from "react"
class Body extends React.Component {
  state = {
    task: [{name:"", date:""}],
    owner: "",
    description: ""
  }
handleChange = (e) => {
    if (["name", "date"].includes(e.target.className) ) {
      let task = [...this.state.task]
      task[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
      this.setState({ task }, () => console.log(this.state.task))
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() })
    }
  }
addCat = (e) => {
    this.setState((prevState) => ({
      task: [...prevState.task, {name:"", date:""}],
    }));
  }
handleSubmit = (e) => { e.preventDefault() }
render() {
    let {owner, description, task} = this.state
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
        {/* <label htmlFor="name">Owner</label> 
        <input type="text" name="owner" id="owner" value={owner} />
        <label htmlFor="description">Description</label> 
        <input type="text" name="description" id="description" value={description} /> */}
        <button onClick={this.addCat}>Add New Task</button>
        {
          task.map((val, idx)=> {
            let catId = `cat-${idx}`, dateId = `date-${idx}`
            return (
              <div key={idx}>
                <label htmlFor={catId}>{`Cat #${idx + 1}`}</label>
                <input
                  type="text"
                  name={catId}
                  data-id={idx}
                  id={catId}
                  value={task[idx].name} 
                  className="name"
                />
                <label htmlFor={dateId}>Age</label>
                <input
                  type="text"
                  name={dateId}
                  data-id={idx}
                  id={dateId}
                  value={task[idx].date} 
                  className="date"
                />
              </div>
            )
          })
        }
        <input type="submit" value="Submit" /> 
      </form>
    )
  }
}
export default Body

