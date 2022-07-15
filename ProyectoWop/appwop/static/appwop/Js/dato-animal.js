$(document).ready(
    function(){

        $.get("https://zoo-animal-api.herokuapp.com/animals/rand",
            function(data){
                console.log(data);
            $("#contenido-animal").append(`<div id="info"><p class="seccion">Nombre: ${data.latin_name}</p><p class="seccion">Tipo de animal: ${data.animal_type}</p><p class="seccion">Habitat: ${data.habitat}</p><p class="seccion">Esperanza de vida: ${data.lifespan} años</p><p class="seccion">Peso: ${data.weight_max} Libras</p></div><div id="ima"><img class="imagen" src='${data.image_link}'></div>`)
        });
    }
);