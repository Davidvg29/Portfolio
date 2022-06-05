let imagenCara = document.querySelector(".imagenCara"),
    contenedor3 = document.querySelector(".contenedor3");
    
function moverPersonaje(e) {
    window.addEventListener("keydown", (e)=>{
        const {style} = imagenCara;
             let contador = 10,
             posicionPersonaje = imagenCara.getBoundingClientRect();
             posicionLimite = contenedor3.getBoundingClientRect();
                 

        switch (e.code) {
            case "ArrowLeft":
                if (posicionPersonaje.left < posicionLimite.left) {
                    contador = 0;}
                style.left= `${parseInt(style.left) - contador}px`;

                if (posicionPersonaje.x > sobreMi.getBoundingClientRect().x &&
            posicionPersonaje.y > sobreMi.getBoundingClientRect().y &&
            posicionPersonaje.left < sobreMi.getBoundingClientRect().right &&
            posicionPersonaje.top < sobreMi.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorSobreMi">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorImgPerfil"><div class="divImgPerfil"><img class="imgPerfil" src="foto  anteojos cv.jpg" alt=""></div></div>
                <div class="profesion">DESARROLLADOR WEB FRONT END</div>
                <div class="parrafo"><p>	Estudiante de sistemas, actualmente enfocado en front end apasionado por el diseño y
                las interfaces graficas, con objetivo de poseer conocimientos solidos sobre back end como tambien 
                en desarrollo mobile tanto como android e ios. Comprometido en cumplir con los requisitos del 
                cliente para su sastifaccion con la terminacion de dicho software.  </p></div>
                <div class="contenedorRedes">
                    <div class="redes">
                        <a href="https://www.instagram.com/david_gramajo_/?igshid=YmMyMTA2M2Y=" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
                        <a href="https://github.com/Davidvg29" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
                        <a href="https://www.linkedin.com/in/david-valdez-gramajo-bb86b7204" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
                    </div>
                </div>    
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
            }, 500);
            
        }else{};

        

        if (posicionPersonaje.x > tecnologias.getBoundingClientRect().x &&
            posicionPersonaje.y > tecnologias.getBoundingClientRect().y &&
            posicionPersonaje.left < tecnologias.getBoundingClientRect().right &&
            posicionPersonaje.top < tecnologias.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorTecnologias">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorTituloTecnologias"><div class="tituloTecnologias">Tecnologias</div></div>
                <div class="parrafoTecnologias"><p>Lenguajes y skill de programacion los cuales manejos sin problema alguno. Uno de los 
                objetivos y metas a cumplir es seguir agregando iconos.
                </p></div>
                <div class="contenedorLogosTecnologias">
                    <div class="logoJS"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg></div>
                    <div class="logoBootstrap"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"/></svg></div>
                    <div class="logoCSS"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg></div>
                    <div class="logoHtml"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg></div>
                    <div class="logoGit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/></svg></div>
                </div>
                <div class="segundoParrafoTecnologias"><p>Como apasionado del diseño grafico e interfaz de usuario tome como complemento
                aprender herramientas tanto como para diseños en general y manipulacion de imagenes. </p></div>
                <div class="contenedorLogosDiseño">
                    <div class="logoPhotoshop"><img src="file_type_photoshop_icon_130268.png" alt=""></div>
                    <div class="logoIlustrator"><img src="adobe_illustrator_logo_icon_167899.png" alt=""></div>
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
            }, 500);
            
        }else{};


        if (posicionPersonaje.x > proyectos.getBoundingClientRect().x &&
            posicionPersonaje.y > proyectos.getBoundingClientRect().y &&
            posicionPersonaje.left < proyectos.getBoundingClientRect().right &&
            posicionPersonaje.top < proyectos.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorProyectos">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorTituloProyectos"><div class="tituloProyectos">Proyectos</div></div>
                <div class="parrafoProyectos"><p>Proximamente mas proyectos.</p></div>
                <div class="contenedorCuadrosProyectos">
                    <div class="vizualizarProyectos">
                        
                    </div>
                    <div class="cuadrosProyectos aide"><img src="/fotos proyectos/aide/imagen 1.png" alt="">
                    </div>
                    <div class="cuadrosProyectos valgraIndumentaria"> <img src="/fotos proyectos/valgra indumentaria/imagen 1.png" alt=""></div>
                    <div class="cuadrosProyectos sistemaPrestamos"><img src="/fotos proyectos/sistema de prestamos/imagen 1.png" alt=""></div>
                    
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
        
        let aide = document.querySelector(".aide"),
        vizualizarProyectos = document.querySelector(".vizualizarProyectos");
    aide.addEventListener("click", ()=>{
        vizualizarProyectos.innerHTML=`<div class="contenedorAide">
        <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
        <div class="contenedorAideContenido">
            <div class="aideContenidoImg"><img src="/fotos proyectos/aide/imagen 1.png" alt="">
            </div>
            <div class="aideContenido">
                <div class="aideContenidoNombre">Aide Tienda</div>
                <div class="aideContenidoDescripcion">Web para mostrar diferentes categorias de productos de temporadas 
                con su respectivos precios, con boton de comprar que los clientes seran dirigidos 
                a whatsapp para finalizar su compra y ponerse de acuerdo para el punto de entrega.
                (solo disponible en temporada).</div>
                <div class="enlace">
                    <div class="enlaceWeb"><a href="https://davidvg29.github.io/Aide-Tienda/" target="_blank">ver web</a></div>
                    <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Aide-Tienda" target="_blank">ver git hub</a></div>
                </div>
            </div>
        </div>
    </div>`;
    
    let xProyectos = document.querySelector(".xProyectos");
    xProyectos.addEventListener("click", ()=>{
        vizualizarProyectos.innerHTML="";
    })
    });

    let valgraIndumentaria = document.querySelector(".valgraIndumentaria");
valgraIndumentaria.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML=`<div class="contenedorValgraIndumentaria">
    <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
    <div class="contenedorvalgraIndumentariaContenido">
        <div class="valgraIndumentariaContenidoImg"><img src="/fotos proyectos/valgra indumentaria/imagen 1.png" alt="">
        </div>
        <div class="valgraIndumentariaContenido">
            <div class="valgraIndumentariaContenidoNombre">Valgra Indumentaria</div>
            <div class="valgraIndumentariaContenidoDescripcion">Web para mostrar indumentaria con carrousel de fotos, sus precios y 
carrito de compras para seleccionar productos, talle, cantidad 
y con link para finalizar el pago.</div>
            <div class="enlace">
                <div class="enlaceWeb"><a href="https://valgra-indumentaria.herokuapp.com/" target="_blank">ver web</a></div>
                <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Valgra-indumentaria" target="_blank">ver git hub</a></div>
            </div>
        </div>
    </div>
</div>`;

let xProyectos = document.querySelector(".xProyectos");
xProyectos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML="";
})
});




let sistemaPrestamos = document.querySelector(".sistemaPrestamos");
sistemaPrestamos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML=`<div class="contenedorSistemaPrestamos">
    <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
    <div class="contenedorSistemaPrestamosContenido">
        <div class="sistemaPrestamosContenidoImg"><img src="/fotos proyectos/sistema de prestamos/imagen 1.png" alt="">
        </div>
        <div class="sistemaPrestamosContenido">
            <div class="sistemaPrestamosContenidoNombre">Sistema de Prestamos</div>
            <div class="sistemaPrestamosContenidoDescripcion">Maquetacion de login para el ingreso a un sistema de prestamos.</div>
            <div class="enlace">
                <div class="enlaceWeb"><a href="https://davidvg29.github.io/Login-sistema-de-prestamos/" target="_blank">ver web</a></div>
                <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Login-sistema-de-prestamos" target="_blank">ver git hub</a></div>
            </div>
        </div>
    </div>
</div>`;

