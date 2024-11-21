const sideNav = document.querySelector('.side-navbar');
const openSideNav = document.getElementById('openSideNav');
const closeSideNav = document.getElementById('closeSideNav');

openSideNav.onclick = function(){
    sideNav.style.display = 'flex';
}

closeSideNav.onclick = function(){
    sideNav.style.display = 'none';
}

window.onclick = function(e){
    if(e.target == sideNav){
        sideNav.style.display = 'none';
    }
}