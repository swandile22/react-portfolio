import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ApiIcon from '@mui/icons-material/Api';
import SkateboardingIcon from '@mui/icons-material/Skateboarding';


export const SideBarData = [
    {
      icon: <HomeIcon/>,
      title: "Home",
      link: '/home'
    },
    {
        icon: <AccountBoxIcon/>,
        title: "Bio",
        link: '/bio'
    },
    {
        icon:<ApiIcon/>,
        title: "Tech-Stack",
        link: '/tech-stack'
    },
    {
        icon: <SkateboardingIcon/>,
        title: "Interest",
        link: '/interest'
    }
]