const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");




function saveData(event) {
  event.preventDefault();
  let name, email, password, phone_number, dob;
  name = document.getElementById("username").value;
   email = document.getElementById("useremail").value;
  password = document.getElementById("userpassword").value;
  dob = document.getElementById("userdob").value;
  phone_number = document.getElementById("userphone").value;
  checkStatus = 0;
  
  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("userDetails")) ?? [];

  for (let v of user_records) {
    if (v.Email == email) {
      checkStatus = 1;
      break;
    }
  }
  if (checkStatus == 1) {
    alert("Email is Already Exist")
  }
    else{
    user_records.push({"Name":name,
      "Email" : email,
      "Password" : password,
      "phone_number" : phone_number,
      "date_of_birth" : dob
    })
    lert("Account Created")
  }
  
  localStorage.setItem("userDetails",JSON.stringify(user_records));
}

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});