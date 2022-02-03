import React from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'
import iguana from '../static/images/iguana.jpeg'

const ChallengeCard = () => {
    return (
        <div
            style={{
                marginTop: 20,
                display: 'flex',
                backgroundColor: '#2C303A',
            }}
        >
            <Card
                sx={{
                    maxWidth: 445,
                    backgroundColor: '#2C303A',
                    color: 'white',
                }}
            >
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={iguana}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="ghostwhite">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        sx={{ backgroundColor: '#46CF73', color: 'ghostwhite' }}
                        size="small"
                    >
                        Demo
                    </Button>
                    <Button
                        sx={{ backgroundColor: '#46CF73', color: 'ghostwhite' }}
                        size="small"
                    >
                        Edit in Codepen
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ChallengeCard
