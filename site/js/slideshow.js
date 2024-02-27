const slides = document.querySelectorAll('#slideshow > img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let current = 0;

//showSlides(current);  // 처음 화면에 띄울 이미지를 표시.
showSlidesAuto();
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n) {
    // 모든 이미지를 화면에서 감춘다.
    for (let imgElement of slides) {
        imgElement.style.display = 'none';
    }
    slides[n].style.display = 'block';  // n번째 이미지만 표시.
}

function prevSlide() {
    if (current > 0) current -= 1;
    else current = slides.length - 1;  // 현재 첫 번째라면 마지막 이미지로.
    showSlides(current);  // 이동한 위치의 이미지 표시.
}

function nextSlide() {
    if (current < slides.length - 1) current += 1;
    else current = 0;  // 마지막 이미지에서는 첫 번째 위치로 이동.
    showSlides(current);
}

/**
 * 이미지를 자동으로 번갈아 보여주는 함수.
 */
function showSlidesAuto() {
    //let slides = document.querySelectorAll('#slideshow > img');
    // 모든 이미지를 화면에서 감춘다.
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    current++;  // 다음 이미지로 이동.
    if (current > slides.length) {
        current = 1;
    }
    slides[current - 1].style.display = "block";  // 현재 이미지 표시.
    setTimeout(showSlidesAuto, 5000); 
}