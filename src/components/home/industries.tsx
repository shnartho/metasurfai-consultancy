import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { data } from './industries.data';

  const Industries = () => {
    return (
      <Box sx={{ 
        backgroundColor: 'white',
        py: 12,
        px: 2
      }}>
        <Typography
          variant="h1"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 8,
            fontWeight: 'bold'
          }}
        >
          Industries where we excel in AI
        </Typography>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        {data.map((item) => (
          <Box
            key={item.id}
            sx={{
              backgroundColor: 'black',
              borderRadius: 2,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              height: 35,
            }}
          >
            <Box
              component="img"
              src={item.icon}
              alt={item.title}
              sx={{
                width: 24,
                height: 24,
                filter: 'invert(1)'
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: 'white',
                whiteSpace: 'nowrap',
                fontWeight: 500
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Industries;
