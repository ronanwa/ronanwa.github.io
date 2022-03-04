// Contact script to handle messaging

var subject = "";
var message = "";

function clearForm() {
    document.getElementById("name-contact").value = "";
    document.getElementById("email-contact").value = "";
    document.getElementById("message-contact").value = "";
}

function getNameContact() {
    return document.getElementById("name-contact").value;
}

function getEmailContact() {
    return document.getElementById("email-contact").value;
}

function getMessageContact() {
    return document.getElementById("message-contact").value;
}

function constructMessage() {
    return "Name: " + getNameContact() + "  ||  " + "\n" + "Email: " + getEmailContact() + "  ||  " + "\n\n" + "Message: " + getMessageContact();
}

function endContact() {
    clearForm();
    // alert("Message sent!");
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Message sent!',
        showConfirmButton: false,
        timer: 2500
    })
}

document.getElementById("submit-contact").onclick = function email() {
    subject = "Message from " + getNameContact();
    message = constructMessage();

    Email.send({
        SecureToken : "ad812035-ae44-4730-85d5-b9387dbc9e02",
        To : 'ronanwallace.contact@gmail.com',
        From : "ronanwallace.smtp.sender@gmail.com",
        Subject : subject,
        Body : message});

    endContact();
};



