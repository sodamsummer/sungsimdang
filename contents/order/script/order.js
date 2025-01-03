// order.js

$(document).ready(function () {
    const text = "공사중입니다.";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            document.getElementById('typing-container').textContent += text[index];
            index++;
            setTimeout(typeText, 150); // 타이핑 속도 설정 (150ms)
        } else {
            setTimeout(() => {
                document.getElementById('typing-container').textContent = '';
                index = 0;
                typeText(); // 반복 시작
            }, 3000); // 3초 대기 후 반복
        }
    }

    typeText(); // 첫 타이핑 시작
});