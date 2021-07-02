const Body = () => {
    return (
        <div className='form-control'>
         <body>
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
         </body>
        </div>
    )
}

export default Body
