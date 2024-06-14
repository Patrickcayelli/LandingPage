document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("joinForm");
    const submitButton = form.querySelector("button[type='submit']");
    const spinner = document.getElementById("spinner");
    const checkmark = document.querySelector(".checkmark");
    const hero = document.querySelector(".hero");
    const scriptURL = "https://script.google.com/macros/s/AKfycbzWDIXX-jN7-Q9_6Jv9ieXcAv1jWaNZKB7V-C-0UyZnq6fqANfnBacMSkoyPhejPRTP/exec";

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        submitButton.disabled = true;
        hero.classList.add("loading");
        spinner.style.display = "block";

        let requestBody = new FormData(form);
        fetch(scriptURL, { method: "POST", body: requestBody })
            .then(response => {
                hero.classList.remove("loading");
                hero.classList.add("success");
                submitButton.disabled = false;
                form.reset();
                checkmark.style.display = "block";
                spinner.style.display = "none";
            })
            .catch(error => {
                console.error("Error:", error.message);
                hero.classList.remove("loading");
                submitButton.disabled = false;
                spinner.style.display = "none";
            });
    });
});

document.getElementById('joinButton').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });