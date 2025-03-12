window.onload = () => {
    //FORMULARIO
    let botonForm = document.getElementById('botonFormulario');
    console.log(botonForm);

    botonForm.addEventListener('click',(event)=>{
        event.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let subject = document.getElementById('subject').value;
        let message = document.getElementById('message').value;

        if (!name || !email || !subject || !message) {
            Swal.fire({
                icon: 'error',
                title: '¡Error!',
                text: 'Todos los campos son obligatorios.',
                showClass: {
                    popup: 'animate__animated animate__fadeInUp animate__faster'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutDown animate__faster'
                }
            });
            return; 
        }
        else
        {
            let emailPattern = /^[a-zA-z0-9]+@[a-zA-z0-9]+\.[a-z]{2,3}$/;
            if(!emailPattern.test(email))
            {
                Swal.fire({
                    icon: 'error',
                    title: '¡Error!',
                    text: 'Por favor, escriba un mail válido.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInUp animate__faster'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutDown animate__faster'
                    }
                });
            }
            else
            {
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
                }).then(() => {
                    // Limpia los campos del formulario después de mostrar el Swal
                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('subject').value = '';
                    document.getElementById('message').value = '';
                });
                
            }
        }

    })
};
