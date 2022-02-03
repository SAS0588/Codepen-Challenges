import React from 'react'
import { Container, Grid } from '@mui/material'
import ChallengeCard from './components/ChallengeCard'
import MainAppBar from './components/MainAppBar'

function App() {
    return (
        <Container
            maxWidth={false}
            style={{ backgroundColor: 'black', padding: 0 }}
        >
            <MainAppBar />
            <Grid
                container
                justifyContent={'space-around'}
                alignContent={'center'}
            >
                <ChallengeCard />
            </Grid>
        </Container>
    )
}

export default App
