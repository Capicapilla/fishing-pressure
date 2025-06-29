//Barbos

const barboComun = {
    value:"barbo-comun", 
    label:"Barbo Común",
    img: new URL('../../../assets/especies/barbo-comun.webp', import.meta.url).href,
    habitat: "Ríos de corriente media a fuerte, con fondos de grava o piedras. Presente en aguas oxigenadas y limpias.",
    profundidadPorEstacion: {
        "primavera": "1–2 m",
        "verano": "2–3 m",
        "otoño": "1.5–2.5 m",
        "invierno": "2.5–4 m"
    },
    ceboRecomendado: ["Lombriz", "Queso", "Masilla", "Maíz cocido", "Gusano de tierra"],
    colorAconsejado: [ "Natural", "Amarillo"],
    saborAconsejado: ["Queso", "Ajo", "Tuna"],
    actividadEstacional: {
        primavera: "Alta actividad. Comienza a alimentarse activamente. Muy receptivo a lombriz y queso.",
        verano: "Activo en zonas con oxigenación. Pescar a más profundidad, cebos naturales funcionan bien.",
        otoño: "Aún activo, busca alimento de fondo. Ideal el maíz o gusano.",
        invierno: "Actividad muy baja. Usar cebos pequeños y naturales, como gusano o pasta."
    }
};

const barboComizo = {
    value:"barbo-comizo",
    label:"Barbo Comizo",
    img: new URL('../../../assets/especies/barbo-comizo.webp', import.meta.url).href,

    habitat: "Grandes ríos o embalses con fondo duro y cierta profundidad. Suele moverse en grupos.",
    profundidadPorEstacion: {
        primavera: "1–2 m",
        verano: "2.5–3.5 m",
        otoño: "2–3 m",
        invierno: "3–5 m"
    },
    ceboRecomendado: ["Gusano","Chironomidos", "Queso", "Chufa", "Boilies Cárnicos"],
    colorAconsejado: ["Marrón", "Rojo oscuro" ],
    saborAconsejado: ["Hígado", "Cangrejo", "Queso fuerte", "Tuna"],
    actividadEstacional: {
        primavera: "Muy activo. Se alimenta bien en zonas medias con gusano y boilies suaves.",
        verano: "Poca profundidad durante la mañana. Busca alimento en grupos.",
        otoño: "Buen momento para boilies cárnicos y gusanos grandes.",
        invierno: "Solo activo en las horas de sol. Usar cebos muy atractivos, cerca del fondo."
    }
};

const barboGitano = {
    value:"barbo-gitano",
    label:"Barbo Gitano",
    img: new URL('../../../assets/especies/barbo-gitano.webp', import.meta.url).href,
    habitat: "Ríos y embalses del sur peninsular, aguas cálidas, fondo pedregoso o mixto.",
    profundidadPorEstacion: {
        primavera: "1–1.5 m",
        verano: "2–2.5 m",
        otoño: "1.5–2 m",
        invierno: "2.5–4 m"
    },
    ceboRecomendado: ["Gusano de tierra", "Maíz con ajo", "Masilla", "Bolas de pan con aromas", "Maíz artificial con sabor intenso"],
    colorAconsejado: ["Amarillo", "Natural", "Blanco"],
    saborAconsejado: ["Ajo","Queso suave"],
    actividadEstacional: {
        primavera: "Activos en zonas someras. Muy sensibles a cebos naturales.",
        verano: "Evita el sol directo. Pescar en sombra, usar cebos llamativos.",
        otoño: "Se mantiene activo. Ideal con masillas o bolas de pan.",
        invierno: "Disminuye mucho la actividad. Pescas lentas, cebos blandos."
    }
};

const barbos = [barboComun, barboComizo, barboGitano];

export default barbos;
export {barboComun, barboComizo, barboGitano}; 