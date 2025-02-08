import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { data } from './ourbusiness.data'

const OurBusiness: FC = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: 'white', position: 'relative', overflow: 'hidden' }}>
      <Typography variant="h1" component="h1" sx={{ mb: 2, textAlign: 'center' }}>
        Consulting Services For Businesses
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
        We help you create scalable products and services with intuitive design and robust implementation, aiming to 
        <br/>meet both your business objectives and your customers’ expectations.
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
        {data.map((item) => (
          <Box
            key={item.id}
            sx={{
              backgroundColor: 'white',
              borderRadius: 2,
              boxShadow: '0 4px 8px rgba(0, 110, 255, 0.2)', // Blue shadow
              p: 3,
              width: '40%',
              maxWidth: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              mb: 4,
            }}
          >
            <Box sx={{ mb: 2 }}>
              <img src={item.icon} alt={item.title} style={{ width: '40px', height: '40px' }} />
            </Box>
            <Typography variant="h6" component="h2" sx={{ mb: 1, color: 'skyblue' }}>
              {item.title}
            </Typography>
            <Typography variant="body2">
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default OurBusiness