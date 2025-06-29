const carpaComun = 
    {
        value: "carpa", 
        label:"Carpa Común",
        habitat:"Embalses y ríos lentos con fondos fangosos o arenosos, rica vegetación y temperatura templada.",
        profundidadPorEstacion: {
            primavera: "1.5–2.5 m",
            verano: "3–4 m",
            otoño: "2–3 m",
            invierno: "3.5–5 m"
        },
        ceboRecomendado: [
            "Maíz Natural", "Boilies", "Pop Ups", "Maíces Artificiales ó Chufas Artificiales","Chufas Naturales"
        ],
        colorAconsejado: ["Amarillo", "Rosa Flúor", "Naranja", "Rojo"],
        saborAconsejado :["Fresa", "Scopex", "Anís", "Krill"],
        actividadEstacional: {
            primavera: "Alta actividad, se acercan a orillas. Buenos resultados con maíz y boilies dulces.",
            verano: "Activa en primeras y últimas horas del día. Pescar más profundo (3-4 m).",
            otoño: "Vuelven a alimentarse intensamente. Boilies especiados funcionan muy bien.",
            invierno: "Actividad muy reducida. Usar cebos muy atractivos, pescando muy despacio en zonas profundas."

        }
    };

const carpaRoyal = 
    {
        value:"carpa-royal", 
        label:"Carpa Royal",
        habitat:"Aguas templadas y tranquilas. Prefiere zonas menos profundas con coberturas naturales.",
        profundidadPorEstacion: {
            primavera: "1 – 2 m",
            verano: "2,5 – 3,5 m",
            otoño: "2 – 3 m",
            invierno: "3 – 4 m"
        },
        ceboRecomendado: [
            "Pop Ups de alta flotabilidad", "Boilies cremosos", "Pellets blandos", "Maíz con dips afrutados"
        ],
        colorAconsejado: ["Blanco", "Amarillo", "Naranja"],
        saborAconsejado :["Banana", "Vainilla", "Scopex Cream"],
        actividadEstacional: {
        "primavera": "Muy activa y confiada. Excelente época para pop ups afrutados.",
        "verano": "Se esconde más. Pescar en sombra, usar cebos flotantes o visibles.",
        "otoño": "Actividad decente si el agua no enfría demasiado. Cebado moderado.",
        "invierno": "Muy poco activa. Boilies pequeños o micro pop ups a fondo, y mucha paciencia."  
        }
    };

const carpaKoi =
    {
    value:"carpa-koi", 
    label:"Carpa Koi",
    habitat: "Aguas tranquilas, cálidas y claras. Frecuente en estanques o aguas privadas.",
    profundidadPorEstacion: {
        primavera: "1–2 m",
        verano: "2–3 m",
        otoño: "1.5–2.5 m",
        invierno: "2.5–4 m"
    },
    ceboRecomendado: ["Pellets pequeños flotantes", "Boilies suaves de fruta", "Maíz dulce"],
    colorAconsejado: ["Blanco", "Rosa", "Naranja"],
    saborAconsejado: ["Melocotón", "Tutti Frutti", "Fresa suave"],
    actividadEstacional: {
        primavera: "Muy activa. Fácil de engañar con colores suaves y cebos dulces.",
        verano: "Baja a zonas más profundas si el agua se calienta demasiado.",
        otoño: "Aprovecha el cambio de temperatura para alimentarse.",
        invierno: "Muy inactiva. Se queda cerca del fondo. Usar pellets suaves o boilies mini."
    }
    };

const carpas = [carpaComun, carpaRoyal, carpaKoi]


export default carpas;
export {carpaComun, carpaRoyal, carpaKoi};