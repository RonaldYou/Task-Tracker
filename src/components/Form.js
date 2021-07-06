import React from "react"
class Form extends React.Component {
  state = {
    cats: [{name:"", age:""}],
  }
  render() {
    let {cats} = this.state
    return (
      <form>
        <label htmlFor="name">Owner</label> 
        <input type="text" name="owner" id="owner" />
        <label htmlFor="description">Description</label> 
        <input type="text" name="description" id="description" />
        <button>Add new cat</button>
        {
          cats.map((val, idx)=> {
            let catId = `cat-${idx}`, ageId = `age-${idx}`
            return (
              <div key={idx}>
                <label htmlFor={catId}>{`Cat #${idx + 1}`}</label>
                <input
                  type="text"
                  name={catId}
                  data-id={idx}
                  id={catId}
                  className="name"
                />
                <label htmlFor={ageId}>Age</label>
                <input
                  type="text"
                  name={ageId}
                  data-id={idx}
                  id={ageId}
                  className="age"
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
export default Form