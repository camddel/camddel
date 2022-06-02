function dataRead() {
    const myForm = document.querySelector('#formulario')
    const nameForm = myForm.querySelector('#name')
    const emailForm = myForm.querySelector('#email')
    const telephoneForm = myForm.querySelector('#telephone')
    const messageForm = myForm.querySelector('#message')
    const submitButton = myForm.querySelector('#button')

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        const contactData = {
            name: nameForm.value,
            email: emailForm.value,
            telephone: telephoneForm.value,
            message: messageForm.value,
        }
        const saveData = JSON.parse(window.localStorage.getItem("Info")) || []
        if(
            contactData.name !== "" && 
            contactData.email !== " "&& 
            contactData.telephone !== " " && 
            contactData.message !== " "
        ){
            window.localStorage.setItem("Info", JSON.stringify([...saveData, contactData]))
        }else{
            alert('No completaste el formulario');
        }
    })
}
dataRead();