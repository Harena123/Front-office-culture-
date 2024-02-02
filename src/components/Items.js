import { useState,useEffect } from "react";

function Items(props) {
    const prod = props.produit;
    const image= prod.img[0];
    const [stock, setStock] = useState(1);
    const addToCard = () => {
        if (stock>1)
        {
            setStock(stock-1);
        } 
        else 
        {
            setStock("indisponible");
        }
    };

        return (
            
        <div className="product">
                <p className="prod">Parcelle {prod.id}</p>
                <img src={image} className={` 'large' : 'small'}`} alt="product" />
                <p>Culture : {prod.culture}</p>
                <p>Propriétaire : {prod.propriétaire}</p>
                {/* <p>Stock : {stock}</p> */}
                <button className="btn" onClick={addToCard}>Envoyer un message</button>
        </div>
                    
            );

  }
export default Items;
  
