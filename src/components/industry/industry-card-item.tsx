import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Industry } from '@/interfaces/industry'

interface Props {
  item: Industry
}

const IndustryCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1,
        py: 4,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,
          },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            borderRadius: 3,
            mx: 2,
            gap: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Image src={item.icon} width={24} height={24} alt={'Industry' + item.id} />
          <Typography component="h2" variant="h5" sx={{ fontSize: '1.2rem' }}>
            {item.title}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default IndustryCardItem
