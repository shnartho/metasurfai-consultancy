import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { Leader } from '@/interfaces/leader'

interface Props {
  item: Leader
}

const LeaderCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 4,
        border: '1px solid white',
        mb: 2,
      }}
    >
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: '50%',
          overflow: 'hidden',
          mr: 2,
        }}
      >
        <Image src={item.photo} width={100} height={100} alt={'Mentor ' + item.name} />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography component="h2" variant="h5" sx={{ fontSize: '1.4rem' }}>
          {item.name}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>{item.category}</Typography>
        <Button
          variant="contained"
          sx={{ mt: 1, backgroundColor: 'red', color: 'white' }}
          href={item.contact}
        >
          Contact {item.name}
        </Button>
      </Box>
    </Box>
  )
}

export default LeaderCardItem