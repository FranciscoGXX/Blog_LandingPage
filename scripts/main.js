var HeaderNavBody = document.getElementById("HeaderNavBody");
var ToggleCheck = document.getElementById("Check");
ToggleCheck === null || ToggleCheck === void 0 ? void 0 : ToggleCheck.addEventListener("change", function (e) {
    HeaderNavBody === null || HeaderNavBody === void 0 ? void 0 : HeaderNavBody.classList.toggle("Header__Nav__Body--Toggle");
});
