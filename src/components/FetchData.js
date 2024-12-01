import { useEffect, useState } from "react";
import styles from './FetchData.module.css';
import Header from "./Header";
import { useNavigate, Link } from "react-router-dom";

const FetchData = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    async function  fetchdata(){
        const response = await fetch('https://fakestoreapi.com/products');
        const datas = await response.json();
        
        console.log(datas);
        setData(datas);
    }

    useEffect(()=>{
        fetchdata();
    }, [])

    return ( 
    <div>
        <Header setData={setData} />
        <div className={styles.container}>
        {        
            data.map((product)=>(
                <div key={product.id} className={styles.imgDiv}>
                    <Link to={`/products/${product.id}`} className={styles.link}>
                        <div >
                        <img src={product.image} alt="Product Image" className={styles.img}/>
                        </div>
                        <div className={styles.details}>
                            <p className={styles.title}>{product.title.toUpperCase()}</p>
                            <p className={styles.price}>$ {product.price}</p> 
                            <p className={styles.category}>Category: {product.category}</p>                       
                        </div>
                    </Link>
                </div>                      
            ))
        }  
        </div>
    </div>
   );
}
 
export default FetchData;