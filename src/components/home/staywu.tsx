import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'

// Shared TextField styles
const textFieldStyle = {
  backgroundColor: 'white',
  borderRadius: 1,
  '& .MuiOutlinedInput-root': {
    color: '#000047', // Dark blue text
    '& fieldset': { borderColor: 'transparent' },
    '&:hover fieldset': { borderColor: 'transparent' },
    '&.Mui-focused fieldset': { borderColor: 'transparent' },
  },
  '& .MuiInputLabel-root': {
    color: '#000047',
    '&.Mui-focused': {
      color: '#000047',
      fontWeight: 500,
    },
  },
  // Add styles for the floating label
  '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
    backgroundColor: 'white',
    padding: '0 8px',
    border: '1px solid transparent',
    '&.Mui-focused': {
      borderColor: '#000047',
      borderRadius: '4px',
    },
  },
}

const StayWithUs: FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        p: 4,
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/images/abstract-stay.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 71, 0.65)', // Blue overlay with 20% opacity
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1000px',
          width: '100%',
          color: 'white',
        }}
      >
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
          STAY WITH US
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          To get your project underway, simply contact us and an expert will get in touch with you as soon as possible.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Name and Email fields in a row */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              sx={{
                flex: 1,
                ...textFieldStyle,
              }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              sx={{
                flex: 1,
                ...textFieldStyle,
              }}
            />
          </Box>

          <TextField fullWidth label="How can we help you?" multiline rows={4} variant="outlined" sx={textFieldStyle} />

          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: 'white',
                  '&.Mui-checked': { color: 'white' },
                }}
              />
            }
            label={
              <Typography variant="body2" sx={{ color: 'white' }}>
                By clicking this box, you will declare that you read and understand the Privacy policy and Cookie Policy
                of Metasurfai
              </Typography>
            }
          />

          <Button
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'white',
              width: 'fit-content',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default StayWithUs
