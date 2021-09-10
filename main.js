import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDAuoFLHf7uLpRn8o6m9NCeq8u_92NzYVk",
  authDomain: "formcontact-49b54.firebaseapp.com",
  projectId: "formcontact-49b54",
  storageBucket: "formcontact-49b54.appspot.com",
  messagingSenderId: "1021433148415",
  appId: "1:1021433148415:web:39e9ab9d1651847dc46dca",
};
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
}
