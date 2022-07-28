import React, { useEffect, useState } from 'react'
import {MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'
import './ContentText.css'
import { MdCheckBox } from 'react-icons/md'
import Collapse from '@material-ui/core/Collapse'
import { Button, Grid } from '@mui/material'

export default function CourseBox({id, content, image, title, time, price, addCourseList, removeCourseList, code, coursesSelected, coursesPerPage, currentPage, inputText, filteredData}) {
    const [selectBox, setSelectBox] = useState(false)
    const [visibleContent, setVisibleContent] = useState(false)

    useEffect(()=>{
        setSelectBox(false)
        setVisibleContent(false)
    }, [currentPage])

    useEffect(()=>{
        setSelectBox(false)
    }, [inputText])

    useEffect(()=>{
        coursesSelected.forEach((course)=>{
            if(course.code === code){
                setSelectBox(true)
            }
        })
    }, [filteredData])

    useEffect(()=>{
        coursesSelected.forEach((course)=>{
            if(course.code === code){
                setSelectBox(true)
            }
        })
    }, [coursesPerPage])
    useEffect(()=>{
        if(coursesSelected.length===0){setSelectBox(false);}
    },
    [coursesSelected])
  return (
    <div style={{minWidth:'57vw'}} className={`flex flex-col lg:max-w-xs w-11/12 mb-10 transition-all bg-gray-300 rounded-xl p-4`}>
        <div className='flex lg:flex-row flex-col items-center'>
        <div className='w-11/12 flex justify-center lg:w-1/6'>
            <img src={image} className='rounded-xl' alt="" />
        </div>
        <div className='flex flex-col lg:text-left text-center p-4'>
        <h1 className='text-xl text-gray-600 font-bold'>{code} - {title}</h1>

        <div className='text-xl text-gray-600'>
            <h2>Carga horária: {time} h</h2>
            <h2>Investimento: R${price},00</h2>
        </div>
            <Grid className='flex mt-2 gap-2 text-white lg:flex-row flex-col'>
                <Button variant='contained' color='info' onClick={()=> setVisibleContent(!visibleContent)}>Saiba Mais</Button>
                <Button variant='contained' color='warning' onClick={()=> {setSelectBox(!selectBox); selectBox ? removeCourseList(id) : addCourseList(id, image ,title, time, price, code)}}>Selecione aqui 
                {selectBox ? <MdCheckBox color='yellow' className='ml-2' size={50}/> : <MdOutlineCheckBoxOutlineBlank color='white' className='ml-2' size={50}/>}</Button>
            </Grid>
        </div>

        <div>
        </div>
        </div>
        <Collapse in={visibleContent}>
        <div className={`flex flex-col transition-all items-center mt-5 p-4 rounded-lg bg-gray-200 justify-between w-full`}>
            <div className="ContentText">
                {content}
            </div>
        </div>
        </Collapse>
    </div>
  )
}
