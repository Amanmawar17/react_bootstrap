import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Signup() {
   // using use Navigate hook form react router dom 
  const navigate = useNavigate();
  // handling register button 
  const handleSubmit = () =>(
    alert('Your are registered move to login page'),
    navigate('/login')
  )
  return (
    <section className="d-flex justify-content-center align-items-center" style={{height:'90vh',}}>
      <div className="d-flex flex-column justify-content-center shadow-lg p-3 w-25">
        <h1 className="fs-2 text-primary m-auto">Register</h1>
        <div className="mt-3">
          <div className="d-flex flex-column input-group mb-3 w-75 m-auto">
          <label htmlFor="Username" className="mb-1">Username</label>
            <input
              type="text"
              className="form-control w-100"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <label htmlFor="Email" className="mt-4 mb-1">Email</label>
            <input
              type="email"
              className="form-control w-100 mb-4" 
              placeholder="aman-mawar@gmail.com"
              aria-label="email"
              aria-describedby="basic-addon1"
            />
            <label htmlFor="password" className="mb-1">Password</label>
            <input
              type="password"
              className="form-control w-100" 
              placeholder="............"
              aria-label="password"
              aria-describedby="basic-addon1"
            />
          <button type="button" onClick={handleSubmit} className="btn btn-primary mt-3">Register</button>
          </div>
        </div>
        <h6 className="m-auto">If you have account? <Link to="/login">Login</Link></h6>
      </div>
    </section>
  );
}
