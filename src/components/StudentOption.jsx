import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai';
import {MdMessage, MdPowerSettingsNew} from 'react-icons/md'
import {HiOutlineDocumentSearch} from 'react-icons/hi';
import {IoDocuments} from 'react-icons/io5'
import {GrCertificate} from 'react-icons/gr'
import {FiEdit} from 'react-icons/fi'
import {BiBarcodeReader} from 'react-icons/bi'
import {RiLockPasswordFill} from 'react-icons/ri'
import {FaDollarSign} from 'react-icons/fa'


export default function StudentOption({id ,text, selected, setSelected}) {
  let ConditionalLink = ({ children, to, condition }) => (!!condition && to)
  ? <Link to={to}>{children}</Link>
  : <>{children}</>;
  return (
      <ConditionalLink to='/' condition={id===10}>
			<button onClick={()=>{id===10 ? sessionStorage.setItem('verified', false): setSelected(id)}} className={`${selected ===id ? 'bg-gray-400' : ''} ${id===0 ? 'text-white bg-[#00008b] cursor-default justify-center text-lg': 'hover:bg-gray-400'} font-bold flex gap-5 items-end bg-gray-300 border-2 border-white transition-colors p-4 rounded-lg w-full`}>
        {id===1 ? <AiFillHome size={25}/>
        :id===2 ? <HiOutlineDocumentSearch size={25}/>
        :id===3 ? <IoDocuments size={25}/>
        :id===4 ? <FaDollarSign size={25}/>
        :id===5 ? <GrCertificate size={25}/>
        :id===6 ? <BiBarcodeReader size={25}/>
        :id===7 ? <MdMessage size={25}/>
        :id===8 ? <RiLockPasswordFill size={25}/>
        :id===9 ? <FiEdit size={25}/>
        :id===10?<MdPowerSettingsNew size={25}/>:''
      }
			{text}
      </button>
      </ConditionalLink>
  )
}
