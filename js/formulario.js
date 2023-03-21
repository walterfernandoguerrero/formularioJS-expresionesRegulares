//capturar el formulario
const formulario = document.getElementById("formulario");
//crear un objeto de expreciones regulares
const expresiones ={
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, //las barras indican que es una expresion regular
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ 
};
const campos={
    usuario:false,
    nombre:false,
    password:false,
    correo:false,
    telefono:false
};


 //funciones de validacion de datos
 const validarUsuario = (evento) => { //validadr si coinside con la expresion
    //usuario
    if (expresiones.usuario.test(evento.target.value)) {
        //dato correcto
        console.log('coorecto');

        document.getElementById('grupo_usuario').classList.remove('formulario_grupo_incorrecto');
        document.querySelector('#grupo_usuario i').classList.remove('formulario_validacion_estado_activo');
        document.querySelector('#grupo_usuario .formulario_input_error').classList.remove('formulario_input_error_activo');
        document.querySelector('#grupo_usuario i').classList.remove('fa-times-circle');

        document.getElementById('grupo_usuario').classList.add('formulario_grupo_correcto');
        document.querySelector('#grupo_usuario i').classList.add('formulario_validacion_estado_activo');
        document.querySelector('#grupo_usuario i').classList.add('fa-check-circle');
        
        campos.usuario=true;
    }
    else
    {
        //dato incorrecto
        console.log('innnnncoorecto');
        document.getElementById('grupo_usuario').classList.remove('formulario_grupo_correcto');
        document.querySelector('#grupo_usuario i').classList.remove('formulario_validacion_estado_activo');
        document.querySelector('#grupo_usuario i').classList.remove('fa-check-circle');
        
        document.getElementById('grupo_usuario').classList.add('formulario_grupo_incorrecto');
        document.querySelector('#grupo_usuario i').classList.add('formulario_validacion_estado_activo');
        document.querySelector('#grupo_usuario .formulario_input_error').classList.add('formulario_input_error_activo');
        document.querySelector('#grupo_usuario i').classList.add('fa-times-circle');

        campos.usuario=false;
    }
    
 };
