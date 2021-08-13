import React, { useEffect, useRef, useState } from "react"
import { ContainerCard, CardImage, CardDescription } from "./style"

export const Card = (props) => {

    const [isFlipped, setIsFlipped] = useState(false)
    const [descriptionOnOff, setDescriptionOnOff] = useState(false)
    const { cardWasSelected, setCardWasSelected } = props.cardStatus

    useEffect(() => {
        props.gameStatus ?
            setIsFlipped(false) : setIsFlipped(true)
    }, [props])

    const fieldRef = useRef(null)

    function switchDescription() {
        setDescriptionOnOff(!descriptionOnOff)
    }

    function onClickCard(e) {
        setIsFlipped(!isFlipped)
        switchDescription()
        e.current.scrollIntoView({ block: "start", behavior: "smooth" })
        // return setCardWasSelected(true)
    }

    return <React.Fragment>
        <ContainerCard
            ref={fieldRef}
            onClick={props.gameStatus && !cardWasSelected ?
                () => onClickCard(fieldRef)
                :
                () => alert("Inicie um novo jogo")}
            flippedUp={isFlipped}
            imageBackCard={props.backCard}>
            <CardImage src={props.src} flippedUp={isFlipped} />
            {isFlipped &&
                <CardDescription
                    descriptionOnOff={descriptionOnOff}>
                    <p> A carta {props.item.name} representa Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem odit, sequi mollitia nulla necessitatibus ipsa molestias. Iste voluptas sit dolores voluptatibus eos? Sed impedit, rem nostrum fuga numquam ullam omnis!</p>
                </CardDescription>}
        </ContainerCard>
    </React.Fragment>
}