import { Suspense, useContext, useEffect, useLayoutEffect, useState } from "react"
import GlobalStateContext from "../../global/GlobalStateContext";
import { Container, FilterType } from "./style";
import { genres } from '../../models/genresList'
import { filter, sortByValues } from "../../models/FilterModel";

export default function Filter(props: any) {

    const { states, setters } = useContext(GlobalStateContext)
    const { genreList, filter } = states
    const { setFilter } = setters
    const [activedGenres, setActivedGenres] = useState<number[]>([])
    const [activeSort, setActiveSort] = useState({ sortBy: sortByValues.POPULARITY_DESC })


    const onClickGenreButton = (genreId: number) => {
        let newArray = []
        if (activedGenres.includes(genreId)) {
            newArray = activedGenres.filter(item => { return Number(item) !== Number(genreId) })
            setActivedGenres(newArray)

        } else {
            newArray = [...activedGenres, genreId]
            setActivedGenres(newArray)
        }

        return setFilter({
            ...activeSort,
            genresId: newArray
        })

    }


    const displayGenres = !genreList ? <p>...</p> : genreList?.map((item: genres) => {
        const isActive = !activedGenres ? false : activedGenres?.includes(item.id)
        return (
            <li
                onClick={() => onClickGenreButton(item.id)}
                className={`active-${isActive}`}
                key={item.id}>{item.name}</li>
        )
    })

    return (
        <Container>

            <FilterType>
                <details open>

                    <summary className={"name"} >Ordenar por</summary>

                    <ul>
                        <li>mais populares</li>
                        <li>menos populares</li>
                        <li>mais recentes</li>
                        <li>menos recentes</li>
                    </ul>
                </details>
            </FilterType>

            <FilterType>
                <details open>

                    <summary className={"name"}>Gênero</summary>

                    <ul>{displayGenres}</ul>
                </details>
            </FilterType>

        </Container>
    )
}