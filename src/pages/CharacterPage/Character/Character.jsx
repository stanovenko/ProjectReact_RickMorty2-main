import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import s from "./Character.module.css"

export const Character = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${id}`)
            .then((res) => {
                setCharacter(res.data)
                setError(null)
            })
            .catch((err) => {
                setError(err.response?.data?.error || "Ошибка загрузки данных персонажа")
                setCharacter(null)
            })
    }, [id])

    const getStatusClassName = (status) => {
        switch (status) {
            case "Alive":
                return `${s.status} ${s.aliveStatus}`
            case "Dead":
                return `${s.status} ${s.deadStatus}`
            case "unknown":
                return `${s.status} ${s.unknownStatus}`
            default:
                return s.status
        }
    }

    return (
        <div className={s.pageContainer}>
            {error && <div className={s.errorMessage}>{error}</div>}
            {character && (
                <div className={s.container}>
                    <h1 className={s.pageTitle}>{character.name}</h1>
                    <div className={s.content}>
                        <img className={s.img} src={character.image} alt={character.name} />
                        <div className={s.description}>
                            <div className={s.statusContainer}>
                                <div className={getStatusClassName(character.status)}></div>
                                <div>
                                    {character.status} - {character.species}
                                </div>
                            </div>
                            <div className={s.info}>
                                <p className={s.subTitle}>Последняя известная локация:</p>
                                <p className={s.subTitleResult}>{character.location.name}</p>
                            </div>
                            <div className={s.info}>
                                <p className={s.subTitle}>Количество эпизодов:</p>
                                <p className={s.subTitleResult}>{character.episode.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}