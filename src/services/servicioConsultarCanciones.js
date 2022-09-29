let URI="https://api.spotify.com/v1/artists/5p1D7KgsRRcS9gpQyRARrL/top-tracks?market=US"

let buscar=document.getElementById("buscar")
buscar.addEventListener("click", function(evento){
    evento.preventDefault()

    let artista=document.getElementById("artista").value 
    console.log(artista)

    URI=`https://api.spotify.com/v1/artists/${artista}/top-tracks?market=US`
    const TOKEN="Bearer BQC3MqNkyie3wz5I7DH6MTwGuWJQJnhOYnQX7k0B2WzlwHE8Rx4OTQxqHiJ5O0gc-gH9B2vmRiaG6z0o7Z2dFwtr72m2-FATE8bvhJk2cN6A2VQete4bvuDxvv_4Lg3-Yei_f4j4rDD6BcNvaoQvhZzyaB4WLBedqVMjvquc_3Wx9R276qQVDcMU7OS13Ki9Moo"

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }
    fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})

.then(function(respuesta){
    console.log(respuesta)//hago lo que quiera con respuesta
    console.log(respuesta.tracks) //accedo a un atributo de la respuesta

    //recorrer un arreglo
    let fila=document.getElementById("fila")
    fila.innerHTML = ""
    respuesta.tracks.forEach(function(cancion){
            /*console.log(cancion)
            console.log(cancion.name)
            console.log(cancion.preview_url)
            console.log(cancion.album.images[0].url)
            console.log(cancion.popularity)
            console.log(cancion.album.name)
            console.log(cancion.album.release_date)*/

            let columna=document.createElement("div")
            columna.classList.add("col")

            let tarjeta=document.createElement("div")
            tarjeta.classList.add("card","h-100","shadow")

            let audio=document.createElement("audio")
            audio.classList.add("w-100")
            audio.setAttribute("controls","controls")
            audio.src=cancion.preview_url

            let imagen=document.createElement("img")
            imagen.classList.add("h-100","w-100","img-fluid")
            imagen.src=cancion.album.images[0].url

            let name=document.createElement("p")
            name.textContent=cancion.album.name

            //padres e hijos
           
            tarjeta.appendChild(imagen)
            tarjeta.appendChild(audio)
            tarjeta.appendChild(name)
            columna.appendChild(tarjeta)
            fila.appendChild(columna)

            


    })



})
.catch(function(respuestaError){
    console.log(respuestaError)
})
    

})


//receta para consumir APIS con JS puro

//1.si yo puedo consumir un api
//debo saber para donde ir y a que servicio
//DEBO CONFIGURAR LA URI


//2. configuri datois especiales o de control en el servidor


//3.configuro la peticion
//NOTA: SOLO POST Y PUT CONFIGURAN BODY
//PARA JS LA PETICION ES UN OBJETO


//4.SI YA TENGO TODO CONFIGURADO
//CONSUMA EL API

