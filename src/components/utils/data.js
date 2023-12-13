const productos = [
    {
        id : "jjddu292",
        modelo:"",
        descripcion: "",
        stock:"",
        precio:""

    },
    {
        id : "jjddu292",
        modelo:"",
        descripcion: "",
        stock:"",
        precio:""

    },
    {
        id : "jjddu292",
        modelo:"",
        descripcion: "",
        stock:"",
        precio:""

    },
    {
        id : "jjddu292",
        modelo:"",
        descripcion: "",
        stock:"",
        precio:""

    },
    {
        id : "jjddu292",
        modelo:"",
        descripcion: "",
        stock:"",
        precio:""

    }
];
const dataProduct = new Promise((resolve, reject) =>{

    setTimeout(()=>{
        resolve(productos)
    }, 2000);
});

export default dataProduct;