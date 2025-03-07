import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Image from 'next/image'
import { data } from './leaders.data'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

const Leaders: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  return (
    <Box
      sx={{
        className: 'leaders',
        position: 'relative',
        py: { xs: 3, sm: 4, md: 5 },
        backgroundImage: 'url(/images/backgroundleaders.png)',
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
        <Box sx={{ 
          textAlign: 'begin', 
          mb: { xs: 3, sm: 4, md: 5 }, 
          ml: { xs: 4, sm: 8, md: 19 }
        }}>
          <img 
            src="/images/leaders/message.png" 
            alt="Channel Icon" 
            style={{ 
              filter: 'invert(1)',
              width: isMobile ? '40px' : '48px'
            }}
          />
          <Typography 
            variant="h2" 
            sx={{ 
              mt: 2, 
              color: 'white',
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
            }}
          >
            Our AI leaders
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr', // Mobile: 1 column
              sm: 'repeat(2, 1fr)', // Tablet: 2 columns
              md: 'repeat(3, 1fr)', // Desktop: 3 columns
            },
            gap: { xs: 2, sm: 3, md: 4 },
            maxWidth: '1400px',
            margin: '0 auto',
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {data.map((leader) => (
            <Box
              key={leader.id}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'center', sm: 'flex-start' },
                p: { xs: 2, sm: 3 },
                backgroundColor: 'transparent',
                border: '1px solid white',
                width: 'auto',
              }}
            >
              <Box
                sx={{
                  width: { xs: 80, sm: 90, md: 100 },
                  height: { xs: 80, sm: 90, md: 100 },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  background: 'rgb(242, 242, 242)',
                  mb: { xs: 2, sm: 0 },
                  mr: { xs: 0, sm: 4, md: 8 },
                }}
              >
                <Image 
                  src={leader.photo} 
                  width={512} 
                  height={512} 
                  alt={'leader ' + leader.name}
                  style={{ 
                    marginTop: 10,
                    width: '100%',
                    height: 'auto'
                  }}
                />
              </Box>
              <Box sx={{ 
                flex: 1,
                textAlign: { xs: 'center', sm: 'left' }
              }}>
                <Typography 
                  component="h2" 
                  variant="h5" 
                  sx={{ 
                    fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.4rem' },
                    color: 'white'
                  }}
                >
                  {leader.name}
                </Typography>
                <Typography 
                  sx={{ 
                    color: 'white',
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                  }}
                >
                  {leader.category}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ 
                    mt: 1,
                    backgroundColor: 'red',
                    color: 'white',
                    width: { xs: '100%', sm: 'auto' }
                  }}
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

export default Leaders