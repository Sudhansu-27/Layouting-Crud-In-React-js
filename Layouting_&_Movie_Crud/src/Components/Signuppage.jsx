import React, { useState } from 'react'
import { Button } from 'reactstrap';
import './Signuppage.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom'

export const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
const Signuppage = () => {

    function LOC() {
        let data = localStorage.getItem('form');
        if (data) {
            return JSON.parse(data)
        }
        else {
            return []
        }
    }

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [adhaar, setAdhaar] = useState('');
    const [pan, setPan] = useState('');
    const [add, setAdd] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [pin, setPin] = useState('');
    const [form, setForm] = useState(LOC());
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();

        if (fname === "") {
            toast.error("First Name Is Required")
        }
        else if (lname === "") {
            toast.error("Last Name Is Required")
        }
        if (!validEmail.test(email)) {
            setEmailErr(true);
            alert("Email must be : abc@gmail.com")
        }
        else if (!validPassword.test(password)) {
            setPwdError(true);
            alert("Password must contain a minimum of 1 lower case letter, a minimum of 1 upper case letter ,a minimum of 1 numeric character and a minimum of 1 special character")
        }
        // else if (email === "") {
        //     toast.error("Email Is Required")

        // }
        else if (password === "") {
            toast.error("Password Is Required")
        }
        else if (adhaar.length !== 12) {
            toast.error("Aadhar number must be 12 digits only")
        }
        else if (pan === "") {
            toast.error("Pan Number Is Required")
        }
        else if (add === "") {
            toast.error("Address Is Required")
        }
        else if (state === "") {
            toast.error("State Is Required")
        }
        else if (city === "") {
            toast.error("City Is Required")
        }
        else if (pin.length !== 6) {
            toast.error("Pin must be 6 digits only")
        } else {
            <div className="text-center">
                <p>Don't have an account ?  <Link to={"/signuppage"}>Sign Up</Link></p>
            </div>
            // var formObjs=JSON.parse(localStorage.getItem("formObj") || "[]")
            var formObj = {
                fname: fname,
                lname: lname,
                email: email,
                password: password,
                adhaar: adhaar,
                pan: pan,
                add: add,
                state: state,
                city: city,
                pin: pin
            }
            form.push(formObj)

            localStorage.setItem('form', JSON.stringify(form))
            navigate("/homepage")
            toast.success('Registration Successful')
        }
    };
    return (
        <div class="container">
        <div class="forms-container">
          <div class="signin-signup">
            <form action="#" class="sign-up-form">
              <h2 class="title">Sign Up</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input placeholder='First Name'
                       type="text"
                       className='form-control'
                       value={fname}
                       onChange={e => setFname(e.target.value)} ></input>
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input placeholder='Last Name'
                    type="text"
                    className='form-control'
                    value={lname}
                     onChange={e => setLname(e.target.value)}></input>
              </div>
              
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input placeholder='Enter Your Email'
                    type="email"
                    className='form-control'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></input>
                    {emailErr && <p style={{color:'red'}}>Your email is invalid</p>}
              </div>

              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input placeholder='Enter Your Password'
                    type="password"
                    className='form-control'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></input> 
                    {pwdError && <p style={{color:'red'}}>Your password is invalid</p>}
              </div>

              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input placeholder='Aadhar No.'
                    type="number"
                    className='form-control'
                    value={adhaar}
                    onChange={e => setAdhaar(e.target.value)}></input>
              </div>

              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input placeholder='Pan No.'
                    type="pan"
                    className='form-control'
                    value={pan}
                    onChange={e => setPan(e.target.value)}></input>
              </div>

              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input placeholder='Address'
                    type="add"
                    className='form-control'
                     value={add}
                    onChange={e => setAdd(e.target.value)}></input>
              </div>

              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input placeholder='State'
                    type="state"
                    className='form-control'
                    value={state}
                    onChange={e => setState(e.target.value)}></input>
              </div>

              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input placeholder='City'
                    type="city"
                    className='form-control'
                    value={city}
                    onChange={e => setCity(e.target.value)}></input>
              </div>

              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input placeholder='Pin'
                    type="number"
                    className='form-control'
                    value={pin}
                    length ={6}
                    onChange={e => setPin(e.target.value)}></input>
              </div>
               <Button type='submit'
                      className='"btn solid"'
                      onClick={handleSubmit}
                      color="primary">Sign Up</Button>
  
  <br></br>
  <div className="text-center">
                <p>Already Have An Account ?  <Link to={"/homepage"}>Sign In</Link></p>

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

export default Signuppage