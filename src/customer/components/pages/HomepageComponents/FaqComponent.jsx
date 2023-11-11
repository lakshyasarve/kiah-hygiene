import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FaqComponent.css';

export default function FaqComponent() {
  return (
    <div className='faq-component'>
      <Accordion>
        <AccordionSummary className='faq-component-heading'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='faq-component-heading-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='faq-component-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary className='faq-component-heading'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='faq-component-heading-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='faq-component-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary className='faq-component-heading'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='faq-component-heading-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='faq-component-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary className='faq-component-heading'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='faq-component-heading-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='faq-component-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
