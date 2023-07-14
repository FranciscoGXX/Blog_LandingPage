
const HeaderNavBody= document.getElementById("HeaderNavBody");
const ToggleCheck= document.getElementById("Check");

ToggleCheck?.addEventListener("change",e=>{
    HeaderNavBody?.classList.toggle("Header__Nav__Body--Toggle");   
})