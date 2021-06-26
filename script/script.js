const userDataFormClose1 = document.getElementById('close-form1');
const userDataForm = document.getElementById('user-data');

userDataForm.classList.add('_form-closed');
userDataFormClose1.classList.add('_icon-closed');

userDataForm.opened = true;
userDataForm.openClose = function() {
    userDataForm.classList.toggle('_form-closed');
    userDataForm.classList.toggle('_form-opened');
    if (userDataForm.opened) {
        userDataForm.opened = false;
    } else { userDataForm.opened = false;}
}

formHideShow = function () {
        userDataForm.openClose();
}
formCircleChange = function () {
    userDataFormClose1.classList.toggle('_anim-rotation');
    setTimeout(function () {
        userDataFormClose1.classList.toggle('_icon-opened');
        userDataFormClose1.classList.toggle('_icon-closed');
        userDataFormClose1.classList.toggle('_anim-rotation');
    }, 500);
}

formAction = function () {
    formHideShow();
    formCircleChange();
}

userDataFormClose1.onclick = formAction;
userDataFormClose1.onclick = formAction;
