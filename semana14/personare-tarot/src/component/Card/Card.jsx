import React, { useRef, useState } from "react"
import { ContainerCard, CardImage, CardDescription, ButtonDescription } from "./style"

export const Card = (props) => {

    const [isFlipped, setIsFlipped] = useState(false)
    const [descriptionOnOff, setDescriptionOnOff] = useState(false)

    const fieldRef = useRef(null)

    function switchDescription() {
        setDescriptionOnOff(!descriptionOnOff)
        console.log(descriptionOnOff)
    }

    function onClickCard(e) {
        setIsFlipped(!isFlipped)
        e.current.scrollIntoView({ block: "center", behavior: "smooth" })
    }

    return <React.Fragment>
        <ContainerCard
            ref={fieldRef}
            onClick={() => onClickCard(fieldRef)}
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