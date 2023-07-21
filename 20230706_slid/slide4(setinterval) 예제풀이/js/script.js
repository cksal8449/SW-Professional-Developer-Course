// 현재 인덱스를 저장하는 변수 (초기값 0)
let cur = 0;
// length 길이 체크
// len 이라는 변수에 .slid-item라는 클래스가 가진 요소들의 총 개수 저장 
let len = $('.slide-item').length; 
// console.log(len) => 3

for(i = 0; i < len; i++) {
  $('#dots').append('<div></div>');
}

// 슬라이드 이동하는 함수 
// dir 매개변수에 따라 이전이나 다음으로 이동
function sliding(dir){
  cur = cur + dir;

  // cur 값이 양수일 경우 다음 슬라이드 이동
  // cur 값이 음수일 경우 이전 슬라이드 이동
  // 마지막 슬라이드에서 다음 버튼을 누르면 처음 슬라이드로 이동 
  // 처음 슬라이드에서 이전 버튼을 누르면 마지막 슬라이드로 이동
  if(cur >= len){
    cur = 0
  } else if(cur < 0) {
    cur = len - 1;
  }

  // siblings : 형제 요소를 찾는 함수
  // siblings 이용해서 현재 슬라이드eq(cur)를 제외한 나머지 슬라이드(형제요소)를 fadeOut
  $('.slide-item').eq(cur).siblings('.slide-item').stop().fadeOut();

  // fadeIn으로 현재 슬라이드를 화면에 보이게 한다.
  $('.slide-item').eq(cur).stop().fadeIn(function(){
    // p태그가 하나씩 보이게 함
    $(this).siblings('.slide-item').children('p').css({
      maginTop : "20px",
      opacity : 0
    })
    $(this).children('p').stop().animate({
      maginTop : 0,
      opacity : 1
    },600)
  });

  $('#dots div').removeClass('is-active');
  $('#dots div').eq(cur).addClass('is-active');
}

sliding(0)

// 이전 슬라이드로 가야하니까 음수값을 매개변수로 전달
$('#prev').click(function(){sliding(-1)});
// 다음 슬라이드로 가야하니까 양수값을 매개변수로 전달
$('#next').click(function(){sliding(1)});

// 슬라이드가 5초 간격으로 바뀜
let auto = setInterval(sliding, 5000, 1);

// dots div를 클릭했을 때 해당 슬라이드로 이동
$('#dots div').click(function(){
  cur = 0;
  let num = $(this).index()
  sliding(num);
})
