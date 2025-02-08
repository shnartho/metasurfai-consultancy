import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Image from 'next/image'
import { data } from './leaders.data'

const Leaders: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        py: 5,
        backgroundImage: 'url(/images/backgroundleaders.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.44)',
          zIndex: 1,
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 2 }}>
      <Box sx={{ textAlign: 'begin', mb: 5, ml: 19  }}>
        <img src="/images/leaders/message.png" alt="Channel Icon" style={{ filter: 'invert(1)'}}/>
        <Typography variant="h2" sx={{ mt: 2, color: 'white' }}>
          Our AI leaders
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        {data.map((leader) => (
          <Box
            key={leader.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 2,
              backgroundColor: 'trasnparent',
              border: '1px solid white',
              mb: 2,
              width: '400px',
            }}
          >
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                overflow: 'hidden',
                background: 'rgb(242, 242, 242)',
                mr: 8,
              }}
            >
            <Image src={leader.photo} width={100} height={90} alt={'leader ' + leader.name} 
            style={{ objectFit: 'cover', marginTop: 10 }}/>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5" sx={{ fontSize: '1.4rem', color: 'white' }}>
                {leader.name}
              </Typography>
              <Typography sx={{ color: 'white' }}>{leader.category}</Typography>
              <Button
                variant="contained"
                sx={{ mt: 1, backgroundColor: 'red', color: 'white' }}
                href={leader.contact}
              >
                Contact {leader.name}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
  )
}

export default Leaders;