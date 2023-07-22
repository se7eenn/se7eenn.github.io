this.logueado = false;
$("#Entrada").click(function(){
    if($("#usuario").val() == "Admin" && $("#contraseña").val() == '12300'){
        logueado = true;
        if(logueado == true){
            window.location = 'index formulario.html'
            swal.fire('Inicio de Sesion Correcto')
        }
    }
    else{
        swal.fire('Usuario o Contraseña Incorrecto');
    }
});
