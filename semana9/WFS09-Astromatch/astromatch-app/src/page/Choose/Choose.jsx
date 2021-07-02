import React, { useState, useEffect } from 'react'
import { Container } from './style'
import {getProfileToChoose} from '../../components/Endpoints/Endpoints'

const Choose = (props) => {
const [profile, setProfile] = useState({})

const getProfile = async () => {
    try {
        const response = await getProfileToChoose()
        setProfile(response)
    }catch (error) {
        alert(error)
    }
}

useEffect (()=>{
    getProfile()
},[])

    return (
        <Container>
            <h1>Choose</h1>
            <button
            onClick={props.switchPage}
            >matches</button><br/>

            <>
            {profile.name}<br/>
            {profile.age}<br/>
            {profile.bio}<br/>
            <img src={profile.photo}></img>
            </>

        </Container>
    )
}

export default Choose