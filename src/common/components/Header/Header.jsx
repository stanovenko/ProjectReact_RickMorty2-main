import logo from "../../../assets/img/logo.png"
import { NavLink } from "react-router"
import s from "./Header.module.css"

export const Header = () => {
    return (
        <div className={s.container}>
            <NavLink to={"/"}>
                <img className={s.logo} src={logo} alt="logotype" />
            </NavLink>
            <NavLink to={"/"} className={s.headerLink}>
                Home
            </NavLink>
            <NavLink to={"/characters"} className={s.headerLink}>
                Characters
            </NavLink>
            <NavLink to={"/locations"} className={s.headerLink}>
                Locations
            </NavLink>
            <NavLink to={"/episodes"} className={s.headerLink}>
                Episodes
            </NavLink>
        </div>
    )
}