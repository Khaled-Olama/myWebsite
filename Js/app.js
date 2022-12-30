// toggle bar button




// scroll button
let scroll_btn = document.getElementById('scroll_btn');
window.onscroll = function(){
    if(scrollY >= 400){
        scroll_btn.style.display = 'block';
    }else{
        scroll_btn.style.display = 'none';
    }
}
scroll_btn.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}