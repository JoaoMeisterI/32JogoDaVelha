
let casa1 = document.getElementById("bloco1")
let casa2 = document.getElementById("bloco2")
let casa3 = document.getElementById("bloco3")
let casa4 = document.getElementById("bloco4")
let casa5 = document.getElementById("bloco5")
let casa6 = document.getElementById("bloco6")
let casa7 = document.getElementById("bloco7")
let casa8 = document.getElementById("bloco8")
let casa9 = document.getElementById("bloco9")
var cont = 0



let arrayJogo =[ [casa1, casa2, casa3] ,
                 [casa4, casa5, casa6] ,
                 [casa7, casa8, casa9] ]


// "o" vai ser 0 e x vai ser 1
document.getElementById("bloco1").onclick = function(){
    cont++
    if(arrayJogo[0][0] == "[object HTMLDivElement]"){
        if(cont % 2 == 0){
            document.getElementById("bloco1").innerHTML = "X"
            casa1.style.background = "#F4FDD9"
            arrayJogo[0][0] = 1
        }else{
            document.getElementById("bloco1").innerHTML = "O"
            arrayJogo[0][0] = 0
            casa1.style.background = "#FFE8C2"
        }
    }else{
        alert("esse elemento já está prenchido")
        cont--
    
        
        
    }if(cont > 3){
        if (
            // verifica linhas horizontais
            (arrayJogo[0][0] === 0 && arrayJogo[0][1] === 0 && arrayJogo[0][2] === 0) ||
            (arrayJogo[1][0] === 0 && arrayJogo[1][1] === 0 && arrayJogo[1][2] === 0) ||
            (arrayJogo[2][0] === 0 && arrayJogo[2][1] === 0 && arrayJogo[2][2] === 0) ||
        
            // verifica linhas verticais
            (arrayJogo[0][0] === 0 && arrayJogo[1][0] === 0 && arrayJogo[2][0] === 0) ||
            (arrayJogo[0][1] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][1] === 0) ||
            (arrayJogo[0][2] === 0 && arrayJogo[1][2] === 0 && arrayJogo[2][2] === 0) ||
        
            // verifica diagonais
            (arrayJogo[0][0] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][2] === 0) ||
            (arrayJogo[0][2] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][0] === 0)
        ) {
            alert("Quem escolheu o circulo ganhou");
            location.reload();
        }
        else if (
            // verifica linhas horizontais
            (arrayJogo[0][0] === 1 && arrayJogo[0][1] === 1 && arrayJogo[0][2] === 1) ||
            (arrayJogo[1][0] === 1 && arrayJogo[1][1] === 1 && arrayJogo[1][2] === 1) ||
            (arrayJogo[2][0] === 1 && arrayJogo[2][1] === 1 && arrayJogo[2][2] === 1) ||
          
            // verifica linhas verticais
            (arrayJogo[0][0] === 1 && arrayJogo[1][0] === 1 && arrayJogo[2][0] === 1) ||
            (arrayJogo[0][1] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][1] === 1) ||
            (arrayJogo[0][2] === 1 && arrayJogo[1][2] === 1 && arrayJogo[2][2] === 1) ||
          
            // verifica diagonais
            (arrayJogo[0][0] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][2] === 1) ||
            (arrayJogo[0][2] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][0] === 1)
          ) {
            alert("Quem escolheu o X ganhou");
            location.reload();
          }
        else if(cont == 9){
            alert("deu velha")
            location.reload();
        }          

        
    }
}


