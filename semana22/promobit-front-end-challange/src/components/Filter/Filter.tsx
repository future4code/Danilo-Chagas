import { Suspense, useContext, useEffect, useLayoutEffect, useState } from "react"
import GlobalStateContext from "../../global/GlobalStateContext";
import { Container, FilterType } from "./style";

export default function Filter() {

    const { states } = useContext(GlobalStateContext)
    const { genreList } = states

    const displayGenres = !genreList ? <p>...</p> : genreList?.map((item: any) => {
        return (
            <li key={item.id}>{item.name}</li>
        )
    })

    useLayoutEffect(() => { }, [genreList])

    return (
        <Container>

            <FilterType>
                <details>

                    <summary className={"name"}>Ordenar por</summary>

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