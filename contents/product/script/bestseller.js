//bestseller.js

$(function(){

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

        // 2. 스크롤을 내리면 컨텐츠가 순차적으로 fadeIn()

        // 각 콘텐츠가 화면에 나타날 때 애니메이션 추가
        $('.product li .b-name, .product li .b-des').each(function() {
            var elementTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();
  
            if (windowBottom > elementTop) {
              $(this).addClass('show'); // 화면에 나타나면 show 클래스 추가
            }
          });

    }); // scroll() 이벤트 끝

    // 페이지 로드 시 처음 화면에 보이는 콘텐츠에 애니메이션 적용
    /* $(window).trigger('scroll'); */

    //1) [수정중] 리스트(li a)를 클릭했을 때
    $('.rainbow_list>li>a').click(function(e){

        e.preventDefault();

        var modalId = $(this).attr('href');

        //2) 모달 창(#content)이 열리면서
        $('#content').show(0);

        //3) 컨텐츠가 보여짐 >> #modal의 display 상태 변경
        $('#modal').show(0);
        $(modalId).show(0);
    });

    // modal창 닫기
    $('#modal').click(function(){
        $(this).hide();
        $('#content').hide();
    });

    
});
