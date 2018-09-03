$(window).load(function () {
    $("#slider1").mySlider({ //탭박스 이름
        dur: 1000, //속도
        rolling_dur: 2000, //롤링 시간
        activeName: "on", //활성화시킬 클래스 이름
        panel: ".panel", //슬라이더 ul 이름
        navi: ".navi", //버튼 ul 이름
        prev: ".prev", //이전버튼 이름
        next: ".next", //다음버튼 이름
        start: ".start", //롤링시작버튼 이름
        stop: ".stop", //롤링정지버튼 이름
        autoStart: true //자동롤링 시작 유무 true:로딩시 롤링시작 ,  false : 버튼을 클릭해야 롤링시작
    });

    var mySlider = $('.bxslider').bxSlider({
        mode: 'horizontal', // 가로 방향 수평 슬라이드
        speed: 500, // 이동 속도를 설정
        pager: true, // 현재 위치 페이징 표시 여부 설정
        moveSlides: 1, // 슬라이드 이동시 개수
        minSlides: 4, // 최소 노출 개수
        maxSlides: 4, // 최대 노출 개수
        slideMargin: 5, // 슬라이드간의 간격
        auto: true, // 자동 실행 여부
        autoHover: true, // 마우스 호버시 정지 여부
        controls: true // 이전 다음 버튼 노출 여부
    });


    

    var mql = window.matchMedia("screen and (max-width: 300px)");
    mql.addListener(function (e) {
        if (!e.matches) {
            slider.reloadSlider();
        }
    });



    //con2 비디오 설정
    // 마우스 오버시
    $(".con1>div").on("mouseover", function () {

        // 변수 vid에 video파일 참조
        var vid = $(this).find("video").get(0);
        // 동영상의 재생위치를 처음(0)으로 설정
        //vid.currentTime=0;
        // 동영상을 재생
        vid.play();

        $(this).find("video").stop().animate({
            "opacity": "1"
        }, 500);
    });

    // 마우스 아웃시
    $(".con1>div").on("mouseout", function () {

        // 변수 vid에 video파일 참조
        var vid = $(this).find("video").get(0);
        // 동영상을 정지
        vid.pause();

        $(this).find("video").stop().animate({
            "opacity": "0"
        }, 500);
    });


    //parallax
    $('.parallax-window').parallax({
        imageSrc: '../img/con4_bg.jpg'
    });


    $(window).on("scroll", function () { //scroll

        var scroll = $(this).scrollTop();

        if (scroll > 0) {
            $("header>h1").addClass("on");
        } else {
            $("header>h1").removeClass("on");
        }
    });

    //top버튼
    $(function () {
        $(window).scroll(function () {
            //$(this).scrollTop():현재 스크롤바의 위치
            if ($(this).scrollTop() > 500) {
                $('#Move_Top').fadeIn();
            } else {
                $('#Move_Top').fadeOut();
            }
        });
        $('#Move_Top').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, "fast");
            return false;
        });

    });

    //모바일 메뉴 토글
    $(".fa-align-justify").on("click", function () {
        $("#menuMo").toggleClass("on");
    });



});
