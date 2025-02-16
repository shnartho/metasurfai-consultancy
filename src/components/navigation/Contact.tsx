import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '../styled-button'

const handleContactUs = (): void => {
  window.open('https://my.workee.net/consultant-metasurf-ai', '_blank');
};

const Contact: FC = () => {
  return (
    <Box sx={{ '& button:first-of-type': { mr: 2 } }}>
      <StyledButton disableHoverEffect={true} onClick={handleContactUs}>
        Contact Us
      </StyledButton>
    </Box>
  )
}

export default Contact