let xProyectos = document.querySelector(".xProyectos");
xProyectos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML="";
})
});
            }, 500);
            
        }else{};

        if (posicionPersonaje.x > curriculum.getBoundingClientRect().x &&
            posicionPersonaje.y > curriculum.getBoundingClientRect().y &&
            posicionPersonaje.left < curriculum.getBoundingClientRect().right &&
            posicionPersonaje.top < curriculum.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorCurriculumBorroso">
                <div class="contenedorCurriculum">
                    <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                    <div class="contenedorEnlaceCv">
                        <div><a href="/CV David valdez gramajo.pdf">ver cv</a></div>
                        <div><a href="/CV David valdez gramajo.pdf" download="">descargar cv</a></div>
                    </div>
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
            }, 500);
            
        }else{};

        if (posicionPersonaje.x > contactarme.getBoundingClientRect().x &&
            posicionPersonaje.y > contactarme.getBoundingClientRect().y &&
            posicionPersonaje.left < contactarme.getBoundingClientRect().right &&
            posicionPersonaje.top < contactarme.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorContactarme">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorTituloContactarme"><div class="tituloContactarme">Contactarme</div></div>
                <div class="parrafoContactarme"><p>¿Quieres una conversacion?. <br>Puedes contactarme por aqui o por algunas de mis redes.</p></div>
                <div class="contenedorForm">
                    <form action="">
                        <input type="text" placeholder="NOMBRE" class="nombreInput"><br>
                        <input type="mail" placeholder="CORREO" class="mailInput"><br>
                        <input type="text" placeholder="INTERES" class="interesInput"><br>
                        <textarea name="" placeholder="MENSAJE"  class="mensajeInput"></textarea>
                        <p class="errorForm"></p>
                        <button class="button">ENVIAR</button>

                    </form>
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
    
        // formulario

    let button = document.querySelector("button");

    button.addEventListener("click", (e)=>{
        e.preventDefault();
        let nombreInput = document.querySelector(".nombreInput"),
            mailInput = document.querySelector(".mailInput"),
            interesInput = document.querySelector(".interesInput"),
            mensajeInput = document.querySelector(".mensajeInput"),
            errorForm = document.querySelector(".errorForm");

            if (nombreInput.value.length < 4 || 
                mailInput.value.length < 4 || 
                interesInput.value.length < 4 || 
                mensajeInput.value.length < 4 ) {
                errorForm.innerHTML=`Ingresar datos validos`;
                // mailInput.style.borderBottom="1px solid rgb(255, 0, 0)";

            }
            else if(nombreInput.value.length > 4 || 
                    mailInput.value.length > 4 || 
                    interesInput.value.length > 4 || 
                    mensajeInput.value.length > 4 ){
                    errorForm.innerHTML="";
                // nombreInput.style.borderBottom="1px solid #DBF227";
            }else{};


            if (nombreInput.value.length < 4) {
                nombreInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (nombreInput.value.length > 4) {
                nombreInput.style.borderBottom="1px solid #DBF227";
            }else{};
            

            if (mailInput.value.length < 4) {
                mailInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (mailInput.value.length > 4) {
                mailInput.style.borderBottom="1px solid #DBF227";
            }else{};
            
            
            if (interesInput.value.length < 4) {
                interesInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (interesInput.value.length > 4) {
                interesInput.style.borderBottom="1px solid #DBF227";
            }else{};

            if (mensajeInput.value.length < 4) {
                mensajeInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (mensajeInput.value.length > 4) {
                mensajeInput.style.borderBottom="1px solid #DBF227";
            }else{};
    })

// fin formulario

    }, 500);
            
        }
            break;
            
            case "ArrowRight":
                if (posicionPersonaje.left > posicionLimite.width) {
                    contador = 0;}
                style.left= `${parseInt(style.left) + contador}px`;

                if (posicionPersonaje.x > sobreMi.getBoundingClientRect().x &&
            posicionPersonaje.y > sobreMi.getBoundingClientRect().y &&
            posicionPersonaje.left < sobreMi.getBoundingClientRect().right &&
            posicionPersonaje.top < sobreMi.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorSobreMi">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorImgPerfil"><div class="divImgPerfil"><img class="imgPerfil" src="foto  anteojos cv.jpg" alt=""></div></div>
                <div class="profesion">DESARROLLADOR WEB FRONT END</div>
                <div class="parrafo"><p>	Estudiante de sistemas, actualmente enfocado en front end apasionado por el diseño y
                las interfaces graficas, con objetivo de poseer conocimientos solidos sobre back end como tambien 
                en desarrollo mobile tanto como android e ios. Comprometido en cumplir con los requisitos del 
                cliente para su sastifaccion con la terminacion de dicho software.  </p></div>
                <div class="contenedorRedes">
                    <div class="redes">
                        <a href="https://www.instagram.com/david_gramajo_/?igshid=YmMyMTA2M2Y=" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
                        <a href="https://github.com/Davidvg29" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
                        <a href="https://www.linkedin.com/in/david-valdez-gramajo-bb86b7204" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
                    </div>
                </div>    
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
            }, 500);
            
        }else{};

        

        if (posicionPersonaje.x > tecnologias.getBoundingClientRect().x &&
            posicionPersonaje.y > tecnologias.getBoundingClientRect().y &&
            posicionPersonaje.left < tecnologias.getBoundingClientRect().right &&
            posicionPersonaje.top < tecnologias.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorTecnologias">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorTituloTecnologias"><div class="tituloTecnologias">Tecnologias</div></div>
                <div class="parrafoTecnologias"><p>Lenguajes y skill de programacion los cuales manejos sin problema alguno. Uno de los 
                objetivos y metas a cumplir es seguir agregando iconos.</p></div>
                <div class="contenedorLogosTecnologias">
                    <div class="logoJS"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg></div>
                    <div class="logoBootstrap"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"/></svg></div>
                    <div class="logoCSS"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg></div>
                    <div class="logoHtml"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg></div>
                    <div class="logoGit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/></svg></div>
                </div>
                <div class="segundoParrafoTecnologias"><p>Como apasionado del diseño grafico e interfaz de usuario tome como complemento
                aprender herramientas tanto como para diseños en general y manipulacion de imagenes. </p></div>
                <div class="contenedorLogosDiseño">
                    <div class="logoPhotoshop"><img src="file_type_photoshop_icon_130268.png" alt=""></div>
                    <div class="logoIlustrator"><img src="adobe_illustrator_logo_icon_167899.png" alt=""></div>
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
            }, 500);
            
        }else{};
                
        if (posicionPersonaje.x > proyectos.getBoundingClientRect().x &&
        posicionPersonaje.y > proyectos.getBoundingClientRect().y &&
        posicionPersonaje.left < proyectos.getBoundingClientRect().right &&
        posicionPersonaje.top < proyectos.getBoundingClientRect().bottom) {
        setTimeout(() => {
            let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


            contenedorEtiquetas.innerHTML=`<div class="contenedorProyectos">
            <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
            <div class="contenedorTituloProyectos"><div class="tituloProyectos">Proyectos</div></div>
            <div class="parrafoProyectos"><p>Proximamente mas proyectos.</p></div>
            <div class="contenedorCuadrosProyectos">
                <div class="vizualizarProyectos">
                    
                </div>
                <div class="cuadrosProyectos aide"><img src="/fotos proyectos/aide/imagen 1.png" alt="">
                </div>
                <div class="cuadrosProyectos valgraIndumentaria"> <img src="/fotos proyectos/valgra indumentaria/imagen 1.png" alt=""></div>
                <div class="cuadrosProyectos sistemaPrestamos"><img src="/fotos proyectos/sistema de prestamos/imagen 1.png" alt=""></div>
                
            </div>
        </div>`;
        x = document.querySelector(".x");

        x.addEventListener("click", ()=>{
        contenedorEtiquetas.innerHTML="";
    }); 
    
    let aide = document.querySelector(".aide"),
    vizualizarProyectos = document.querySelector(".vizualizarProyectos");
aide.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML=`<div class="contenedorAide">
    <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
    <div class="contenedorAideContenido">
        <div class="aideContenidoImg"><img src="/fotos proyectos/aide/imagen 1.png" alt="">
        </div>
        <div class="aideContenido">
            <div class="aideContenidoNombre">Aide Tienda</div>
            <div class="aideContenidoDescripcion">Web para mostrar diferentes categorias de productos de temporadas 
            con su respectivos precios, con boton de comprar que los clientes seran dirigidos 
            a whatsapp para finalizar su compra y ponerse de acuerdo para el punto de entrega.
            (solo disponible en temporada).</div>
            <div class="enlace">
                <div class="enlaceWeb"><a href="https://davidvg29.github.io/Aide-Tienda/" target="_blank">ver web</a></div>
                <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Aide-Tienda" target="_blank">ver git hub</a></div>
            </div>
        </div>
    </div>
</div>`;

let xProyectos = document.querySelector(".xProyectos");
xProyectos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML="";
})
});

let valgraIndumentaria = document.querySelector(".valgraIndumentaria");
valgraIndumentaria.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML=`<div class="contenedorValgraIndumentaria">
    <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
    <div class="contenedorvalgraIndumentariaContenido">
        <div class="valgraIndumentariaContenidoImg"><img src="/fotos proyectos/valgra indumentaria/imagen 1.png" alt="">
        </div>
        <div class="valgraIndumentariaContenido">
            <div class="valgraIndumentariaContenidoNombre">Valgra Indumentaria</div>
            <div class="valgraIndumentariaContenidoDescripcion">Web para mostrar indumentaria con carrousel de fotos, sus precios y 
            carrito de compras para seleccionar productos, talle, cantidad 
            y con link para finalizar el pago.</div>
            <div class="enlace">
                <div class="enlaceWeb"><a href="https://valgra-indumentaria.herokuapp.com/" target="_blank">ver web</a></div>
                <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Valgra-indumentaria" target="_blank">ver git hub</a></div>
            </div>
        </div>
    </div>
</div>`;

let xProyectos = document.querySelector(".xProyectos");
xProyectos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML="";
})
});




let sistemaPrestamos = document.querySelector(".sistemaPrestamos");
sistemaPrestamos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML=`<div class="contenedorSistemaPrestamos">
    <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
    <div class="contenedorSistemaPrestamosContenido">
        <div class="sistemaPrestamosContenidoImg"><img src="/fotos proyectos/sistema de prestamos/imagen 1.png" alt="">
        </div>
        <div class="sistemaPrestamosContenido">
            <div class="sistemaPrestamosContenidoNombre">Sistema de Prestamos</div>
            <div class="sistemaPrestamosContenidoDescripcion">Maquetacion de login para el ingreso a un sistema de prestamos.</div>
            <div class="enlace">
                <div class="enlaceWeb"><a href="https://davidvg29.github.io/Login-sistema-de-prestamos/" target="_blank">ver web</a></div>
                <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Login-sistema-de-prestamos" target="_blank">ver git hub</a></div>
            </div>
        </div>
    </div>
</div>`;

let xProyectos = document.querySelector(".xProyectos");
xProyectos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML="";
})
});
        }, 500);
        
    }else{};

    if (posicionPersonaje.x > curriculum.getBoundingClientRect().x &&
    posicionPersonaje.y > curriculum.getBoundingClientRect().y &&
    posicionPersonaje.left < curriculum.getBoundingClientRect().right &&
    posicionPersonaje.top < curriculum.getBoundingClientRect().bottom) {
    setTimeout(() => {
        let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


        contenedorEtiquetas.innerHTML=`<div class="contenedorCurriculumBorroso">
        <div class="contenedorCurriculum">
            <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
            <div class="contenedorEnlaceCv">
                <div><a href="/CV David valdez gramajo.pdf">ver cv</a></div>
                <div><a href="/CV David valdez gramajo.pdf" download="">descargar cv</a></div>
            </div>
        </div>
    </div>`;
    x = document.querySelector(".x");

    x.addEventListener("click", ()=>{
    contenedorEtiquetas.innerHTML="";
}); 
    }, 500);
    
}else{};

