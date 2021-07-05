import React, { useState } from 'react'
import { Container, CardProfile , Item } from './style'
import { getMatches, getProfileToChoose, postChoosePerson, putClear } from '../../components/Endpoints/Endpoints'
import { useEffect } from 'react'
import { TiArrowBackOutline, FiRefreshCw } from 'react-icons/all'

const Matches = (props) => {
    const [matches, setMatches] = useState([])

    const getList = async () => {
        try {
            const response = await getMatches()
            setMatches(response)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getList()
    }, [])

    const onClickRefresh = () => {
        putClear().then(setMatches(""))
    }

    const matchList = !!matches ? matches.map((item) => {
        return <Item key={item.id} img={item.photo}>
            <div id={"img"}/>
            <p>{item.name}</p>
            </Item>
    }) : <p>sem matches =/<br/>no momento</p>

    console.log(matches)

    return (
        <Container>
            <CardProfile>
                <div className={"container-top-buttons"}>
                    <button id={"button-refresh"}
                        onClick={() => onClickRefresh()}>
                        <FiRefreshCw />
                    </button>

                    <button id={"button-choose"}
                        onClick={() => props.switchPage()}>
                        <TiArrowBackOutline />
                    </button>
                </div>
                <h4>{matches.length>0&&matches.length} Matches</h4>
                {matchList}
            </CardProfile>
        </Container>
    )
}

export default Matches