import React, { FC, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { data } from './industries.data';

const Industries: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

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
        width: '100%',
        maxWidth: '1000px', // You can adjust this value based on your needs
        margin: '0 auto',
        position: 'relative'
      }}>
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            gap: 2,
            overflowX: 'auto',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {[...data, ...data].map((item, index) => (
            <Box
              key={`${item.id}-${index}`}
              sx={{
                backgroundColor: 'black',
                borderRadius: 2,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                height: 35,
                flex: '0 0 auto',
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
    </Box>
  );
};

export default Industries;
