import { NavLink  } from 'react-router-dom';
import s from './HomePage.module.css';
import { Header } from '../../common/components/Header/Header.jsx';

export const HomePage = () => {
    return (
        <>
        <Header></Header>
        <div className={s.mainWrapper}>
            <h1 className={s.title}>The Rick and Morty</h1>
            <nav className={s.linkWrapper}>
                <NavLink to="/characters" className={s.link}>Characters</NavLink>
                <NavLink to="/locations" className={s.link}>Locations</NavLink>
                <NavLink to="/episodes" className={s.link}>Episodes</NavLink>
            </nav>
        </div>
        </>
    );
};
