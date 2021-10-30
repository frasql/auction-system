
const Form = () => {
    return (
        <form>
          <h1>SignUp</h1>
          <div className="form-group">
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input type="text" className="input" id="email"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input type="text" className="input" id="password"/>
              </div>
            </div>
          </div>          
        </form>
    )
}

export default Form;