

const login = document.querySelector('#loginUsr')
const inputemail = document.querySelector('#inputEmail')
const inputpass = document.querySelector('#inputPass')


uActivo()

login.onsubmit = e => {
    e.preventDefault()
    const email = inputemail.value
    const pass = inputpass.value
    


    let usuario = validar(email, pass)
    console.log(usuario)
    

    if (usuario) {
        sessionStorage.setItem('usuarioActivo', JSON.stringify(usuario))
        location.href = "./pages/cuenta.html"

    }
    Swal.fire({
        heightAuto: false,
        icon: 'error',
        title: 'usuario o contraseña incorrecto',
        text: 'ingrese nuevamente',
    })
    
    

}
/* cuenta demo */

const demo = document.querySelector('#toggler-1')

/* busca un usuario random dentro del listado de usuarios en la DB, entrega correo y password */
demo.addEventListener('click', function() {
    if(demo.checked) {
      console.log("demo activo")
      const random = Math.floor(Math.random()*usuarios.length);
      console.log(random)
      inputemail.value = usuarios[random].correo
        inputpass.value = usuarios[random].password
    } else {
        inputemail.value = ""
        inputpass.value = ""
    }
  });

