import { useContext, useEffect, useState } from "react"
import GlobalStateContext from "../../global/GlobalStateContext";
import { Container, FilterType } from "./style";
import { genres } from '../../models/genresList'
import { sortByValues } from "../../models/FilterModel";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import Chip from '@mui/material/Chip';
import { Button, Stack } from "@material-ui/core";
import { Done } from "@mui/icons-material";
import { FormControlLabel, RadioGroup, Radio } from "@mui/material";

export default function Filter(props: any) {

    const { states, setters } = useContext(GlobalStateContext)
    const { genreList, filter, isSearching } = states
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
    }, [isSearching])

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

    const onClickClearAllGenres = () => {
        setActivedGenres([])

        return setFilter({
            ...activeSort,
            genresId: []
        })
    }

    const displaySortBy = !genreList ? <p>...</p> : sortBy.map((item: any, index: number) => {
        const isActive = !activeSort ? false : activeSort.sortBy === item.value
        return (
            <FormControlLabel
                onChange={() => onClickSortByButton(item.value)}
                label={item.name}
                value={item.value}
                control={<Radio />}/>
        )
    })

    const displayGenres = !genreList ? <p>...</p> : genreList?.map((item: genres) => {
        const isActive = !activedGenres ? false : activedGenres.includes(item.id)
        return (
            <Chip
                label={item.name}
                variant="outlined"
                onClick={() => onClickGenreButton(item.id)}
                color={isActive ? "success" : "default"}
                key={item.id}
                deleteIcon={isActive ? <Done /> : <></>}
                onDelete={() => onClickGenreButton(item.id)}
            />
        )
    })

    return (
        <Container className={`visible-${!isSearching}`}>

            <FilterType>
                <details open>
                    <summary className={"name"} >Ordenar por</summary>
                    <RadioGroup
                        aria-label="order by"
                        defaultValue={sortByValues.POPULARITY_DESC}
                        name="radio-option">
                        {displaySortBy}
                    </RadioGroup>
                </details>
            </FilterType>


            <FilterType>
                <details open>
                    <summary className={"name"}>Gênero </summary>
                    <Stack direction="column" spacing={1} mt={1}>
                        <Button
                            variant="outlined"
                            startIcon={<DeleteSweepIcon />}
                            onClick={() => onClickClearAllGenres()}>
                            Limpar Tudo
                        </Button>
                        {displayGenres}
                    </Stack>
                </details>
            </FilterType>

        </Container>
    )
}