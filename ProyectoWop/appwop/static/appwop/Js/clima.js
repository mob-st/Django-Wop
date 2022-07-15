
window.addEventListener('load',()=>{
   

    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')
    let vientoVelocidad = document.getElementById('viento-velocidad')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion => {
            //console.log(posicion.coords.latitude)
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=02cafd24b11b0d7de503ca8239e77c04`
            fetch(url)
            .then(response=>{return response.json()})
            .then(data=>{
                
                let temp=Math.round(data.main.temp)
                temperaturaValor.textContent=`${temp} ºC`

                let ubi = (data.name)
                ubicacion.textContent=(ubi)

        

                switch(data.weather[0].icon){
                    case'01d':               
                            iconoAnimado.src="{% static 'appwop/Img/weather-icons/day.svg' %}"
                            console.log('Despejado (Dia)');
                        break;
                        case'02d':
                            iconoAnimado.src="{% static 'appwop/Img/weather-icons/cloudy-day-2.svg' %}"
                            console.log('Nublado con sol');
                        break;
                        case'03d':
                            iconoAnimado.src='{% static "appwop/Img/weather-icons/cloudy.svg" %}'
                            console.log('Nublado');
                        break;
                        case'04d':
                            iconoAnimado.src="{% static 'appwop/Img/weather-icons/cloudy.svg' %}"
                            console.log('Nubes rotas');
                        break;
                        case'09d':
                            iconoAnimado.src="{% static 'appwop/Img/weather-icons/rainy-5.svg' %}"
                            console.log('Aguacero');
                        break;
                        case'10d':
                            iconoAnimado.src="{% static 'appwop/Img/weather-icons/rainy-3.svg' %}"
                            console.log('Lluvia');
                        break;
                        case'11d':
                            iconoAnimado.src="{% static 'appwop/Img/weather-icons/thunder.svg' %}"
                            console.log('Truenos');
                        break;
                        case'13d':
                            iconoAnimado.src="{% static 'appwop/Img/weather-icons/snowy-3.svg' %}"
                            console.log('Nevado');
                        break;
                        case'50d':
                            iconoAnimado.src="{% static 'appwop/Img/weather-icons/cloudy.svg' %}"
                            console.log('Niebla');
                        break;
                        case'01n':
                            iconoAnimado.src='{% static "appwop/Img/weather-icons/night.svg" %}'
                            console.log('Noche');
                        break;
                        case'02n':
                            iconoAnimado.src="{% static 'appwop/Img/weather-icons/cloudy-night-2.svg' %}"
                            console.log('Noche Nublada');
                        break;
                        case'03n':
                            iconoAnimado.src=("{% static 'appwop/Img/weather-icons/cloudy.svg' %}")
                            console.log('Nublado noche');
                        break;
                        case'04n':
                            iconoAnimado.src="{% static 'appwop/Img/weather-icons/cloudy.svg' %}"
                            console.log('Nubes rotas noche');
                        break;
                        case'09n':
                            iconoAnimado.src="{% static 'appwop/Img/weather-icons/rainy-5.svg' %}"
                            console.log('Aguacero noche');
                        break;
                        case'10n':
                            iconoAnimado.src="{% static 'appwop/Img/weather-icons/rainy-6.svg' %}"
                            console.log('Lluvia noche');
                        break;
                        case'11n':
                            iconoAnimado.src="{% static 'appwop/Img/weather-icons/thunder.svg' %}"
                            console.log('Truenos noche');
                        break;
                        case'13n':
                            iconoAnimado.src="{% static 'appwop/Img/weather-icons/snowy-6.svg' %}"
                            console.log('Nieve noche');
                        break;
                        case'50n':
                            iconoAnimado.src="{% static 'appwop/Img/weather-icons/cloudy.svg' %}"
                            console.log('Nieblina noche');
                        break;
                        default:
                            iconoAnimado.src="{% static 'appwop/Img/weather-icons/cloudy-day-1.svg' %}"
                            console.log('por defecto');
                }
            })
            .catch(error=>{
                console.log(error)
            })
        })      
    }
})