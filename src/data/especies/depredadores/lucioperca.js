
const lucioPerca = {
    value:"lucioperca",
    label:"Lucio Perca",
    img: new URL('../../../assets/especies/lucioperca.jpg', import.meta.url).href,
    habitat: "Embalses profundos, lagos y grandes ríos con aguas claras y oxigenadas. Prefiere estructuras sumergidas y zonas con poca luz.",
    profundidadPorEstacion: {
        primavera: "2–4 m",
        verano: "5–8 m",
        otoño: "4–6 m",
        invierno: "6–10 m"
    },
    ceboRecomendado: ["Vinilos tipo shad", "Jigs con cabeza plomada", "Cucharillas giratorias", "Peces artificiales pequeños", "Peces muertos (en embalses donde se permite)"],
    colorAconsejado: [ "Blanco", "Perla", "Verde", "Plateado"],
    saborAconsejado: [ "No aplica (se usan señuelos artificiales)"],
    actividadEstacional: {
        primavera: "Muy activa tras el desove. Se pesca bien con vinilos cerca del fondo.",
        verano: "Baja a zonas profundas. Pescar lentamente con jigs o peces artificiales pequeños.",
        otoño: "Momento clave para capturas grandes. Muy receptiva a vinilos en caída.",
        invierno: "Poca actividad, pero se puede tentar a profundidad con señuelos muy lentos y realistas."
    }
};

export default lucioPerca;