document.getElementById("bloco2").onclick = function(){
    cont++
    if(arrayJogo[0][1] == "[object HTMLDivElement]"){
        if(cont % 2 == 0){
            document.getElementById("bloco2").innerHTML = "X"
            arrayJogo[0][1] = 1
            casa2.style.background = "#F4FDD9"
        }else{
            document.getElementById("bloco2").innerHTML = "O"
            arrayJogo[0][1] = 0
            casa2.style.background = "#FFE8C2"
        }
    }else{
        alert("esse elemento já está prenchido")
        cont--
        
    }if(cont > 3){
        if (
            // verifica linhas horizontais
            (arrayJogo[0][0] === 0 && arrayJogo[0][1] === 0 && arrayJogo[0][2] === 0) ||
            (arrayJogo[1][0] === 0 && arrayJogo[1][1] === 0 && arrayJogo[1][2] === 0) ||
            (arrayJogo[2][0] === 0 && arrayJogo[2][1] === 0 && arrayJogo[2][2] === 0) ||
        
            // verifica linhas verticais
            (arrayJogo[0][0] === 0 && arrayJogo[1][0] === 0 && arrayJogo[2][0] === 0) ||
            (arrayJogo[0][1] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][1] === 0) ||
            (arrayJogo[0][2] === 0 && arrayJogo[1][2] === 0 && arrayJogo[2][2] === 0) ||
        
            // verifica diagonais
            (arrayJogo[0][0] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][2] === 0) ||
            (arrayJogo[0][2] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][0] === 0)
        ) {
            alert("Quem escolheu o circulo ganhou");
            location.reload();
        }
        else if (
            // verifica linhas horizontais
            (arrayJogo[0][0] === 1 && arrayJogo[0][1] === 1 && arrayJogo[0][2] === 1) ||
            (arrayJogo[1][0] === 1 && arrayJogo[1][1] === 1 && arrayJogo[1][2] === 1) ||
            (arrayJogo[2][0] === 1 && arrayJogo[2][1] === 1 && arrayJogo[2][2] === 1) ||
          
            // verifica linhas verticais
            (arrayJogo[0][0] === 1 && arrayJogo[1][0] === 1 && arrayJogo[2][0] === 1) ||
            (arrayJogo[0][1] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][1] === 1) ||
            (arrayJogo[0][2] === 1 && arrayJogo[1][2] === 1 && arrayJogo[2][2] === 1) ||
          
            // verifica diagonais
            (arrayJogo[0][0] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][2] === 1) ||
            (arrayJogo[0][2] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][0] === 1)
          ) {
            alert("Quem escolheu o X ganhou");
            location.reload();
          }
        else if(cont == 9){
            alert("deu velha")
            location.reload();
        }          

        
    }
}

document.getElementById("bloco3").onclick = function(){
    cont++
    if(arrayJogo[0][2] == "[object HTMLDivElement]"){
        if(cont % 2 == 0){
            document.getElementById("bloco3").innerHTML = "X"
            arrayJogo[0][2] = 1
            casa3.style.background = "#F4FDD9"
        }else{
            document.getElementById("bloco3").innerHTML = "O"
            arrayJogo[0][2] = 0
            casa3.style.background = "#FFE8C2"
        }
    }else{
        alert("esse elemento já está prenchido")
        cont--
 
        
    }if(cont > 3){
        if (
            // verifica linhas horizontais
            (arrayJogo[0][0] === 0 && arrayJogo[0][1] === 0 && arrayJogo[0][2] === 0) ||
            (arrayJogo[1][0] === 0 && arrayJogo[1][1] === 0 && arrayJogo[1][2] === 0) ||
            (arrayJogo[2][0] === 0 && arrayJogo[2][1] === 0 && arrayJogo[2][2] === 0) ||
        
            // verifica linhas verticais
            (arrayJogo[0][0] === 0 && arrayJogo[1][0] === 0 && arrayJogo[2][0] === 0) ||
            (arrayJogo[0][1] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][1] === 0) ||
            (arrayJogo[0][2] === 0 && arrayJogo[1][2] === 0 && arrayJogo[2][2] === 0) ||
        
            // verifica diagonais
            (arrayJogo[0][0] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][2] === 0) ||
            (arrayJogo[0][2] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][0] === 0)
        ) {
            alert("Quem escolheu o circulo ganhou");
            location.reload();
        }
        else if (
            // verifica linhas horizontais
            (arrayJogo[0][0] === 1 && arrayJogo[0][1] === 1 && arrayJogo[0][2] === 1) ||
            (arrayJogo[1][0] === 1 && arrayJogo[1][1] === 1 && arrayJogo[1][2] === 1) ||
            (arrayJogo[2][0] === 1 && arrayJogo[2][1] === 1 && arrayJogo[2][2] === 1) ||
          
            // verifica linhas verticais
            (arrayJogo[0][0] === 1 && arrayJogo[1][0] === 1 && arrayJogo[2][0] === 1) ||
            (arrayJogo[0][1] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][1] === 1) ||
            (arrayJogo[0][2] === 1 && arrayJogo[1][2] === 1 && arrayJogo[2][2] === 1) ||
          
            // verifica diagonais
            (arrayJogo[0][0] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][2] === 1) ||
            (arrayJogo[0][2] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][0] === 1)
          ) {
            alert("Quem escolheu o X ganhou");
            location.reload();
          }
        else if(cont == 9){
            alert("deu velha")
            location.reload();
        }          

        
    }

}

