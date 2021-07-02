const Body = () => {
    return (
        <div className='form-control'>
         <body>
              <form>
                 <label>
                      Name: <br></br>
                     <input type="text" name="name"/><br></br>
                 </label>
                 <label>
                      Date: <br></br>
                     <input type="text" name="MM/DD/YYYY"/> <br></br>
                 </label>
                 <input type="submit" value="Submit" />
             </form>
         </body>
        </div>
    )
}

export default Body
