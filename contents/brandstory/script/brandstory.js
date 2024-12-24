//brandstory.js

$(document).ready(function () {

    // header
    // 1. 스크롤 내릴 때 사라지기 2. 스크롤 올릴 때 나타나기
    var lastScrollTop;

    $(window).on('scroll', function () {

        var currentScroll = $(this).scrollTop();
        console.log(currentScroll);

        // 스크롤 방향 확인 : 현재 스크롤 위치가 이전보다 더 크면(내려간 상태) header를 숨기고, 올라가면 보이게 하기
        if (currentScroll > lastScrollTop) {
            // 스크롤을 내릴 때 (위로 숨기기)
            $('header').css('transform', 'translateY(-100%)');
        } else {
            // 스크롤을 올릴 때 (보이게 하기)
            $('header').css('transform', 'translateY(0)');
        }

        // 스크롤 위치 추적
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

    }); // scroll() 이벤트 끝

    // 스크롤을 내리면 컨텐츠가 순차적으로 fadeIn()

    $(window).on('scroll', function () {

        // 1. 스크롤바가 수직으로 이동한 위치값 반환
        var scroll = $(window).scrollTop();
        console.log(scroll); // 300 - h3,img / 600 - p 등장

        // scroll === 300

        // 스크롤 값이 300px 이상일 때

        if (scroll > 300) {
            $('.content>.con-img').css('opacity', '1'); // 사진 나타남

            // 사진이 나타난 후, h3이 나타나게 설정
            setTimeout(function () {
                $('.content>.con-txt>h3').css('opacity', '1'); // 텍스트(h3) 나타남
            }, 500); // 사진 등장 후 0.5초 뒤

            setTimeout(function () {
                $('.content>.con-txt>p').css('opacity', '1'); // 텍스트(p) 나타남
            }, 1000); // 사진 등장 후 1초 뒤
        }

        // 스크롤 값이 600px 이상일 때
        /* if (scroll > 600) {
            $('.content>.con-txt>p').css('opacity', '1');
        }    */     

        // 스크롤 값이 1000px 이상일 때
        if (scroll > 1000) {
            $('.sub-content>.con-img').css('opacity', '1');

            setTimeout(function () {
                $('.sub-content>.con-txt>p').css('opacity', '1'); // 텍스트 나타남
            }, 500); // 사진 등장 후 0.5초 뒤
        }

        /* // 스크롤 값이 1300px 이상일 때
        if (scroll > 1300) {
            $('.sub-content>.con-txt>p').css('opacity', '1'); // 사진 나타남
        } */

    });

});