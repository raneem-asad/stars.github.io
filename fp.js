//     let myvideo= document.getElementById('myvideo');
//     myvideo.start();

// }
// function pause(){
//     myvideo.pause();
    
// } 
// function size(){
//     myvideo.width="300px";
    
// }

var xArray = ["mercury", "venus", "earth", "mars", "asteroid belt","jupeter","saturn","uranus","neptune","pluto"];
var yArray = [35, 67, 93, 142, 297,484,889,1790,2880,3670];

var data = [{
  x:xArray,
  y:yArray,
  type:"bar"
}];

var layout = {title:"Planets Distances From The Sun (million km)"};

Plotly.newPlot("myPlot", data, layout);

 type="module"
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAB15M0vrxXyKhBcOmEW1b1waX2S0jGqOI",
    authDomain: "neww-28a49.firebaseapp.com",
    databaseURL: "https://neww-28a49-default-rtdb.firebaseio.com",
    projectId: "neww-28a49",
    storageBucket: "neww-28a49.appspot.com",
    messagingSenderId: "232582766019",
    appId: "1:232582766019:web:6fd6eae6e9075e853c7176",
    measurementId: "G-LM723RHCE8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  import {getdatabase , ref , set }from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js"

  const db=getdatabase();
  var name=document.getElementById('name')
  var age=document.getElementById('age')
  var email=document.getElementById('email')

  
  function insertdata(){
    set(ref(db,"user"+Number.value),{
      std_name:name.value,
      std_email:email.value,
      std_age:age.value
  
    }).then(()=>{
      alert('add');
  }).catch((error)=>{
      alert('error');
  })
  }

var add=document.getElementById("add");
 add=addEventListener("click",addData);
var remove=document.getElementById('remove');
   



let slideIndex = 0;
slide-track();

function slidetrack() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(slide-track, 2000); // Change image every 2 seconds
}





