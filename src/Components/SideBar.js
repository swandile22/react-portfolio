import React from 'react';
import '../App';
import {SideBarData} from "./SideBarData";
import logoImage from '../images/coding-svgrepo-com.svg'
import {Link, Outlet} from "react-router-dom";
import './Pages/Home.css';


export const SideBar = () => {
    return (
        <div className={'SideBar'}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img className={'logo_image'} alt={"logo image"} src={logoImage}/>
            <ul className={'SideBarList'}>

                {SideBarData.map((val, key) => {
                    return (

                        <li key={key}
                            className={'row'}
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = val.link
                            }}
                        ><Link to={val.link} id={window.location.pathname === val.link ? "active" : ""}>
                            {" "}
                            <div id={'icon'}>{val.icon}</div>
                            <div id={'title'}>{val.title}</div>
                        </Link>


                        </li>

                        );
                        })}
                        </ul>
            <Outlet />
                </div>
                )
                    ;
                }