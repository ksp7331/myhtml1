let target = document.querySelector('body');

function setColor(color){
    // document.querySelector('body').style.color=color;
    $('body').css('color',color); //jQuery

}

function setBackgroundColor(color){
    // document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor', color);
}

function nightDayHandler(self){    
        if(self.value==='night'){
            setBackgroundColor("black");
            setColor("white");
            self.value='day';
        } else {
            setBackgroundColor("white");
            setColor("black");
            self.value='night';
        }     
}

