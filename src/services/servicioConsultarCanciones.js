//receta para consumir APIS con JS puro

//1.si yo puedo consumir un api
//debo saber para donde ir y a que servicio
//DEBO CONFIGURAR LA URI

const URI="https://api.spotify.com/v1/artists/5p1D7KgsRRcS9gpQyRARrL/top-tracks?market=US"

//2. configuri datois especiales o de control en el servidor

const TOKEN="Bearer BQDsJ9ZkUqCE1WRPHq_Y0KrPkoGeXdEqOme-_xSp0cu2k-AFp0fdZaDnk9ZIbpGmpIG35ippHdDilLAVtuYcCc-KWLzqFFJZlPC1E3EOohHFWw6xkk7HUVGjdRdNd53Vnk3fIMr4cdGnnm_y5Z2EE_E6vRc6kmjuevMD_GLCkYBAgcc8aKJ7EfLTGaEl1oko5QE"

//3.configuro la peticion
//NOTA: SOLO POST Y PUT CONFIGURAN BODY
//PARA JS LA PETICION ES UN OBJETO

const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}

//4.SI YA TENGO TODO CONFIGURADO
//CONSUMA EL API

fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})

.then(function(respuesta){
    console.log(respuesta)//hago lo que quiera con respuesta
    console.log(respuesta.tracks) //accedo a un atributo de la respuesta

    //recorrer un arreglo
    respuesta.tracks.forEach(function(cancion){
            console.log(cancion)
            console.log(cancion.name)
            console.log(cancion.preview_url)
            console.log(cancion.album.images[0].url)
            console.log(cancion.popularity)
            console.log(cancion.album.name)
            console.log(cancion.album.release_date)

    })



})
.catch(function(respuestaError){
    console.log(respuestaError)
})