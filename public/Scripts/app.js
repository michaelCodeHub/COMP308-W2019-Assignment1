// File Name : scripts/app.js
// Author Name : Michael ADAIKALARAJ
// Student Number : 300958145
// Date : Feb 12, 2019

function openNav() {
    if(document.getElementById("mySidenav").style.width == "400px"){
        document.getElementById("mySidenav").style.width = "0";
    }else{
        document.getElementById("mySidenav").style.width = "400px";
    }
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }