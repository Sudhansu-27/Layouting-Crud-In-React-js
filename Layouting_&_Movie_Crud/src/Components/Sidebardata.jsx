import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io"
import * as ImFilm from "react-icons/im";
import * as CgProfile from "react-icons/cg";

// const Sidebardata = () => {
//   return (
//     <div>Sidebardata</div>
//   )
// }

export const Sidebardata= [
    {
        title:'Home',
        path:'/home',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text_1'
    },

    {
        title:'Movies',
        path:'/movies',
        icon: <ImFilm.ImFilm/>,
        cName: 'nav-text_2'
    },

    {
        title:'Profile',
        path:'/profile',
        icon: <CgProfile.CgProfile/>,
        cName: 'nav-text_3'
    }

]

export default Sidebardata;