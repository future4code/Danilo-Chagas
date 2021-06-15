import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
    justify-content: center;
    float:right;
`
const IconImage = styled.img`
	margin-right: 5px;
`

export function IconeSemContador (props) {
    return <IconContainer>
        <IconImage alt={'ÍconeMarcador'} src={props.icone} onClick={props.onClickIcone}/>
    </IconContainer>
}