$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        // menu по умолчанию false . Для связи меню с секциями.
        // При скродде в пункт меню добавляется класс .active, который можно стилизовать  средствами css.
        // для каждого пункта меню добавить data-menuanchor=" соответсвующий anchor ".
        // Меню должно быть расположено выше контейнера с id="fillPage"
        menu: '#menu',

        //   lockAnchors: false, - по умолчания Useful if you want to combine fullPage.js with other plugins using anchor in the URL.
        lockAnchors: false,
        // anchors - якоря , привязки к секциям. позволяет прикрепить к меню якоря, должны совпадать с data-menuanchor="" в меню
        anchors: ['firstPage', 'secondPage', '3rdPage' , '4thPage'],
        // боковая навигация в виде точек
        navigation:false,
        //расположение этих точек
        navigationPosition: 'right',
        // подписи к точкам
        navigationTooltips: ['firstSlide', 'secondSlide', '3rdPage' , '4thPage'],
        // показывать ли активный пункт
        showActiveTooltip: true,
        // точки для навигации при боковом меню
        slidesNavigation: true,
        //расположение точек навигации
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        // скорость переключения страницы
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: true,
        // эффекты переключения , наужно чтобы был подключен jquery.easings.min.js
        easing: 'easeInBack',
        // easingcss3: 'easeInBack',
        // после скролле вверх на первой странице - переход на нижнюю
        loopBottom: true,
        //наоброт
        loopTop: false,

        loopHorizontal: true,

        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: true,
        normalScrollElements: '#element1, .element2',
        //скролл внутри секции при переполнении
        scrollOverflow: true,
        scrollOverflowReset: true,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#ccc', '#fff' , 'purple', '#000'],
        paddingTop: '0em',
        paddingBottom: '0px',
        fixedElements: '#header, .footer',
        responsiveWidth: 787,
        responsiveHeight: 0,
        responsiveSlides: false,


        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',
        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){
            if(index == 2){
                $('#slider').find('.slide p').fadeOut(1700);
            }
            if(index == 3){
                $('#section0').find('.layer').delay(100).animate({
                    left: '0%'
                }, 1500, 'easeOutExpo');
            }
        },
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
    $(document).on('click', '#moveDown', function () {
        $.fn.fullpage.moveSectionDown();
    });
    $(document).on('click', '#moveUp', function () {
        $.fn.fullpage.moveSectionUp();
    });
});

// Find all YouTube videos
