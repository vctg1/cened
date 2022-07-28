import React from "react";
import axios from 'axios';
axios.get('http://127.0.0.1:5000/ex')
  .then(response=>console.log(response))
export default function Teste(){
    return(
        <div>

        </div>
    )
}