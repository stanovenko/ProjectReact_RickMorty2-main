import { useEffect, useState } from "react"
import axios from "axios"
import s from "./CharacterPage.module.css"
import { Link } from "react-router-dom"; // ✔️



export const CharacterPage = () => {
    const [characters, setCharacters] = useState([])
    const [info, setInfo] = useState({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    })
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("")
    const [url, setUrl] = useState("https://rickandmortyapi.com/api/character")

    const fetchData = (url) => {
        axios
            .get(url)
            .then((res) => {
                setCharacters(res.data.results)
                setInfo(res.data.info)
                setError(null)
            })
            .catch((err) => {
                setError(err.response?.data?.error || "Ошибка при получении данных")
                setCharacters([])
            })
    }

    useEffect(() => {
        fetchData(url)
    }, [url])

    const searchHandler = (e) => {
        const value = e.target.value
        setSearch(value)
        setUrl(`https://rickandmortyapi.com/api/character/?name=${value}`)
    }

    const nextPageHandler = () => {
        if (info.next) {
            setUrl(info.next)
        }
    }

    const previousPageHandler = () => {
        if (info.prev) {
            setUrl(info.prev)
        }
    }

    return (
        <div className={"pageContainer"}>
            <h1 className={"pageTitle"}>Character Page</h1>
            <input
                type="search"
                className={s.search}
                onChange={searchHandler}
                value={search}
                placeholder="Search..."
            />
            {error && <div className="errorMessage">{error}</div>}
            {!error && characters.length > 0 && (
                <>
                    <div className={s.characters}>
                        {characters.map((character) => (
                            <div key={character.id} className={s.character}>
                                <Link to={`/characters/${character.id}`} className={s.characterLink}>
                                    {character.name}
                                </Link>
                                <img src={character.image} alt={`${character.name} avatar`} />
                            </div>
                        ))}

                    </div>
                    <div className={s.buttonContainer}>
                        <button className="linkButton" disabled={!info.prev} onClick={previousPageHandler}>
                            Назад
                        </button>
                        <button className="linkButton" disabled={!info.next} onClick={nextPageHandler}>
                            Вперед
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