document.getElementById("bloco4").onclick = function(){
    cont++
    if(arrayJogo[1][0] == "[object HTMLDivElement]"){
        if(cont % 2 == 0){
            document.getElementById("bloco4").innerHTML = "X"
            arrayJogo[1][0] = 1
            casa4.style.background = "#F4FDD9"
        }else{
            document.getElementById("bloco4").innerHTML = "O"
            arrayJogo[1][0] = 0
            casa4.style.background = "#FFE8C2"
        }
    }else{
        alert("esse elemento já está prenchido")
        cont--
 
        
    }if(cont > 3){
        if (
            // verifica linhas horizontais
            (arrayJogo[0][0] === 0 && arrayJogo[0][1] === 0 && arrayJogo[0][2] === 0) ||
            (arrayJogo[1][0] === 0 && arrayJogo[1][1] === 0 && arrayJogo[1][2] === 0) ||
            (arrayJogo[2][0] === 0 && arrayJogo[2][1] === 0 && arrayJogo[2][2] === 0) ||
        
            // verifica linhas verticais
            (arrayJogo[0][0] === 0 && arrayJogo[1][0] === 0 && arrayJogo[2][0] === 0) ||
            (arrayJogo[0][1] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][1] === 0) ||
            (arrayJogo[0][2] === 0 && arrayJogo[1][2] === 0 && arrayJogo[2][2] === 0) ||
        
            // verifica diagonais
            (arrayJogo[0][0] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][2] === 0) ||
            (arrayJogo[0][2] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][0] === 0)
        ) {
            alert("Quem escolheu o circulo ganhou");
            location.reload();
        }
        else if (
            // verifica linhas horizontais
            (arrayJogo[0][0] === 1 && arrayJogo[0][1] === 1 && arrayJogo[0][2] === 1) ||
            (arrayJogo[1][0] === 1 && arrayJogo[1][1] === 1 && arrayJogo[1][2] === 1) ||
            (arrayJogo[2][0] === 1 && arrayJogo[2][1] === 1 && arrayJogo[2][2] === 1) ||
          
            // verifica linhas verticais
            (arrayJogo[0][0] === 1 && arrayJogo[1][0] === 1 && arrayJogo[2][0] === 1) ||
            (arrayJogo[0][1] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][1] === 1) ||
            (arrayJogo[0][2] === 1 && arrayJogo[1][2] === 1 && arrayJogo[2][2] === 1) ||
          
            // verifica diagonais
            (arrayJogo[0][0] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][2] === 1) ||
            (arrayJogo[0][2] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][0] === 1)
          ) {
            alert("Quem escolheu o X ganhou");
            location.reload();
          }
        else if(cont == 9){
            alert("deu velha")
            location.reload();
        }          

        
    }

}

