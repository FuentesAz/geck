async function listarCartas(){
    const conexion = await fetch("http://localhost:3001/cards");

    const conexionConvertida = conexion.json();

    console.log('conexionConvertida')

    return conexionConvertida
}

async function enviarCartas(nombre,precio,url){
    const conexion = await fetch("http://localhost:3001/cards",{
        method:'POST',
        headers: {"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            url:url
        })
    })

    const conexionConvertida = conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video")
    }

    return conexionConvertida;

}

export const conexionAPI = {
    listarCartas, enviarCartas
}

// listarCartas();