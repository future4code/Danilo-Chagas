import React, { useState, useEffect } from 'react'
import { Container, CardProfile } from './style'
import { getProfileToChoose, postChoosePerson, putClear } from '../../components/Endpoints/Endpoints'
import { BiHeartCircle, GiPlayerNext, BiBookHeart, FiRefreshCw, RiArrowGoBackFill } from 'react-icons/all'


const Choose = (props) => {
    const [profile, setProfile] = useState({})
    const [discartedProfile, setDiscartedProfile] = useState("")

    const getProfile = async () => {
        try {
            const response = await getProfileToChoose()
            !!response ? setProfile(response) : setProfile("") 

        } catch (error) {
            setProfile({})
        }
    }

    const chooseProfile = async (id) => {
        try {
            await postChoosePerson(id = { id })
            getProfile()
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    const onClickRefresh = () => {
        putClear().then(getProfile()).then(setDiscartedProfile(""))
    }

    const pushOnDiscartedProfile = () => {
        setDiscartedProfile(profile)
    }

    const onClickBackDiscarded = () => {
        if (!!discartedProfile) {
            if (discartedProfile === profile) {
                alert("Você pode voltar até um perfil.")
            } else {
                setProfile(discartedProfile)
            }
        } else {
            alert("Sem perfil para voltar")
        }
    }

    return (
        <Container>
            <CardProfile img={profile.photo}>
                <div id={"container-bg"}></div>
                <div id={"container-content"}>
                    <div className={"container-top-buttons"}>
                        <button id={"button-refresh"}
                            onClick={() => onClickRefresh()}>
                            <FiRefreshCw />
                        </button>

                        <button id={"button-matches"}
                            onClick={props.switchPage}>
                            <BiBookHeart />
                        </button>
                    </div>

                    {profile ?
                        <>
                            <div className={"container-profile-img"} />
                            <div className={"container-card-botton"}>
                                <div className={"container-profile-detail"}>
                                    <h4>{profile.name} | {profile.age}</h4>
                                    <p lang={"pt-br"}>{profile.bio}</p>
                                    <div className={"container-botton-buttons"}>
                                        {profile &&
                                            <button id={"button-discard"}
                                                onClick={() => onClickBackDiscarded()}>
                                                <RiArrowGoBackFill />voltar</button>}
                                        {profile &&
                                            <button id={"button-discard"}
                                                onClick={() => { pushOnDiscartedProfile(); getProfile() }}>
                                                <GiPlayerNext />passar</button>}
                                    </div>
                                </div>
                                {profile && <BiHeartCircle
                                    id={"button-like"}
                                    onClick={() => chooseProfile(profile.id)} />}
                            </div>
                        </>
                        :
                        <div id={"container-empty"}>
                            <h1>A lista acabou =/<br />aperte 'reiniciar'<br/> para recomeçar<br />ou confira seus matches</h1>
                        </div>
                    }
                </div>
            </CardProfile >
        </Container >
    )
}

export default Choose