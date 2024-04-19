let btnAdoptar= document.getElementById("id-btn1");
btnAdoptar.addEventListener("click",function(){
    
    let confirmar =  confirm("estas seguro?");
    if (confirmar){
        alert("Adopción realizada ¡FELICIDADES!")
    }else{
        alert("Mejor lo piensas un poco más")
    }
    
})
