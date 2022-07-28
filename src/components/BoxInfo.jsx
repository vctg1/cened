import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React from 'react'
import {MdOutlineExpandMore} from 'react-icons/md'

export default function BoxInfo(props) {
  return (
    <div className="w-11/12 rounded-2xl mt-2 m-auto">
      <Accordion className='p-4 border-2 border-[#D1D5DB] h-full w-full'>
				<AccordionSummary expandIcon={<MdOutlineExpandMore/>} className='text-2xl font-bold'><h2 className='text-gray-600'>{props.title}</h2></AccordionSummary>
				{props.text ? <AccordionDetails className='text-lg mt-2 text-gray-600'>{props.text}</AccordionDetails> : props.children}
      </Accordion>
    </div>
  )
}
