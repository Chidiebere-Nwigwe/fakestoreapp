import styles from './FetchData.module.css';
import Button from "./Button";

const Header = ({setData}) => {
    return ( 

        <div className={styles.headerDiv}>
            <div className={styles.headerSecondDiv}>
                <div className={styles.header}>
                    <h1>CHIDI'S STORE</h1>
                </div>
                <Button  setData={setData}>View All</Button>
                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>Price</button>
                    <div className={styles.dropdownContent}>
                        <Button setData={setData}>
                            <a href="">Ascending</a>
                            <a href="">Descending</a>
                        </Button>
                        </div>
                </div>
                        <Button  setData={setData}>Men's Clothing</Button>
                        <Button setData={setData} >Jewelery</Button>
                        <Button  setData={setData}>Electronics</Button>
                        <Button  setData={setData}>Women's Clothing</Button>
                
            </div>
        </div>
 
);
}
 
export default Header;