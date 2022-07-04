import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Logo from '../assets/icons/z.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#ffffff">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" height="40px"/>
        <Typography variant="h5" pb="40px" mt="20px">
          Made by Zaw Htet Aung
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer