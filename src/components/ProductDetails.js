import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './FetchData.module.css'
const ProductDetails = () => {
    const{id} = useParams() //getting id from route

    const navigate = useNavigate();
    const [data, setData] = useState([]);

    async function  fetchdata(){
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const datas = await response.json();
        
        console.log(datas);
        setData(datas);
    }

    useEffect(()=>{
        fetchdata();
    }, [])

    useEffect(()=>{
        document.body.style.boxSizing = 'border-box';
    
    })

    return ( 
  
            <div key={data.id} className={styles.divforProductDetails}>
                <Link to='/'>
                <button style={{height: "50px", 
                                width: "100px",
                                outline: 0, 
                                border: 0, 
                                color:"black", 
                                cursor: "pointer",
                                backgroundColor: "gainsboro",
                                border: "1px solid black",
                                borderRadius: "2px",
                                cursor: "pointer",
                                }}>
                        Back
                </button>
                </Link>
                <Link to='/' className={styles.Link}><h1>CHIDI'S STORE</h1></Link>
                
                <div className={styles.leftSide}>
                    <p>This high-quality product is crafted with precision and 
                        designed to meet your everyday needs. With its sleek and modern design, 
                        it offers both functionality and style. Made from durable materials, 
                        it ensures longevity and reliability, making it the perfect addition to your collection. 
                        Whether you're using it at home, at work, or on the go, 
                        this product delivers exceptional performance. 
                        Enjoy the perfect blend of comfort, convenience, and innovation, all in one amazing item. 
                        Get yours today and experience the difference for yourself!</p>
                </div>
                <img src={data.image} alt="Prdouct Image" className={styles.imgforProductDetails} />
                <div className={styles.rightSide}>
                    <p style={{textTransform: "uppercase", fontWeight:"bold" }}>{data.title}</p>
                    <p style={{textTransform: "uppercase", fontWeight:"bold" }}>$ {data.price}</p>
                    <p>{data.description}</p>
                    <hr style={{border: "1px solid black"}}/>
                    <p>Rating: {data.rating?.rate}</p>
                    <p>Category: {data.category}</p>
                </div>

            </div> 
    );
}
 
export default ProductDetails;