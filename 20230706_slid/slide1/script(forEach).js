// forEach, parameter(매개변수)
// forEach method :Array(배열)에서 사용한 메서드
// 배열 안의 값을 순차적으로 함수에게 전달
// 숫자 = [1,2,3,4,5]
// 숫자.forEach

// buttons 변수에 btn-group 클래스 안에 있는 button 태그 다 저장
let buttons = document.querySelectorAll('.btn-group button');
// console.log(buttons)

// forEach 파라미터
// 1. 배열을 반복한 값
// 2. 배열의 인덱스 값
// 0,1,2 / translateX 0 -100 -200

// 답안
// click 이벤트 추가 => 첫번째 매개변수 (btn)
buttons.forEach(function(btn, index){
  btn.addEventListener('click',function(){
    let slideList = document.querySelector('.slide-list');
    // console.log(slideList)
    let xValue = -index * 100 + 'vw';
    slideList.style.transform ='translateX('+ xValue + ')'
  })
 })


// 오답
// buttons.forEach(function(btn, index){
//  console.log(btn, index)

// btn.addEventListener('click',function(){
//   index=''*(-100);
//   slideList.style.transform = 'translateX(index)vw'
// })
// })