import React from 'react'
import { useState } from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function ContentInstution() {
    const [textCurrent, setTextCurrent] = useState(1)
    const returnTextCurrent = ()=>{
        switch(textCurrent){
            case 1:
                return(
                    <div>
                        <p>Lorem ipsum dolor sit amet. Non quis quas eos quisquam laboriosam et nobis aspernatur sed esse saepe non quae impedit rem veniam beatae. Nam omnis quae a quasi quaerat ad mollitia omnis. Est praesentium reprehenderit et saepe nostrum et tempora nobis sed animi voluptatem non tempora magnam. </p><p>Ut eaque velit rem aliquam quam eum rerum quibusdam 33 dolorem voluptatibus sit velit iste. Ad cumque voluptate ut asperiores recusandae aut nesciunt natus. </p><p>Aut explicabo tempora ut quaerat nobis et quia rerum non eaque voluptas a impedit doloremque et minus galisum in accusantium necessitatibus. Est ipsum accusamus et exercitationem minima est dicta aperiam qui quisquam culpa. </p>
                    </div>

                )
            case 2:
                return(
                    <div>
                        <p>Lorem ipsum dolor sit amet. Est rerum consequatur a sapiente vitae id adipisci omnis non facere Quis ab possimus ratione et fuga esse. Ut excepturi voluptates rem expedita vero aut itaque dolorum aut illo rerum quo sunt ratione sed dolor iusto non rerum explicabo. Non dolorem cupiditate ut sunt asperiores non nostrum mollitia in molestias rerum in dignissimos ratione aut omnis iste sed adipisci ratione. </p><p>Id eaque voluptates cum esse natus qui distinctio veritatis non consequuntur quia. Sit nesciunt dolorum est obcaecati recusandae sed tenetur corrupti non deserunt odio. </p><p>Eum iure quod et consequatur fugiat ut quae modi. Quo consequatur ducimus 33 temporibus natus ex quaerat eius in iste alias et doloribus veniam id enim nemo. Ut culpa minus ut sequi perferendis eum dolore reiciendis ut ipsa voluptatum et perferendis velit. </p>
                    </div>
                )
            case 3:
                return(
                    <div>
                        <p>Lorem ipsum dolor sit amet. Et impedit corporis quo dolor nobis non numquam delectus id deserunt numquam id natus dolorum et sunt aperiam id unde accusantium. Ut facilis repellendus et aliquam ullam cum cumque exercitationem est voluptas placeat quo excepturi aliquam sit sint iste. </p><p>Et culpa laudantium et vero obcaecati nam sunt soluta cum Quis mollitia sed nesciunt ipsa. Aut similique praesentium ad enim quia et porro sint  totam molestiae qui nisi dolorem. </p><p>Et obcaecati porro ut ducimus veritatis quo cumque fugiat ut autem commodi aut voluptas dolor non mollitia omnis ut tempore veniam. Ad possimus aperiam aut laudantium amet ut modi enim sed magni dolor. </p>
                    </div>
                )
            case 4:
                return(
                    <div>
                        <p>Lorem ipsum dolor sit amet. Ut laboriosam nulla qui magnam autem eos voluptatum voluptatibus sed vero animi. Et quam accusantium  Quis Quis et distinctio minima et nesciunt quaerat sed dolor fuga. Eum quam exercitationem sit assumenda quia aut facilis eveniet eum quia nihil. </p><p>Et modi voluptate et necessitatibus saepe aut dicta pariatur quo iusto labore. Quo rerum voluptatibus ad voluptas sint est nihil numquam aut numquam nesciunt qui culpa deleniti non commodi veritatis eos nihil quia. Eos sint quisquam et itaque laboriosam id odio assumenda hic dolor harum qui expedita saepe aut sapiente alias. </p><p>Cum accusantium harum et praesentium consectetur ut distinctio possimus non reprehenderit distinctio. Non sequi quisquam sed voluptatibus quam qui Quis nobis qui alias quia! Sed laudantium reiciendis rem officiis cumque ea nostrum voluptatem. Ut accusantium asperiores a porro tenetur et consequuntur fuga. </p>
                    </div>
                )
            case 5:
                return(
                    <div>
                        <p>Lorem ipsum dolor sit amet. Quo quas rerum sed nihil tempora et ullam quis et repellat consequatur aut quas corporis At tempore consectetur. Ea numquam repellat At adipisci quia et exercitationem maiores est doloribus accusantium ad autem accusamus. Ut cumque eius et delectus nihil ut consectetur ipsum qui officiis quas nam laborum optio At possimus officia! Eum omnis explicabo hic commodi ducimus ad deserunt sunt aut similique consequuntur eos consequatur corrupti ea vero dolore. </p><p>Ea nihil harum hic dolorum delectus ut dicta molestiae eos repudiandae atque et  ratione ad facere omnis. Ut quisquam accusamus ea debitis dolorum et labore accusantium sed ullam omnis nam adipisci galisum a eveniet labore. Ut totam culpa qui optio itaque aut asperiores aperiam aut fugit ipsum et soluta fuga et repudiandae sapiente ut facere quia. Qui quam magnam et  nostrum ab consequatur alias vel quisquam mollitia sit consectetur omnis. </p><p>In cupiditate dolore quo perspiciatis magni ut reiciendis aliquid At quia magnam quo voluptatem fugiat nam enim exercitationem ut excepturi eius. Qui quia sint aut quis eius et similique accusamus non temporibus tempore est provident doloribus qui voluptas omnis sed necessitatibus reprehenderit. </p>

                    </div>
                )
            default:
                return false
        }
        
    }
  return (
    <div className='w-11/12 lg:w-1/2 h-full ml-5 lg:mt-0 mt-10 flex lg:flex-row flex-col'>
        <div className='justify-between h-72 max-w-xs flex flex-col'>
            <AwesomeButton onPress={()=> setTextCurrent(1)} type='secondary'>OBJETIVO GERAL</AwesomeButton>
            <AwesomeButton onPress={()=> setTextCurrent(2)} type='secondary'>MISSÃO</AwesomeButton>
            <AwesomeButton onPress={()=> setTextCurrent(3)} type='secondary'>META</AwesomeButton>
            <AwesomeButton onPress={()=> setTextCurrent(4)} type='secondary'>CREDENCIAMENTO</AwesomeButton>
            <AwesomeButton onPress={()=> setTextCurrent(5)} type='secondary'>QUEM SOMOS</AwesomeButton>
        </div>

        <div className='px-8 lg:mt-0 mt-10'>
            {returnTextCurrent()}
        </div>
    </div>
  )
}
