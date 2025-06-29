
const especies = [

    


    



    //CARPA KOI
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

    },
    
    { //Barco Común
        value:"barbo", 
        label:"Barbo Común",
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
    },


    { //Barbo comizo
        value:"barbo-comizo",
        label:"Barbo Comizo",
        habitat: "Grandes ríos o embalses con fondo duro y cierta profundidad. Suele moverse en grupos.",
        profundidadPorEstacion: {
            primavera: "1–2 m",
            verano: "2.5–3.5 m",
            otoño: "2–3 m",
            invierno: "3–5 m"
        },
        ceboRecomendado: ["Gusano","Chironomidos", "Queso", "Chufa", "Boilies Cárnicos"],
        colorAconsejado: ["Marrón", "Rojo oscuro" ],
        saborConsejado: ["Hígado", "Cangrejo", "Queso fuerte", "Tuna"],
        actividadEstacional: {
            primavera: "Muy activo. Se alimenta bien en zonas medias con gusano y boilies suaves.",
            verano: "Poca profundidad durante la mañana. Busca alimento en grupos.",
            otoño: "Buen momento para boilies cárnicos y gusanos grandes.",
            invierno: "Solo activo en las horas de sol. Usar cebos muy atractivos, cerca del fondo."
        }
    },
    { 
        value:"barbo-gitano",
        label:"Barbo Gitano",
        habitat: "Ríos y embalses del sur peninsular, aguas cálidas, fondo pedregoso o mixto.",
        profundidadPorEstacion: {
            primavera: "1–1.5 m",
            verano: "2–2.5 m",
            otoño: "1.5–2 m",
            invierno: "2.5–4 m"
        },
        ceboRecomendado: ["Gusano de tierra", "Maíz con ajo", "Masilla", "Bolas de pan con aromas", "Maíz artificial con sabor intenso"],
        colorAconsejado: ["Amarillo", "Natural", "Blanco"],
        saborAConsejado: ["Ajo","Queso suave"],
        actividadEstacional: {
        primavera: "Activos en zonas someras. Muy sensibles a cebos naturales.",
        verano: "Evita el sol directo. Pescar en sombra, usar cebos llamativos.",
        otoño: "Se mantiene activo. Ideal con masillas o bolas de pan.",
        invierno: "Disminuye mucho la actividad. Pescas lentas, cebos blandos."
        }
    },


    {//LUCIO
        value:"lucio",
        label:"Lucio",
        habitat: "Embalses, lagos y ríos de corriente lenta, con abundante vegetación sumergida y aguas frías o templadas.",
        profundidadPorEstacion: {
            primavera: "1.5–3 m",
            verano: "3–5 m",
            otoño: "2–4 m",
            invierno: "4–6 m"
        },
        ceboRecomendado: [
            "Vinilos articulados", "Spinnerbaits", "Jerkbaits", "Peces artificiales grandes", "Cucharillas ondulantes"
        ],
        colorConsejado: ["Verde", "Plateado", "Blanco", "Rojo"],
        saborConsejado: ["No aplica (se usan señuelos artificiales)"],
        actividadEstacional: {
            primavera: "Activos tras el desove. Cazan en zonas medias y someras. Usar jerkbaits o vinilos grandes.",
            verano: "Bajan a zonas más profundas por el calor. Señuelos lentos, presentaciones profundas.",
            otoño: "Muy activos. Se preparan para el frío. Excelente época para capturas grandes.",
            invierno: "Menor actividad, pero posible pesca profunda con vinilos grandes o cucharas lentas."
        }

    },

    { //LUCIO PERCA
        value:"lucioperca",
        label:"Lucio Perca",
        habitat: "Embalses profundos, lagos y grandes ríos con aguas claras y oxigenadas. Prefiere estructuras sumergidas y zonas con poca luz.",
        profundidadPorEstacion: {
            primavera: "2–4 m",
            verano: "5–8 m",
            otoño: "4–6 m",
            invierno: "6–10 m"
        },
        ceboRecomendado: [
            "Vinilos tipo shad", "Jigs con cabeza plomada", "Cucharillas giratorias", "Peces artificiales pequeños", "Peces muertos (en embalses donde se permite)"
        ],
        colorConsejado: [ "Blanco", "Perla", "Verde", "Plateado"],
        saborConsejado: [ "No aplica (se usan señuelos artificiales)"],
        actividadEstacional: {
            primavera: "Muy activa tras el desove. Se pesca bien con vinilos cerca del fondo.",
            verano: "Baja a zonas profundas. Pescar lentamente con jigs o peces artificiales pequeños.",
            otoño: "Momento clave para capturas grandes. Muy receptiva a vinilos en caída.",
            invierno: "Poca actividad, pero se puede tentar a profundidad con señuelos muy lentos y realistas."
        }
    },

    {//BLACK BASS
        value:"blackbass",
        label:"Black Bass",
        habitat: "Embalses, lagunas y ríos lentos con cobertura vegetal, estructuras sumergidas y aguas templadas. Le gusta ocultarse en sombra o cerca de obstáculos.",
        profundidadPorEstacion: {
            primavera: "1–2.5 m",
            verano: "2–4 m",
            otoño: "1.5–3 m",
            invierno: "3–5 m"
        },
        ceboRecomendado: ["Crankbaits", "Vinilos tipo worm o creature", "Spinnerbaits", "Jigs con trailer", "Popper (en superficie)"],
        colorConsejado: ["Verde", "Watermelon", "Negro", "Blanco"],
        saborConsejado: ["No aplica (se usan señuelos artificiales)"],
        actividadEstacional: {
            primavera: "Muy activo durante la freza. Reacciona bien a señuelos de superficie y vinilos blandos.",
            verano: "Pescar temprano o al atardecer. Se refugia del calor en sombra o estructuras.",
            otoño: "Gran época para capturas. Responde bien a crankbaits y spinnerbaits.",
            invierno: "Menos activo. Usar jigs lentos o vinilos con movimientos sutiles cerca del fondo."
        }
    },
    { //SILURO
        value:"siluro",
        label:"Siluro",
        habitat: "Grandes ríos y embalses con aguas profundas, turbias y cálidas. Frecuente en el Ebro y sus afluentes; En Auge en río Guadalquivir. Suele descansar en el fondo o junto a estructuras sumergidas.",
        profundidadPorEstacion: {
            primavera: "2–5 m",
            verano: "5–10 m",
            otoño: "4–8 m",
            invierno: "8–15 m"
        },
        ceboRecomendado: ["Pellets gigantes", "Señuelos grandes (vinilos, jerkbaits)", "Trozo de pez muerto", "Cebo vivo (donde esté permitido)", "Bolas de carne o hígado"],
        colorConsejado: ["Negro", "Rojo oscuro", "Verde oscuro"],
        saborConsejado: ["Sangre", "Hígado","Pescado fuerte"],
        actividadEstacional: {
            primavera: "Aumenta su actividad con la subida de temperaturas. Pescar cerca del fondo con pellets o carnadas.",
            verano: "Muy activo en noches cálidas. Excelente para pesca nocturna con cebos grandes.",
            otoño: "Continúa alimentándose intensamente. Buen momento para peces artificiales grandes.",
            invierno: "Actividad reducida. Se refugia en profundidades. Usar cebos potentes y pescas muy lentas."
        }
    },


    { //TRUCHA
        value:"trucha",
        label:"Trucha Común",
        habitat: "Ríos y arroyos de aguas frías, oxigenadas y corrientes rápidas. Prefiere fondos de grava y sombra natural.",
        profundidadPorEstacion: {
            primavera: "0.5–1.5 m",
            verano: "1–2 m",
            otoño: "0.5–1.5 m",
            invierno: "1.5–2.5 m"
        },
        ceboRecomendado: ["Moscas secas y ninfas (pesca a mosca)", "Cucharillas pequeñas", "Peces artificiales pequeños", "Lombriz natural", "Huevas artificiales"],
        colorConsejado: ["Plateado", "Marrón", "Rojo", "Verde oliva"],
        saborConsejado: ["No aplica (se usan señuelos artificiales o naturales)"],
        actividadEstacional: {
            primavera: "Muy activa tras el deshielo. Excelente época para moscas y cucharillas.",
            verano: "Activa al amanecer y atardecer. Prefiere zonas sombreadas.",
            otoño: "Buena época para peces artificiales pequeños. Aumenta su actividad antes del frío.",
            invierno: "Actividad muy reducida. Pesca lenta con señuelos discretos o lombriz en pozas profundas."
        }
    },

]

export default especies;