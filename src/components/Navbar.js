import React from "react";
import { NavLink } from "react-router-dom";
import menulist from "./MenuList";
import './NavbarStyle.css';
import { useState } from "react";

function Navbar() {

    const [isActive,setActive]=useState(true);

    const handleClick = () => {
        //   console.log("clicked");
        setActive(current=>!current);   
    }
    return (
        <div className="navbar">
            <div className="left">
                <h1>Trippy</h1>
            </div>

            <div className="menu">
                <i class="fa-solid fa-bars" onClick={handleClick}></i>
            </div>
            <div className="right">
                <ul className={isActive ? 'menuactive':""}>
                    {menulist.map((items, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={items.link} className={items.cname}><i class={items.logo}></i>  {items.title}</NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
export default Navbar;