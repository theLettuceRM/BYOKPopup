const popupContainer = document.getElementById("popup-container");
const byokButton = document.getElementById("open-popup");
const popup = document.querySelector(".byok-popup");
/* ----------- Open Popup ----------- */
const showPopup = () => {
sessionStorage.setItem('BYOK Activity', 'Active');
popupContainer.classList.add('show-popup');
byokButton.style.display = 'none';
popup.style.display = 'grid';
console.log('BYOK Activity is set to ' + sessionStorage.getItem('BYOK Activity'));
const closeText = document.getElementById("byok-btm-close");
const closeX = document.getElementById("byok-top-close");
closeText.addEventListener('click', closePopup);
closeX.addEventListener('click', closePopup);
};
byokButton.addEventListener("click", showPopup);
/* ----------- Close Popup ----------- */
const closePopup = () => {
sessionStorage.setItem('BYOK Activity', 'Inactive');
popupContainer.classList.remove('show-popup');
byokButton.style.display = "block";
popup.style.display = "none";
console.log('BYOK Activity is set to ' + sessionStorage.getItem('BYOK Activity'));
}
const byokPopupActivity = () => {
if ((window.innerWidth >= 700) && sessionStorage.getItem('BYOK Activity') === 'Active') {
showPopup();
console.log(window.innerWidth);
console.log('BYOK Activity set to \'Active\' on page load');
return;
}
closePopup();
sessionStorage.setItem('BYOK Activity', 'Inactive');
}
byokPopupActivity();
