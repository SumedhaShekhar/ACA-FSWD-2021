const baseURL = "http://localhost:12345/"
async function Get(url = "") {
  const response = await fetch(url);
  return response.json();
}

function register() {
  document.getElementById("response").style.display = "none";
  document.getElementById("register").style.display = "block";
  document.getElementById("formData").style.display = "none";
}

function get_data() {
  document.getElementById("response").style.display = "none";
  document.getElementById("register").style.display = "none";
  document.getElementById("formData").style.display = "block";
}

function viewResp() {
  document.getElementById("response").style.display = "block";
  document.getElementById("register").style.display = "none";
  document.getElementById("formData").style.display = "none";
}

function datasavedone(x) {
  var div1 = document.getElementById("response");
  div1.innerHTML =
    '<hr><h5 class="mb-4">Your data has been saved sucessfully!</h5> <p>token:' +
    x +
    "</p>" +
    div1.innerHTML;
  viewResp();
}

function tokenresponse(x) {
  var obj = JSON.parse(JSON.stringify(x));

  var div1 = document.getElementById("response");
  div1.innerHTML =
    '<hr><h5 class="mb-4">Your generated token is: </h5>' +
    obj.token +
    div1.innerHTML;
  viewResp();
}

function dataGetdone(tokn, dta, usrname) {
  var div1 = document.getElementById("response");

  div1.innerHTML =
    '<hr><h5 class="mb-4">For token <b>' +
    tokn +
    "</b> user name is <b>" +
    usrname +
    "</b> and saved data is <b>" +
    dta +
    "</b>.</h5>" +
    div1.innerHTML;
  viewResp();
}

function errorhere(x) {
  x = String(x);
  var div1 = document.getElementById("response");

  div1.innerHTML =
    '<hr><h5 class="mb-4" style="border-left: 5px solid red; color: #dc3545; padding: 3px">ERROR: <b>' +
    x.toUpperCase() +
    "</b>.</h5>" +
    div1.innerHTML;
  viewResp();
}

async function get_token() {
  theUrl = baseURL + "get_token";
  Get(theUrl).then((res) => {
    tokenresponse(res);
  });
}

async function submitdata(form) {
  var data_username = form.elements.namedItem("username").value;
  var data_token = form.elements.namedItem("token").value;
  var data_data = form.elements.namedItem("data").value;

  let entry = {
    username: data_username,
    data: data_data,
    token: data_token,
  };

  let response = await fetch( baseURL + "register", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(entry),
  })
    .then((respons) => {
      console.log(respons);
      if (respons.status == 200) {
        datasavedone(data_token);
      } else {
        return respons.json();
      }
    })
    .then((obj) => {
      if (obj.error != undefined) {
        errorhere(obj.error);
      }
    });
}

async function GetSubdata(form) {
  var data_token = form.elements.namedItem("token").value;

  let entry = {
    token: data_token,
  };

  let response = await fetch(baseURL+"get_data", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(entry),
  })
    .then((res) => {
      return res.json();
    })
    .then((olm) => {
      output = JSON.parse(JSON.stringify(olm));
      if (output.error == undefined) {
        dataGetdone(data_token, output.data, output.username);
      } else {
        errorhere(output.error);
      }
    });
}