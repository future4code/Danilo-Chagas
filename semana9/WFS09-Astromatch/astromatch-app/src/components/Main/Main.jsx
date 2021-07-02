import React from 'react'
import { useState } from 'react'
import Choose from '../../page/Choose/Choose'
import Matches from '../../page/Matches/Matches'

function Main () {
const [activePage, setActivePage] = useState(true)

function onClickSwitchPage () {
    setActivePage(!activePage)
}

    return (
            activePage ?
            <Choose switchPage={onClickSwitchPage}/>
            :
            <Matches switchPage={onClickSwitchPage}/>
    )
}

export default Main 