if (posicionPersonaje.x > contactarme.getBoundingClientRect().x &&
            posicionPersonaje.y > contactarme.getBoundingClientRect().y &&
            posicionPersonaje.left < contactarme.getBoundingClientRect().right &&
            posicionPersonaje.top < contactarme.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorContactarme">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorTituloContactarme"><div class="tituloContactarme">Contactarme</div></div>
                <div class="parrafoContactarme"><p>¿Quieres tener una charla?. <br> Puedes contactarme por aqui o por algunas de mis redes.</p></div>
                <div class="contenedorForm">
                    <form action="">
                        <input type="text" placeholder="NOMBRE" class="nombreInput"><br>
                        <input type="mail" placeholder="CORREO" class="mailInput"><br>
                        <input type="text" placeholder="INTERES" class="interesInput"><br>
                        <textarea name="" placeholder="MENSAJE"  class="mensajeInput"></textarea>
                        <p class="errorForm"></p>
                        <button class="button">ENVIAR</button>

                    </form>
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
    
        // formulario

    let button = document.querySelector("button");

    button.addEventListener("click", (e)=>{
        e.preventDefault();
        let nombreInput = document.querySelector(".nombreInput"),
            mailInput = document.querySelector(".mailInput"),
            interesInput = document.querySelector(".interesInput"),
            mensajeInput = document.querySelector(".mensajeInput"),
            errorForm = document.querySelector(".errorForm");

            if (nombreInput.value.length < 4 || 
                mailInput.value.length < 4 || 
                interesInput.value.length < 4 || 
                mensajeInput.value.length < 4 ) {
                errorForm.innerHTML=`Ingresar datos validos`;
                // mailInput.style.borderBottom="1px solid rgb(255, 0, 0)";

            }
            else if(nombreInput.value.length > 4 || 
                    mailInput.value.length > 4 || 
                    interesInput.value.length > 4 || 
                    mensajeInput.value.length > 4 ){
                    errorForm.innerHTML="";
                // nombreInput.style.borderBottom="1px solid #DBF227";
            }else{};


            if (nombreInput.value.length < 4) {
                nombreInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (nombreInput.value.length > 4) {
                nombreInput.style.borderBottom="1px solid #DBF227";
            }else{};
            

            if (mailInput.value.length < 4) {
                mailInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (mailInput.value.length > 4) {
                mailInput.style.borderBottom="1px solid #DBF227";
            }else{};
            
            
            if (interesInput.value.length < 4) {
                interesInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (interesInput.value.length > 4) {
                interesInput.style.borderBottom="1px solid #DBF227";
            }else{};

            if (mensajeInput.value.length < 4) {
                mensajeInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (mensajeInput.value.length > 4) {
                mensajeInput.style.borderBottom="1px solid #DBF227";
            }else{};
    })

// fin formulario

    }, 500);
            
        }
    
            break;

            case "ArrowUp":
                if (posicionPersonaje.y < posicionLimite.y) {
                    contador = 0;}
                style.top= `${parseInt(style.top) - contador}px`;

                if (posicionPersonaje.x > sobreMi.getBoundingClientRect().x &&
            posicionPersonaje.y > sobreMi.getBoundingClientRect().y &&
            posicionPersonaje.left < sobreMi.getBoundingClientRect().right &&
            posicionPersonaje.top < sobreMi.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorSobreMi">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorImgPerfil"><div class="divImgPerfil"><img class="imgPerfil" src="foto  anteojos cv.jpg" alt=""></div></div>
                <div class="profesion">DESARROLLADOR WEB FRONT END</div>
                <div class="parrafo"><p>	Estudiante de sistemas, actualmente enfocado en front end apasionado por el diseño y
                las interfaces graficas, con objetivo de poseer conocimientos solidos sobre back end como tambien 
                en desarrollo mobile tanto como android e ios. Comprometido en cumplir con los requisitos del 
                cliente para su sastifaccion con la terminacion de dicho software.  </p></div>
                <div class="contenedorRedes">
                    <div class="redes">
                        <a href="https://www.instagram.com/david_gramajo_/?igshid=YmMyMTA2M2Y=" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
                        <a href="https://github.com/Davidvg29" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
                        <a href="https://www.linkedin.com/in/david-valdez-gramajo-bb86b7204" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
                    </div>
                </div>    
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
            }, 500);
            
        }else{};

        

        if (posicionPersonaje.x > tecnologias.getBoundingClientRect().x &&
            posicionPersonaje.y > tecnologias.getBoundingClientRect().y &&
            posicionPersonaje.left < tecnologias.getBoundingClientRect().right &&
            posicionPersonaje.top < tecnologias.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorTecnologias">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorTituloTecnologias"><div class="tituloTecnologias">Tecnologias</div></div>
                <div class="parrafoTecnologias"><p>Lenguajes y skill de programacion los cuales manejos sin problema alguno. Uno de los 
                objetivos y metas a cumplir es seguir agregando iconos.</p></div>
                <div class="contenedorLogosTecnologias">
                    <div class="logoJS"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg></div>
                    <div class="logoBootstrap"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"/></svg></div>
                    <div class="logoCSS"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg></div>
                    <div class="logoHtml"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg></div>
                    <div class="logoGit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/></svg></div>
                </div>
                <div class="segundoParrafoTecnologias"><p>Como apasionado del diseño grafico e interfaz de usuario tome como complemento
                aprender herramientas tanto como para diseños en general y manipulacion de imagenes.  </p></div>
                <div class="contenedorLogosDiseño">
                    <div class="logoPhotoshop"><img src="file_type_photoshop_icon_130268.png" alt=""></div>
                    <div class="logoIlustrator"><img src="adobe_illustrator_logo_icon_167899.png" alt=""></div>
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
            }, 500);
            
        }else{};
                
        if (posicionPersonaje.x > proyectos.getBoundingClientRect().x &&
        posicionPersonaje.y > proyectos.getBoundingClientRect().y &&
        posicionPersonaje.left < proyectos.getBoundingClientRect().right &&
        posicionPersonaje.top < proyectos.getBoundingClientRect().bottom) {
        setTimeout(() => {
            let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


            contenedorEtiquetas.innerHTML=`<div class="contenedorProyectos">
            <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
            <div class="contenedorTituloProyectos"><div class="tituloProyectos">Proyectos</div></div>
            <div class="parrafoProyectos"><p>Proximamente mas proyectos.</p></div>
            <div class="contenedorCuadrosProyectos">
                <div class="vizualizarProyectos">
                    
                </div>
                <div class="cuadrosProyectos aide"><img src="/fotos proyectos/aide/imagen 1.png" alt="">
                </div>
                <div class="cuadrosProyectos valgraIndumentaria"> <img src="/fotos proyectos/valgra indumentaria/imagen 1.png" alt=""></div>
                <div class="cuadrosProyectos sistemaPrestamos"><img src="/fotos proyectos/sistema de prestamos/imagen 1.png" alt=""></div>
                
            </div>
        </div>`;
        x = document.querySelector(".x");

        x.addEventListener("click", ()=>{
        contenedorEtiquetas.innerHTML="";
    }); 
    
    let aide = document.querySelector(".aide"),
    vizualizarProyectos = document.querySelector(".vizualizarProyectos");
aide.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML=`<div class="contenedorAide">
    <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
    <div class="contenedorAideContenido">
        <div class="aideContenidoImg"><img src="/fotos proyectos/aide/imagen 1.png" alt="">
        </div>
        <div class="aideContenido">
            <div class="aideContenidoNombre">Aide Tienda</div>
            <div class="aideContenidoDescripcion">Web para mostrar diferentes categorias de productos de temporadas 
            con su respectivos precios, con boton de comprar que los clientes seran dirigidos 
            a whatsapp para finalizar su compra y ponerse de acuerdo para el punto de entrega.
            (solo disponible en temporada).</div>
            <div class="enlace">
                <div class="enlaceWeb"><a href="https://davidvg29.github.io/Aide-Tienda/" target="_blank">ver web</a></div>
                <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Aide-Tienda" target="_blank">ver git hub</a></div>
            </div>
        </div>
    </div>
</div>`;

let xProyectos = document.querySelector(".xProyectos");
xProyectos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML="";
})
});

let valgraIndumentaria = document.querySelector(".valgraIndumentaria");
valgraIndumentaria.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML=`<div class="contenedorValgraIndumentaria">
    <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
    <div class="contenedorvalgraIndumentariaContenido">
        <div class="valgraIndumentariaContenidoImg"><img src="/fotos proyectos/valgra indumentaria/imagen 1.png" alt="">
        </div>
        <div class="valgraIndumentariaContenido">
            <div class="valgraIndumentariaContenidoNombre">Valgra Indumentaria</div>
            <div class="valgraIndumentariaContenidoDescripcion">Web para mostrar indumentaria con carrousel de fotos, sus precios y 
            carrito de compras para seleccionar productos, talle, cantidad 
            y con link para finalizar el pago.</div>
            <div class="enlace">
                <div class="enlaceWeb"><a href="https://valgra-indumentaria.herokuapp.com/" target="_blank">ver web</a></div>
                <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Valgra-indumentaria" target="_blank">ver git hub</a></div>
            </div>
        </div>
    </div>
</div>`;

let xProyectos = document.querySelector(".xProyectos");
xProyectos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML="";
})
});




let sistemaPrestamos = document.querySelector(".sistemaPrestamos");
sistemaPrestamos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML=`<div class="contenedorSistemaPrestamos">
    <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
    <div class="contenedorSistemaPrestamosContenido">
        <div class="sistemaPrestamosContenidoImg"><img src="/fotos proyectos/sistema de prestamos/imagen 1.png" alt="">
        </div>
        <div class="sistemaPrestamosContenido">
            <div class="sistemaPrestamosContenidoNombre">Sistema de Prestamos</div>
            <div class="sistemaPrestamosContenidoDescripcion">Maquetacion de login para el ingreso a un sistema de prestamos.</div>
            <div class="enlace">
                <div class="enlaceWeb"><a href="https://davidvg29.github.io/Login-sistema-de-prestamos/" target="_blank">ver web</a></div>
                <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Login-sistema-de-prestamos" target="_blank">ver git hub</a></div>
            </div>
        </div>
    </div>
</div>`;

let xProyectos = document.querySelector(".xProyectos");
xProyectos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML="";
})
});

        }, 500);
        
    }else{};

    if (posicionPersonaje.x > curriculum.getBoundingClientRect().x &&
    posicionPersonaje.y > curriculum.getBoundingClientRect().y &&
    posicionPersonaje.left < curriculum.getBoundingClientRect().right &&
    posicionPersonaje.top < curriculum.getBoundingClientRect().bottom) {
    setTimeout(() => {
        let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


        contenedorEtiquetas.innerHTML=`<div class="contenedorCurriculumBorroso">
        <div class="contenedorCurriculum">
            <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
            <div class="contenedorEnlaceCv">
                <div><a href="/CV David valdez gramajo.pdf">ver cv</a></div>
                <div><a href="/CV David valdez gramajo.pdf" download="">descargar cv</a></div>
            </div>
        </div>
    </div>`;
    x = document.querySelector(".x");

    x.addEventListener("click", ()=>{
    contenedorEtiquetas.innerHTML="";
}); 
    }, 500);
    
}else{};

if (posicionPersonaje.x > contactarme.getBoundingClientRect().x &&
            posicionPersonaje.y > contactarme.getBoundingClientRect().y &&
            posicionPersonaje.left < contactarme.getBoundingClientRect().right &&
            posicionPersonaje.top < contactarme.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorContactarme">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorTituloContactarme"><div class="tituloContactarme">Contactarme</div></div>
                <div class="parrafoContactarme"><p>¿Quieres tener una charla?. <br> Puedes contactarme por aqui o por algunas de mis redes.</p></div>
                <div class="contenedorForm">
                    <form action="">
                        <input type="text" placeholder="NOMBRE" class="nombreInput"><br>
                        <input type="mail" placeholder="CORREO" class="mailInput"><br>
                        <input type="text" placeholder="INTERES" class="interesInput"><br>
                        <textarea name="" placeholder="MENSAJE"  class="mensajeInput"></textarea>
                        <p class="errorForm"></p>
                        <button class="button">ENVIAR</button>

                    </form>
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
    
        // formulario

    let button = document.querySelector("button");

    button.addEventListener("click", (e)=>{
        e.preventDefault();
        let nombreInput = document.querySelector(".nombreInput"),
            mailInput = document.querySelector(".mailInput"),
            interesInput = document.querySelector(".interesInput"),
            mensajeInput = document.querySelector(".mensajeInput"),
            errorForm = document.querySelector(".errorForm");

            if (nombreInput.value.length < 4 || 
                mailInput.value.length < 4 || 
                interesInput.value.length < 4 || 
                mensajeInput.value.length < 4 ) {
                errorForm.innerHTML=`Ingresar datos validos`;
                // mailInput.style.borderBottom="1px solid rgb(255, 0, 0)";

            }
            else if(nombreInput.value.length > 4 || 
                    mailInput.value.length > 4 || 
                    interesInput.value.length > 4 || 
                    mensajeInput.value.length > 4 ){
                    errorForm.innerHTML="";
                // nombreInput.style.borderBottom="1px solid #DBF227";
            }else{};


            if (nombreInput.value.length < 4) {
                nombreInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (nombreInput.value.length > 4) {
                nombreInput.style.borderBottom="1px solid #DBF227";
            }else{};
            

            if (mailInput.value.length < 4) {
                mailInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (mailInput.value.length > 4) {
                mailInput.style.borderBottom="1px solid #DBF227";
            }else{};
            
            
            if (interesInput.value.length < 4) {
                interesInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (interesInput.value.length > 4) {
                interesInput.style.borderBottom="1px solid #DBF227";
            }else{};

            if (mensajeInput.value.length < 4) {
                mensajeInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (mensajeInput.value.length > 4) {
                mensajeInput.style.borderBottom="1px solid #DBF227";
            }else{};
    })

// fin formulario

    }, 500);
            
        }

            break;

            case "ArrowDown":
                if (posicionPersonaje.bottom > posicionLimite.bottom) {
                    contador = 0;}
                style.top= `${parseInt(style.top) + contador}px`;

                if (posicionPersonaje.x > sobreMi.getBoundingClientRect().x &&
            posicionPersonaje.y > sobreMi.getBoundingClientRect().y &&
            posicionPersonaje.left < sobreMi.getBoundingClientRect().right &&
            posicionPersonaje.top < sobreMi.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorSobreMi">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorImgPerfil"><div class="divImgPerfil"><img class="imgPerfil" src="foto  anteojos cv.jpg" alt=""></div></div>
                <div class="profesion">DESARROLLADOR WEB FRONT END</div>
                <div class="parrafo"><p>	Estudiante de sistemas, actualmente enfocado en front end apasionado por el diseño y
                las interfaces graficas, con objetivo de poseer conocimientos solidos sobre back end como tambien 
                en desarrollo mobile tanto como android e ios. Comprometido en cumplir con los requisitos del 
                cliente para su sastifaccion con la terminacion de dicho software.  </p></div>
                <div class="contenedorRedes">
                    <div class="redes">
                        <a href="https://www.instagram.com/david_gramajo_/?igshid=YmMyMTA2M2Y=" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
                        <a href="https://github.com/Davidvg29" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
                        <a href="https://www.linkedin.com/in/david-valdez-gramajo-bb86b7204" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
                    </div>
                </div>    
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
            }, 500);
            
        }else{};

        

        if (posicionPersonaje.x > tecnologias.getBoundingClientRect().x &&
            posicionPersonaje.y > tecnologias.getBoundingClientRect().y &&
            posicionPersonaje.left < tecnologias.getBoundingClientRect().right &&
            posicionPersonaje.top < tecnologias.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorTecnologias">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorTituloTecnologias"><div class="tituloTecnologias">Tecnologias</div></div>
                <div class="parrafoTecnologias"><p>Lenguajes y skill de programacion los cuales manejos sin problema alguno. Uno de los 
                objetivos y metas a cumplir es seguir agregando iconos.</p></div>
                <div class="contenedorLogosTecnologias">
                    <div class="logoJS"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg></div>
                    <div class="logoBootstrap"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"/></svg></div>
                    <div class="logoCSS"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg></div>
                    <div class="logoHtml"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg></div>
                    <div class="logoGit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/></svg></div>
                </div>
                <div class="segundoParrafoTecnologias"><p>Como apasionado del diseño grafico e interfaz de usuario tome como complemento
                aprender herramientas tanto como para diseños en general y manipulacion de imagenes.  </p></div>
                <div class="contenedorLogosDiseño">
                    <div class="logoPhotoshop"><img src="file_type_photoshop_icon_130268.png" alt=""></div>
                    <div class="logoIlustrator"><img src="adobe_illustrator_logo_icon_167899.png" alt=""></div>
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
            }, 500);
            
        }else{};
                    
        if (posicionPersonaje.x > proyectos.getBoundingClientRect().x &&
        posicionPersonaje.y > proyectos.getBoundingClientRect().y &&
        posicionPersonaje.left < proyectos.getBoundingClientRect().right &&
        posicionPersonaje.top < proyectos.getBoundingClientRect().bottom) {
        setTimeout(() => {
            let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


            contenedorEtiquetas.innerHTML=`<div class="contenedorProyectos">
            <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
            <div class="contenedorTituloProyectos"><div class="tituloProyectos">Proyectos</div></div>
            <div class="parrafoProyectos"><p>Proximamente mas proyectos.</p></div>
            <div class="contenedorCuadrosProyectos">
                <div class="vizualizarProyectos">
                    
                </div>
                <div class="cuadrosProyectos aide"><img src="/fotos proyectos/aide/imagen 1.png" alt="">
                </div>
                <div class="cuadrosProyectos valgraIndumentaria"> <img src="/fotos proyectos/valgra indumentaria/imagen 1.png" alt=""></div>
                <div class="cuadrosProyectos sistemaPrestamos"><img src="/fotos proyectos/sistema de prestamos/imagen 1.png" alt=""></div>
                
            </div>
        </div>`;
        x = document.querySelector(".x");

        x.addEventListener("click", ()=>{
        contenedorEtiquetas.innerHTML="";
    }); 
    
    let aide = document.querySelector(".aide"),
    vizualizarProyectos = document.querySelector(".vizualizarProyectos");
aide.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML=`<div class="contenedorAide">
    <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
    <div class="contenedorAideContenido">
        <div class="aideContenidoImg"><img src="/fotos proyectos/aide/imagen 1.png" alt="">
        </div>
        <div class="aideContenido">
            <div class="aideContenidoNombre">Aide Tienda</div>
            <div class="aideContenidoDescripcion">Web para mostrar diferentes categorias de productos de temporadas 
            con su respectivos precios, con boton de comprar que los clientes seran dirigidos 
            a whatsapp para finalizar su compra y ponerse de acuerdo para el punto de entrega.
            (solo disponible en temporada).</div>
            <div class="enlace">
                <div class="enlaceWeb"><a href="https://davidvg29.github.io/Aide-Tienda/" target="_blank">ver web</a></div>
                <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Aide-Tienda" target="_blank">ver git hub</a></div>
            </div>
        </div>
    </div>
</div>`;

let xProyectos = document.querySelector(".xProyectos");
xProyectos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML="";
})
});

