//Barca
let array = ["carru/1.jpg","carru/2.jpg","carru/3.jpg","carru/4.jpg"];
    let im = document.getElementById("foto");
    let cont = 0;

    function anterior(){
        if(cont===0){
            cont = array.length -1;
        }else{
            cont--;
        }
        im.src = array[cont];
    }

    function siguiente(){
        if(cont===array.length -1){
            cont =0;
        }else{
            cont++;
        }
        im.src = array[cont];
    }
//Paris
    let array1 = ["carru1/1.jpg","carru1/2.jpg","carru1/3.jpg","carru1/4.jpg"];
    let im1 = document.getElementById("foto1");
    let cont1 = 0;

    function anterior1(){
        if(cont1===0){
            cont1 = array1.length -1;
        }else{
            cont1--;
        }
        im1.src = array1[cont1];
    }

    function siguiente1(){
        if(cont1===array1.length -1){
            cont1 =0;
        }else{
            cont1++;
        }
        im1.src = array1[cont1];
    }