document.getElementById("bloco5").onclick = function(){
    cont++
    if(arrayJogo[1][1] == "[object HTMLDivElement]"){
        if(cont % 2 == 0){
            document.getElementById("bloco5").innerHTML = "X"
            arrayJogo[1][1] = 1
            casa5.style.background = "#F4FDD9"
        }else{
            document.getElementById("bloco5").innerHTML = "O"
            arrayJogo[1][1] = 0
            casa5.style.background = "#FFE8C2"
        }
    }else{
        alert("esse elemento já está prenchido")
        cont--
        
        
    }if(cont > 3){
        if (
            // verifica linhas horizontais
            (arrayJogo[0][0] === 0 && arrayJogo[0][1] === 0 && arrayJogo[0][2] === 0) ||
            (arrayJogo[1][0] === 0 && arrayJogo[1][1] === 0 && arrayJogo[1][2] === 0) ||
            (arrayJogo[2][0] === 0 && arrayJogo[2][1] === 0 && arrayJogo[2][2] === 0) ||
        
            // verifica linhas verticais
            (arrayJogo[0][0] === 0 && arrayJogo[1][0] === 0 && arrayJogo[2][0] === 0) ||
            (arrayJogo[0][1] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][1] === 0) ||
            (arrayJogo[0][2] === 0 && arrayJogo[1][2] === 0 && arrayJogo[2][2] === 0) ||
        
            // verifica diagonais
            (arrayJogo[0][0] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][2] === 0) ||
            (arrayJogo[0][2] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][0] === 0)
        ) {
            alert("Quem escolheu o circulo ganhou");
            location.reload();
        }
        else if (
            // verifica linhas horizontais
            (arrayJogo[0][0] === 1 && arrayJogo[0][1] === 1 && arrayJogo[0][2] === 1) ||
            (arrayJogo[1][0] === 1 && arrayJogo[1][1] === 1 && arrayJogo[1][2] === 1) ||
            (arrayJogo[2][0] === 1 && arrayJogo[2][1] === 1 && arrayJogo[2][2] === 1) ||
          
            // verifica linhas verticais
            (arrayJogo[0][0] === 1 && arrayJogo[1][0] === 1 && arrayJogo[2][0] === 1) ||
            (arrayJogo[0][1] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][1] === 1) ||
            (arrayJogo[0][2] === 1 && arrayJogo[1][2] === 1 && arrayJogo[2][2] === 1) ||
          
            // verifica diagonais
            (arrayJogo[0][0] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][2] === 1) ||
            (arrayJogo[0][2] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][0] === 1)
          ) {
            alert("Quem escolheu o X ganhou");
            location.reload();
          }
          else if(cont == 9){
            alert("deu velha")
            location.reload();
        }          

        
    }

}



document.getElementById("bloco6").onclick = function(){
    cont++
    if(arrayJogo[1][2] == "[object HTMLDivElement]"){
        if(cont % 2 == 0){
            document.getElementById("bloco6").innerHTML = "X"
            arrayJogo[1][2] = 1
            casa6.style.background = "#F4FDD9"
        }else{
            document.getElementById("bloco6").innerHTML = "O"
            arrayJogo[1][2] = 0
            casa6.style.background = "#FFE8C2"
        }
    }else{
        alert("esse elemento já está prenchido")
        cont--
        
        
    }if(cont > 3){
        if (
            // verifica linhas horizontais
            (arrayJogo[0][0] === 0 && arrayJogo[0][1] === 0 && arrayJogo[0][2] === 0) ||
            (arrayJogo[1][0] === 0 && arrayJogo[1][1] === 0 && arrayJogo[1][2] === 0) ||
            (arrayJogo[2][0] === 0 && arrayJogo[2][1] === 0 && arrayJogo[2][2] === 0) ||
        
            // verifica linhas verticais
            (arrayJogo[0][0] === 0 && arrayJogo[1][0] === 0 && arrayJogo[2][0] === 0) ||
            (arrayJogo[0][1] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][1] === 0) ||
            (arrayJogo[0][2] === 0 && arrayJogo[1][2] === 0 && arrayJogo[2][2] === 0) ||
        
            // verifica diagonais
            (arrayJogo[0][0] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][2] === 0) ||
            (arrayJogo[0][2] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][0] === 0)
        ) {
            alert("Quem escolheu o circulo ganhou");
            location.reload();
        }
        else if (
            // verifica linhas horizontais
            (arrayJogo[0][0] === 1 && arrayJogo[0][1] === 1 && arrayJogo[0][2] === 1) ||
            (arrayJogo[1][0] === 1 && arrayJogo[1][1] === 1 && arrayJogo[1][2] === 1) ||
            (arrayJogo[2][0] === 1 && arrayJogo[2][1] === 1 && arrayJogo[2][2] === 1) ||
          
            // verifica linhas verticais
            (arrayJogo[0][0] === 1 && arrayJogo[1][0] === 1 && arrayJogo[2][0] === 1) ||
            (arrayJogo[0][1] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][1] === 1) ||
            (arrayJogo[0][2] === 1 && arrayJogo[1][2] === 1 && arrayJogo[2][2] === 1) ||
          
            // verifica diagonais
            (arrayJogo[0][0] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][2] === 1) ||
            (arrayJogo[0][2] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][0] === 1)
          ) {
            alert("Quem escolheu o X ganhou");
            location.reload();
          }
          else if(cont == 9){
            alert("deu velha")
            location.reload();
        }          

        
    }

}

