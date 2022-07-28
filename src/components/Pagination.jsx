import React from 'react'

export default function Pagination({totalPages ,currentPage, setCurrentPage}) {
  const indexFor = []
  for(let i=1;i<=totalPages;i++){
    indexFor.push(i)
  }
  return (
    <div className='w-full p-4'>
      <ul className='flex text-xl justify-center font-bold'>
        {indexFor.map((index, key)=>{
          return(
            <li key={key} onClick={()=> setCurrentPage(index-1)} className={`${currentPage === index-1 ? 'bg-[#0000FF] text-white' : 'bg-blue-200 text-black'} cursor-pointer lg:mr-5 lg:mt-0 mt-4 mr-2 p-1 rounded-xl pr-3 pl-3`}>{index}</li>
          )
        })}
      </ul>
    </div>
  )
}
