import React from 'react'
import { Box, Typography } from '@mui/material'

const Nav = () => {
    return (
        <Box
            sx={{
                height: 150,
                width: '100vw',
                backgroundColor: '#1269C7',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Typography variant='h1' color={'#fff'}>The Sprinkler Doc</Typography>
        </Box >
    )
}

export default Nav