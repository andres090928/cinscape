function caratula(){
    let caratula= document.getElementById("modal-pelicula");
    caratula.classList.add("active"); 
}
function cerrar(){
    let cerrar= document.getElementById("modal-pelicula");
    cerrar.classList.remove("active"); 
}
function PanelLateral(){
    let panel= document.getElementById("Panel-lateral");
    panel.classList.add("active"); 
}
function cerrar2(){
    let panel= document.getElementById("Panel-lateral");
    panel.classList.remove("active"); 
}
function aventuras(){
    let filtro= document.querySelector("button");
    filtro.classList.add("active1"); 
    let filtro2= document.getElementById("anime");
    filtro2.classList.remove("active2");
    let filtro3= document.getElementById("drama");
    filtro3.classList.remove("active3");
    var imagen = document.getElementById("imagen1");
        imagen.src = "img/guardianes3.jpg";
    var imagen2 = document.getElementById("imagen2");
        imagen2.src = "img/mariobros.jpg";
    var imagen3 = document.getElementById("imagen3");
        imagen3.src = "img/flash.jpg";
    var imagen4 = document.getElementById("imagen4");
        imagen4.src = "img/dungeons.jpg";
    var imagen5 = document.getElementById("imagen5");
        imagen5.src = "img/flash.jpg";
    var imagen6 = document.getElementById("imagen6");
        imagen6.src = "img/megalodon.jpg"; 
    var imagen7 = document.getElementById("imagen7");
        imagen7.src = "img/barbie.jpeg"; 
}
function animadas(){
    let filtro= document.querySelector("button");
    filtro.classList.remove("active1"); 
    let filtro2= document.getElementById("anime");
    filtro2.classList.add("active2");
    let filtro3= document.getElementById("drama");
    filtro3.classList.remove("active3");
    var imagen = document.getElementById("imagen1");
            imagen.src = "img/chicken_run_dawn_of_the_nugget_ver9.jpg";
    var imagen2 = document.getElementById("imagen2");
            imagen2.src = "img/Craig_of_the_Creek_Key_Art.jpg";
    var imagen3 = document.getElementById("imagen3");
            imagen3.src = "img/Elemental.jpg";
    var imagen4 = document.getElementById("imagen4");
            imagen4.src = "img/Gilgamesh-poster.jpg";
    var imagen5 = document.getElementById("imagen5");
            imagen5.src = "img/Migration.jpg";
    var imagen6 = document.getElementById("imagen6");
            imagen6.src = "img/Spider_Man_Across_the_Spider_Verse.jpg"; 
    var imagen7 = document.getElementById("imagen7");
            imagen7.src = "img/Trolls_3.jpg";                           
}
function drama(){
    let filtro= document.querySelector("button");
    filtro.classList.remove("active1"); 
    let filtro2= document.getElementById("anime");
    filtro2.classList.remove("active2");
    let filtro3= document.getElementById("drama");
    filtro3.classList.add("active3");
    var imagen = document.getElementById("imagen1");
        imagen.src = "img/megalodon.jpg";
    var imagen2 = document.getElementById("imagen2");
        imagen2.src = "img/wonka_drama.jpg";
    var imagen3 = document.getElementById("imagen3");
        imagen3.src = "img/till_drama.jpg";
    var imagen4 = document.getElementById("imagen4");
        imagen4.src = "img/the_whale_drama.jpg";
    var imagen5 = document.getElementById("imagen5");
        imagen5.src = "img/Napoleon_drama.jpg";
    var imagen6 = document.getElementById("imagen6");
        imagen6.src = "img/killersflowermoon_drama.jpg"; 
    var imagen7 = document.getElementById("imagen7");
        imagen7.src = "img/fabelman_drama.jpg";                           
}


