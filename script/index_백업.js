// index.js

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


    // main
    // 1. fadeSlide
    var autoCall; // 인터벌용 변수
    autoCall = setInterval(fadeSlide, 5000); // 3초마다 자동실행

    // fadeSlide 멈추기
    //var stopAutoCall = clearInterval(autoCall);


    // article2. 우리의 방식
    $('.list a').click(function (e) {
        // a태그 기본기능 막기
        e.preventDefault();

        /* $(this).parent().addClass('on').siblings().removeClass('on'); */

        // 다른 활성화된 항목 닫기
        $('.our-list .list a p').not($(this).find('p')).slideUp(400);

        // 현재 클릭한 항목 토글
        $(this).find('p').stop(true, true).slideToggle(400);
    });


    // article3. 명예의 전당


    // article4. 패밀리 브랜드
    // 초기설정 - 왼쪽에 넘치는 박스 2개
    $('.img-wrap li').slice(2, 4).prependTo('.img-wrap');
    $('.img-wrap').css('margin-left', -1200);

    // 선택된 슬라이드 : 세번째 li
    $('.img-wrap li').eq(2).addClass('active');

    // 변수 - 핸들러 제어, 페이지 번호
    var stat; // 0 - O / 1 - X
    var page = 1;

    // 다음 버튼
    $('.next').click(function (e) {
        e.preventDefault();

        if (stat === 1) return false;
        stat = 1;

        $('.img-wrap li').removeClass('active');

        $('.img-wrap').animate({
            marginLeft: -1800
        }, 800, function () {
            $('.img-wrap').append($('.img-wrap li').first());
            $('.img-wrap').css('margin-left', -1200);
            $('.img-wrap li').eq(2).addClass('active');

            stat = 0;
        });

        // pager 숫자 변경
        page++;
        if (page === 13) page = 1;
        $('.pager .num').text(page);

        // 내용 변경
        $('.fam-info li').eq(page - 1).addClass('on').siblings().removeClass('on');

    });

    // 이전 버튼
    $('.prev').click(function (e) {
        e.preventDefault();

        if (stat === 1) return false;
        stat = 1;

        $('.img-wrap li').removeClass('active');

        $('.img-wrap').animate({
            marginLeft: -600
        }, 800, function () {
            $('.img-wrap').prepend($('.img-wrap li').last());
            $('.img-wrap').css('margin-left', -1200);
            $('.img-wrap li').eq(2).addClass('active');

            stat = 0;
        });

        // pager 숫자 변경
        page--;
        if (page === 0) page = 12;
        $('.pager .num').text(page);

        // 내용 변경
        $('.fam-info li').eq(page - 1).addClass('on').siblings().removeClass('on');

    });

});

// 함수
// 1. fadeSlide
function fadeSlide() {
    // 1번 슬라이드
    var firstSlide = $('.mainviewer .slide').first();

    // 2번 슬라이드
    var nextSlide = $(firstSlide).next();

    // 1초동안 fadeIn
    nextSlide.hide().addClass('active').fadeIn(1000, function () {
        // 다음을 위한 준비 - 1. 1번 슬라이드를 맨 뒤로
        firstSlide.appendTo('.mainviewer');

        // 1번 슬라이드의 z-index 제거
        firstSlide.removeClass('active');
    });
}

