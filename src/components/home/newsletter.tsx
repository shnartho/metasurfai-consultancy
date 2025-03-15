import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

const HomeNewsLetter: FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      sx={{
        background: 'white',
        py: { xs: 2, sm: 3, md: 10 },
      }}
    >
      <Container
        sx={{
          background: 'radial-gradient(circle at center, #4A6C86, #0E486A)',
          width: { xs: '100%', sm: '600px', md: '800px' },
          height: { xs: 'auto', sm: '180px' },
          borderRadius: 2,
          position: 'relative',
          p: { xs: 2, sm: 4 },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        {/* Left Column */}
        <Box
          sx={{
            width: { xs: '100%', sm: '60%' },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: 'white',
            mb: { xs: 2, sm: 0 },
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 2,
              pl: { xs: 0, sm: 3 },
              fontSize: { xs: 16, sm: 18 },
              fontWeight: 'bold',
              lineHeight: 1.3,
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            Free Report &quot;Technology Trends 2025: AI and Big
            {!isMobile && <br />} Data Analytics&quot;
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#0066FF',
              color: 'white',
              padding: '8px 24px',
              width: { xs: '100%', sm: '175px' },
              fontSize: '12px',
              ml: { xs: 0, sm: 3 },
              '&:hover': {
                backgroundColor: '#3d8ebf',
              },
            }}
          >
            Download for free
          </Button>
        </Box>

        {/* Right Column */}
        <Box
          sx={{
            position: { xs: 'relative', sm: 'absolute' },
            right: { sm: 0 },
            top: { sm: 0 },
            height: { xs: '200px', sm: '100%' },
            width: { xs: '100%', sm: '300px' },
          }}
        >
          <Image
            src="/images/ai-big-data-analytics.png"
            alt="AI and Big Data Analytics Report"
            layout="fill"
            style={{
              objectFit: 'cover',
              borderRadius: isMobile ? '8px' : '0',
            }}
            sizes="(max-width: 600px) 100vw, 300px"
          />
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