let valgraIndumentaria = document.querySelector(".valgraIndumentaria");
valgraIndumentaria.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML=`<div class="contenedorValgraIndumentaria">
    <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
    <div class="contenedorvalgraIndumentariaContenido">
        <div class="valgraIndumentariaContenidoImg"><img src="/fotos proyectos/valgra indumentaria/imagen 1.png" alt="">
        </div>
        <div class="valgraIndumentariaContenido">
            <div class="valgraIndumentariaContenidoNombre">Valgra Indumentaria</div>
            <div class="valgraIndumentariaContenidoDescripcion">Web para mostrar indumentaria con carrousel de fotos, sus precios y 
            carrito de compras para seleccionar productos, talle, cantidad 
            y con link para finalizar el pago.</div>
            <div class="enlace">
                <div class="enlaceWeb"><a href="https://valgra-indumentaria.herokuapp.com/" target="_blank">ver web</a></div>
                <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Valgra-indumentaria" target="_blank">ver git hub</a></div>
            </div>
        </div>
    </div>
</div>`;

let xProyectos = document.querySelector(".xProyectos");
xProyectos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML="";
})
});




let sistemaPrestamos = document.querySelector(".sistemaPrestamos");
sistemaPrestamos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML=`<div class="contenedorSistemaPrestamos">
    <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
    <div class="contenedorSistemaPrestamosContenido">
        <div class="sistemaPrestamosContenidoImg"><img src="/fotos proyectos/sistema de prestamos/imagen 1.png" alt="">
        </div>
        <div class="sistemaPrestamosContenido">
            <div class="sistemaPrestamosContenidoNombre">Sistema de Prestamos</div>
            <div class="sistemaPrestamosContenidoDescripcion">Maquetacion de login para el ingreso a un sistema de prestamos.</div>
            <div class="enlace">
                <div class="enlaceWeb"><a href="https://davidvg29.github.io/Login-sistema-de-prestamos/" >ver web</a></div>
                <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Login-sistema-de-prestamos" target="_blank">ver git hub</a></div>
            </div>
        </div>
    </div>
</div>`;

let xProyectos = document.querySelector(".xProyectos");
xProyectos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML="";
})
});


        }, 500);
        
    }else{};

    if (posicionPersonaje.x > curriculum.getBoundingClientRect().x &&
            posicionPersonaje.y > curriculum.getBoundingClientRect().y &&
            posicionPersonaje.left < curriculum.getBoundingClientRect().right &&
            posicionPersonaje.top < curriculum.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorCurriculumBorroso">
                <div class="contenedorCurriculum">
                    <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                    <div class="contenedorEnlaceCv">
                        <div><a href="/CV David valdez gramajo.pdf">ver cv</a></div>
                        <div><a href="/CV David valdez gramajo.pdf" download="">descargar cv</a></div>
                    </div>
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
            }, 500);
            
        }else{};

        if (posicionPersonaje.x > contactarme.getBoundingClientRect().x &&
            posicionPersonaje.y > contactarme.getBoundingClientRect().y &&
            posicionPersonaje.left < contactarme.getBoundingClientRect().right &&
            posicionPersonaje.top < contactarme.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorContactarme">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorTituloContactarme"><div class="tituloContactarme">Contactarme</div></div>
                <div class="parrafoContactarme"><p>¿Quieres tener una charla?. <br> Puedes contactarme por aqui o por algunas de mis redes.</p></div>
                <div class="contenedorForm">
                    <form action="">
                        <input type="text" placeholder="NOMBRE" class="nombreInput"><br>
                        <input type="mail" placeholder="CORREO" class="mailInput"><br>
                        <input type="text" placeholder="INTERES" class="interesInput"><br>
                        <textarea name="" placeholder="MENSAJE"  class="mensajeInput"></textarea>
                        <p class="errorForm"></p>
                        <button class="button">ENVIAR</button>

                    </form>
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
    
        // formulario

    let button = document.querySelector("button");

    button.addEventListener("click", (e)=>{
        e.preventDefault();
        let nombreInput = document.querySelector(".nombreInput"),
            mailInput = document.querySelector(".mailInput"),
            interesInput = document.querySelector(".interesInput"),
            mensajeInput = document.querySelector(".mensajeInput"),
            errorForm = document.querySelector(".errorForm");

            if (nombreInput.value.length < 4 || 
                mailInput.value.length < 4 || 
                interesInput.value.length < 4 || 
                mensajeInput.value.length < 4 ) {
                errorForm.innerHTML=`Ingresar datos validos`;
                // mailInput.style.borderBottom="1px solid rgb(255, 0, 0)";

            }
            else if(nombreInput.value.length > 4 || 
                    mailInput.value.length > 4 || 
                    interesInput.value.length > 4 || 
                    mensajeInput.value.length > 4 ){
                    errorForm.innerHTML="";
                // nombreInput.style.borderBottom="1px solid #DBF227";
            }else{};


            if (nombreInput.value.length < 4) {
                nombreInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (nombreInput.value.length > 4) {
                nombreInput.style.borderBottom="1px solid #DBF227";
            }else{};
            

            if (mailInput.value.length < 4) {
                mailInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (mailInput.value.length > 4) {
                mailInput.style.borderBottom="1px solid #DBF227";
            }else{};
            
            
            if (interesInput.value.length < 4) {
                interesInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (interesInput.value.length > 4) {
                interesInput.style.borderBottom="1px solid #DBF227";
            }else{};

            if (mensajeInput.value.length < 4) {
                mensajeInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (mensajeInput.value.length > 4) {
                mensajeInput.style.borderBottom="1px solid #DBF227";
            }else{};
    })

// fin formulario

    }, 500);
            
        }

            break;    
        
        }
        
        


            
        

})

}
moverPersonaje();



let sobreMi = document.querySelector(".sobremi"),
    tecnologias = document.querySelector(".tecnologias"),
    proyectos = document.querySelector(".proyectos"),
    curriculum = document.querySelector(".curriculum"),
    contactarme = document.querySelector(".contactarme");

function posicionarElementos(e) {
    let widthLimite = contenedor3.getBoundingClientRect().width-100,
        heightLimite = contenedor3.getBoundingClientRect().height-50,

        numeroRandomWidth1 = Math.random()*(widthLimite/5-10)+10,
        numeroRandomWidth2 = Math.random()*((widthLimite/5*2)-numeroRandomWidth1)+numeroRandomWidth1,
        numeroRandomWidth3 = Math.random()*((widthLimite/5*3)-numeroRandomWidth2)+numeroRandomWidth2,
        numeroRandomWidth4 = Math.random()*((widthLimite/5*4)-numeroRandomWidth3)+numeroRandomWidth3,
        numeroRandomWidth5 = Math.random()*((widthLimite/5*5)-numeroRandomWidth4)+numeroRandomWidth4;


    let numeroRandomHeight1 = Math.random()*heightLimite,
        numeroRandomHeight2 = Math.random()*heightLimite,
        numeroRandomHeight3 = Math.random()*heightLimite,
        numeroRandomHeight4 = Math.random()*heightLimite,
        numeroRandomHeight5 = Math.random()*heightLimite;

        sobreMi.style.transform = `translate(${numeroRandomWidth1}px, -${numeroRandomHeight1}px)`;
        tecnologias.style.transform = `translate(${numeroRandomWidth2}px, -${numeroRandomHeight2}px)`;
        proyectos.style.transform = `translate(${numeroRandomWidth3}px, -${numeroRandomHeight3}px)`;
        curriculum.style.transform = `translate(${numeroRandomWidth4}px, -${numeroRandomHeight4}px)`;
        contactarme.style.transform = `translate(${numeroRandomWidth5}px, -${numeroRandomHeight5}px)`;

        
        
        
}
posicionarElementos();



