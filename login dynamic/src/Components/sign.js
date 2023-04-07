import "./sign.css";
function Sign() {
  return (
    <div className="container">
      <div className="text">Sign up</div>
      <form action="#">
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="box"></div>
            <label for="">Full Name</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="box"></div>
            <label for="">Username</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="box"></div>
            <label for="">Phone Number</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="box"></div>
            <label for="">Email Address</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="box"></div>
            <label for="">Password</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="box"></div>
            <label for="">Confirm Password</label>
          </div>
        </div>
        <div className="submit">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}
export default Sign;
