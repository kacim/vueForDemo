export default function(){
let screenWidth = parseInt(document.body.clientWidth);
let fontSize = parseInt(screenWidth/1080*100);
document.documentElement.style.fontSize = fontSize + 'px';
}