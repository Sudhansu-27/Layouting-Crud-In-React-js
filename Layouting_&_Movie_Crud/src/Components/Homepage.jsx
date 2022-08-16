import React, { useState } from 'react'
import { Button } from 'reactstrap';
import './Homepage.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import 'react-toastify/dist/ReactToastify.css'
// import { NavLink } from "react-router-dom";

const Homepage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    //getting email and password from localstorage
    // const userName = localStorage.getItem('email') ? localStorage.getItem('email') : {email}
    // const userPassword = localStorage.getItem('password') ? localStorage.getItem('password') : {password}

    //Submit function

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = localStorage.getItem("form")
        data=data.length> 0 ? data :[]
        data = JSON.parse(data)
        let elem = data.filter(x => { return x.email === email })
        console.log(elem);
        if (elem.length > 0) {
            if (elem[0].email == email && elem[0].password == password) {
                // localStorage.setItem("activeUser")
                toast.success("Login Success");
                // console.log("sid");
                localStorage.setItem('currentUser' , JSON.stringify({"email":email , "password":password}))
                navigate("/Home")
            }
        }
        else {
            // console.log("suddu");
            navigate("/Homepage")
            toast.error('Invalid Email OR Password');

        }
        //    console.log(userName,userPassword);
        // if (email === userName && password === userPassword) {
        //     console.log('read');
        //     toast.success("Login Success");
        //     navigate("/dashboard");
        // }
        //  else if (email === localStorage.email && password === localStorage.password) {
        //     toast.success("Login Success");
        //     navigate("/dashboard");
        // }

        // else {
        //     console.log(email);
        //     toast.error('Invalid Email OR Password');
        // }
    };
    return (
        <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input placeholder='Enter Your Email'
                    type="email"
                    className='form-control'
                    value={email}
                    onChange={e => setEmail(e.target.value)} ></input>
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
               <input placeholder='Enter Your Password'
                    type="password"
                    className='form-control'
                    value={password}
                    onChange={e => setPassword(e.target.value)}></input>
            </div>
            
             <Button type='submit'
                    className='"btn solid"'
                    onClick={handleSubmit}
                    color="primary">Log In</Button>

<br></br>
            Don't have an account ? 
            <div className="text-center">
                <p><Link to={"/signuppage"}>Sign Up</Link></p>

            </div>
            
            {/* <p class="social-text">Or Sign in with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div> */}
          </form>
          </div>
          </div>
          </div>

            

        
    )
}

export default Homepage