function verifForm(){
    if (document.getElementById("username").value==""){
      alert("can u write your username please !!");
      return false ;
    }
    if (document.getElementById("pwd").value.length<8){
      alert("choose the right password !!");
      return false ;
    }
  
    
    
  }