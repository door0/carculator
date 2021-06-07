const numberClicked = false;

function add(char) { // 입력값 식 보여주기
  if(numberClicked == false) {
    if(isNaN(char) == true) {

    } else {
      
    }
  }
  let process = document.getElementById('process');
  process.value = process.value + char;
  
}

function calculate() {
  let process = document.getElementById('process');
  let result = eval(process.value);
  if( result % 1 != 0) { // 소수점 처리
    document.getElementById('result').value =  result.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  } else {
    document.getElementById('result').value = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); // 천자리마다 콤마 자동으로 찍어주는 정규식
  }

  if( document.getElementById('result').value.length > 14 ) { // 수가 너무 클때 
    alert("수가 너무 큽니다!");
    //document.getElementById('process').value = "";
    document.getElementById('result').value = "";
  }

} 

function reset() { // 버튼 C - 초기화 기능
  document.getElementById('process').value = "";
  document.getElementById('result').value = "";
}

function back() { // backspace 기능
  process.value = process.value.substring(0, process.value.length-1);
}

// function sign() { // 음수 처리
//   if( currentValue.innerText.inderOf('-') === -1 ) {
//     currentValue
//   } else {

//   }
// }

function enter(e) {
  if(e.keyCode == 13 || e.keyCode == 108) {
    calculate();
  } else if ((48 <= e.keyCode && e.keyCode <= 57)) {
        num = e.keyCode - 48;
        val(num);
  } else if ( e.keyCode == 106 || e.keyCode == 107 || e.keyCode == 109 || e.keyCode == 111 ) {
    switch (e.keyCode)
        {
            case 107:val('+');break;
            case 109:val('-');break;
            case 106:val('*');break;
            case 111:val('/');break;
        }
  } else if ( e.keyCode == 8 ) {
      back();
  } else if ( e.keyCode == 116) {
    document.getElementById('process').value = "";
    document.getElementById('result').value = "";
  } else {
    alert('숫자 또는 연산자를 입력하세요!');
  }
}