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