import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { data } from './ourbusiness.data'
import useMediaQuery from '@mui/material/useMediaQuery'

const OurBusiness: FC = () => {
  const isMobile = useMediaQuery('(max-width:768px)')

  return (
    <Box sx={{ 
      p: { xs: 2, md: 4 }, 
      backgroundColor: 'white', 
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      <Typography 
        variant="h1" 
        component="h1" 
        sx={{ 
          mb: 2, 
          textAlign: 'center', 
          color: '#0066FF',
          fontSize: { xs: '2rem', md: '3rem' }
        }}
      >
        Consulting Services For Businesses
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          mb: 4, 
          textAlign: 'center',
          px: { xs: 2, md: 0 }
        }}
      >
        We help you create scalable products and services with intuitive design and robust implementation, aiming to
        {!isMobile && <br/>}meet both your business objectives and your customers&apos; expectations.
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
        {data.map((item) => (
          <Box
            key={item.id}
            sx={{
              backgroundColor: 'white',
              borderRadius: 2,
              boxShadow: '0 2px 2px #212121',
              p: 3,
              width: { xs: '100%', md: '40%' },
              maxWidth: { xs: '100%', md: '250px' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              mb: 4,
            }}
          >
            <Box sx={{ mb: 2 }}>
              <img src={item.icon} alt={item.title} style={{ width: '64px', height: '64px' }} />
            </Box>
            <Typography variant="h6" component="h2" sx={{ mb: 1, color: '#212121' }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: '#212121' }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default OurBusiness