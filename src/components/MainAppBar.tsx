import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

const MainAppBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#2C303A' }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            textAlign: 'center',
                            color: 'white',
                        }}
                    >
                        Codepen Challenges
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default MainAppBar