document.getElementById("bloco7").onclick = function(){
    cont++
    if(arrayJogo[2][0] == "[object HTMLDivElement]"){
        if(cont % 2 == 0){
            document.getElementById("bloco7").innerHTML = "X"
            arrayJogo[2][0] = 1
            casa7.style.background = "#FFE8C2"
        }else{
            document.getElementById("bloco7").innerHTML = "O"
            arrayJogo[2][0] = 0
            casa7.style.background = "#FFE8C2"
        }
    }else{
        alert("esse elemento já está prenchido")
        cont--
        
        
    }if(cont > 3){
        if (
            // verifica linhas horizontais
            (arrayJogo[0][0] === 0 && arrayJogo[0][1] === 0 && arrayJogo[0][2] === 0) ||
            (arrayJogo[1][0] === 0 && arrayJogo[1][1] === 0 && arrayJogo[1][2] === 0) ||
            (arrayJogo[2][0] === 0 && arrayJogo[2][1] === 0 && arrayJogo[2][2] === 0) ||
        
            // verifica linhas verticais
            (arrayJogo[0][0] === 0 && arrayJogo[1][0] === 0 && arrayJogo[2][0] === 0) ||
            (arrayJogo[0][1] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][1] === 0) ||
            (arrayJogo[0][2] === 0 && arrayJogo[1][2] === 0 && arrayJogo[2][2] === 0) ||
        
            // verifica diagonais
            (arrayJogo[0][0] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][2] === 0) ||
            (arrayJogo[0][2] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][0] === 0)
        ) {
            alert("Quem escolheu o circulo ganhou");
            location.reload();
        }
        else if (
            // verifica linhas horizontais
            (arrayJogo[0][0] === 1 && arrayJogo[0][1] === 1 && arrayJogo[0][2] === 1) ||
            (arrayJogo[1][0] === 1 && arrayJogo[1][1] === 1 && arrayJogo[1][2] === 1) ||
            (arrayJogo[2][0] === 1 && arrayJogo[2][1] === 1 && arrayJogo[2][2] === 1) ||
          
            // verifica linhas verticais
            (arrayJogo[0][0] === 1 && arrayJogo[1][0] === 1 && arrayJogo[2][0] === 1) ||
            (arrayJogo[0][1] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][1] === 1) ||
            (arrayJogo[0][2] === 1 && arrayJogo[1][2] === 1 && arrayJogo[2][2] === 1) ||
          
            // verifica diagonais
            (arrayJogo[0][0] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][2] === 1) ||
            (arrayJogo[0][2] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][0] === 1)
          ) {
            alert("Quem escolheu o X ganhou");
            location.reload();
          }
          else if(cont == 9){
            alert("deu velha")
            location.reload();
        }          

        
    }

}


document.getElementById("bloco8").onclick = function(){
    cont++
    if(arrayJogo[2][1] == "[object HTMLDivElement]"){
        if(cont % 2 == 0){
            document.getElementById("bloco8").innerHTML = "X"
            arrayJogo[2][1] = 1
            casa8.style.background = "#F4FDD9"
        }else{
            document.getElementById("bloco8").innerHTML = "O"
            arrayJogo[2][1] = 0
            casa8.style.background = "#FFE8C2"
        }
    }else{
        alert("esse elemento já está prenchido")
        cont--
        
        
    }if(cont > 3){
        if (
            // verifica linhas horizontais
            (arrayJogo[0][0] === 0 && arrayJogo[0][1] === 0 && arrayJogo[0][2] === 0) ||
            (arrayJogo[1][0] === 0 && arrayJogo[1][1] === 0 && arrayJogo[1][2] === 0) ||
            (arrayJogo[2][0] === 0 && arrayJogo[2][1] === 0 && arrayJogo[2][2] === 0) ||
        
            // verifica linhas verticais
            (arrayJogo[0][0] === 0 && arrayJogo[1][0] === 0 && arrayJogo[2][0] === 0) ||
            (arrayJogo[0][1] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][1] === 0) ||
            (arrayJogo[0][2] === 0 && arrayJogo[1][2] === 0 && arrayJogo[2][2] === 0) ||
        
            // verifica diagonais
            (arrayJogo[0][0] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][2] === 0) ||
            (arrayJogo[0][2] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][0] === 0)
        ) {
            alert("Quem escolheu o circulo ganhou");
            location.reload();
        }
        else if (
            // verifica linhas horizontais
            (arrayJogo[0][0] === 1 && arrayJogo[0][1] === 1 && arrayJogo[0][2] === 1) ||
            (arrayJogo[1][0] === 1 && arrayJogo[1][1] === 1 && arrayJogo[1][2] === 1) ||
            (arrayJogo[2][0] === 1 && arrayJogo[2][1] === 1 && arrayJogo[2][2] === 1) ||
          
            // verifica linhas verticais
            (arrayJogo[0][0] === 1 && arrayJogo[1][0] === 1 && arrayJogo[2][0] === 1) ||
            (arrayJogo[0][1] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][1] === 1) ||
            (arrayJogo[0][2] === 1 && arrayJogo[1][2] === 1 && arrayJogo[2][2] === 1) ||
          
            // verifica diagonais
            (arrayJogo[0][0] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][2] === 1) ||
            (arrayJogo[0][2] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][0] === 1)
          ) {
            alert("Quem escolheu o X ganhou");
            location.reload();
          }
          else if(cont == 9){
            alert("deu velha")
            location.reload();
        }          

        
    }

}


