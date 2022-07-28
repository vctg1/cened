import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { AiFillClockCircle } from "react-icons/ai";
import Card from "react-animated-3d-card";
import { useMediaQuery } from "@material-ui/core";

export default function BoxContact() {
  let stylePC = ""
  let styleMobile = {backgroundColor: '#EBECF0',display:'flex',padding:'4em',alignItems:'center'}
  let isMobile = useMediaQuery('(max-width:1100px)')

  return (
    <div className="p-10 lg:pt-40 gap-5 text-black flex lg:flex-row flex-col items-center justify-between">
        
      <Card style={isMobile?{backgroundColor: '#EBECF0',display:'flex',padding:'1em',alignItems:'center', minWidth:'90vw'}
      :{backgroundColor: '#EBECF0',display:'flex',padding:'4em',alignItems:'center',minWidth:'30vw',maxHeight:'10vh'}} >
          <BsFillTelephoneFill size={50} />
          <div className="text-xl text-center w-full">
            <p>(61) 3369-6366</p>
            <p>(61) 99672-9488</p>
            <p>(61) 99951-8961</p>
          </div>
      </Card>

        
      <Card style={isMobile?{backgroundColor: '#EBECF0',display:'flex',padding:'1em',alignItems:'center', minWidth:'90vw'}
      :{backgroundColor: '#EBECF0',display:'flex',padding:'4em',alignItems:'center',minWidth:'30vw',maxHeight:'10vh'}}>
          <HiMail size={50} />
          <div className="text-center w-full text-xl">
            <p>cenedqualificando@gmail.com</p>
            <p>com cópia para: admcened@gmail.com</p>
          </div>
      </Card>

        
      <Card style={isMobile?{backgroundColor: '#EBECF0',display:'flex',padding:'1em',alignItems:'center', minWidth:'90vw'}
      :{backgroundColor: '#EBECF0',display:'flex',padding:'4em',alignItems:'center',minWidth:'30vw',maxHeight:'10vh'}}>
          <AiFillClockCircle size={50} />
          <div className="text-center w-full text-xl">
            <p>Segunda a sexta, das 8h às 18h.</p>
            <p>Sábados, das 8h às 12h.</p>
          </div>
      </Card>
    </div>
  );
}