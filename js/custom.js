$(window).load(function() {
    
    
    
  $('.flexslider').flexslider({
    animation: "fade",
    animationLoop: true,
    controlNav: true,
  });
    
  $('.bxslider').bxSlider({
    slideWidth: 1000,
    auto: true,
  });
    
    
    //con2 비디오 설정
	// 마우스 오버시
	$(".con1>div").on("mouseover",function(){		
	
		// 변수 vid에 video파일 참조
		var vid = $(this).find("video").get(0);
		// 동영상의 재생위치를 처음(0)으로 설정
		//vid.currentTime=0;
		// 동영상을 재생
		vid.play();	
					
		$(this).find("video").stop().animate({"opacity":"1"},500);		
	});
	
	// 마우스 아웃시
	$(".con1>div").on("mouseout",function(){		
		
		// 변수 vid에 video파일 참조
		var vid = $(this).find("video").get(0);
		// 동영상을 정지
		vid.pause();
			
		$(this).find("video").stop().animate({"opacity":"0"},500);	
	});
    
    
    //parallax
    $('.parallax-window').parallax({imageSrc: '../img/con4_bg.jpg'});

    
    $(window).on("scroll",function(){ //scroll
		
		var scroll = $(this).scrollTop();
		
		if(scroll>0){
			$("header>h1").addClass("on");
			}else{
				$("header>h1").removeClass("on");
				}
		}); 
    
    //top버튼
    $(function() {
        $(window).scroll(function() {
            //$(this).scrollTop():현재 스크롤바의 위치
            if ($(this).scrollTop() > 500) {
                $('#Move_Top').fadeIn();
            } else {
                $('#Move_Top').fadeOut();
            }
        });
        $('#Move_Top').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, "fast");
            return false;
        });

    });
    
    //모바일 메뉴 토글
    $(".fa-align-justify").on("click",function(){
        $("#menuMo").toggleClass("on");
});
    
    
    
});