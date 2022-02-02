/* FUNCTIONS */
function hCategoryClick(e) {
    const t = $('#cn');
    const d = $(e.target).closest('.category__item').data('cat');
    t.html(d);
    db.gHTML(d);
    const cp = $('.goods').position().top;
    if (!$('html, body').is(':animated')) {
        $('html, body').animate({
            scrollTop: `${cp-40}`
        }, 300);
    }
}

function handleSubmitFormButton(e) {
    e.preventDefault();
    const d = $(e.target).data('val');
    // console.log(d);
    
    let name, tel, text, fz;
    if (d === 'callback-tel') {
        tel = $('#callback-tel').val();
        name = 'Форма быстрого звонка';
        text = name;
        fz = $('#PHZ-152-main').is(':checked');
        if (tel.length < 14 || !fz) {
            if (tel.length < 14) {
                $(e.target).text('Укажите номер');
            } else if (!fz) {
                $(e.target).text('Обработка данных?');
            }
            return;
        }
    } else if (d === 'tel') {
        name = $('#name').val();
        tel = $('#tel').val();
        text = $('#textarea').val() ? $('#textarea').val() : 'не было заполнено';
        fz = $('#PHZ-152').is(':checked');
        if (name === '' || tel.length < 14 || !fz) {
            if (name === '') {
                $(e.target).text('Как вас зовут?');
            } else if (tel.length < 14) {
                $(e.target).text('Укажите номер');
            } else if (!fz) {
                $(e.target).text('Обработка данных?');
            }
            return;
        }
    } else {
        name = $('#name-t').val();
        tel = $('#tel-t').val();
        text = 'не было заполнено';
        fz = $('#fz-t').is(':checked');
        if (name === '' || tel.length < 14 || !fz) {
            if (name === '') {
                $(e.target).text('Как вас зовут?');
            } else if (tel.length < 14) {
                $(e.target).text('Укажите номер');
            } else if (!fz) {
                $(e.target).text('Обработка данных?');
            }
            return;
        }
    }
    // Returns successful data submission message when the entered information is stored in database.
    $.post("../php/contact_form.php", {
        name: name,
        tel: tel,
        text: text
    }, function(data) {
        if (data === 'send OK') {
            // To reset form fields on success.
            // console.log(`${data}`);
            $('form').html(`<div class="item form-submitted">Спасибо, мы свяжемся с вами в ближайшее время!</div>`);
            $('.form-block').html(`<div class="red uppercase bold main-form-submitted">Спасибо, мы свяжемся с вами в ближайшее время!</div>`);
            $('.callback-form-title form').html(`<div class="red uppercase bold main-form-submitted">Спасибо, мы свяжемся с вами в ближайшее время!</div>`);
            setTimeout(function(){
                window.location.reload()
            }, 2000)
        } else {
            // console.error(`${data}`);
        }
    });
}

function alertCookie(e) {
    // console.log(document.cookie);
    regExp = /acceptCookie=[a-z]*[^\s;]/im;
    if (document.cookie.includes('acceptCookie')) {
        if (document.cookie.match(regExp)[0].split('=')[1] === 'true') {
            // console.log(document.cookie.match(regExp)[0].split('=')[1]);
            return true;
        } else {
            return false;
        }
    }
}

function acceptCookies() {
    if (document.cookie.replace(/(?:(?:^|.*;\s*)acceptCookie\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
        document.cookie = "acceptCookie=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        $('#cookie-block').css('display', 'none');
    }
}

function onloadCheckCookie() {
    if (alertCookie()) {
        $('#cookie-block').css('display', 'none');
    } else {
        $('#cookie-block').css('display', 'block');
    }
}

function towlCb(e) {
    const t = $('#title');
    t.removeClass(); // cleaning class from from #title
    setTimeout(() => {
        t.addClass(`slide-${$(e.target).find('.owl-item.active').find('.item').data('slide')}`)
    }, 1)
}

function handleTelInput(e) {
    const tel = $(e.currentTarget);
    const regExp = /[^\d]{0,}/ig;
    const charMax = 11;
    let val = tel.val().replace(regExp, '').substring(0, charMax);
    if (val.length > 4) {
        tel.val(`+7(${val.slice(1,4)})${val.slice(4)}`);
    } else if (val.length > 1) {
        tel.val(`+7(${val.slice(1,4)}`);
    } else if (val.length > 0) {
        tel.val(`+7`);
    } else {
        tel.val(``);
    }
}

function handleWindowScroll(e) {
    const cTop = $('.category').offset().top;
    const navIcon = $('.navIcon');
    if ($(this).scrollTop() > (cTop - 65)) {
        if (navIcon.first().hasClass('active')) {
            navIcon.first().toggleClass('active');
            navIcon.last().toggleClass('active');
        }
    } else {
        if (navIcon.last().hasClass('active')) {
            navIcon.first().toggleClass('active');
            navIcon.last().toggleClass('active');
        }
    }
}

function handleNavIconClick(e) {
    const cTop = $('.category').offset().top;
    if (!$('html, body').is(':animated')) {
        $('html, body').animate({
            scrollTop: cTop - 160
        }, 300);
    }
}

/* ONLOAD */
$(window).on('load', function() {
    /* title */
    const towl = $('.owl-title').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        callbacks: true,
        autoWidth: false,
        loop: false,
        mouseDrag: false,
        items: 1,
        dots: true,
        nav: true,
        navText: ['<div class="title-left"></div>', '<div class="title-right"></div>'],
        responsive: {
            0: {
                dots: false,
                nav: false,
                // autoplay: true,
                // autoplayTimeout: 3000,
            },
            480: {
                dots: true,
                nav: true,
                autoplay: false
            }
        }
    });
    towl.on('change.owl.carousel', towlCb);
    // show elements on load and hide loader
    $('#title .ajax-loader').css({display: 'none'});
    $('#title .owl-title.owl-carousel, #title .banner-callback-container').css({display: 'block'});
    // helper class
    $('body').removeClass('lock');
    // clickers
    $('.category__item').on('click', hCategoryClick);
    $('#mv__cb').on('click', function(){
        db.handleMakeOrder
        window.location.reload()
    });
    $('#submitForm, .callback-tel, #callback-form-title-submit').on('click', handleSubmitFormButton);
    $('.navIcon').last().on('click', handleNavIconClick);
    /* cookies */
    onloadCheckCookie();
    $('#alert-cookie').on('click', acceptCookies);
    /* nandle inputs */
    $('#callback-tel, #tel, #tel-t').on('keypress keyup blur', handleTelInput);
    /* init */
    setTimeout(() => {
        db.gHTML('Гусеничные экскаваторы');
    }, 1);
    /* scroll events */
    $(window).scroll(handleWindowScroll);
});