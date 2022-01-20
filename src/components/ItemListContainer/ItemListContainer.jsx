import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({greeting}) =>{

    function onAdd() {
        console.log("Item agregado");
      }

      
  let ItemListArray = [
      {id: 1, 
       nombre: "Ensalada de salmon", 
       descripcion: "Ensalada arroz, nuggets de salmón, palta y queso philadelphia", 
       precio: "$ " + 875, 
       pictureUrl: "https://scontent.fmdz2-2.fna.fbcdn.net/v/t39.30808-6/252756167_2985552225089316_2777107010104562246_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=a26aad&_nc_ohc=hk1prFFhF7UAX-fOb3y&_nc_ht=scontent.fmdz2-2.fna&oh=00_AT_WzsKQvh5ZOIW8973Q4V2gYwnX96FPB5aI06ELeCLxMQ&oe=61EF4B8A"
    },
      {id: 2, 
        nombre: "Combinados de sushi frio x 30", 
        descripcion: "30 piezas de sushi frias variadas", 
        precio: "$ " + 2000, 
        pictureUrl: "https://scontent.fmdz2-2.fna.fbcdn.net/v/t39.30808-6/248433752_2978721119105760_1905014082351746643_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=a26aad&_nc_ohc=9ph6CRxKfw8AX9CapRX&_nc_ht=scontent.fmdz2-2.fna&oh=00_AT9bhSWT4dRGxvh-syOv4vsF4zoHfYnfc--7pjgh-Igj-g&oe=61EF7449"
    },
      {id: 3, 
        nombre: "Combinados de sushi caliente x 30", 
        descripcion: "30 piezas de sushi calientes variadas", 
        precio: "$ " + 2200, 
        pictureUrl: "https://scontent.fmdz2-2.fna.fbcdn.net/v/t1.6435-9/192744490_2864748260503047_2628043971881223741_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=y7lZqjjiF_kAX86JSoI&_nc_ht=scontent.fmdz2-2.fna&oh=00_AT9eq-T77aehiC7eFAc9LMJEt3YrMxMk1yDGrLtH6gvB8Q&oe=621059B0"
    },
      {id: 4, 
        nombre: "Wok de mero y camarones", 
        descripcion: "Cubos de pescado blanco y camarones salteados en zucchinis, portoblello, verdeo y brocoli", 
        precio: "$ " + 1020, 
        pictureUrl: "https://scontent.fmdz2-2.fna.fbcdn.net/v/t1.6435-9/135870105_2755869314724276_4987483540304609151_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a26aad&_nc_ohc=vCO3NSkxvtQAX9dth2D&_nc_ht=scontent.fmdz2-2.fna&oh=00_AT9LXleNvhBRyYM0lPT6TaIa45lU8yDs42omhx3gTK0siQ&oe=62107E63"
    },
      {id: 5, 
        nombre: "Ceviche", 
        descripcion: "Cubos de pescado blanco, salmón fresco y langostinos marinados en limon y cilantro", 
        precio: "$ " + 860, 
        pictureUrl: "https://scontent.fmdz2-2.fna.fbcdn.net/v/t1.6435-9/177620063_2843935465917660_1397122078763909329_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=a26aad&_nc_ohc=gg47Snx0bAUAX9ymXa3&_nc_ht=scontent.fmdz2-2.fna&oh=00_AT8IEGftVzuYRlzGi55ww-wy9oyRsBv0u2l3nuvL1oPyWQ&oe=620F8F3A"
    },
  ]

    const [itemList, setItemList] = useState ([]);

    const traerProductos = new Promise ((resolve, reject) => {
        setTimeout (()=> {
            resolve (ItemListArray);
        }, 2000)
    });

    useEffect(()=>{
        traerProductos.then((res)=>{
            setItemList(res);
        });
    }, []);    

    
return(
        
        <>
           <div className="greetingStyles"> 
                <h1>{greeting}</h1>
           </div>
            
            <div className= "ItemCount">
                {/*<ItemCount stock={5} initial={1} onAdd={onAdd}/>*/}
            </div>
        
            <ItemList itemList={itemList}/>

        </>
    );}


export default ItemListContainer;