import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Image from 'next/image'

const transformbusiness = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: 'white' }}>
      <Box sx={{ 
        pt: 10,
        pb: 10,
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
      }}>
        {/* Left Column */}
        <Box sx={{ flex: 1, display: 'flex', 
            flexDirection: 'column', gap: 3, 
            alignItems: 'center'}}>
          <Typography variant="h1" component="h2" align="center">
            Why not transform your operations <br/> with AI?
          </Typography>
          <Button 
            variant="outlined"
            href="https://my.workee.net/consultant-metasurf-ai"
            sx={{
              borderColor: '#8B0000',
              color: '#8B0000',
              width: 'fit-content',
              '&:hover': {
                borderColor: '#8B0000',
                backgroundColor: 'rgba(139, 0, 0, 0.04)'
              }
            }}
          >
            Let's talk
          </Button>
        </Box>

        {/* Right Column */}
        <Box sx={{ flex: 1, position: 'relative', height: '400px' }}>
          <Image
            src="/images/womanSeeingAIChart.png"
            alt="Woman analyzing AI chart"
            layout="fill"
            style={{ objectFit: 'contain' }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default transformbusiness