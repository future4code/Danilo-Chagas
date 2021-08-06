import { useState } from "react"
import { ContainerCard, CardImage } from "./style"

export const Card = (props) => {

const [isFlipped, setIsFlipped] = useState(false)

function onClickCard () {
    setIsFlipped(!isFlipped)
}

    return <ContainerCard
    onClick={()=>onClickCard()}
    flippedUp={isFlipped}
    >
        <CardImage src={props.src}/>
    </ContainerCard>
}