window.onload = () => {
    // NAVBAR
    let pageScroll = document.querySelector('a.page-scroll');
    if (pageScroll) {
        pageScroll.addEventListener('click', function (event) {
            let target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
            event.preventDefault();
        });
    }

    // CAROUSEL
    let currentIndex = 0;
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    function showSlide(index) {
        const newTransform = -index * 100 + '%';
        document.querySelector('.carousel-container').style.transform = 'translateX(' + newTransform + ')';
    }

    let leftArrow = document.querySelector('.arrow.left');
    let rightArrow = document.querySelector('.arrow.right');

    if (leftArrow) {
        leftArrow.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? totalCards - 1 : currentIndex - 1;
            showSlide(currentIndex);
        });
    }

    if (rightArrow) {
        rightArrow.addEventListener('click', () => {
            currentIndex = (currentIndex === totalCards - 1) ? 0 : currentIndex + 1;
            showSlide(currentIndex);
        });
    }

    // MUSICA
    let players = document.querySelectorAll('.player');
    let musicGifs = document.querySelectorAll('.musicGift');

    players.forEach((player, index) => {
        let playButton = player.closest('.music').querySelector('.playButton');
        let pauseButton = player.closest('.music').querySelector('.pauseButton');
        let moreVolumnButton = player.closest('.music').querySelector('.moreVolumnButton');
        let lessVolumnButton = player.closest('.music').querySelector('.lessVolumnButton');
        let moreSecondsButton = player.closest('.music').querySelector('.moreSecondsButton');
        let lessSecondsButton = player.closest('.music').querySelector('.lessSecondsButton');
        let moreSpeedButton = player.closest('.music').querySelector('.moreSpeedButton');
        let lessSpeedButton = player.closest('.music').querySelector('.lessSpeedButton');
        let muteButton = player.closest('.music').querySelector('.muteButton');
        let progreso = player.closest('.music').querySelector('.progreso');
        let actual = player.closest('.music').querySelector('.actual');

        let musicGif = musicGifs[index];

        progreso.innerHTML = formatearTiempo(player.currentTime) + " / " + formatearTiempo(player.duration);

        player.addEventListener("timeupdate", () => {
            const porcentaje = Math.round((player.currentTime * 180) / player.duration);
            actual.style.width = `${porcentaje}px`;
            progreso.innerHTML = formatearTiempo(player.currentTime) + " / " + formatearTiempo(player.duration);
        });

        playButton.addEventListener('click', () => {
            player.play();
            musicGif.style.animationPlayState = 'running';
        });

        pauseButton.addEventListener('click', () => {
            player.pause();
            musicGif.style.animationPlayState = 'paused';
        });

        moreVolumnButton.addEventListener('click', () => player.volume += 0.1);
        lessVolumnButton.addEventListener('click', () => player.volume -= 0.1);

        moreSecondsButton.addEventListener('click', () => player.currentTime += 5);
        lessSecondsButton.addEventListener('click', () => player.currentTime -= 5);

        moreSpeedButton.addEventListener('click', () => player.playbackRate += 0.2);
        lessSpeedButton.addEventListener('click', () => player.playbackRate -= 0.2);

        muteButton.addEventListener('click', () => {
            let img = muteButton.querySelector('img');
            if (!player.muted) {
                player.muted = true;
                img.src = "./assets/mute.png";
            } else {
                player.muted = false;
                img.src = "./assets/noMute.png";
            }
        });

        // Formatear el tiempo
        function formatearTiempo(segundos) {
            const min = Math.floor(segundos / 60);
            const sec = Math.floor(segundos % 60);
            return `${min}:${sec.toString().padStart(2, "0")}`;
        }
    });


    //VIDEO
    const video = document.querySelector("video");

    const horizontal = document.getElementById("horizontal");
    const circle = document.getElementById("circle");
    const slide = document.getElementById("slide");
    const carboncillo = document.getElementById("carboncillo");
    const emboss = document.getElementById("emboss");


    video.volume = 0.5; 
    let botonActivo = null;


    horizontal.addEventListener("click", () => {

        let descripcionEfecto = document.querySelector('.descripcionEfecto');
        let efectoTitulo = document.querySelector('.efecto-titulo');
        let efectoDescripcion = document.querySelector('.efecto-descripcion');

        if(descripcionEfecto.style.visibility=="visible" && botonActivo=="horizontal")
        {
            efectoTitulo.innerHTML="";
            efectoDescripcion.innerHTML="";
            descripcionEfecto.style.visibility="hidden";
            botonActivo="";

        }
        else
        {
            video.currentTime = 14;
            //añadir descripcion        
            efectoTitulo.innerHTML="HORIZONTAL BARN DOOR WIPE";
            efectoDescripcion.innerHTML="Este filtro se encarga de realizar doble barrido, por la parte superior e inferior. Haciendo que la video se vaya cubriendo con la nueva secuencia de video";
            descripcionEfecto.style.visibility="visible";
            botonActivo="horizontal";
        }
    });

    circle.addEventListener("click", () => {
        
        let descripcionEfecto = document.querySelector('.descripcionEfecto');
        let efectoTitulo = document.querySelector('.efecto-titulo');
        let efectoDescripcion = document.querySelector('.efecto-descripcion');

        if(descripcionEfecto.style.visibility=="visible" && botonActivo=="circle")
        {
            efectoTitulo.innerHTML="";
            efectoDescripcion.innerHTML="";
            descripcionEfecto.style.visibility="hidden";
            botonActivo="";
        }
        else
        {
            efectoTitulo.innerHTML="CIRCLE WIPE";
            efectoDescripcion.innerHTML="Este efecto de transición crea un circulo del exterior al interior para realizar el corte de una secuencia a otra.";
            descripcionEfecto.style.visibility="visible";
            botonActivo="circle";

            video.currentTime = 53;
        }
    });

    slide.addEventListener("click", () => {

        let descripcionEfecto = document.querySelector('.descripcionEfecto');
        let efectoTitulo = document.querySelector('.efecto-titulo');
        let efectoDescripcion = document.querySelector('.efecto-descripcion');

        if(descripcionEfecto.style.visibility=="visible" && botonActivo=="slide")
            {
                efectoTitulo.innerHTML="";
                efectoDescripcion.innerHTML="";
                descripcionEfecto.style.visibility="hidden";
                botonActivo="";
            }
            else
            {   
                efectoTitulo.innerHTML="SLIDE DOWN";
                efectoDescripcion.innerHTML="La transición slide down hace que el clip siguiente aparezca en la parte superior de nuestro video y se mueva hacia abajo hasta visualizarse al 100%";
                descripcionEfecto.style.visibility="visible";
                botonActivo="slide"

                video.currentTime = 109;
            }
    });

    carboncillo.addEventListener("click", () => {

        let descripcionEfecto = document.querySelector('.descripcionEfecto');
        let efectoTitulo = document.querySelector('.efecto-titulo');
        let efectoDescripcion = document.querySelector('.efecto-descripcion');

        if(descripcionEfecto.style.visibility=="visible" && botonActivo=="carboncillo")
            {
                efectoTitulo.innerHTML="";
                efectoDescripcion.innerHTML="";
                descripcionEfecto.style.visibility="hidden";
                botonActivo="";
            }
            else
            { 
                efectoTitulo.innerHTML="CARBONCILLO";
                efectoDescripcion.innerHTML="EL nombre ya nos dice mucho. El efecto carboncillo edita la imagen del video para que parezca un dibujo a carboncillo en blanco y negro.";
                descripcionEfecto.style.visibility="visible";
                botonActivo="carboncillo";

                video.currentTime = 152;
            }
    });

    emboss.addEventListener("click", () => {

        let descripcionEfecto = document.querySelector('.descripcionEfecto');
        let efectoTitulo = document.querySelector('.efecto-titulo');
        let efectoDescripcion = document.querySelector('.efecto-descripcion');

        if(descripcionEfecto.style.visibility=="visible" && botonActivo=="emboss")
            {
                efectoTitulo.innerHTML="";
                efectoDescripcion.innerHTML="";
                descripcionEfecto.style.visibility="hidden";
                botonActivo="";
            }
            else
            { 
                efectoTitulo.innerHTML="EMBOSS";
                efectoDescripcion.innerHTML="Emboss es un efecto de edición de video, no transcicón. En este caso cogemos el video y lo transformamos de tal que forma que parecería que es de papel o esta grabado en metal.";
                descripcionEfecto.style.visibility="visible";
                botonActivo="emboss";
                
                video.currentTime = 421;
            }    
    });
};
