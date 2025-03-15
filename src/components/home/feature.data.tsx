import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'AI Expertise',
    description: 'PhD level and MSc-level AI experts with track record of applying AI in business',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Flexibility',
    description: 'Wide range of skills: data scientists, front and Backend engineers, AI, LM and DevOps experts',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Speed',
    description: 'Efficent development of Al solutions thanks to instant access to top-level experts',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Risk mitigation',
    description:
      'Al consultants help reduce risks in adopting Al, from data privacy concerns to ethical considerations, ensuring responsible and compliant implementation.',
    icon: <ContactSupportIcon />,
  },
]