//funcion validar nombre
 const validarNombre = (evento) => { //validadr si coinside con la expresion
   
    if (expresiones.nombre.test(evento.target.value)) {
        //dato correcto
        console.log('coorecto');

        document.getElementById('grupo_nombre').classList.remove('formulario_grupo_incorrecto');
        document.querySelector('#grupo_nombre i').classList.remove('formulario_validacion_estado_activo');
        document.querySelector('#grupo_nombre .formulario_input_error').classList.remove('formulario_input_error_activo');
        document.querySelector('#grupo_nombre i').classList.remove('fa-times-circle');

        document.getElementById('grupo_nombre').classList.add('formulario_grupo_correcto');
        document.querySelector('#grupo_nombre i').classList.add('formulario_validacion_estado_activo');
        document.querySelector('#grupo_nombre i').classList.add('fa-check-circle');
        
        campos.nombre=true;
    }
    else
    {
        //dato incorrecto
        console.log('innnnncoorecto');
        document.getElementById('grupo_nombre').classList.remove('formulario_grupo_correcto');
        document.querySelector('#grupo_nombre i').classList.remove('formulario_validacion_estado_activo');
        document.querySelector('#grupo_nombre i').classList.remove('fa-check-circle');
        
        document.getElementById('grupo_nombre').classList.add('formulario_grupo_incorrecto');
        document.querySelector('#grupo_nombre i').classList.add('formulario_validacion_estado_activo');
        document.querySelector('#grupo_nombre .formulario_input_error').classList.add('formulario_input_error_activo');
        document.querySelector('#grupo_nombre i').classList.add('fa-times-circle');
        campos.nombre=false;
    }
    
 };

 //funcion validar Password
 const validarPassword = (evento) => { //validadr si coinside con la expresion
   
    if (expresiones.password.test(evento.target.value)) {
        //dato correcto
        console.log('coorecto');

        document.getElementById('grupo_password').classList.remove('formulario_grupo_incorrecto');
        document.querySelector('#grupo_password i').classList.remove('formulario_validacion_estado_activo');
        document.querySelector('#grupo_password .formulario_input_error').classList.remove('formulario_input_error_activo');
        document.querySelector('#grupo_password i').classList.remove('fa-times-circle');

        document.getElementById('grupo_password').classList.add('formulario_grupo_correcto');
        document.querySelector('#grupo_password i').classList.add('formulario_validacion_estado_activo');
        document.querySelector('#grupo_password i').classList.add('fa-check-circle');
        
        campos.password=true;
    }
    else
    {
        //dato incorrecto
        console.log('innnnncoorecto');
        document.getElementById('grupo_password').classList.remove('formulario_grupo_correcto');
        document.querySelector('#grupo_password i').classList.remove('formulario_validacion_estado_activo');
        document.querySelector('#grupo_password i').classList.remove('fa-check-circle');
        
        document.getElementById('grupo_password').classList.add('formulario_grupo_incorrecto');
        document.querySelector('#grupo_password i').classList.add('formulario_validacion_estado_activo');
        document.querySelector('#grupo_password .formulario_input_error').classList.add('formulario_input_error_activo');
        document.querySelector('#grupo_password i').classList.add('fa-times-circle');
        campos.password=false;
    }
    validarPassword2();
 };

 //funcion validar Password
 const validarCorreo= (evento) => { //validadr si coinside con la expresion
   
    if (expresiones.correo.test(evento.target.value)) {
        //dato correcto
        console.log('coorecto');

        document.getElementById('grupo_correo').classList.remove('formulario_grupo_incorrecto');
        document.querySelector('#grupo_correo i').classList.remove('formulario_validacion_estado_activo');
        document.querySelector('#grupo_correo .formulario_input_error').classList.remove('formulario_input_error_activo');
        document.querySelector('#grupo_correo i').classList.remove('fa-times-circle');

        document.getElementById('grupo_correo').classList.add('formulario_grupo_correcto');
        document.querySelector('#grupo_correo i').classList.add('formulario_validacion_estado_activo');
        document.querySelector('#grupo_correo i').classList.add('fa-check-circle');
        
        campos.correo=true;
    }
    else
    {
        //dato incorrecto
        console.log('innnnncoorecto');
        document.getElementById('grupo_correo').classList.remove('formulario_grupo_correcto');
        document.querySelector('#grupo_correo i').classList.remove('formulario_validacion_estado_activo');
        document.querySelector('#grupo_correo i').classList.remove('fa-check-circle');
        
        document.getElementById('grupo_correo').classList.add('formulario_grupo_incorrecto');
        document.querySelector('#grupo_correo i').classList.add('formulario_validacion_estado_activo');
        document.querySelector('#grupo_correo .formulario_input_error').classList.add('formulario_input_error_activo');
        document.querySelector('#grupo_correo i').classList.add('fa-times-circle');
        campos.correo=false;
    }
    
 };

 const validarTelefono= (evento) => { //validadr si coinside con la expresion
   
    if (expresiones.telefono.test(evento.target.value)) {
        //dato correcto
        console.log('coorecto');

        document.getElementById('grupo_telefono').classList.remove('formulario_grupo_incorrecto');
        document.querySelector('#grupo_telefono i').classList.remove('formulario_validacion_estado_activo');
        document.querySelector('#grupo_telefono .formulario_input_error').classList.remove('formulario_input_error_activo');
        document.querySelector('#grupo_telefono i').classList.remove('fa-times-circle');

        document.getElementById('grupo_telefono').classList.add('formulario_grupo_correcto');
        document.querySelector('#grupo_telefono i').classList.add('formulario_validacion_estado_activo');
        document.querySelector('#grupo_telefono i').classList.add('fa-check-circle');
        
        campos.telefono=true;
    }
    else
    {
        //dato incorrecto
        console.log('innnnncoorecto');
        document.getElementById('grupo_telefono').classList.remove('formulario_grupo_correcto');
        document.querySelector('#grupo_telefono i').classList.remove('formulario_validacion_estado_activo');
        document.querySelector('#grupo_telefono i').classList.remove('fa-check-circle');
        
        document.getElementById('grupo_telefono').classList.add('formulario_grupo_incorrecto');
        document.querySelector('#grupo_telefono i').classList.add('formulario_validacion_estado_activo');
        document.querySelector('#grupo_telefono .formulario_input_error').classList.add('formulario_input_error_activo');
        document.querySelector('#grupo_telefono i').classList.add('fa-times-circle');

        campos.telefono=false;
    }
    
 };

 //validar los pasword

 const validarPassword2 = (evento) =>{
    if(inputPassword2.value==inputPassword.value)
    {
        document.getElementById('grupo_password2').classList.remove('formulario_grupo_incorrecto');
        document.querySelector('#grupo_password2 i').classList.remove('formulario_validacion_estado_activo');
        document.querySelector('#grupo_password2 .formulario_input_error').classList.remove('formulario_input_error_activo');
        document.querySelector('#grupo_password2 i').classList.remove('fa-times-circle');

        document.getElementById('grupo_password2').classList.add('formulario_grupo_correcto');
        document.querySelector('#grupo_password2 i').classList.add('formulario_validacion_estado_activo');
        document.querySelector('#grupo_password2 i').classList.add('fa-check-circle');
        
        campos.password=true;
    }
    else
    {
        console.log('innnnncoorecto');
        document.getElementById('grupo_password2').classList.remove('formulario_grupo_correcto');
        document.querySelector('#grupo_password2 i').classList.remove('formulario_validacion_estado_activo');
        document.querySelector('#grupo_password2 i').classList.remove('fa-check-circle');
        
        document.getElementById('grupo_password2').classList.add('formulario_grupo_incorrecto');
        document.querySelector('#grupo_password2 i').classList.add('formulario_validacion_estado_activo');
        document.querySelector('#grupo_password2 .formulario_input_error').classList.add('formulario_input_error_activo');
        document.querySelector('#grupo_password2 i').classList.add('fa-times-circle');
        campos.password=false;
    }
    
 };

 //capturar el input 
