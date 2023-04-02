// function to add contact form in the page
function addContactForm() {
    // create a form element
    var form = document.createElement("form");
    // set the form attributes
    form.setAttribute("method", "post");
    form.setAttribute("action", "contact.php");
    // create input element for email
    var email = document.createElement("input");
    // set the input attributes
    email.setAttribute("type", "email");
    email.setAttribute("name", "email");
    email.setAttribute("placeholder", "Email");
    // create input element for message
    var message = document.createElement("textarea");
    // set the input attributes
    message.setAttribute("name", "message");
    message.setAttribute("placeholder", "Message");
    // create input element for submit
    var submit = document.createElement("input");
    // set the input attributes
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Send");
    // append the input element to the form
    form.appendChild(email);
    form.appendChild(message);
    form.appendChild(submit);
    // append the form to the document body
    document.body.appendChild(form);
}
