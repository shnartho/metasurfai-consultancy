import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { keyframes } from '@mui/system';

interface CompanyLogo {
  name: string;
  logo: string;
}

const companies: CompanyLogo[] = [
  { name: 'Company 1', logo: '/images/logos/company1.png' },
  { name: 'Company 2', logo: '/images/logos/company2.png' },
  { name: 'Company 3', logo: '/images/logos/company3.png' },
  { name: 'Company 4', logo: '/images/logos/company4.png' },
  { name: 'Company 5', logo: '/images/logos/company5.png' },
  // Add more companies as needed
];

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const TrustedBy: FC = () => {
  return (
    <Box sx={{ backgroundColor: 'white', py: 6, overflow: 'hidden' }}>
      <Typography 
        variant="h4" 
        component="h2" 
        align="center" 
        sx={{ mb: 4, color: '#333' }}
      >
        Trusted By
      </Typography>

      <Box sx={{ position: 'relative', width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            animation: `${scroll} 20s linear infinite`,
            '&:hover': {
              animationPlayState: 'paused',
            },
            width: 'fit-content',
          }}
        >
          {/* Double the logos for seamless scrolling */}
          {[...companies, ...companies].map((company, index) => (
            <Box
              key={`${company.name}-${index}`}
              sx={{
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '150px',
              }}
            >
              <Box
                component="img"
                src={company.logo}
                alt={`${company.name} logo`}
                sx={{
                  height: '60px',
                  width: 'auto',
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.3s ease',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  color: '#666',
                  fontSize: '0.875rem',
                }}
              >
                {company.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TrustedBy;
