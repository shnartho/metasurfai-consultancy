import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import AddIcon from '@mui/icons-material/Add'
import Divider from '@mui/material/Divider'
import { data } from './frequentquestions.data'

const FrequentQuestions: FC = () => {
  return (
    <Box sx={{ 
      p: 4,
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: 'center',
          mb: 4,
          fontWeight: 'bold'
        }}
      >
        Frequently Asked Questions
      </Typography>

      <Box sx={{ width: '100%', maxWidth: 800 }}>
        {data.map((item, index) => (
          <React.Fragment key={item.id}>
            <Accordion 
              sx={{ 
                boxShadow: 'none',
                '&:before': {
                  display: 'none'
                }
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={{ color: 'skyblue' }} />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    margin: '12px 0'
                  }
                }}
              >
                <Typography variant="h6">
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
            {index < data.length - 1 && (
              <Divider sx={{ backgroundColor: 'skyblue' }} />
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  )
}

export default FrequentQuestions

