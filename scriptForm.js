window.onload = () => {
    //FORMULARIO
    let botonForm = document.getElementById('botonFormulario');
    console.log(botonForm)
    botonForm.addEventListener('click',(event)=>{
        event.preventDefault(); 
        console.log(botonForm)

        Swal.fire({
            title: "¡Mensaje enviado correctamente!",
                text: "Te responderemos lo más pronto posible.",
                imageUrl: "https://i.pinimg.com/originals/e5/6f/09/e56f096a7f4f4413a5552a2bdd1c4b2d.gif",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image",

            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
                `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
                `
            }
        });
    })
};
