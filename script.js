 function validate(){
 var username = document.getElementById('name');
 var password = document.getElementById('password');

 numbers = /[0-9]/g;
 uppercase= /[A-Z]/g;
 lowercase = /[a-z]/g;


 if(username.value == "" || password.value == ""){
     alert('No blank spaces are allowed');
     return false;
 }
 else if(password.value.length<=4){
     alert('Password is too weak');
     return false;
 }
 else if(!password.value.match(numbers)){
     alert('Password contain atleast 1 number');
     return false;
 }
 else if(!password.value.match(uppercase)){
     alert('Password contain atleast one Capital letter');
     return false;
 }
 else if(!password.value.match(lowercase)){
     alert('Password contain atleast one small letter');
     return false;
 }
 else{
      
      var flag =1;
      for (let i=0;i<localStorage.length;i++){
                    const  n1 = localStorage.key(i);
                    const pass1 = localStorage.getItem(n1);
                    if(n1 == username.value){
                        alert('Username Alerady Exist..Try with another name');
                        flag =0;
                        return false;
                    }
      if(flag==1){
          localStorage.setItem(username.value,password.value);
          return true;
      }   
     }
      
      
 }
 }


