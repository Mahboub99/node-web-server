function submitForm(event) {
  event.preventDefault();
  alert("request sent");
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let age = document.getElementById("age").value;
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/", false);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("fname=" + fname + "&lname=" + lname + "&age=" + age);
}
