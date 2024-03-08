document.addEventListener("DOMContentLoaded", function () {
    //HEADER
    // Get the header element
    const header = document.querySelector('header');

    // Function to toggle the header visibility
    function toggleHeader() {
        if (window.scrollY > 100) { // Adjust the scroll threshold as needed
            header.classList.add('show-header');
        } else {
            header.classList.remove('show-header');
        }
    }
    // Attach the scroll event listener
    window.addEventListener('scroll', toggleHeader);


    // HAMBURGER MENU
    const openBtn = document.querySelector(".openbtn");
    const closeBtn = document.querySelector(".closebtn");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const nav = document.querySelector(".hamburger-menu nav");
    const navLinks = nav.querySelectorAll("a");

    openBtn.addEventListener("click", function () {
        openBtn.classList.add("openNav");
        hamburgerMenu.classList.add("openNav");
        nav.classList.add("openNav");
    });

    closeBtn.addEventListener("click", function () {
        openBtn.classList.remove("openNav");
        hamburgerMenu.classList.remove("openNav");
        nav.classList.remove("openNav");
    });

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            openBtn.classList.remove("openNav");
            hamburgerMenu.classList.remove("openNav");
            nav.classList.remove("openNav");
        });
    });


    //BANNER TEXT
    let words = document.getElementsByClassName('word');
    let wordArray = [];
    let currentWord = 0;

    words[currentWord].style.opacity = 1;
    for (let i = 0; i < words.length; i++) {
    splitLetters(words[i]);
    }

    function changeWord() {
    let cw = wordArray[currentWord];
    let nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
    for (let i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }
    
    for (let i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
    }
    
    currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
    }

    function animateLetterOut(cw, i) {
    setTimeout(function() {
        cw[i].className = 'letter out';
    }, i*80);
    }

    function animateLetterIn(nw, i) {
    setTimeout(function() {
        nw[i].className = 'letter in';
    }, 340+(i*80));
    }

    function splitLetters(word) {
    let content = word.innerHTML;
    word.innerHTML = '';
    let letters = [];
    for (let i = 0; i < content.length; i++) {
        let letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }
    
    wordArray.push(letters);
    }

    changeWord();
    setInterval(changeWord, 4000);


    // READ MORE
    const readMoreBtn = document.querySelector("#read-more");
    const more = document.querySelector("#more");
    const about = document.querySelector("#about");
    const aboutWrap = document.querySelector(".about-wrap");
    const founderWrap = document.querySelector(".founder-wrap");

    if (window.innerWidth >= 596) {
        more.style.display = "inline";
    } else {
        more.style.display = "none";
    }

    readMoreBtn.addEventListener("click", function () {
        if (more.style.display === "none") {
            readMoreBtn.innerHTML = "Read Less";
            more.style.display = "inline";

            if (window.innerWidth >= 480 && window.innerWidth <= 519) {
                about.style.height = "1100px";
                aboutWrap.style.height = "675px";
                founderWrap.style.top = "-355px";
            } else if (window.innerWidth >= 520 && window.innerWidth <= 595) {
                about.style.height = "1050px";
                aboutWrap.style.height = "630px";
                founderWrap.style.top = "-342px";
            }

        } else {
            readMoreBtn.innerHTML = "Read More";
            more.style.display = "none";

            if (window.innerWidth >= 480 && window.innerWidth <= 519) {
                about.style.height = "850px";
                aboutWrap.style.height = "425px";
                founderWrap.style.top = "-230px";
            } else if (window.innerWidth >= 520 && window.innerWidth <= 595) {
                about.style.height = "850px";
                aboutWrap.style.height = "405px";
                founderWrap.style.top = "-230px";
            }
        }
    });


    //MODAL
    // Get all gallery items
    const galleryItems = document.querySelectorAll('.gallery a');
    const modal = document.querySelector('.modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close');

    function openModal(e) {
        e.preventDefault();
        // Get the <img> element inside the clicked anchor
        const imageElement = e.currentTarget.querySelector('.gallery a img');
        // Retrieve the src attribute of the <img> element
        const imageSrc = imageElement.getAttribute('src');
        // Set the modal image source
        modalImage.src = imageSrc;
        modal.style.display = 'block';
    }

    // Function to close the modal
    function closeModalFunc() {
        modal.style.display = 'none';
    }

    // Attach event listeners to gallery items
    galleryItems.forEach(item => {
        item.addEventListener('click', openModal);
    });

    // Attach event listener to close button
    closeModal.addEventListener('click', closeModalFunc);

    // Close modal when clicking outside the image
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunc();
        }
    });

    // Close modal when pressing the "Escape" key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModalFunc();
        }
    });
});

// AOS INIT
AOS.init();

// SLICK SLIDER
$('.test-slider').slick({
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<div class="slick-arrow prev"><i class="fa-solid fa-circle-chevron-left"></i></div>',
    nextArrow: '<div class="slick-arrow next"><i class="fa-solid fa-circle-chevron-right"></i></div>',
    responsive: [
        {
            breakpoint: 759,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false
            }
        }
    ]
});