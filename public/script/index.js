function button_validate(){
    console.log("validate function called");
    var a = document.getElementById("full_name").value;
    var b = document.getElementById("email").value;
    var c = document.getElementById("pass").value;
    var d = document.getElementById("phone_num").value;
    var e = document.getElementById("day");
    var f = document.getElementById("month");
    var g = document.getElementById("year");
    
    if (a == "" || b =="" || c == "" || d =="" || e == "" || f =="" || g == "" ) {
      alert("Please fill all data !!");
  }
  else{
    alert("Check your mail for confirmation on your account ")
  }
}