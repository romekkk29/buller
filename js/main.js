let sobreNosotros= document.querySelector(".sobreNosotros");
let binevenido= document.querySelector(".binevenido");
let franquicias= document.querySelector(".franquicias");
let experiencia= document.querySelector(".experiencia");
let hr= document.querySelector(".hr");
let texto= document.querySelector(".texto");
let main= document.querySelector(".main");
binevenido.addEventListener("click", function(e){
    e.preventDefault();
    escribirSinDato();

});
franquicias.addEventListener("click", function(e){
    e.preventDefault();
    escribirSinDato2();

});
experiencia.addEventListener("click", function(e){
    e.preventDefault();
    escribirSinDato3();

});

function escribirSinDato(){
    const template =`
     <br>
     <br>
     <br>
     <br>
      <br>
    <p> FALTA INFO, ENTRAR EN SOBRE NOSOTROS PARA VER MAQUETADO, USAR FLECHA PARA IR</p>
    <br>
    <br>
    <br>
     <br>
    
    `;
    const template2 =`
  
    <p> FALTA INFO, ENTRAR EN SOBRE NOSOTROS PARA VER MAQUETADO USAR FLECHA PARA IR</p>
    <a href="#">Ver m&aacutes</a>
   
    
    `;
   main.innerHTML = template;
   texto.innerHTML = template2;
   const template3 =`
  
   

    <hr class="hrBienvenido">
    
    
    `;
   
   hr.innerHTML = template3;

}
function escribirSinDato2(){
    const template =`
     <br>
     <br>
     <br>
     <br>
      <br>
    <p> FALTA INFO, ENTRAR EN SOBRE NOSOTROS PARA VER MAQUETADO</p>
    <br>
    <br>
    <br>
     <br>
    
    `;
    const template2 =`
  
    <p> FALTA INFO, ENTRAR EN SOBRE NOSOTROS PARA VER MAQUETADO</p>
    <a href="#">Ver m&aacutes</a>
   
    
    `;
   main.innerHTML = template;
   texto.innerHTML = template2;
   const template3 =`
  
   

    <hr class="hrFranquicia">
    
    
    `;
   
   hr.innerHTML = template3;

}
function escribirSinDato3(){
    const template =`
     <br>
     <br>
     <br>
     <br>
      <br>
    <p> FALTA INFO, ENTRAR EN SOBRE NOSOTROS PARA VER MAQUETADO</p>
    <br>
    <br>
    <br>
     <br>
    
    `;
    const template2 =`
  
    <p> FALTA INFO, ENTRAR EN SOBRE NOSOTROS PARA VER MAQUETADO</p>
    <a href="#">Ver m&aacutes</a>
   
    
    `;
   main.innerHTML = template;
   texto.innerHTML = template2;
   const template3 =`
  
   

    <hr class="hrExperiencia">
    
    
    `;
   
   hr.innerHTML = template3;

}
sobreNosotros.addEventListener("click", function(){
    escribirHTML();
});
   
function escribirHTML() {

    const miTemplate =`
    
    <div id="este" class="sobreNosotros1">
    <br>
    <br>
    <br>
    <br>
    <p id="ponerNegrita"> BULLER reúne el esfuerzo y conocimiento de tres generaciones dedicadas a la elaboración artesanal de cerveza.</p>
    <img id="boy2" src="img/boy2.png">
    <p>Elaboramos cerveza bajo las más antiguas tradiciones pero con la tecnología y el gusto actual.</p>
    <p>Desarrollamos todas nuestras variedades respetando los tiempos, procesos y temperamento propio de cada variedad para lograr el sabor único que hoy es nuestro sello diferencial.
    </p>
    <br >
    <br class="haceNone">
    <br class="haceNone">
    <br class="haceNone">

    <img id="boy" src="img/boy.png">
   
    <br class="haceNone"><br class="haceNone"><br><br>
     </div>



     <div class="sobreNosotros2">
     <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    
    
    
     <img class="beers" src="img/beers.png">
     <br>
     <img class="beer" src="img/beer.png">
     <br><br><br><br>
     </div>
    
    `;
    main.innerHTML = miTemplate;
    const template2 =`
  
    <p>Pioneros y uno de los fundadores en la elaboracion artesanal de la cerveza en Argentina</p>
    <a href="#este">Ver m&aacutes</a>
   
    
    `;
   
   texto.innerHTML = template2;
   const template3 =`
  
   

    <hr class="hrSobre">
    
    
    `;
   
   hr.innerHTML = template3;

    
}

let cont=1;
 
let atras=document.querySelector("#izquierda");
atras.addEventListener("click",function(e){
    e.preventDefault();
    
    if(cont>0){ cont=cont-1
        renderizar()}
    if(cont==0){
        cont=3;
        renderizar();
        
        
    }
    
    
})
let adelante=document.querySelector("#derecha");
adelante.addEventListener("click",function(e){
    e.preventDefault();
    if(cont==3){
        renderizar();
        cont=0;
        
    }
    if(cont<3){
        
        cont=cont+1;
        renderizar()
        
        }
    
  
})
function renderizar(){
    if(cont==0){
    escribirSinDato();
}
if(cont==1){
    escribirHTML();
}
if(cont==2){
    escribirSinDato2();
}
if(cont==3){
    escribirSinDato3();
}
console.log(cont);}
document.addEventListener("DOMContentLoaded", ()=>{
    renderizar();
})