document.getElementById("bloco9").onclick = function(){
    cont++
    if(arrayJogo[2][2] == "[object HTMLDivElement]"){
        if(cont % 2 == 0){
            document.getElementById("bloco9").innerHTML = "X"
            arrayJogo[2][2] = 1
            casa9.style.background = "#F4FDD9"
        }else{
            document.getElementById("bloco9").innerHTML = "O"
            arrayJogo[2][2] = 0
            casa9.style.background = "#FFE8C2"
        }
    }else{
        alert("esse elemento já está prenchido")
        cont--
       
        
        
    }if(cont > 3){
        if (
            // verifica linhas horizontais
            (arrayJogo[0][0] === 0 && arrayJogo[0][1] === 0 && arrayJogo[0][2] === 0) ||
            (arrayJogo[1][0] === 0 && arrayJogo[1][1] === 0 && arrayJogo[1][2] === 0) ||
            (arrayJogo[2][0] === 0 && arrayJogo[2][1] === 0 && arrayJogo[2][2] === 0) ||
        
            // verifica linhas verticais
            (arrayJogo[0][0] === 0 && arrayJogo[1][0] === 0 && arrayJogo[2][0] === 0) ||
            (arrayJogo[0][1] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][1] === 0) ||
            (arrayJogo[0][2] === 0 && arrayJogo[1][2] === 0 && arrayJogo[2][2] === 0) ||
        
            // verifica diagonais
            (arrayJogo[0][0] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][2] === 0) ||
            (arrayJogo[0][2] === 0 && arrayJogo[1][1] === 0 && arrayJogo[2][0] === 0)
        ) {
            alert("Quem escolheu o circulo ganhou");
            location.reload();
        }
        else if (
            // verifica linhas horizontais
            (arrayJogo[0][0] === 1 && arrayJogo[0][1] === 1 && arrayJogo[0][2] === 1) ||
            (arrayJogo[1][0] === 1 && arrayJogo[1][1] === 1 && arrayJogo[1][2] === 1) ||
            (arrayJogo[2][0] === 1 && arrayJogo[2][1] === 1 && arrayJogo[2][2] === 1) ||
          
            // verifica linhas verticais
            (arrayJogo[0][0] === 1 && arrayJogo[1][0] === 1 && arrayJogo[2][0] === 1) ||
            (arrayJogo[0][1] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][1] === 1) ||
            (arrayJogo[0][2] === 1 && arrayJogo[1][2] === 1 && arrayJogo[2][2] === 1) ||
          
            // verifica diagonais
            (arrayJogo[0][0] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][2] === 1) ||
            (arrayJogo[0][2] === 1 && arrayJogo[1][1] === 1 && arrayJogo[2][0] === 1)
          ) {
            alert("Quem escolheu o X ganhou");
            location.reload();
          }
        else if(cont == 9){
            alert("deu velha")
            location.reload();
        }          

        
    }

}














// "[object HTMLDivElement]"