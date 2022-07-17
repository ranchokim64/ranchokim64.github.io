
//배열에 배경화면에 쓸 이미지들의 이름 값이 담기게 만든다.


const backgroundImgs = [
    "0.jpg", "1.jpg", "2.jpg"
]

// 배경이미지 중 랜덤하게 하나를 고른다.

const todayImg = backgroundImgs[Math.floor(Math.random()*backgroundImgs.length)];




document.body.style.backgroundImage = `url('./img/${todayImg}')`;