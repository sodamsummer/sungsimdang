//eoc.js

$(function () {

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


        // ----------------------------------------
        // section
        // 1. 스크롤바가 수직으로 이동한 위치값 반환
        var scroll = $(window).scrollTop();
        console.log(scroll); // 300 - 등장

        // 스크롤 값이 300px 이상일 때
        if (scroll > 300) {
            $('.content>.txtbox>h4').css('opacity', '1');

            setTimeout(function () {
                $('.content>.txtbox>p').first().css('opacity', '1'); // 텍스트(p) 첫번째 줄
            }, 500); // h4 등장 후 0.5초 뒤
    
            setTimeout(function () {
                $('.content>.txtbox>p').last().css('opacity', '1'); // 텍스트(p) 두번째 줄
            }, 1000); // h4 등장 후 1초 뒤
        }

        // 스크롤 값이 600px 이상일 때
        if (scroll > 600) {
            $('#s1').css('opacity', '1');

            setTimeout(function () {
                $('#s2').css('opacity', '1');
            }, 300);

            setTimeout(function () {
                $('#s3').css('opacity', '1');
            }, 600);

            setTimeout(function () {
                $('#s4').css('opacity', '1');
            }, 900);
        }
        
    }); // scroll() 이벤트 끝


});