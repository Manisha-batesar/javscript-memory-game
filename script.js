const emojis=["🥰","🥰","🌹","🌹","🩷","🩷","😂","😂","💍","💍","😡","😡","😎","😎","😵‍💫","😵‍💫"];
var shuf_emojis = emojis.sort(() => (Math.random()  > .5)? 2 : -1);
for(var i=0;i<emojis.length;i++){
    let box = document.createElement('div')
    box.className = 'item';
    box.innerHTML = shuf_emojis[i]
    box.onclick = function(){
        this.classList.add('boxOpen')
        setTimeout(function(){
        if(document.querySelectorAll('.boxOpen').length > 1){
            const box1 = document.querySelectorAll('.boxOpen')[0];
            const box2 = document.querySelectorAll('.boxOpen')[1];
            if(box1.innerHTML === box2.innerHTML) {
                box1.classList.add('boxMatch') 
                box2.classList.add('boxMatch')

                box1.classList.remove ('boxOpen')

                box2.classList.remove ('boxOpen')

                if(document.querySelectorAll('.boxMatch').length == emojis.length){
                    alert("Congratulations You Win 🎉🎉 Press Reset Button And Start Again")
                }
            } 
                else{
                    box1.classList.remove ('boxOpen')

                    box2.classList.remove('boxOpen')
                }
             
        }
        },500)
    }
    document.querySelector('.game').appendChild(box);
}

