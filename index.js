const $botonAgregar = document.querySelector('#ingresar');
const $botonCalcular = document.querySelector('#calcular'); 
let horasTotales = 0;
let minutosTotales = 0;
let segundosTotales = 0;
$botonAgregar.onclick = function(){
    horasTotales += Number(document.querySelector('#horas-video').value);
    minutosTotales += Number(document.querySelector('#minutos-video').value);
    segundosTotales += Number(document.querySelector('#segundos-video').value);
    // Las lineas 11 a 13 remueven los valores ingresados en el formulario.
    document.querySelector('#horas-video').value = ""; 
    document.querySelector('#minutos-video').value = "";
    document.querySelector('#segundos-video').value = "";
    return;
}
function convertirTiempo (){
    segundosTotales += horasTotales * 3600;
    segundosTotales += minutosTotales *60;
    return segundosTotales;
}
$botonCalcular.onclick = function(){
    convertirTiempo(horasTotales,minutosTotales,segundosTotales);
    horasTotales = Math.floor(segundosTotales / 3600);
    minutosTotales = Math.floor((segundosTotales % 3600) / 60);
    segundosTotales = segundosTotales % 60;
    document.querySelector('#resultado').innerText = `La duración total es de ${horasTotales} horas, ${minutosTotales} minutos con ${segundosTotales} segundos.`
    return false;
}
