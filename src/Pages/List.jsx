import React, { useEffect, useState } from 'react'
import ReactDOMServer from 'react-dom/server'
import { useParams } from 'react-router-dom'
import Title from '../components/Title'
import CourseBox from '../components/CourseBox'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsCart4} from 'react-icons/bs'
import { MdCheckBox } from 'react-icons/md'
import CoursesSelect from '../components/CoursesSelect'
import CircularProgress from '@mui/material/CircularProgress';
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import imagesCode from '../imagesCode'
import { Grid, TextField } from '@mui/material'
import Pagination from '../components/Pagination'
const HtmlToReactParser = require('html-to-react').Parser
const parse = require('html-react-parser')
export default function List() {
  const abbres = [
    {
      text: 'Acre',
      abbre: 'ac'
    },

    {
      text: 'Alagoas',
      abbre: 'al'
    },

    {
      text: 'Amazonas',
      abbre: 'am'
    },

    {
      text: 'Amapá',
      abbre: 'ap'
    },

    {
      text: 'Bahia',
      abbre: 'ba'
    },

    {
      text: 'Ceará',
      abbre: 'ce'
    },

    {
      text: 'Distrito Federal',
      abbre: 'df'
    },

    {
      text: 'Espírito Santo',
      abbre: 'es'
    },

    {
      text: 'Goiás',
      abbre: 'go'
    },

    {
      text: 'Maranhão',
      abbre: 'ma'
    },

    {
      text: 'Mato Grosso do Sul',
      abbre: 'ms'
    },
    
    {
      text: 'Mato Grosso',
      abbre: 'mt'
    },

    {
      text: 'Minas Gerais',
      abbre: 'mg'
    },

    {
      text: 'Pará',
      abbre: 'pa'
    },

    {
      text: 'Paraíba',
      abbre: 'pb'
    },

    {
      text: 'Paraná',
      abbre: 'pr'
    },
    {
      text: 'Pernambuco',
      abbre: 'pe'
    },

    {
      text: 'Piauí',
      abbre: 'pi'
    },

    {
      text: 'Rio de Janeiro',
      abbre: 'rj'
    },

    {
      text: 'Rio Grande do Norte',
      abbre: 'rn'
    },

    {
      text: 'Rondônia',
      abbre: 'ro'
    },

    {
      text: 'Roraima',
      abbre: 'rr'
    },

    {
      text: 'Rio Grande do Sul',
      abbre: 'rs'
    },

    {
      text: 'Santa Catarina',
      abbre: 'sc'
    },

    {
      text: 'Sergipe',
      abbre: 'se'
    },

    {
      text: 'São Paulo',
      abbre: 'sp'
    },

    {
      text: 'Tocantins',
      abbre: 'to'
    },

  ]
    const [coursesSelected, setCoursesSelected] = useState([])
    const [courses, setCourses] = useState([])
    const [totalPrice, setTotalPrice] = useState()
    const [totalPages, setTotalPages] = useState()
    const apiCursos = process.env.REACT_APP_API_KEY
    let filteredData = courses
    const [allCourses, setAllCourses] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [waitLoad, setWaiLoad] = useState(false)
    let indexFor = []

  const addCourseList = (id, image ,title, time, price, code)=>{
      let newCourse = [...coursesSelected, {id, image, title, time, price, code}]
      setCoursesSelected(newCourse)
  }
  const removeCourseList = (id)=>{
    let newCoursesList = []

    coursesSelected.map((c)=>{
      if(c.id !== id){
        newCoursesList.push(c)
      }
    })
    if(coursesSelected.length === 1){
      sessionStorage.setItem('coursesSelected', '')
    }
    setCoursesSelected(newCoursesList)
  }
  const calcTotalPrice = ()=>{
    let prices = []
    coursesSelected.map((course)=>{
      prices.push(course.price)
    })
    setTotalPrice(eval(prices.join('+')))
  }

  const htmlConveterToReact = (html)=>{
    const htmlInput = html
    const htmlToReactParser = new HtmlToReactParser();
    const reactElement = htmlToReactParser.parse(htmlInput);
    const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);
    let padding = '0px'
    return parse(reactHtml.replaceAll('span', 'p').replaceAll('<p','<li').replaceAll('</p>','</li>').replaceAll('30px', padding).replaceAll('justify', 'start').replaceAll('<html>', '<div>').replaceAll('</html>', '</div>'))
  }

    useEffect(()=>{
      if(coursesSelected.length >= 1){
        sessionStorage.setItem('coursesSelected', JSON.stringify(coursesSelected))
      }
      calcTotalPrice()
    }, [coursesSelected])

    let {idState} = useParams()
    const [state, setState] = useState('')
    useEffect(()=>{
      abbres.forEach((a)=>{
        if(a.abbre === idState){
          setState(a.text)
        }else{
          return false
        }
        
      })
      axios.get(`${apiCursos}/cursos?limit=200`).then(response=>{
        let coursesActives = []
        response.data.data.map((course)=>{
        let code = course.codigo.toString()
        let image = imagesCode[code]
        if(image){
          coursesActives.push(course)
        }
        })
        setAllCourses(coursesActives)
        setCourses(coursesActives.slice(0, 10))
        if(sessionStorage.getItem('coursesSelected')){
          if(JSON.parse(sessionStorage.getItem('coursesSelected').length > 0)){
            setCoursesSelected(JSON.parse(sessionStorage.getItem('coursesSelected')))
          }
        }
      })
    }, [])

    useEffect(()=>{
      for(let i=10;i<=allCourses.length+10;i=i+10){
        indexFor.push(i)
      }
      let dataPagesAll = []
      indexFor.forEach((item)=>{
        dataPagesAll.push(allCourses.slice(item-10, item))
      })
      setTotalPages(indexFor.length)
      setCourses(dataPagesAll[currentPage])
      setInputText('')
      setWaiLoad(true)
    }, [allCourses, currentPage])
    
    let [openCart, setOpenCart] = useState(false);
    let [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
    if(inputText !== ''){
      filteredData = allCourses.filter((el) => {
        if (inputText === '') {
            return el;
        }
        if(el.nome.toLowerCase().includes(inputText)) {
            return el;
        }
        if(el.codigo.includes(inputText)){
          return el;
        }
    })
    }else{
      filteredData = courses
    }
  return (
    <div>
      <Header/>
    <div className='absolute mt-10 w-screen'>
      <div className='min-h-screen'>
        <Title text={`CURSOS SUGERIDOS PARA O ESTADO: ${state}` }>
          <p className='lg:text-xl text-sm text-center justify-center flex flex-wrap items-center font-bold'>
          Selecione o(s) curso(s) <MdCheckBox color='#F6B112' size={35}/> e, ao final, clique na imagem do carrinho de compras<BsArrowRightShort size={35}/><span className='bg-yellow-400 p-1 rounded-full'><BsCart4 size={40}/></span>
          </p>
        </Title>
        <div className="mt-10 lg:mt-0 flex h-full w-full items-center flex-col" >
          <div className="lg:w-1/3 w-2/3">
            <TextField
              value={inputText}
              id="outlined-basic"
              onChange={inputHandler}
              variant="outlined"
              fullWidth
              placeholder='Insira o código ou nome do curso'
              label="Buscar curso"
            />
          </div>
          <div className="hidden">
          </div>
        </div>
        <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <Grid className={`${openCart ? 'fixed flex bg-black bg-opacity-40': 'hidden'} lg:hidden top-0 p-6 justify-center items-center w-full h-screen`}>
          <CoursesSelect openCart={openCart} setOpenCart={setOpenCart} setCoursesSelected={setCoursesSelected} totalPrice={totalPrice} courses={coursesSelected}/>
        </Grid>
        {filteredData.length ?
        <div className='w-full flex-col items-center lg:items-start lg:flex-row flex lg:justify-start justify-center'>
          {
          waitLoad ? 
          <div className='w-full flex justify-center'><CircularProgress size='8rem' />
            <span className='hidden'>{setTimeout(()=>{setWaiLoad()}, 500)}</span>
          </div> 
            : 
            <div className='flex mb-2 flex-col lg:items-start lg:ml-10 items-center'>
                {
                filteredData.map((course, key)=>{
                  let code = course.codigo.toString()
                  let image = imagesCode[code]
                  let content = htmlConveterToReact(course.conteudo)
                      return(
                        <CourseBox inputText={inputText} filteredData={filteredData} currentPage={currentPage} content={content} coursesPerPage={courses} coursesSelected={coursesSelected} key={key} addCourseList={addCourseList} removeCourseList={removeCourseList} image={image} id={course.id} code={course.codigo} title={course.nome} price={course.valor} time={course.cargaHoraria} />
                      )
                  }
                )
              }
            </div>}
          <Grid className='w-fit h-screen items-center lg:flex hidden lg:top-24 absolute'>
            <CoursesSelect setCoursesSelected={setCoursesSelected} totalPrice={totalPrice} courses={coursesSelected}/>
          </Grid>
        </div>
        : !courses.length ? <div className='w-full flex justify-center'><CircularProgress size='8rem' /></div>
        :<div className='w-full flex lg:justify-center mt-10'><p className='text-3xl'>Não encontramos cursos disponíveis!</p><div className='w-fit h-screen items-center lg:flex hidden top-24 absolute'><CoursesSelect setCoursesSelected={setCoursesSelected} totalPrice={totalPrice} courses={coursesSelected}/></div></div>}
        <div onClick={()=>{openCart ? setOpenCart(false) :setOpenCart(true)}} className='bg-yellow-400 block lg:hidden p-3 rounded-full fixed bottom-2 right-5'>
            <BsCart4 size={45}/>
        </div>
        </div>
      <Footer/>
    </div>
    </div>
  )
}
