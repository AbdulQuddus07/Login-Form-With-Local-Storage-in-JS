function getData() {
  let email, password;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("userDetails"))
    ? JSON.parse(localStorage.getItem("userDetails"))
    : [];
  if (
    user_records.some((v) => {
      return v.Email == email && v.Password == password;
    })
  ) {
    alert("Login Successfull");
    let currentuser = user_records.filter((v) => {
      return v.Email == email && v.password == password;
    })[0];
    localStorage.setItem("Email", currentuser.Email);
    localStorage.setItem("Password", currentuser.password);
    window.location.href = "login.html";
  } else {
    alert("Login Failed");
  }
}
