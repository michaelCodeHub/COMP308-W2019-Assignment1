
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