import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Image from 'next/image'

const HomeNewsLetter: FC = () => {
  return (
    <Box sx={{ 
      background: 'white',
      py: { xs: 4, md: 10 },
    }}>
      <Container sx={{ 
        background: 'radial-gradient(circle at center, #4A6C86, #0E486A)',
        width: '800px',
        height: '180px',
        borderRadius: 2,
        position: 'relative',
        pl: 4,
        pt: 4, 
        pb: 4, 
      }}>
        {/* Left Column */}
        <Box
          sx={{
            width: '60%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              mb: 2,
              pl: 3,
              fontSize: 18,
              fontWeight: 'bold',
              lineHeight: 1.3,
            }}
          >
            Free Report &quot;Technology Trends 2025: AI and Big <br/>
            Data Analytics&quot;
          </Typography>
            <Button
            variant="contained"
            sx={{
              backgroundColor: '#0066FF',
              color: 'white',
              padding: '8px 24px',
              width: '175px',
              fontSize: '12px',
              ml: 3,
              '&:hover': {
              backgroundColor: '#3d8ebf',
              }
            }}
            >
            Download for free
            </Button>
        </Box>

        {/* Right Column */}
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: '100%',
            width: '300px',
          }}
        >
          <Image
            src="/images/ai-big-data-analytics.png"
            alt="AI and Big Data Analytics Report"
            layout="fill" 
            style={{ objectFit: 'cover' }}
            sizes="500px"
          />
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
