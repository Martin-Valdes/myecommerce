const productos = [
    {
        id : "jjddu292",
        modelo:"Fuente de Alimentacion",
        descripcion: "Excelente estado",
        stock:"3",
        precio:"54.323",
        img:"/public/img/fuente-de-poder.jpg"
    },
    {
        id : "jjddu294",
        modelo:"Generador de frecuencia",
        descripcion: "Lo ultimo en tecnologia",
        stock:"30",
        precio:"34.984",
        img:"/public/img/generador-de-frecuencia.jpg"

    },
    {
        id : "jjddu295",
        modelo:"Osciloscopio Portatil",
        descripcion: "Buen rendimiento",
        stock:"2",
        precio:"8.374",
        img:"/public/img/osciloscopio-portatil.jpg"

    },
    {
        id : "jjddu296",
        modelo:"Relay",
        descripcion: "Relay uso general",
        stock:"11",
        precio:"154",
        img:"/public/img/relay.jpg"

    },
    {
        id : "jjddu297",
        modelo:"Resistores 1/2W",
        descripcion: "Resistores varias medidas",
        stock:"1837",
        precio:"1",
        img:"/public/img/resistores.jpg"

    },
    {
        id : "jjddu297",
        modelo:"Estacion Soldadora",
        descripcion: "Temperatura regulable",
        stock:"5",
        precio:"8.734",
        img:"/public/img/soldador.jpg"

    },
    {
        id : "jjddu297",
        modelo:"Switch",
        descripcion: "Bipolar",
        stock:"100",
        precio:"12",
        img:"/public/img/switch.jpg"

    },
    {
        id : "jjddu297",
        modelo:"Tester True RMS",
        descripcion: "Soldaror RMS",
        stock:"4",
        precio:"124.221",
        img:"/public/img/tester.jpg"

    },
    {
        id : "jjddu297",
        modelo:"Transistor Bipolar",
        descripcion: "Transistor TV",
        stock:"34",
        precio:"533",
        img:"/public/img/transistor.jpg"

    }

];
const dataProduct = new Promise((resolve, reject) =>{

    setTimeout(()=>{
        resolve(productos)
    }, 2000);
});

export default dataProduct;