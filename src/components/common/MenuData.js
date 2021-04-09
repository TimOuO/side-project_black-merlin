import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as GoIcons from "react-icons/go";
import * as SiIcons from "react-icons/si";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";

export const MenuData = [
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'About',
        path:'/about',
        icon:<SiIcons.SiAboutDotMe/>,
        cName:'nav-text'
    },
    {
        title:'Services',
        path:'/services',
        icon:<GrIcons.GrServices/>,
        cName:'nav-text'
    },
    {
        title:'Contact Us',
        path:'/contact-us',
        icon:<GrIcons.GrContact/>,
        cName:'nav-text'
    },
    {
        title:'Sign Up',
        path:'/sign-up',
        icon:<MdIcons.MdAssignmentInd/>,
        cName:'nav-text'
    },
    {
        title:'Sign In',
        path:'/sign-in',
        icon:<GoIcons.GoSignIn/>,
        cName:'nav-text'
    },
]