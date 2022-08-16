import React from 'react'
import Dashboard from './Dashboard'
import './Profile.css';
import { useState } from 'react';
const Profile = () => {

function gett_act_user(){

  var data = JSON.parse(localStorage.getItem("form"))
  const cur_user=JSON.parse(localStorage.getItem('currentUser'))
 let cur_user_info= data.filter((elem)=>{
      return elem.email===cur_user.email
  })
  if(cur_user_info){
    let cur_user_obj={...cur_user_info[0]};
    return cur_user_obj
  }
  else{
    return []
  }
 
  
}
 const [user,setUser]=useState(gett_act_user())

  return (
    <>
      <Dashboard>

      </Dashboard>

      <div className='profile'>
        <table class="table">
          <thead className='tc'>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Aadhaar No.</th>
              
              <th scope="col">Pancard No.</th>
              <th scope="col">Address</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">Pincode</th>
            </tr>
          </thead>
          <tbody className='tb'>
          <tr>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.adhaar}</td>
                  
                  <td>{user.pan}</td>
                  <td>{user.add}</td>
                  <td>{user.state}</td>
                  <td>{user.city}</td>
                  <td>{user.pin}</td>
                </tr>
          </tbody>
        </table>

      </div>
    </>

  )
}

export default Profile