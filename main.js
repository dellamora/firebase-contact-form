// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey:
//   authDomain:
//   projectId: "
//   storageBucket:
//   messagingSenderId:
//   appId:
// };
const app = initializeApp(firebaseConfig);

let contactInfo = firebase.database().ref("infos");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");

  saveMessage(name, company, email, phone, message);
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, company, email, phone, message) {
  var newcontactInfo = contactInfo.push();
  newcontactInfo.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message,
  });
  console.log(contactInfo);
}
