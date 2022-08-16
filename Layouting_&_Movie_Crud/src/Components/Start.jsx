import React from 'react'
import {Link , Outlet} from "react-router-dom"

const Start = () => {
  return (<>
    <div>Welcome To My Website</div>
    <Outlet />
    </>
  )
}

export default Start