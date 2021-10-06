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
    const sortBy = [
        { name: "mais populares", value: sortByValues.POPULARITY_DESC },
        { name: "menos populares", value: sortByValues.POPULARITY_ASC },
        { name: "mais recentes", value: sortByValues.RELEASE_DATE_DESC },
        { name: "menos recentes", value: sortByValues.RELEASE_DATE_ASC }
    ]

    useEffect(() => {
        setActiveSort({ sortBy: filter.sortBy })
        setActivedGenres(filter.genresId)
    }, [])

    const onClickSortByButton = (value: sortByValues) => {
        const newSort = { sortBy: value }
        setActiveSort(newSort)
        return setFilter({
            ...newSort,
            genresId: activedGenres
        })
    }

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

    const displaySortBy = !genreList ? <p>...</p> : sortBy.map((item: any, index: number) => {
        const isActive = !activeSort ? false : activeSort.sortBy === item.value
        return (
            <li
                onClick={() => onClickSortByButton(item.value)}
                className={`active-${isActive}`}
                key={index}>{item.name}</li>
        )
    })

    const displayGenres = !genreList ? <p>...</p> : genreList?.map((item: genres) => {
        const isActive = !activedGenres ? false : activedGenres.includes(item.id)
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
                    <ul>{displaySortBy}</ul>
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