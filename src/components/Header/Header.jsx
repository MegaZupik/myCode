import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";


const Header =(props)=> {
    return (<header className={s.header}/* onClick={()=>(console.log(props))}*/>
        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
        <img src='./img/logo.png' alt="123" />
    </header>)
}

export default Header;