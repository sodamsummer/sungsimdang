//eoc.js

$(function () {

    // header
    // 1. 스크롤 내릴 때 사라지기 2. 스크롤 올릴 때 나타나기
    var lastScrollTop;

    $(window).on('scroll', function () {

        var currentScroll = $(this).scrollTop();
        //console.log(currentScroll);

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
        var show = '.txtbox>h4 , .txtbox>p , .slogan , .sub-content>h5 , .sub-content>p , .links , .video';

        // 각 콘텐츠가 화면에 나타날 때 애니메이션 추가
        $(show).each(function () {
            var elementTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();

            if (windowBottom > elementTop) {
                $(this).addClass('show'); // 화면에 나타나면 show 클래스 추가
            }
        });

    }); // scroll() 이벤트 끝

    // 페이지 로드 시 처음 화면에 보이는 콘텐츠에 애니메이션 적용
    $(window).trigger('scroll');

    // .sub-content ul.list > li 순서대로 등장
    var autoCall = setInterval(listUp, 3500);

    // 마우스 올리면 이동 정지, 벗어나면 재가동
    $('.sub-content ul.list').mouseenter(function () {
        clearInterval(autoCall);
    }).mouseleave(function () {
        autoCall = setInterval(listUp, 3500);
    });

    //1) 썸네일 이미지를 클릭했을 때
    $('.v-list>li>a').click(function (e) {

        e.preventDefault();

        var iframeTag = $(this).parent().find('div').html();
        console.log(iframeTag);

        //2) 모달 창이 열리면서 >> display 상태 변경                          
        $('#modal').show(0);

        //3) 유튜브가 보여짐 >> #modal의 display 상태 변경, iframe 태그 추가
        $('#back').show(0).html(iframeTag);
    });

    // modal창 닫기
    $('#exit').click(function () {
        $('#modal').hide();
        $('#back').hide().find('iframe').remove();
    });

});

// 함수 - 리스트 이동
function listUp() {
    $('.sub-content ul.list').animate({
        marginTop: -60
    }, 1500, function () {
        $('.sub-content ul.list').append($('.sub-content ul.list li:first')).css('margin-top', 0);
    });
}
