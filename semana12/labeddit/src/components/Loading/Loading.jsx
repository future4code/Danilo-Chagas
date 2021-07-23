import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Container } from './styled'

const Loading = () => {
  return (
    <Container>
      <CircularProgress/>
    </Container>
  )
}

export default Loading