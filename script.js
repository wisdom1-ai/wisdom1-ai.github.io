function sayHello() {
    alert("Hello! Welcome to my website!");
}

const form = document.querySelector("#contact form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();
});