  // Permitir sólo números en el imput
  function isNumber(evt) {
    var charCode = evt.which ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode === 75) return false;
  
    return true;
  }
  
  function checkRut(rut) {
    // Despejar Puntos
    var valor = rut.value.replace('.','');
    // Despejar Guión
    valor = valor.replace('-','');
    
    // Aislar Cuerpo y Dígito Verificador
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    
    // Formatear RUN
    rut.value = cuerpo + '-'+ dv
    
    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}
    
    // Calcular Dígito Verificador
    suma = 0;
    multiplo = 2;
    
    // Para cada dígito del Cuerpo
    for(i=1;i<=cuerpo.length;i++) {
    
        // Obtener su Producto con el Múltiplo Correspondiente
        index = multiplo * valor.charAt(cuerpo.length - i);
        
        // Sumar al Contador General
        suma = suma + index;
        
        // Consolidar Múltiplo dentro del rango [2,7]
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
  
    }
    
    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if(dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); return false; }
    
    // Si todo sale bien, eliminar errores (decretar que es válido)
    rut.setCustomValidity('');
  }


$(document).ready(function leer (){
  $("#alertaExito").hide();    
  $("#alertaNombre").hide();
  var mensaje = "";
  $("#alertaNombre").html(mensaje);
  $("#alertaExito").html(mensaje);

  $("#formulario").submit(function(){
   
    if ($("#nombres").val().trim().length == 0) {
        $("#alertaExito").hide();
        $("#alertaNombre").hide();
        mensaje = "Debe ingresar sus nombres";
        $("#alertaNombre").html(mensaje);
        $("#alertaNombre").show();
        event.preventDefault();
        $('body, html').animate({
            scrollTop: '0px'
        }, 0);

    } else if ($("#apellidos").val().trim().length == 0){
        $("#alertaExito").hide();
        $("#alertaNombre").hide();
        mensaje = "Debe ingresar sus Apellido";
        $("#alertaNombre").html(mensaje);
        $("#alertaNombre").show();
        event.preventDefault();
        $('body, html').animate({
            scrollTop: '0px'
        }, 0);

    }else if ($("#ciudad").val().trim().length == 0){
        $("#alertaExito").hide();
        $("#alertaNombre").hide();
        mensaje = "Debe ingresar una Ciudad";
        $("#alertaNombre").html(mensaje);
        $("#alertaNombre").show();
        event.preventDefault();
        $('body, html').animate({
            scrollTop: '0px'
        }, 0);

    }else if ($("#correo").val().trim().length == 0){
        $("#alertaExito").hide();
        $("#alertaNombre").hide();
        mensaje = "Debe ingresar un Correo";
        $("#alertaNombre").html(mensaje);
        $("#alertaNombre").show();
        event.preventDefault();
        $('body, html').animate({
            scrollTop: '0px'
        }, 0);

    }else if ($("#rut").val().trim().length == 0){
        $("#alertaExito").hide();
        $("#alertaNombre").hide();
        mensaje = "Debe ingresar una Identificacion (RUT)";
        $("#alertaNombre").html(mensaje);
        $("#alertaNombre").show();
        event.preventDefault();
        $('body, html').animate({
            scrollTop: '0px'
        }, 0);

    }else if ($("#comentario").val().trim().length < 50){
        $("#alertaExito").hide();
        $("#alertaNombre").hide();
        mensaje = "Debe ingresar un comentario con almenos 50 caracteres";
        $("#alertaNombre").html(mensaje);
        $("#alertaNombre").show();
        event.preventDefault();
        $('body, html').animate({
            scrollTop: '0px'
        }, 0);

    }
 })
$("#limpiar").click(function(){
    $("#alertaNombre").hide();
})
});