const txtId = document.getElementById('txt-id');
const txtName = document.getElementById('txt-name');
const btnValidate = document.getElementById('btn-validate');

const regExpID = new RegExp('^E\\d{3}$');
const regExpName = new RegExp('^[A-Za-z ]+$');

btnValidate.addEventListener('click', () => {
    const id = txtId.value;
    const name = txtName.value;
    let validated = true;
    txtId.classList.remove('invalid', 'animate__shakeX');
    txtName.classList.remove('invalid', 'animate__shakeX');

    if (!regExpName.test(name.trim())) {
        setTimeout(() => txtName.classList.add('invalid', 'animate__shakeX'), 0);
        txtName.select();
        validated = false;
    }

    if (!regExpID.test(id.trim())) {
        setTimeout(() => txtId.classList.add('invalid', 'animate__shakeX'), 0);
        txtId.select();
        validated = false;
    }

    if (validated) alert("Valid Data");
});

/* 
    setTimeout(function, 0); <=> Platform.runLater()
*/

console.log("Hello");

setTimeout(()=> console.log("How are you?"), 0);

console.log("Kasun");