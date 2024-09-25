document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const modal = document.getElementById("modal");
    const btnOpenModal = document.querySelectorAll("button")[1]; // Select the second button (APLICÁ YA!)
    const spanClose = document.getElementsByClassName("close")[0];

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    btnOpenModal.addEventListener('click', () => {
        modal.style.display = "block";
    });

    spanClose.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