let w = document.querySelector(".w"),
    a = document.querySelector(".a"),
    s = document.querySelector(".s"),
    d = document.querySelector(".d");

    w.addEventListener("click", ()=>{
            const {style} = imagenCara;
             let contador = 10,
             posicionPersonaje = imagenCara.getBoundingClientRect(),
             posicionLimite = contenedor3.getBoundingClientRect();

            if (posicionPersonaje.y < posicionLimite.y) {
                contador = 0;}
            style.top= `${parseInt(style.top) - contador}px`;

            function aparecerSobreMi(params) {
                if (posicionPersonaje.x > sobreMi.getBoundingClientRect().x &&
            posicionPersonaje.y > sobreMi.getBoundingClientRect().y &&
            posicionPersonaje.left < sobreMi.getBoundingClientRect().right &&
            posicionPersonaje.top < sobreMi.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorSobreMi">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorImgPerfil"><div class="divImgPerfil"><img class="imgPerfil" src="foto  anteojos cv.jpg" alt=""></div></div>
                <div class="profesion">DESARROLLADOR WEB FRONT END</div>
                <div class="parrafo"><p>	Estudiante de sistemas, actualmente enfocado en front end apasionado por el diseño y
                las interfaces graficas, con objetivo de poseer conocimientos solidos sobre back end como tambien 
                en desarrollo mobile tanto como android e ios. Comprometido en cumplir con los requisitos del 
                cliente para su sastifaccion con la terminacion de dicho software.  </p></div>
                <div class="contenedorRedes">
                    <div class="redes">
                        <a href="https://www.instagram.com/david_gramajo_/?igshid=YmMyMTA2M2Y=" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
                        <a href="https://github.com/Davidvg29" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
                        <a href="https://www.linkedin.com/in/david-valdez-gramajo-bb86b7204" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
                    </div>
                </div>    
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
            }, 500);
            
        }else{};
            }
            aparecerSobreMi();

            function aparecerTecnologias(params) {
                if (posicionPersonaje.x > tecnologias.getBoundingClientRect().x &&
            posicionPersonaje.y > tecnologias.getBoundingClientRect().y &&
            posicionPersonaje.left < tecnologias.getBoundingClientRect().right &&
            posicionPersonaje.top < tecnologias.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorTecnologias">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorTituloTecnologias"><div class="tituloTecnologias">Tecnologias</div></div>
                <div class="parrafoTecnologias"><p>Lenguajes y skill de programacion los cuales manejos sin problema alguno. Uno de los 
                objetivos y metas a cumplir es seguir agregando iconos.</p></div>
                <div class="contenedorLogosTecnologias">
                    <div class="logoJS"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg></div>
                    <div class="logoBootstrap"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"/></svg></div>
                    <div class="logoCSS"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg></div>
                    <div class="logoHtml"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg></div>
                    <div class="logoGit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/></svg></div>
                </div>
                <div class="segundoParrafoTecnologias"><p>Como apasionado del diseño grafico e interfaz de usuario tome como complemento
                aprender herramientas tanto como para diseños en general y manipulacion de imagenes.  
                </p></div>
                <div class="contenedorLogosDiseño">
                    <div class="logoPhotoshop"><img src="file_type_photoshop_icon_130268.png" alt=""></div>
                    <div class="logoIlustrator"><img src="adobe_illustrator_logo_icon_167899.png" alt=""></div>
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
            }, 500);
            
        }else{};
            }
            aparecerTecnologias();

            if (posicionPersonaje.x > proyectos.getBoundingClientRect().x &&
            posicionPersonaje.y > proyectos.getBoundingClientRect().y &&
            posicionPersonaje.left < proyectos.getBoundingClientRect().right &&
            posicionPersonaje.top < proyectos.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorProyectos">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorTituloProyectos"><div class="tituloProyectos">Proyectos</div></div>
                <div class="parrafoProyectos"><p>Proximamente mas proyectos.</p></div>
                <div class="contenedorCuadrosProyectos">
                    <div class="vizualizarProyectos">
                        
                    </div>
                    <div class="cuadrosProyectos aide"><img src="/fotos proyectos/aide/imagen 1.png" alt="">
                    </div>
                    <div class="cuadrosProyectos valgraIndumentaria"> <img src="/fotos proyectos/valgra indumentaria/imagen 1.png" alt=""></div>
                    <div class="cuadrosProyectos sistemaPrestamos"><img src="/fotos proyectos/sistema de prestamos/imagen 1.png" alt=""></div>
                    
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
        
        let aide = document.querySelector(".aide"),
        vizualizarProyectos = document.querySelector(".vizualizarProyectos");
    aide.addEventListener("click", ()=>{
        vizualizarProyectos.innerHTML=`<div class="contenedorAide">
        <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
        <div class="contenedorAideContenido">
            <div class="aideContenidoImg"><img src="/fotos proyectos/aide/imagen 1.png" alt="">
            </div>
            <div class="aideContenido">
                <div class="aideContenidoNombre">Aide Tienda</div>
                <div class="aideContenidoDescripcion">Web para mostrar diferentes categorias de productos de temporadas 
                con su respectivos precios, con boton de comprar que los clientes seran dirigidos 
                a whatsapp para finalizar su compra y ponerse de acuerdo para el punto de entrega.
                (solo disponible en temporada).</div>
                <div class="enlace">
                    <div class="enlaceWeb"><a href="https://davidvg29.github.io/Aide-Tienda/" target="_blank">ver web</a></div>
                    <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Aide-Tienda" target="_blank">ver git hub</a></div>
                </div>
            </div>
        </div>
    </div>`;
    
    let xProyectos = document.querySelector(".xProyectos");
    xProyectos.addEventListener("click", ()=>{
        vizualizarProyectos.innerHTML="";
    })
    });
    let valgraIndumentaria = document.querySelector(".valgraIndumentaria");
valgraIndumentaria.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML=`<div class="contenedorValgraIndumentaria">
    <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
    <div class="contenedorvalgraIndumentariaContenido">
        <div class="valgraIndumentariaContenidoImg"><img src="/fotos proyectos/valgra indumentaria/imagen 1.png" alt="">
        </div>
        <div class="valgraIndumentariaContenido">
            <div class="valgraIndumentariaContenidoNombre">Valgra Indumentaria</div>
            <div class="valgraIndumentariaContenidoDescripcion">Web para mostrar indumentaria con carrousel de fotos, sus precios y 
            carrito de compras para seleccionar productos, talle, cantidad 
            y con link para finalizar el pago.</div>
            <div class="enlace">
                <div class="enlaceWeb"><a href="https://valgra-indumentaria.herokuapp.com/" target="_blank">ver web</a></div>
                <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Valgra-indumentaria" target="_blank">ver git hub</a></div>
            </div>
        </div>
    </div>
</div>`;

let xProyectos = document.querySelector(".xProyectos");
xProyectos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML="";
})
});




let sistemaPrestamos = document.querySelector(".sistemaPrestamos");
sistemaPrestamos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML=`<div class="contenedorSistemaPrestamos">
    <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
    <div class="contenedorSistemaPrestamosContenido">
        <div class="sistemaPrestamosContenidoImg"><img src="/fotos proyectos/sistema de prestamos/imagen 1.png" alt="">
        </div>
        <div class="sistemaPrestamosContenido">
            <div class="sistemaPrestamosContenidoNombre">Sistema de Prestamos</div>
            <div class="sistemaPrestamosContenidoDescripcion">Maquetacion de login para el ingreso a un sistema de prestamos.</div>
            <div class="enlace">
                <div class="enlaceWeb"><a href="https://davidvg29.github.io/Login-sistema-de-prestamos/" target="_blank">ver web</a></div>
                <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Login-sistema-de-prestamos" target="_blank">ver git hub</a></div>
            </div>
        </div>
    </div>
</div>`;

let xProyectos = document.querySelector(".xProyectos");
xProyectos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML="";
})
});
            }, 500);
            
        }else{};

        if (posicionPersonaje.x > curriculum.getBoundingClientRect().x &&
            posicionPersonaje.y > curriculum.getBoundingClientRect().y &&
            posicionPersonaje.left < curriculum.getBoundingClientRect().right &&
            posicionPersonaje.top < curriculum.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorCurriculumBorroso">
                <div class="contenedorCurriculum">
                    <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                    <div class="contenedorEnlaceCv">
                        <div><a href="/CV David valdez gramajo.pdf">ver cv</a></div>
                        <div><a href="/CV David valdez gramajo.pdf" download="">descargar cv</a></div>
                    </div>
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
            }, 500);
            
        }else{};

        if (posicionPersonaje.x > contactarme.getBoundingClientRect().x &&
            posicionPersonaje.y > contactarme.getBoundingClientRect().y &&
            posicionPersonaje.left < contactarme.getBoundingClientRect().right &&
            posicionPersonaje.top < contactarme.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorContactarme">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorTituloContactarme"><div class="tituloContactarme">Contactarme</div></div>
                <div class="parrafoContactarme"><p>¿Quieres tener una charla?. <br> Puedes contactarme por aqui o por algunas de mis redes.</p></div>
                <div class="contenedorForm">
                    <form action="">
                        <input type="text" placeholder="NOMBRE" class="nombreInput"><br>
                        <input type="mail" placeholder="CORREO" class="mailInput"><br>
                        <input type="text" placeholder="INTERES" class="interesInput"><br>
                        <textarea name="" placeholder="MENSAJE"  class="mensajeInput"></textarea>
                        <p class="errorForm"></p>
                        <button class="button">ENVIAR</button>

                    </form>
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
    
        // formulario

    let button = document.querySelector("button");

    button.addEventListener("click", (e)=>{
        e.preventDefault();
        let nombreInput = document.querySelector(".nombreInput"),
            mailInput = document.querySelector(".mailInput"),
            interesInput = document.querySelector(".interesInput"),
            mensajeInput = document.querySelector(".mensajeInput"),
            errorForm = document.querySelector(".errorForm");

            if (nombreInput.value.length < 4 || 
                mailInput.value.length < 4 || 
                interesInput.value.length < 4 || 
                mensajeInput.value.length < 4 ) {
                errorForm.innerHTML=`Ingresar datos validos`;
                // mailInput.style.borderBottom="1px solid rgb(255, 0, 0)";

            }
            else if(nombreInput.value.length > 4 || 
                    mailInput.value.length > 4 || 
                    interesInput.value.length > 4 || 
                    mensajeInput.value.length > 4 ){
                    errorForm.innerHTML="";
                // nombreInput.style.borderBottom="1px solid #DBF227";
            }else{};


            if (nombreInput.value.length < 4) {
                nombreInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (nombreInput.value.length > 4) {
                nombreInput.style.borderBottom="1px solid #DBF227";
            }else{};
            

            if (mailInput.value.length < 4) {
                mailInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (mailInput.value.length > 4) {
                mailInput.style.borderBottom="1px solid #DBF227";
            }else{};
            
            
            if (interesInput.value.length < 4) {
                interesInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (interesInput.value.length > 4) {
                interesInput.style.borderBottom="1px solid #DBF227";
            }else{};

            if (mensajeInput.value.length < 4) {
                mensajeInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (mensajeInput.value.length > 4) {
                mensajeInput.style.borderBottom="1px solid #DBF227";
            }else{};
    })

// fin formulario

    }, 500);
            
        }
});

    a.addEventListener("click", ()=>{
        const {style} = imagenCara;
         let contador = 10,
         posicionPersonaje = imagenCara.getBoundingClientRect(),
         posicionLimite = contenedor3.getBoundingClientRect();

         if (posicionPersonaje.left < posicionLimite.left) {
            contador = 0;}
        style.left= `${parseInt(style.left) - contador}px`;

        function aparecerSobreMi(params) {
            if (posicionPersonaje.x > sobreMi.getBoundingClientRect().x &&
        posicionPersonaje.y > sobreMi.getBoundingClientRect().y &&
        posicionPersonaje.left < sobreMi.getBoundingClientRect().right &&
        posicionPersonaje.top < sobreMi.getBoundingClientRect().bottom) {
        setTimeout(() => {
            let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


            contenedorEtiquetas.innerHTML=`<div class="contenedorSobreMi">
            <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
            <div class="contenedorImgPerfil"><div class="divImgPerfil"><img class="imgPerfil" src="foto  anteojos cv.jpg" alt=""></div></div>
            <div class="profesion">DESARROLLADOR WEB FRONT END</div>
            <div class="parrafo"><p>	Estudiante de sistemas, actualmente enfocado en front end apasionado por el diseño y
            las interfaces graficas, con objetivo de poseer conocimientos solidos sobre back end como tambien 
            en desarrollo mobile tanto como android e ios. Comprometido en cumplir con los requisitos del 
            cliente para su sastifaccion con la terminacion de dicho software.  </p></div>
            <div class="contenedorRedes">
                <div class="redes">
                    <a href="https://www.instagram.com/david_gramajo_/?igshid=YmMyMTA2M2Y=" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
                    <a href="https://github.com/Davidvg29" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
                    <a href="https://www.linkedin.com/in/david-valdez-gramajo-bb86b7204" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
                </div>
            </div>    
        </div>`;
        x = document.querySelector(".x");

        x.addEventListener("click", ()=>{
        contenedorEtiquetas.innerHTML="";
    }); 
        }, 500);
        
    }else{};
        }
        aparecerSobreMi();

        function aparecerTecnologias(params) {
            if (posicionPersonaje.x > tecnologias.getBoundingClientRect().x &&
        posicionPersonaje.y > tecnologias.getBoundingClientRect().y &&
        posicionPersonaje.left < tecnologias.getBoundingClientRect().right &&
        posicionPersonaje.top < tecnologias.getBoundingClientRect().bottom) {
        setTimeout(() => {
            let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


            contenedorEtiquetas.innerHTML=`<div class="contenedorTecnologias">
            <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
            <div class="contenedorTituloTecnologias"><div class="tituloTecnologias">Tecnologias</div></div>
            <div class="parrafoTecnologias"><p>Lenguajes y skill de programacion los cuales manejos sin problema alguno. Uno de los 
            objetivos y metas a cumplir es seguir agregando iconos.
            </p></div>
            <div class="contenedorLogosTecnologias">
                <div class="logoJS"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg></div>
                <div class="logoBootstrap"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"/></svg></div>
                <div class="logoCSS"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg></div>
                <div class="logoHtml"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg></div>
                <div class="logoGit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/></svg></div>
            </div>
            <div class="segundoParrafoTecnologias"><p>Como apasionado del diseño grafico e interfaz de usuario tome como complemento
            aprender herramientas tanto como para diseños en general y manipulacion de imagenes.  
            </p></div>
            <div class="contenedorLogosDiseño">
                <div class="logoPhotoshop"><img src="file_type_photoshop_icon_130268.png" alt=""></div>
                <div class="logoIlustrator"><img src="adobe_illustrator_logo_icon_167899.png" alt=""></div>
            </div>
        </div>`;
        x = document.querySelector(".x");

        x.addEventListener("click", ()=>{
        contenedorEtiquetas.innerHTML="";
    }); 
        }, 500);
        
    }else{};
        }
        aparecerTecnologias();

        if (posicionPersonaje.x > proyectos.getBoundingClientRect().x &&
            posicionPersonaje.y > proyectos.getBoundingClientRect().y &&
            posicionPersonaje.left < proyectos.getBoundingClientRect().right &&
            posicionPersonaje.top < proyectos.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorProyectos">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorTituloProyectos"><div class="tituloProyectos">Proyectos</div></div>
                <div class="parrafoProyectos"><p>Proximamente mas proyectos.</p></div>
                <div class="contenedorCuadrosProyectos">
                    <div class="vizualizarProyectos">
                        
                    </div>
                    <div class="cuadrosProyectos aide"><img src="/fotos proyectos/aide/imagen 1.png" alt="">
                    </div>
                    <div class="cuadrosProyectos valgraIndumentaria"> <img src="/fotos proyectos/valgra indumentaria/imagen 1.png" alt=""></div>
                    <div class="cuadrosProyectos sistemaPrestamos"><img src="/fotos proyectos/sistema de prestamos/imagen 1.png" alt=""></div>
                    
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
        
        let aide = document.querySelector(".aide"),
        vizualizarProyectos = document.querySelector(".vizualizarProyectos");
    aide.addEventListener("click", ()=>{
        vizualizarProyectos.innerHTML=`<div class="contenedorAide">
        <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
        <div class="contenedorAideContenido">
            <div class="aideContenidoImg"><img src="/fotos proyectos/aide/imagen 1.png" alt="">
            </div>
            <div class="aideContenido">
                <div class="aideContenidoNombre">Aide Tienda</div>
                <div class="aideContenidoDescripcion">Web para mostrar diferentes categorias de productos de temporadas 
                con su respectivos precios, con boton de comprar que los clientes seran dirigidos 
                a whatsapp para finalizar su compra y ponerse de acuerdo para el punto de entrega.
                (solo disponible en temporada).</div>
                <div class="enlace">
                    <div class="enlaceWeb"><a href="https://davidvg29.github.io/Aide-Tienda/" target="_blank">ver web</a></div>
                    <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Aide-Tienda" target="_blank">ver git hub</a></div>
                </div>
            </div>
        </div>
    </div>`;
    
    let xProyectos = document.querySelector(".xProyectos");
    xProyectos.addEventListener("click", ()=>{
        vizualizarProyectos.innerHTML="";
    })
    });
    let valgraIndumentaria = document.querySelector(".valgraIndumentaria");
valgraIndumentaria.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML=`<div class="contenedorValgraIndumentaria">
    <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
    <div class="contenedorvalgraIndumentariaContenido">
        <div class="valgraIndumentariaContenidoImg"><img src="/fotos proyectos/valgra indumentaria/imagen 1.png" alt="">
        </div>
        <div class="valgraIndumentariaContenido">
            <div class="valgraIndumentariaContenidoNombre">Valgra Indumentaria</div>
            <div class="valgraIndumentariaContenidoDescripcion">Web para mostrar indumentaria con carrousel de fotos, sus precios y 
            carrito de compras para seleccionar productos, talle, cantidad 
            y con link para finalizar el pago.</div>
            <div class="enlace">
                <div class="enlaceWeb"><a href="https://valgra-indumentaria.herokuapp.com/" target="_blank">ver web</a></div>
                <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Valgra-indumentaria" target="_blank">ver git hub</a></div>
            </div>
        </div>
    </div>
</div>`;

let xProyectos = document.querySelector(".xProyectos");
xProyectos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML="";
})
});




let sistemaPrestamos = document.querySelector(".sistemaPrestamos");
sistemaPrestamos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML=`<div class="contenedorSistemaPrestamos">
    <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
    <div class="contenedorSistemaPrestamosContenido">
        <div class="sistemaPrestamosContenidoImg"><img src="/fotos proyectos/sistema de prestamos/imagen 1.png" alt="">
        </div>
        <div class="sistemaPrestamosContenido">
            <div class="sistemaPrestamosContenidoNombre">Sistema de Prestamos</div>
            <div class="sistemaPrestamosContenidoDescripcion">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad facere, id, perspiciatis delectus reiciendis officiis quos consectetur itaque quasi ex similique libero. At dignissimos praesentium vitae fugiat eos sed aliquid.</div>
            <div class="enlace">
                <div class="enlaceWeb"><a href="#">ver web</a></div>
                <div class="enlaceGitHub"><a href="#">ver git hub</a></div>
            </div>
        </div>
    </div>
</div>`;

