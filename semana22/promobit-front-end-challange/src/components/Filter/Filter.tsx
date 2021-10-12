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
import useWindowSize from "../../hooks/useWindowSize";
import { goToPage } from "../../routes/coordinator";
import { useHistory } from "react-router";

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
    const innerWidth = useWindowSize()

    const changeToResponsive = innerWidth[0] <= 600 ? true : false

    const history = useHistory()

    useEffect(() => {
        setActiveSort({ sortBy: filter.sortBy })
        setActivedGenres(filter.genresId)
    }, [isSearching])

    const onClickSortByButton = (value: sortByValues) => {
        const newSort = { sortBy: value }
        setActiveSort(newSort)
        return (
            setFilter({
                ...newSort,
                genresId: activedGenres
            }),
            goToPage(history, 1)
        )
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

        return (
            setFilter({
                ...activeSort,
                genresId: newArray
            }),
            goToPage(history, 1)
        )

    }

    const onClickClearAllGenres = () => {
        setActivedGenres([])

        return (setFilter({
            ...activeSort,
            genresId: []
        }), goToPage(history, 1)
        )
    }

    const displaySortBy = !genreList ? <p>...</p> : sortBy.map((item: any, index: number) => {
        return (
            <FormControlLabel
                key={item.name}
                onChange={() => onClickSortByButton(item.value)}
                label={item.name}
                value={item.value}
                control={<Radio />} />
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
                <details id={"ordeBy-container"}
                    open={!changeToResponsive} >
                    <summary className={"filter-name"} >Ordenar por</summary>
                    <RadioGroup
                        aria-label="order by"
                        defaultValue={filter.sortBy}
                        name="radio-option">
                        {displaySortBy}
                    </RadioGroup>
                </details>
            </FilterType>


            <FilterType>
                <details id={"genres-container"}
                    open={!changeToResponsive}>

                    <summary className={"filter-name"}>Gênero </summary>

                    <Stack
                        {...changeToResponsive && `display: block`}
                        direction={changeToResponsive ? "row" : "column"}
                        alignItems={changeToResponsive ? 'center' : 'stretch'}
                        justifyContent={changeToResponsive ? 'center' : 'flex-start'}
                        flexWrap={changeToResponsive ? 'wrap' : 'nowrap'}
                        rowGap={1}
                        spacing={1} mt={1}
                        width={changeToResponsive ? '90%' : '100%'}
                        mx={'auto'}
                    >
                        <Button
                            variant="outlined"
                            startIcon={<DeleteSweepIcon />}
                            onClick={() => onClickClearAllGenres()}
                            fullWidth={changeToResponsive}>
                            Limpar Tudo
                        </Button>
                        {displayGenres}
                    </Stack>
                </details>
            </FilterType>

        </Container>
    )
}