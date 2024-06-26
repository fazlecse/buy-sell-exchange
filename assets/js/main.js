
// Preloader area
const preloader = document.getElementById("preloader");
function preloderFunction() {
    preloader.style.display = "none";
}
// toggleSideMenu start
const toggleSideMenu = () => {
    document.body.classList.toggle("toggle-sidebar");
};
// toggleSideMenu end

// add bg to nav
window.addEventListener("scroll", function () {
    let scrollpos = window.scrollY;
    const header = document.querySelector("nav");
    const headerHeight = header.offsetHeight;

    if (scrollpos >= headerHeight) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});


$(document).ready(function () {
    // owl carousel dashboard card
    $('.carousel-area1').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 10,
        nav: true,
        dots: false,
        // rtl:true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            991: {
                items: 2
            }
        }
    });

    // Swiper-slider livestream-swiper
    var swiper = new Swiper(".livestream-swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,

    });
    // Testimonial section start
    // Owl carousel 
    $(function (e) {
        "use strict";
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 10,
            nav: false,
            dots: true,
            // rtl: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    });
    // Testimonial section start

    $('.banner-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

    // cmn select2 start
    $(document).ready(function () {
        $('.cmn-select2').select2({
            templateResult: formatState,
            templateSelection: formatState

        });
    });
    // cmn select2 end

    // cmn-select2 with image start
    $(document).ready(function () {
        $('.cmn-select2-image').select2({
            templateResult: formatState,
            templateSelection: formatState
        });
    });
    // select2 function
    function formatState(state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "assets/img/mini-flag";
        var $state = $(
            '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.svg" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    };
    function formatState(state) {
        if (!state.id) {
            return state.text;
        }

        var baseUrl = "assets/img/mini-flag";
        var $state = $(
            '<span><img class="img-flag" /> <span></span></span>'
        );

        // Use .text() instead of HTML string concatenation to avoid script injection issues
        $state.find("span").text(state.text);
        $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".svg");

        return $state;
    };
    // cmn-select2 with image end

    // cmn-select2 with image2 start
    $(document).ready(function () {
        $('.cmn-select2-image2').select2({
            templateResult: formatState,
            templateSelection: formatState
        });
    });
    // select2 function
    function formatState(state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "assets/img/mini-flag";
        var $state = $(
            '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.svg" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    };
    function formatState(state) {
        if (!state.id) {
            return state.text;
        }

        var baseUrl = "assets/img/crypto-icon";
        var $state = $(
            '<span><img class="img-flag" /> <span></span></span>'
        );

        // Use .text() instead of HTML string concatenation to avoid script injection issues
        $state.find("span").text(state.text);
        $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".svg");

        return $state;
    };
    // cmn-select2 with image end

    // Payment method with image2 start
    $(document).ready(function () {
        $('.payment-method-select2-image').select2({
            templateResult: paymentMethod,
            templateSelection: paymentMethod
        });
    });
    // select2 function
    function paymentMethod(state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "assets/img/gateway";
        var $state = $(
            '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.jpg" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    };
    function paymentMethod(state) {
        if (!state.id) {
            return state.text;
        }

        var baseUrl = "assets/img/gateway";
        var $state = $(
            '<span><img class="img-flag" /> <span></span></span>'
        );

        // Use .text() instead of HTML string concatenation to avoid script injection issues
        $state.find("span").text(state.text);
        $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".jpg");

        return $state;
    };
    // Payment method with image2 start

    // cmn select2 modal start
    $(".modal-select").select2({
        dropdownParent: $("#formModal"),
    });
    // cmn select2 modal start

    // International Telephone Input start
    if ($('.login-signup-form').length) {
        const input = document.querySelector("#telephone");
        window.intlTelInput(input, {
            initialCountry: "bd",
            separateDialCode: true,
        });
    }
    // International Telephone Input end

});

// Modal select to input focus start 
document.addEventListener("DOMContentLoaded", function () {
    function handleInput(inputAmountBox, inputAmountBoxInner) {
        const inputField = inputAmountBoxInner.querySelector('input');

        inputField.addEventListener("focus", function () {
            inputAmountBox.classList.add("active");
        });

        inputField.addEventListener("blur", function () {
            inputAmountBox.classList.remove("active");
        });

        inputField.addEventListener("click", function () {
            inputField.setSelectionRange(inputField.value.length, inputField.value.length);
        });

        inputAmountBox.addEventListener("click", function (event) {
            if (!event.target.closest('.icon-area') && !event.target.closest('.currency-name')) {
                inputField.focus();
                inputField.setSelectionRange(inputField.value.length, inputField.value.length);
            }
        });
    }

    const inputAmountBox = document.getElementById("inputAmountBox");
    const inputAmountBoxInner = document.getElementById("inputAmountBoxInner");
    handleInput(inputAmountBox, inputAmountBoxInner);

    const inputAmountBox2 = document.getElementById("inputAmountBox2");
    const inputAmountBoxInner2 = document.getElementById("inputAmountBoxInner2");
    handleInput(inputAmountBox2, inputAmountBoxInner2);
});
// Modal select to input focus end

// Filter section start
function filterItems(inputId) {
    var input, filter, items, title, subtitle, i, txtValue;
    input = document.getElementById(inputId);
    filter = input.value.toUpperCase();
    items = document.querySelectorAll("#currency-list .item");

    items.forEach(function (item) {
        title = item.querySelector(".title");
        subtitle = item.querySelector(".sub-title");

        txtValue = title.textContent || title.innerText;
        txtValue += " " + (subtitle.textContent || subtitle.innerText);

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}
// Filter section end

// Dark theme start
const toggleBtn = document.getElementById("toggle-btn");
const body = document.querySelector("body");
toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("dark-theme", 1);
    } else {
        localStorage.setItem("dark-theme", 0);
    }
    setTheme();
});

function setTheme() {
    const isDarkTheme = localStorage.getItem("dark-theme");
    if (isDarkTheme == 1) {
        document.querySelector('body').classList.add('dark-theme');
        document.getElementById("moon").style.display = "none";
        document.getElementById("sun").style.display = "block";
    } else {
        document.querySelector('body').classList.remove('dark-theme');
        document.getElementById("moon").style.display = "block";
        document.getElementById("sun").style.display = "none";
    }
}
setTheme();
// Dark theme end


// input file preview
const previewImage = (id) => {
    document.getElementById(id).src = URL.createObjectURL(event.target.files[0]);
};

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// Copy text start
function copyTextFunc() {
    // get the container
    const element = document.querySelector('.docs-code');
    // Create a fake `textarea` and set the contents to the text
    // you want to copy
    const storage = document.createElement('textarea');
    storage.value = element.innerHTML;
    element.appendChild(storage);

    // Copy the text in the fake `textarea` and remove the `textarea`
    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    element.removeChild(storage);
}
// Copy text end
// Highlight editor start
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
});
// Highlight editor end


// Calculator swap start
const sendInput = document.getElementById('send');
const sendCurrency = document.getElementById('sendCurrency');
const reciveInput = document.getElementById('receive');
const reciveCurrency = document.getElementById('reciveCurrency');
const swapBtn = document.getElementById('swapBtn');

swapBtn.addEventListener('click', () => {
    const temp = { value: sendInput.value, currency: sendCurrency.value }
    sendInput.value = reciveInput.value;
    sendCurrency.value = reciveCurrency.value;
    reciveInput.value = temp.value;
    reciveCurrency.value = temp.currency;
    sendCurrency.dispatchEvent(new Event('change'));
    reciveCurrency.dispatchEvent(new Event('change'));
});
// Calculator swap end




// input field show hide password start
const password = document.querySelector('.password');
const passwordIcon = document.querySelector('.password-icon');

passwordIcon.addEventListener("click", function () {
    if (password.type == 'password') {
        password.type = 'text';
        passwordIcon.classList.add('fa-eye-slash');
    } else {
        password.type = 'password';
        passwordIcon.classList.remove('fa-eye-slash');
    }
})
// input field show hide password end

// countdown
$('#countdown1').countdown('2023/11/05', function (event) {
    $(this).html(event.strftime('<div class="single-coundown"><h5>%H :</h5></div><div class="single-coundown"><h5>%M :</h5></div><div class="single-coundown"><h5>%S</h5></div>'));
});