let xProyectos = document.querySelector(".xProyectos");
xProyectos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML="";
})
});
            }, 500);
            
        }else{};

        if (posicionPersonaje.x > curriculum.getBoundingClientRect().x &&
            posicionPersonaje.y > curriculum.getBoundingClientRect().y &&
            posicionPersonaje.left < curriculum.getBoundingClientRect().right &&
            posicionPersonaje.top < curriculum.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorCurriculumBorroso">
                <div class="contenedorCurriculum">
                    <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                    <div class="contenedorEnlaceCv">
                        <div><a href="/CV David valdez gramajo.pdf">ver cv</a></div>
                        <div><a href="/CV David valdez gramajo.pdf" download="">descargar cv</a></div>
                    </div>
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
            }, 500);
            
        }else{};

        if (posicionPersonaje.x > contactarme.getBoundingClientRect().x &&
            posicionPersonaje.y > contactarme.getBoundingClientRect().y &&
            posicionPersonaje.left < contactarme.getBoundingClientRect().right &&
            posicionPersonaje.top < contactarme.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorContactarme">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorTituloContactarme"><div class="tituloContactarme">Contactarme</div></div>
                <div class="parrafoContactarme"><p>¿Quieres tener una charla?. <br> Puedes contactarme por aqui o por algunas de mis redes.</p></div>
                <div class="contenedorForm">
                    <form action="">
                        <input type="text" placeholder="NOMBRE" class="nombreInput"><br>
                        <input type="mail" placeholder="CORREO" class="mailInput"><br>
                        <input type="text" placeholder="INTERES" class="interesInput"><br>
                        <textarea name="" placeholder="MENSAJE"  class="mensajeInput"></textarea>
                        <p class="errorForm"></p>
                        <button class="button">ENVIAR</button>

                    </form>
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
    
        // formulario

    let button = document.querySelector("button");

    button.addEventListener("click", (e)=>{
        e.preventDefault();
        let nombreInput = document.querySelector(".nombreInput"),
            mailInput = document.querySelector(".mailInput"),
            interesInput = document.querySelector(".interesInput"),
            mensajeInput = document.querySelector(".mensajeInput"),
            errorForm = document.querySelector(".errorForm");

            if (nombreInput.value.length < 4 || 
                mailInput.value.length < 4 || 
                interesInput.value.length < 4 || 
                mensajeInput.value.length < 4 ) {
                errorForm.innerHTML=`Ingresar datos validos`;
                // mailInput.style.borderBottom="1px solid rgb(255, 0, 0)";

            }
            else if(nombreInput.value.length > 4 || 
                    mailInput.value.length > 4 || 
                    interesInput.value.length > 4 || 
                    mensajeInput.value.length > 4 ){
                    errorForm.innerHTML="";
                // nombreInput.style.borderBottom="1px solid #DBF227";
            }else{};


            if (nombreInput.value.length < 4) {
                nombreInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (nombreInput.value.length > 4) {
                nombreInput.style.borderBottom="1px solid #DBF227";
            }else{};
            

            if (mailInput.value.length < 4) {
                mailInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (mailInput.value.length > 4) {
                mailInput.style.borderBottom="1px solid #DBF227";
            }else{};
            
            
            if (interesInput.value.length < 4) {
                interesInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (interesInput.value.length > 4) {
                interesInput.style.borderBottom="1px solid #DBF227";
            }else{};

            if (mensajeInput.value.length < 4) {
                mensajeInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (mensajeInput.value.length > 4) {
                mensajeInput.style.borderBottom="1px solid #DBF227";
            }else{};
    })

// fin formulario

    }, 500);
            
        }
});

    s.addEventListener("click", ()=>{
        const {style} = imagenCara;
         let contador = 10,
         posicionPersonaje = imagenCara.getBoundingClientRect(),
         posicionLimite = contenedor3.getBoundingClientRect();

         if (posicionPersonaje.bottom > posicionLimite.bottom) {
            contador = 0;}
        style.top= `${parseInt(style.top) + contador}px`;

        function aparecerSobreMi(params) {
            if (posicionPersonaje.x > sobreMi.getBoundingClientRect().x &&
        posicionPersonaje.y > sobreMi.getBoundingClientRect().y &&
        posicionPersonaje.left < sobreMi.getBoundingClientRect().right &&
        posicionPersonaje.top < sobreMi.getBoundingClientRect().bottom) {
        setTimeout(() => {
            let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


            contenedorEtiquetas.innerHTML=`<div class="contenedorSobreMi">
            <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
            <div class="contenedorImgPerfil"><div class="divImgPerfil"><img class="imgPerfil" src="foto  anteojos cv.jpg" alt=""></div></div>
            <div class="profesion">DESARROLLADOR WEB FRONT END</div>
            <div class="parrafo"><p>	Estudiante de sistemas, actualmente enfocado en front end apasionado por el diseño y
            las interfaces graficas, con objetivo de poseer conocimientos solidos sobre back end como tambien 
            en desarrollo mobile tanto como android e ios. Comprometido en cumplir con los requisitos del 
            cliente para su sastifaccion con la terminacion de dicho software.  </p></div>
            <div class="contenedorRedes">
                <div class="redes">
                    <a href="https://www.instagram.com/david_gramajo_/?igshid=YmMyMTA2M2Y=" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
                    <a href="https://github.com/Davidvg29" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
                    <a href="https://www.linkedin.com/in/david-valdez-gramajo-bb86b7204" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
                </div>
            </div>    
        </div>`;
        x = document.querySelector(".x");

        x.addEventListener("click", ()=>{
        contenedorEtiquetas.innerHTML="";
    }); 
        }, 500);
        
    }else{};
        }
        aparecerSobreMi();

        function aparecerTecnologias(params) {
            if (posicionPersonaje.x > tecnologias.getBoundingClientRect().x &&
        posicionPersonaje.y > tecnologias.getBoundingClientRect().y &&
        posicionPersonaje.left < tecnologias.getBoundingClientRect().right &&
        posicionPersonaje.top < tecnologias.getBoundingClientRect().bottom) {
        setTimeout(() => {
            let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


            contenedorEtiquetas.innerHTML=`<div class="contenedorTecnologias">
            <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
            <div class="contenedorTituloTecnologias"><div class="tituloTecnologias">Tecnologias</div></div>
            <div class="parrafoTecnologias"><p>Lenguajes y skill de programacion los cuales manejos sin problema alguno. Uno de los 
            objetivos y metas a cumplir es seguir agregando iconos.
            </p></div>
            <div class="contenedorLogosTecnologias">
                <div class="logoJS"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg></div>
                <div class="logoBootstrap"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"/></svg></div>
                <div class="logoCSS"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg></div>
                <div class="logoHtml"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg></div>
                <div class="logoGit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/></svg></div>
            </div>
            <div class="segundoParrafoTecnologias"><p>Como apasionado del diseño grafico e interfaz de usuario tome como complemento
            aprender herramientas tanto como para diseños en general y manipulacion de imagenes.  </p></div>
            <div class="contenedorLogosDiseño">
                <div class="logoPhotoshop"><img src="file_type_photoshop_icon_130268.png" alt=""></div>
                <div class="logoIlustrator"><img src="adobe_illustrator_logo_icon_167899.png" alt=""></div>
            </div>
        </div>`;
        x = document.querySelector(".x");

        x.addEventListener("click", ()=>{
        contenedorEtiquetas.innerHTML="";
    }); 
        }, 500);
        
    }else{};
        }
        aparecerTecnologias();

        if (posicionPersonaje.x > proyectos.getBoundingClientRect().x &&
            posicionPersonaje.y > proyectos.getBoundingClientRect().y &&
            posicionPersonaje.left < proyectos.getBoundingClientRect().right &&
            posicionPersonaje.top < proyectos.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorProyectos">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorTituloProyectos"><div class="tituloProyectos">Proyectos</div></div>
                <div class="parrafoProyectos"><p>Proximamente mas proyectos.</p></div>
                <div class="contenedorCuadrosProyectos">
                    <div class="vizualizarProyectos">
                        
                    </div>
                    <div class="cuadrosProyectos aide"><img src="/fotos proyectos/aide/imagen 1.png" alt="">
                    </div>
                    <div class="cuadrosProyectos valgraIndumentaria"> <img src="/fotos proyectos/valgra indumentaria/imagen 1.png" alt=""></div>
                    <div class="cuadrosProyectos sistemaPrestamos"><img src="/fotos proyectos/sistema de prestamos/imagen 1.png" alt=""></div>
                    
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
        
        let aide = document.querySelector(".aide"),
        vizualizarProyectos = document.querySelector(".vizualizarProyectos");
    aide.addEventListener("click", ()=>{
        vizualizarProyectos.innerHTML=`<div class="contenedorAide">
        <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
        <div class="contenedorAideContenido">
            <div class="aideContenidoImg"><img src="/fotos proyectos/aide/imagen 1.png" alt="">
            </div>
            <div class="aideContenido">
                <div class="aideContenidoNombre">Aide Tienda</div>
                <div class="aideContenidoDescripcion">Web para mostrar diferentes categorias de productos de temporadas 
                con su respectivos precios, con boton de comprar que los clientes seran dirigidos 
                a whatsapp para finalizar su compra y ponerse de acuerdo para el punto de entrega.
                (solo disponible en temporada).</div>
                <div class="enlace">
                    <div class="enlaceWeb"><a href="https://davidvg29.github.io/Aide-Tienda/" target="_blank">ver web</a></div>
                    <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Aide-Tienda" target="_blank">ver git hub</a></div>
                </div>
            </div>
        </div>
    </div>`;
    
    let xProyectos = document.querySelector(".xProyectos");
    xProyectos.addEventListener("click", ()=>{
        vizualizarProyectos.innerHTML="";
    })
    });
    let valgraIndumentaria = document.querySelector(".valgraIndumentaria");
valgraIndumentaria.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML=`<div class="contenedorValgraIndumentaria">
    <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
    <div class="contenedorvalgraIndumentariaContenido">
        <div class="valgraIndumentariaContenidoImg"><img src="/fotos proyectos/valgra indumentaria/imagen 1.png" alt="">
        </div>
        <div class="valgraIndumentariaContenido">
            <div class="valgraIndumentariaContenidoNombre">Valgra Indumentaria</div>
            <div class="valgraIndumentariaContenidoDescripcion">Web para mostrar indumentaria con carrousel de fotos, sus precios y 
            carrito de compras para seleccionar productos, talle, cantidad 
            y con link para finalizar el pago.</div>
            <div class="enlace">
                <div class="enlaceWeb"><a href="https://valgra-indumentaria.herokuapp.com/" target="_blank">ver web</a></div>
                <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Valgra-indumentaria" target="_blank">ver git hub</a></div>
            </div>
        </div>
    </div>
</div>`;

let xProyectos = document.querySelector(".xProyectos");
xProyectos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML="";
})
});




let sistemaPrestamos = document.querySelector(".sistemaPrestamos");
sistemaPrestamos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML=`<div class="contenedorSistemaPrestamos">
    <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
    <div class="contenedorSistemaPrestamosContenido">
        <div class="sistemaPrestamosContenidoImg"><img src="/fotos proyectos/sistema de prestamos/imagen 1.png" alt="">
        </div>
        <div class="sistemaPrestamosContenido">
            <div class="sistemaPrestamosContenidoNombre">Sistema de Prestamos</div>
            <div class="sistemaPrestamosContenidoDescripcion">Maquetacion de login para el ingreso a un sistema de prestamos.</div>
            <div class="enlace">
                <div class="enlaceWeb"><a href="https://davidvg29.github.io/Login-sistema-de-prestamos/" target="_blank">ver web</a></div>
                <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Login-sistema-de-prestamos" target="_blank">ver git hub</a></div>
            </div>
        </div>
    </div>
</div>`;

