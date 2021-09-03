const firebaseConfig = {
    apiKey: "AIzaSyCXjfqWAZHXtk2iLTCM6KvZbSE-j6S0i-g",
    authDomain: "contact-form-e4730.firebaseapp.com",
    projectId: "contact-form-e4730",
    storageBucket: "contact-form-e4730.appspot.com",
    messagingSenderId: "243040180218",
    appId: "1:243040180218:web:36d8009a1b5a16871c3643"
  };

 
  //Initialize Firebase 
firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("fomData")

const form = document.getElementById('myForm'); // Obtenemos la referencia al formulario

if(form){ // Si existe nuestro elemento en memoria este se quedara escuchando al evento submit del formulario
  form.addEventListener('submit', contactForm);
   // Al momento de enviar el formulario, ejecuta la función "contactform"
}

//Get Submit Form
// let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
// submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior

  function contactForm(e) {
  e.preventDefault()

  //Get Form Values
  let name = document.getElementById('username').value
  let e_mail = document.getElementById('email').value
  let m_essage = document.getElementById('message').value

  //Save Form Data To Firebase
  db.doc().set({
    username: name,
    email: e_mail,
    message: m_essage
  }).then( () => {
    // alert("Your Form Has Been Submitted Successfully");
    $('#myModal').modal('show');
    $('#myForm')[0].reset();
  }).catch((error) => {
    alert(error)
  })

  //alert
  
}