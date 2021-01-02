let flag = 0;

function validate() {
  let final = document.getElementById('final');

  flag = 0;
  valfullname();
  valphone();
  vallang();
  valemail();
  validproof();
  valaddress();
  valusername();
  valpassword();
  valcpassword();
  valdob();
  valgender();
  valtc();
  
  if(flag == 12) {
    final.style.display = 'block';
  } else {
    final.style.display = 'none';
  }
  return false;
}

function valfullname() {
  const fullname = document.getElementById("fullname").value;
  let valmsg = document.getElementById("fullnamemsg");
  let p = /[a-zA-Z0-9 \.]+/;
  let w = /[!@#$%^&*)(-=+;:'"/?.>,`~<]/;

  valmsg.innerHTML = "";

  if (fullname == "") {
    valmsg.innerHTML += "<small>**empty fullname</small>";
    valmsg.style.color = "red";
  }
  if (p.test(fullname) == false || w.test(fullname) == true) {
    valmsg.innerHTML += "<small>**not correct format</small>";
    valmsg.style.color = "red";
  }
  if (fullname.length < 5 || fullname.length > 100) {
    valmsg.innerHTML += "<small>**length problem</small>";
    valmsg.style.color = "red";
  }
  if (valmsg.innerHTML == "") {
    valmsg.innerHTML = "<small>**success fullname</small>";
    valmsg.style.color = "green";
    flag += 1;
  }
}

function valphone() {
  const phone = document.getElementById('phone').value;
  let valmsg = document.getElementById('phonemsg');
  let p = /[\d]+/;

  valmsg.innerHTML = "";

  if(phone == "") {
    valmsg.innerHTML += "<small>**empty phone no</small>";
    valmsg.style.color = "red";
  }
  if(p.test(phone) == false) {
    valmsg.innerHTML += "<small>**not correct format</small>";
    valmsg.style.color = "red";
  }
  if(phone.length != 10) {
    valmsg.innerHTML += "<small>**lenght problem</small>";
    valmsg.style.color = "red";
  }
  if(valmsg.innerHTML == "") {
    valmsg.innerHTML += "<small>**phone registered</small>";
    valmsg.style.color = "green";
    flag += 1;
  }
}

function valemail() {
  const email = document.getElementById("email").value;
  let valmsg = document.getElementById("emailmsg");
  let p = /[a-zA-Z0-9\.]+@[a-zA-Z]+\.[a-z\.]+/;

  valmsg.innerHTML = "";

  if (email == "") {
    valmsg.innerHTML += "<small>**empty email</small>";
    valmsg.style.color = "red";
  }
  if (p.test(email) == false) {
    valmsg.innerHTML += `<small>**not correct format</small>`;
    valmsg.style.color = "red";
  }
  if (valmsg.innerHTML == "") {
    valmsg.innerHTML = "<small>**email verified</small>";
    valmsg.style.color = "green";
    flag += 1;
  }
}

function valusername() {
  const username = document.getElementById("username").value;
  let valmsg = document.getElementById("usernamemsg");
  let p = /[a-zA-Z0-9_]/;
  let w = /[!@#$%^&*)(-=+;:'"/?.>,`~<]/;

  valmsg.innerHTML = "";

  if (username == "") {
    valmsg.innerHTML = "<small>**empty username</small>";
    valmsg.style.color = "red";
  }
  if (p.test(username) == false || w.test(username) == true) {
    valmsg.innerHTML += "<small>**not corrcet format</small>";
    valmsg.style.color = "red";
  }
  if (username.length < 5 || username.length > 15) {
    valmsg.innerHTML += "<small>**length problem</small>";
    valmsg.style.color = "red";
  }
  if (valmsg.innerHTML == "") {
    valmsg.innerHTML = "<small>**username eligible</small>";
    valmsg.style.color = "green";
    flag += 1;
  }
}

function valpassword() {
  const password = document.getElementById("password").value;
  let valmsg = document.getElementById("passwordmsg");
  let p = /[a-zA-Z0-9@!#$%^&*+<>,?-]/;
  let w = /[ ]/;

  valmsg.innerHTML = "";

  if (password == "") {
    valmsg.innerHTML += "<small>**empty password</small>";
    valmsg.style.color = "red";
  }
  if (p.test(password) == false || w.test(password) == true) {
    valmsg.innerHTML += "<small>**not corrcet format</small>";
    valmsg.style.color = "red";
  }
  if (valmsg.innerHTML == "") {
    valmsg.innerHTML = "<small>**password eligible</small>";
    valmsg.style.color = "green";
    flag += 1;
  }
}

function valcpassword() {
  const cpassword = document.getElementById("cpassword").value;
  const password = document.getElementById("password").value;
  let valmsg = document.getElementById("cpasswordmsg");

  valmsg.innerHTML = "";

  if (cpassword == "") {
    valmsg.innerHTML += "<small>**empty cpassword</small>";
    valmsg.style.color = "red";
  }
  if (cpassword != password) {
    valmsg.innerHTML += "<small>**no match</small>";
    valmsg.style.color = "red";
  }
  if (valmsg.innerHTML == "") {
    valmsg.innerHTML = "<small>**cpassword match</small>";
    valmsg.style.color = "green";
    flag += 1;
  }
}

function valdob() {
  const dob = document.getElementById("dob").value;
  let valmsg = document.getElementById("dobmsg");

  valmsg.innerHTML = "";

  if (dob == "") {
    valmsg.innerHTML = "<small>**enter dob</small>";
    valmsg.style.color = "red";
  } else {
    valmsg.innerHTML = "<small>**got dob</small>";
    valmsg.style.color = "green";
    flag += 1;
  }
}

function valgender() {
  const gender = document.getElementsByClassName("opt");
  let count = 0,
    index;
  let valmsg = document.getElementById("gendermsg");


  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      count++;
      index = i;
    }
  }

  valmsg.innerHTML = "";

  if (count == 0) {
    valmsg.innerHTML = "<small>**choose gender</small>";
    valmsg.style.color = "red";
  } else {
    valmsg.innerHTML = "<small>**gender selected</small>";
    valmsg.style.color = "green";
    flag += 1;
  }
}

function vallang() {
  const langs = document.getElementsByClassName('langs');
  let valmsg = document.getElementById('langmsg');
  let count = 0;

  for(let i=0; i<langs.length; i++) {
    if(langs[i].checked) {
      count++;
    }
  }

  valmsg.innerHTML = "";

  if(count == 0) {
    valmsg.innerHTML = "<small>**select any lang</small>";
    valmsg.style.color = "red";
  } else {
    valmsg.innerHTML = "<small>**lang known</small>";
    valmsg.style.color = "green";
    flag += 1;
  }
}

function valtc() {
  const tc = document.getElementById("tc");
  let valmsg = document.getElementById("tcmsg");

  valmsg.innerHTML = "";

  if (tc.checked == true) {
    valmsg.innerHTML = "<small>**accepted terms &amp; conditions</small>";
    valmsg.style.color = "green";
    flag += 1;
  } else {
    valmsg.innerHTML = "<small>**check terms &amp; conditions</small>";
    valmsg.style.color = "red";
  }
}

function validproof() {
  const idproof = document.getElementById('idproof').value;
  let valmsg = document.getElementById('idproofmsg');

  valmsg.innerHTML = "";

  if(idproof == "") {
    valmsg.innerHTML += "<small>**enter id proof</small>";
    valmsg.style.color = "red";
  } else {
    valmsg.innerHTML += "<small>**id proof verified</small>";
    valmsg.style.color = "green";
    flag += 1;
  }
}

function valaddress() {
  const address = document.getElementById('address').value;
  let valmsg = document.getElementById('addressmsg');

  valmsg.innerHTML = "";

  if(address== "") {
    valmsg.innerHTML = "<small>**plz provide address</small>";
    valmsg.style.color = "red";
    console.log(address.value);
  } else {
    valmsg.innerHTML = "<small>**success address</small>";
    valmsg.style.color = "green";
    flag += 1;

  }
}