let xProyectos = document.querySelector(".xProyectos");
xProyectos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML="";
})
});
            }, 500);
            
        }else{};

        if (posicionPersonaje.x > curriculum.getBoundingClientRect().x &&
            posicionPersonaje.y > curriculum.getBoundingClientRect().y &&
            posicionPersonaje.left < curriculum.getBoundingClientRect().right &&
            posicionPersonaje.top < curriculum.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorCurriculumBorroso">
                <div class="contenedorCurriculum">
                    <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                    <div class="contenedorEnlaceCv">
                        <div><a href="/CV David valdez gramajo.pdf">ver cv</a></div>
                        <div><a href="/CV David valdez gramajo.pdf" download="">descargar cv</a></div>
                    </div>
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
            }, 500);
            
        }else{};

        if (posicionPersonaje.x > contactarme.getBoundingClientRect().x &&
            posicionPersonaje.y > contactarme.getBoundingClientRect().y &&
            posicionPersonaje.left < contactarme.getBoundingClientRect().right &&
            posicionPersonaje.top < contactarme.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorContactarme">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorTituloContactarme"><div class="tituloContactarme">Contactarme</div></div>
                <div class="parrafoContactarme"><p>¿Quieres tener una charla?. <br> Puedes contactarme por aqui o por algunas de mis redes.</p></div>
                <div class="contenedorForm">
                    <form action="">
                        <input type="text" placeholder="NOMBRE" class="nombreInput"><br>
                        <input type="mail" placeholder="CORREO" class="mailInput"><br>
                        <input type="text" placeholder="INTERES" class="interesInput"><br>
                        <textarea name="" placeholder="MENSAJE"  class="mensajeInput"></textarea>
                        <p class="errorForm"></p>
                        <button class="button">ENVIAR</button>

                    </form>
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
    
        // formulario

    let button = document.querySelector("button");

    button.addEventListener("click", (e)=>{
        e.preventDefault();
        let nombreInput = document.querySelector(".nombreInput"),
            mailInput = document.querySelector(".mailInput"),
            interesInput = document.querySelector(".interesInput"),
            mensajeInput = document.querySelector(".mensajeInput"),
            errorForm = document.querySelector(".errorForm");

            if (nombreInput.value.length < 4 || 
                mailInput.value.length < 4 || 
                interesInput.value.length < 4 || 
                mensajeInput.value.length < 4 ) {
                errorForm.innerHTML=`Ingresar datos validos`;
                // mailInput.style.borderBottom="1px solid rgb(255, 0, 0)";

            }
            else if(nombreInput.value.length > 4 || 
                    mailInput.value.length > 4 || 
                    interesInput.value.length > 4 || 
                    mensajeInput.value.length > 4 ){
                    errorForm.innerHTML="";
                // nombreInput.style.borderBottom="1px solid #DBF227";
            }else{};


            if (nombreInput.value.length < 4) {
                nombreInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (nombreInput.value.length > 4) {
                nombreInput.style.borderBottom="1px solid #DBF227";
            }else{};
            

            if (mailInput.value.length < 4) {
                mailInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (mailInput.value.length > 4) {
                mailInput.style.borderBottom="1px solid #DBF227";
            }else{};
            
            
            if (interesInput.value.length < 4) {
                interesInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (interesInput.value.length > 4) {
                interesInput.style.borderBottom="1px solid #DBF227";
            }else{};

            if (mensajeInput.value.length < 4) {
                mensajeInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (mensajeInput.value.length > 4) {
                mensajeInput.style.borderBottom="1px solid #DBF227";
            }else{};
    })

// fin formulario

    }, 500);
            
        }
});

    d.addEventListener("click", ()=>{
        const {style} = imagenCara;
        let contador = 10,
        posicionPersonaje = imagenCara.getBoundingClientRect(),
        posicionLimite = contenedor3.getBoundingClientRect();

        if (posicionPersonaje.left > posicionLimite.width) {
            contador = 0;}
        style.left= `${parseInt(style.left) + contador}px`;

        function aparecerSobreMi(params) {
            if (posicionPersonaje.x > sobreMi.getBoundingClientRect().x &&
        posicionPersonaje.y > sobreMi.getBoundingClientRect().y &&
        posicionPersonaje.left < sobreMi.getBoundingClientRect().right &&
        posicionPersonaje.top < sobreMi.getBoundingClientRect().bottom) {
        setTimeout(() => {
            let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


            contenedorEtiquetas.innerHTML=`<div class="contenedorSobreMi">
            <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
            <div class="contenedorImgPerfil"><div class="divImgPerfil"><img class="imgPerfil" src="foto  anteojos cv.jpg" alt=""></div></div>
            <div class="profesion">DESARROLLADOR WEB FRONT END</div>
            <div class="parrafo"><p>	Estudiante de sistemas, actualmente enfocado en front end apasionado por el diseño y
            las interfaces graficas, con objetivo de poseer conocimientos solidos sobre back end como tambien 
            en desarrollo mobile tanto como android e ios. Comprometido en cumplir con los requisitos del 
            cliente para su sastifaccion con la terminacion de dicho software.  </p></div>
            <div class="contenedorRedes">
                <div class="redes">
                    <a href="https://www.instagram.com/david_gramajo_/?igshid=YmMyMTA2M2Y=" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
                    <a href="https://github.com/Davidvg29" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
                    <a href="https://www.linkedin.com/in/david-valdez-gramajo-bb86b7204" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
                </div>
            </div>    
        </div>`;
        x = document.querySelector(".x");

        x.addEventListener("click", ()=>{
        contenedorEtiquetas.innerHTML="";
    }); 
        }, 500);
        
    }else{};
        }
        aparecerSobreMi();

        function aparecerTecnologias(params) {
            if (posicionPersonaje.x > tecnologias.getBoundingClientRect().x &&
        posicionPersonaje.y > tecnologias.getBoundingClientRect().y &&
        posicionPersonaje.left < tecnologias.getBoundingClientRect().right &&
        posicionPersonaje.top < tecnologias.getBoundingClientRect().bottom) {
        setTimeout(() => {
            let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


            contenedorEtiquetas.innerHTML=`<div class="contenedorTecnologias">
            <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
            <div class="contenedorTituloTecnologias"><div class="tituloTecnologias">Tecnologias</div></div>
            <div class="parrafoTecnologias"><p>Lenguajes y skill de programacion los cuales manejos sin problema alguno. Uno de los 
            objetivos y metas a cumplir es seguir agregando iconos.</p></div>
            <div class="contenedorLogosTecnologias">
                <div class="logoJS"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg></div>
                <div class="logoBootstrap"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"/></svg></div>
                <div class="logoCSS"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg></div>
                <div class="logoHtml"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg></div>
                <div class="logoGit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/></svg></div>
            </div>
            <div class="segundoParrafoTecnologias"><p>Como apasionado del diseño grafico e interfaz de usuario tome como complemento
            aprender herramientas tanto como para diseños en general y manipulacion de imagenes.  </p></div>
            <div class="contenedorLogosDiseño">
                <div class="logoPhotoshop"><img src="file_type_photoshop_icon_130268.png" alt=""></div>
                <div class="logoIlustrator"><img src="adobe_illustrator_logo_icon_167899.png" alt=""></div>
            </div>
        </div>`;
        x = document.querySelector(".x");

        x.addEventListener("click", ()=>{
        contenedorEtiquetas.innerHTML="";
    }); 
        }, 500);
        
    }else{};
        }
        aparecerTecnologias();

        if (posicionPersonaje.x > proyectos.getBoundingClientRect().x &&
            posicionPersonaje.y > proyectos.getBoundingClientRect().y &&
            posicionPersonaje.left < proyectos.getBoundingClientRect().right &&
            posicionPersonaje.top < proyectos.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorProyectos">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorTituloProyectos"><div class="tituloProyectos">Proyectos</div></div>
                <div class="parrafoProyectos"><p>Proximamente mas proyectos.</p></div>
                <div class="contenedorCuadrosProyectos">
                    <div class="vizualizarProyectos">
                        
                    </div>
                    <div class="cuadrosProyectos aide"><img src="/fotos proyectos/aide/imagen 1.png" alt="">
                    </div>
                    <div class="cuadrosProyectos valgraIndumentaria"> <img src="/fotos proyectos/valgra indumentaria/imagen 1.png" alt=""></div>
                    <div class="cuadrosProyectos sistemaPrestamos"><img src="/fotos proyectos/sistema de prestamos/imagen 1.png" alt=""></div>
                    
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
        
        let aide = document.querySelector(".aide"),
        vizualizarProyectos = document.querySelector(".vizualizarProyectos");
    aide.addEventListener("click", ()=>{
        vizualizarProyectos.innerHTML=`<div class="contenedorAide">
        <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
        <div class="contenedorAideContenido">
            <div class="aideContenidoImg"><img src="/fotos proyectos/aide/imagen 1.png" alt="">
            </div>
            <div class="aideContenido">
                <div class="aideContenidoNombre">Aide Tienda</div>
                <div class="aideContenidoDescripcion">Web para mostrar diferentes categorias de productos de temporadas 
                con su respectivos precios, con boton de comprar que los clientes seran dirigidos 
                a whatsapp para finalizar su compra y ponerse de acuerdo para el punto de entrega.
                (solo disponible en temporada).</div>
                <div class="enlace">
                    <div class="enlaceWeb"><a href="https://davidvg29.github.io/Aide-Tienda/" target="_blank">ver web</a></div>
                    <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Aide-Tienda" target="_blank">ver git hub</a></div>
                </div>
            </div>
        </div>
    </div>`;
    
    let xProyectos = document.querySelector(".xProyectos");
    xProyectos.addEventListener("click", ()=>{
        vizualizarProyectos.innerHTML="";
    })
    });
    let valgraIndumentaria = document.querySelector(".valgraIndumentaria");
valgraIndumentaria.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML=`<div class="contenedorValgraIndumentaria">
    <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
    <div class="contenedorvalgraIndumentariaContenido">
        <div class="valgraIndumentariaContenidoImg"><img src="/fotos proyectos/valgra indumentaria/imagen 1.png" alt="">
        </div>
        <div class="valgraIndumentariaContenido">
            <div class="valgraIndumentariaContenidoNombre">Valgra Indumentaria</div>
            <div class="valgraIndumentariaContenidoDescripcion">Web para mostrar indumentaria con carrousel de fotos, sus precios y 
            carrito de compras para seleccionar productos, talle, cantidad 
            y con link para finalizar el pago.</div>
            <div class="enlace">
                <div class="enlaceWeb"><a href="https://valgra-indumentaria.herokuapp.com/" target="_blank">ver web</a></div>
                <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Valgra-indumentaria" target="_blank">ver git hub</a></div>
            </div>
        </div>
    </div>
</div>`;

let xProyectos = document.querySelector(".xProyectos");
xProyectos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML="";
})
});




let sistemaPrestamos = document.querySelector(".sistemaPrestamos");
sistemaPrestamos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML=`<div class="contenedorSistemaPrestamos">
    <div class="contenedorXProyectos"><div class="xProyectos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div></div>
    <div class="contenedorSistemaPrestamosContenido">
        <div class="sistemaPrestamosContenidoImg"><img src="/fotos proyectos/sistema de prestamos/imagen 1.png" alt="">
        </div>
        <div class="sistemaPrestamosContenido">
            <div class="sistemaPrestamosContenidoNombre">Sistema de Prestamos</div>
            <div class="sistemaPrestamosContenidoDescripcion">Maquetacion de login para el ingreso a un sistema de prestamos.</div>
            <div class="enlace">
                <div class="enlaceWeb"><a href="https://davidvg29.github.io/Login-sistema-de-prestamos/" target="_blank">ver web</a></div>
                <div class="enlaceGitHub"><a href="https://github.com/Davidvg29/Login-sistema-de-prestamos" target="_blank">ver git hub</a></div>
            </div>
        </div>
    </div>
</div>`;

let xProyectos = document.querySelector(".xProyectos");
xProyectos.addEventListener("click", ()=>{
    vizualizarProyectos.innerHTML="";
})
});
            }, 500);
            
        }else{};

        if (posicionPersonaje.x > curriculum.getBoundingClientRect().x &&
            posicionPersonaje.y > curriculum.getBoundingClientRect().y &&
            posicionPersonaje.left < curriculum.getBoundingClientRect().right &&
            posicionPersonaje.top < curriculum.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorCurriculumBorroso">
                <div class="contenedorCurriculum">
                    <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                    <div class="contenedorEnlaceCv">
                        <div><a href="/CV David valdez gramajo.pdf">ver cv</a></div>
                        <div><a href="/CV David valdez gramajo.pdf" download="">descargar cv</a></div>
                    </div>
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
            }, 500);
            
        }else{};

        if (posicionPersonaje.x > contactarme.getBoundingClientRect().x &&
            posicionPersonaje.y > contactarme.getBoundingClientRect().y &&
            posicionPersonaje.left < contactarme.getBoundingClientRect().right &&
            posicionPersonaje.top < contactarme.getBoundingClientRect().bottom) {
            setTimeout(() => {
                let contenedorEtiquetas = document.querySelector(".contenedorEtiquetas");


                contenedorEtiquetas.innerHTML=`<div class="contenedorContactarme">
                <div class="contenedorX"><div class="x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div></div>
                <div class="contenedorTituloContactarme"><div class="tituloContactarme">Contactarme</div></div>
                <div class="parrafoContactarme"><p>¿Quieres tener una charla?. <br> Puedes contactarme por aqui o por algunas de mis redes.</p></div>
                <div class="contenedorForm">
                    <form action="">
                        <input type="text" placeholder="NOMBRE" class="nombreInput"><br>
                        <input type="mail" placeholder="CORREO" class="mailInput"><br>
                        <input type="text" placeholder="INTERES" class="interesInput"><br>
                        <textarea name="" placeholder="MENSAJE"  class="mensajeInput"></textarea>
                        <p class="errorForm"></p>
                        <button class="button">ENVIAR</button>

                    </form>
                </div>
            </div>`;
            x = document.querySelector(".x");

            x.addEventListener("click", ()=>{
            contenedorEtiquetas.innerHTML="";
        }); 
    
        // formulario

    let button = document.querySelector("button");

    button.addEventListener("click", (e)=>{
        e.preventDefault();
        let nombreInput = document.querySelector(".nombreInput"),
            mailInput = document.querySelector(".mailInput"),
            interesInput = document.querySelector(".interesInput"),
            mensajeInput = document.querySelector(".mensajeInput"),
            errorForm = document.querySelector(".errorForm");

            if (nombreInput.value.length < 4 || 
                mailInput.value.length < 4 || 
                interesInput.value.length < 4 || 
                mensajeInput.value.length < 4 ) {
                errorForm.innerHTML=`Ingresar datos validos`;
                // mailInput.style.borderBottom="1px solid rgb(255, 0, 0)";

            }
            else if(nombreInput.value.length > 4 || 
                    mailInput.value.length > 4 || 
                    interesInput.value.length > 4 || 
                    mensajeInput.value.length > 4 ){
                    errorForm.innerHTML="";
                // nombreInput.style.borderBottom="1px solid #DBF227";
            }else{};


            if (nombreInput.value.length < 4) {
                nombreInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (nombreInput.value.length > 4) {
                nombreInput.style.borderBottom="1px solid #DBF227";
            }else{};
            

            if (mailInput.value.length < 4) {
                mailInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (mailInput.value.length > 4) {
                mailInput.style.borderBottom="1px solid #DBF227";
            }else{};
            
            
            if (interesInput.value.length < 4) {
                interesInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (interesInput.value.length > 4) {
                interesInput.style.borderBottom="1px solid #DBF227";
            }else{};

            if (mensajeInput.value.length < 4) {
                mensajeInput.style.borderBottom="1px solid rgb(255, 0, 0)";
            }
            else if (mensajeInput.value.length > 4) {
                mensajeInput.style.borderBottom="1px solid #DBF227";
            }else{};
    })

// fin formulario

    }, 500);
            
        }
});




























// particulas
particlesJS({
    "particles": {
      "number": {
        "value": 15,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#dbf227"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 4
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 2.436231636904035,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
// fin particulas