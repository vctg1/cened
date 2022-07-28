import React from 'react';
import { useState, useEffect } from 'react';
import { Collapse } from '@mui/material';
import { MdOutlineArrowDropDownCircle } from 'react-icons/md';

export default function BoxInstructions(){
    let [hidden, setHidden] = useState('');
    let [visible, setVisible] = useState(false);
    useEffect(()=>{if(visible){setHidden('');}else{setHidden('hidden');}},[visible])
    return(
        <div className='flex flex-col lg:mt-10'>
                <button onClick={() => {visible ? setVisible(false) : setVisible(true)}} className='lg:absolute mt-4 flex flex-col font-bold bg-[#EBECF0] p-2 pl-6 pr-6 rounded-xl max-w-xs border-gray-400 hover:border-black border-2 self-center lg:max-w-none lg:text-xl lg:ml-10 lg:self-start lg:w-fit'>
                    <p className='flex items-center text-lg'>INSTRUÇÕES &nbsp;<MdOutlineArrowDropDownCircle/></p>
                    <Collapse in={visible}>
                        <div className={`${!visible ? hidden : ''}`}>
                            <ul style={{listStyleType:'square'}} className='list-outside text-sm text-left'>
                                <li>Se já for cadastrado, digite o seu LOGIN e SENHA.</li>
                                <li>Se ainda não for cadastrado, clique em PRIMEIRO ACESSO.</li>
                            </ul>
                        </div>
                    </Collapse>
            </button>
        </div>
    )
}