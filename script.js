function add(char) {
  let process = document.getElementById('process');
  process.value = process.value + char;
}

function calculate() {
  let process = document.getElementById('process');
  let result = eval(process.value);
  document.getElementById('result').value = result;
} 

function reset() { // 버튼 C - 초기화 기능
  document.getElementById('process').value = "";
  document.getElementById('result').value = "";
}
