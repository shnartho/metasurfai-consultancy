import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { data } from './roadmapsolving.data';

const RoadmapSolving: FC = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 8, 
        py: 12,
        backgroundColor: 'white'
      }}
    >
      {/* Heading Section */}
      <Typography 
        variant="h3" 
        component="h2" 
        sx={{ 
          mb: 8,
          textAlign: 'center',
          fontWeight: 'bold'
        }}
      >
        How We Solve Problems
      </Typography>

      {/* Timeline Container */}
      <Box sx={{ position: 'relative', width: '100%', overflow: 'visible' }}>      {/* Central Vertical Line */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '4px',
          height: '1050px',
          background: 'linear-gradient(to bottom, transparent, #0066FF 40px, #0066FF)',
          zIndex: 1,
        }}
      />
      {/* Vertical Line with Arrow */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          bottom: '-20px',
          transform: 'translate(-50%, 0)',
          width: 0,
          height: 0,
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          borderTop: '20px solid #0066FF',
          borderBottomLeftRadius: '-10px',
          borderBottomRightRadius: '-10px',
          zIndex: 1,
        }}
      />

      {data.map((item, index) => (
        <Box
          key={item.id}
          sx={{
            display: 'flex',
            flexDirection: index % 2 === 0 ? 'row-reverse' : 'row',
            alignItems: 'center',
            mb: 10,
            position: 'relative',
            width: '100%',
          }}
        >
          {/* Circle on the vertical line */}
                <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  top: '23px',
                  transform: 'translate(-50%, 0)',
                  width: '15px',
                  height: '15px',                
                  borderRadius: '50%',
                  border: '4px solid #0066FF',
                  backgroundColor: 'white',
                  zIndex: 2,
                }}
                />

                {/* Item Content */}
                <Box
                sx={{
                  width: '49%',
                  textAlign: index % 2 === 0 ? 'left' : 'right',
                }}
                >
                {/* Title */}
                <Typography variant="h6" component="h2" sx={{ mb: 1 }}>
                  {index + 1}. {item.title}
                </Typography>

                {/* Horizontal Line originating from the circle */}
                <Box
                  sx={{
                  position: 'absolute',
                  left: index % 2 === 0 ? 'calc(50% + 5px)' : 'auto',
                  right: index % 2 !== 0 ? 'calc(50% + 5px)' : 'auto',
                  width: '200px',
                  height: '2px',
                  background: index % 2 === 0
                  ? 'linear-gradient(to right, #0066FF 10%, transparent)'
                  : 'linear-gradient(to left, #0066FF 10%, transparent)',
                zIndex: 3,                  
                  margin: '0 auto',
                  }}
                />

                {/* Description */}
                <Typography 
                  variant="body2" 
                  sx={{ 
                  wordWrap: 'break-word', 
                  lineHeight: 1,
                  maxWidth: '200px',
                  marginLeft: index % 2 === 0 ? '0' : 'auto',
                  marginRight: index % 2 === 0 ? 'auto' : '0',
                  mt: 2,
                  }}
                >
                  {item.description}
                </Typography>
                </Box>
        </Box>
      ))}
      </Box>
      </Box>
    );
};

export default RoadmapSolving;
