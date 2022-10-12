function setclock() {
  var dateInfo = new Date();
  var hour = numberfix(dateInfo.getHours());
  var min = numberfix(dateInfo.getMinutes());
  var sec = numberfix(dateInfo.getSeconds());
  document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;

  var year = numberfix(dateInfo.getFullYear());
  var month = numberfix(dateInfo.getMonth() + 1); // 월은 월+1
  var date = numberfix(dateInfo.getDate());
  document.getElementById("date").innerHTML = year + ":" + month + ":" + date;
}

function numberfix(number) {
  // 9보다 작은 숫자는 앞에 0을 붙여줌
  // 7 -> 07
  // 2022.10.12. 이용희 수정
  if (number < 10) return "0" + number;
  else return number;
}

setclock();
setInterval(setclock, 1000);
