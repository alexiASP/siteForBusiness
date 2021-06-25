let userDataFormClose1 = document.getElementById('close-form1');
let userDataFormClose2 = document.getElementById('close-form2');
let userDataForm = document.getElementById('user-data');

let closeForm = function() {
    userDataForm.classList.toggle('_form-closed');
    userDataForm.classList.toggle('_form-opened');
}
let openForm = function() {
    userDataForm.classList.toggle('_form-closed');
    userDataForm.classList.toggle('_form-opened');
}


userDataForm.opened = true;
userDataForm.close = closeForm;
userDataForm.open = openForm;

formHideShow = function () {
    if (userDataForm.opened) {
        userDataForm.close();
        console.log('closed')
    } else {
        userDataForm.open();
        console.log('opened')
    }
}

userDataFormClose1.onclick = formHideShow;
userDataFormClose1.onclick = formHideShow;
userDataFormClose2.onclick = formHideShow;
userDataFormClose2.onclick = formHideShow;
