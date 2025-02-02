import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'

const handleBookMe = (): void => {
  window.open('https://my.workee.net/shnartho', '_blank');
};

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <StyledButton disableHoverEffect={true} variant="outlined" onClick={handleBookMe}>
        Sign In
      </StyledButton>
      <StyledButton disableHoverEffect={true} onClick={handleBookMe}>Sign Up</StyledButton>
    </Box>
  )
}

export default AuthNavigation
