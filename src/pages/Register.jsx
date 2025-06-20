import { useContext, useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";


const Register = () => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {createUser,googleLogin}=useContext(AuthContext)

  const handleSubmit=(e)=>{
    e.preventDefault()
    const displayName=`${firstName} ${lastName}`
    createUser(email,password,displayName)
  }

  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div className={`form-container mt-[5vh] w-[380px] h-[580px] bg-slate-600`}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign Up
          </h2>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              className=" peer"
              placeholder=" "
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="floating_text" className="">
              First Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              className=" peer"
              placeholder=" "
              name="floating_text"
              type="text"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="floating_text">Last Name</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              className=" peer"
              placeholder=" "
              name="floating_email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floating_email">Email</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              className=" peer"
              placeholder=" "
              name="floating_password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          <button type="submit" className="btn-danger">
            Register
          </button>
          <button
            type="button"
            className="btn-danger flex justify-between text-center "

            onClick={()=>googleLogin()}
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
