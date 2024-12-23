//ecosungsim.js

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

    }); // scroll() 이벤트 끝

});