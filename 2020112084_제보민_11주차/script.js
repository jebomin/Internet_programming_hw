// 이름을 저장할 전역 변수
var name;

// 이름 입력 다이얼로그를 보여주는 함수
function showNameDialog() {
  name = prompt("이름을 입력하세요:");

  // 이름이 입력되지 않은 경우 경고창을 보여줌
  if (name == null || name == "") {
    alert("이름을 입력해주세요.");
  }
  // 이름이 3글자가 아닌 경우 경고창을 보여줌
  else if (name.length != 3) {
    alert("이름이 3글자가 아닙니다.");
  }
}

// 이름을 보여주는 함수
function showName() {
  // 이름이 입력되지 않은 경우 경고창을 보여줌
  if (name == null || name == "") {
    alert("이름을 입력해주세요.");
  }
  // 이름이 3글자가 아닌 경우 경고창을 보여줌
  else if (name.length != 3) {
    alert("이름이 3글자가 아닙니다.");
  }
  // 이름이 정상적으로 입력된 경우 이름을 보여줌
  else {
    alert(name);
  }
}
