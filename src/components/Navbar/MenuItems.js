import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";

export const MenuItems = [
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-links'
    },
    {
        title:'About',
        path:'/about',
        icon:<SiIcons.SiAboutDotMe/>,
        cName:'nav-links'
    },
    {
        title:'Services',
        path:'/services',
        icon:<GrIcons.GrServices/>,
        cName:'nav-links'
    },
    {
        title:'Contact Us',
        path:'/contact-us',
        icon:<GrIcons.GrContact/>,
        cName:'nav-links'
    },
    {
        title:'Sign Up',
        path:'/sign-up',
        icon:<MdIcons.MdAssignmentInd/>,
        cName:'nav-links'
    }
]