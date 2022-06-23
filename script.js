const input = document.querySelector('#form1');
input.addEventListener('submit', () => {
    alert("Submitted!");
});
    

document.querySelector('#name').focus();


document.body.addEventListener('copy', (e) => {
    e.preventDefault();
    alert("You can't copy text!");
})

alert("Welcome! Please Login Your Details")






console.log(document.body.childNodes)