//controlar cuando suelto una tecla
const inputUsuario = document.getElementById('usuario');
const inputNombre = document.getElementById('nombre');
const inputPassword = document.getElementById('password');
const inputPassword2= document.getElementById('password2');
const inputCorreo = document.getElementById('correo');
const inputTelefono = document.getElementById('telefono');
const inputTerminos = document.getElementById('terminos');

//controlar el evento
//addEventListener agrega eventos
formulario.addEventListener('submit', (evento)=>{
   evento.preventDefault();  
   console.log("se capturo el envio");    //no enviar 
   if (campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && inputTerminos.checked) 
   {
        //todos estan bien
        console.log("valido")
        document.getElementById('formulario_mensaje_exito').classList.add('formulario_mensaje_exito_activo');

        setTimeout(()=>{
            document.getElementById('formulario_mensaje_exito').classList.remove('formulario_mensaje_exito_activo');
        }, 5000);
        //una forma de limpiar las cajas
        formulario.reset();
        
        //agarrar todas las etiiquetas " i" 
        const iconos = document.querySelectorAll('i');

        iconos.forEach((icono) => {
            icono.classList.remove('formulario_validacion_estado_activo')
            console.log('borrar')
        });
    }
   else
   {
    document.getElementById('formulario_mensaje').classList.add('formulario_mensaje_activo')

    setTimeout(()=>{
        document.getElementById('formulario_mensaje').classList.remove('formulario_mensaje_activo')
    }, 5000);

    console.log("error")
   }
}
);

//eventos
//cuando apreto teclas
inputUsuario.addEventListener('keyup', validarUsuario);
inputNombre.addEventListener('keyup', validarNombre);
inputPassword.addEventListener('keyup', validarPassword);
inputPassword2.addEventListener('keyup', validarPassword2);
inputCorreo.addEventListener('keyup', validarCorreo);
inputTelefono.addEventListener('keyup', validarTelefono);
//cuando sale de foco
inputUsuario.addEventListener('blur', validarUsuario );
inputNombre.addEventListener('blur', validarNombre );
inputPassword.addEventListener('blur', validarPassword );
inputPassword2.addEventListener('blur', validarPassword2 );
inputCorreo.addEventListener('blur', validarCorreo );
inputTelefono.addEventListener('blur', validarTelefono);




