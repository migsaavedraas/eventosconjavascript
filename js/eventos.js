const subtitle = document.getElementById("subTitleJS");
const subtitle2 = document.getElementById("subTitleJS2");
/*
    ESPERA DE LA
    RESPUESTA DEL API
*/
setTimeout(function(){
    subtitle.textContent = "Gastronomía peruana";
    setTimeout(function(){
        subtitle2.textContent = "Y sus calificaciones";
    }, 1000);
}, 1000);

//arrays de presidentes del peru desde FUJIMORI

const presidentes = [
    {
        "nombre": "Pescado a la chorrillana",
        "periodo": "Mas o menos",
        "anios_gobierno": 5,
        "isCorrupto": true
    },
    /*{
        "nombre": "Olluquito de pollo",
        "periodo": "Mas o menos",
        "anios_gobierno": 5,
        "isCorrupto": true
    },
    {
        "nombre": "Tallarin saltado",
        "periodo": "Mas o menos",
        "anios_gobierno": 5,
        "isCorrupto": true
    },*/
    {
        "nombre": "Tocosh",
        "periodo": "Dislike",
        "anios_gobierno": 5,
        "isCorrupto": true
    },
    {
        "nombre": "Arroz chaufa",
        "periodo": "Muy rico",
        "anios_gobierno": 10,
        "isCorrupto": false
    },
    {
        "nombre": "Arroz con pollo",
        "periodo": "Muy rico",
        "anios_gobierno": 10,
        "isCorrupto": false
    },
    {
        "nombre": "Ceviche",
        "periodo": "Muy rico",
        "anios_gobierno": 10,
        "isCorrupto": false
    },
    {
        "nombre": "Lomo saltado",
        "periodo": "Buenazo",
        "anios_gobierno": 1000,
        "isCorrupto": false
    },
    /*{
        "nombre": "Castillo Pedro",
        "periodo": "2021 - 2022",
        "anios_gobierno": 1,
        "isCorrupto": true
    },
    {
        "nombre": "Boluarte Dina",
        "periodo": "2022 - 2024",
        "anios_gobierno": 2,
        "isCorrupto": false
    }*/
];


const presidenteElement = document.getElementById("presidents");
let contenido = "";
presidentes.forEach(function(presidente) {    
    let claseicon = "corrupto";
    if (presidente.isCorrupto) {
        claseicon = "corrupto";
    } else {
        claseicon = "no-corrupto";
    }
    let cantidadanios = presidente.anios_gobierno + " puntos";
    if (presidente.anios_gobierno == 0) {
        cantidadanios = "No goberno ni un año";
    }
    const template = `
        <div class="presidente">
            <div class="icon icon-${claseicon}"></div>
            <div class="data">
                <h4>${presidente.nombre}</h4>
                <p>Opinión: ${presidente.periodo}</p>
            </div>
            <div class="gobierno">
                ${cantidadanios}
            </div>
        </div>
    `;
    contenido = contenido + template;
});

presidenteElement.innerHTML = contenido;