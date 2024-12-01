const Button = ({setData, children}) => {
    async function handlePriceAscending(){
        const response = await fetch('https://fakestoreapi.com/products');
        const datas = await response.json();
        datas.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        setData(datas);
    }
    async function handlePriceDescending(){
        const response = await fetch('https://fakestoreapi.com/products');
        const datas = await response.json();
        datas.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        setData(datas);
    }
    async function fetchDataByCategory(categoryName){
        const response = await fetch('https://fakestoreapi.com/products');
        const datas = await response.json();
        const eg = [];
        console.log(datas);
        
        for(var i =0; i < datas.length; i++){
            datas.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            if(datas[i].category.toString().toLowerCase() == categoryName){
                eg.push(datas[i])
                console.log(eg)
            }
        }
        setData(eg);
    }
    async function  fetchdata(){
        const response = await fetch('https://fakestoreapi.com/products');
        const datas = await response.json();
        
        console.log(datas);
        setData(datas);
    }
    return ( 
    <button onClick=
    {(e)=> {
        e.preventDefault();
        if(e.target.textContent == "Ascending"){
            handlePriceAscending()
        }
        if(e.target.textContent == "Descending"){
            handlePriceDescending()
        }
        if(e.target.textContent.toString().toLowerCase() == "view all"){
            fetchdata();
        }
        if(e.target.textContent.toString().toLowerCase() == "men's clothing" || 
           e.target.textContent.toString().toLowerCase() == "electronics" ||
           e.target.textContent.toString().toLowerCase() == "jewelery" ||
           e.target.textContent.toString().toLowerCase() == "women's clothing"){
            fetchDataByCategory(e.target.textContent.toString().toLowerCase());
            console.log(e.target.textContent.toString().toLowerCase())
        }
        }
    }>{children}
    </button> );
}
 
export default Button;