import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

function Header() {
    return (
        <div className={s.navigation}>
            <div className={s.navlink}>
                <NavLink to="/pre-junior" activeClassName={s.active}>
                    {" "}
                    pre-junior
                </NavLink>
            </div>
            <div className={s.navlink}>
                <NavLink to="/junior" activeClassName={s.active}>
                    {" "}
                    junior
                </NavLink>
            </div>
            <div className={s.navlink}>
                <NavLink to="/junior-plus" activeClassName={s.active}>
                    junior plus
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
