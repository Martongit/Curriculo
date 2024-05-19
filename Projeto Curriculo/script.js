//Carrossel passar sozinho
document.addEventListener('DOMContentLoaded', function () {
    let myCarousel = document.querySelector('#carouselDark');
    let carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000,
        wrap: true
    });
});;

//Botões carrossel
function goToSlide(slideIndex) {
    let myCarousel = document.querySelector('#carouselDark');
    let carousel = bootstrap.Carousel.getInstance(myCarousel);
    carousel.to(slideIndex);
}

//Navegação de Menu Grande
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.btn.btn-primary.hov');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offsetTop = targetElement.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

// Naveção de Menu pequeno
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offsetTop = targetElement.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
});