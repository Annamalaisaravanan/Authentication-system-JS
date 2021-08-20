 function validate(){
 var fname = document.getElementById('name');
 var lname = document.getElementById('last');
 var email =document.getElementById('email');
 var password = document.getElementById('password');


numbers = /[0-9]/g;
upper = /[A-Z]/g;
lower =/[a-z]/g;

if(fname.value=='' || email.value=='' || password.value=='' || lname.value==''){
       alert('please enter all the fields');
       return false;
}

else if(password.value.length<=5){
   alert('password must be greater than 5');
   return false;
}
else if(!password.value.match(numbers)){
    alert('password must contain atleast 1 number');
    return false;
}
else if(!password.value.match(lower)){
    alert('password must contain atleast 1 lowercase letter');
    return false;
}
else if(!password.value.match(upper)){
    alert('password must contain atleast 1 uppercase letter');
    return false;
}
 else{
 var details =[];

 if(JSON.parse(localStorage.getItem('details'))){
        details = JSON.parse(localStorage.getItem('details'));
 }
let user ={
      firstname: fname.value,
      lastname: lname.value,
      id: email.value,
      pass: password.value
}
var flag=1;
if(JSON.parse(localStorage.getItem('details')).length==0){
    details.push(user);
    localStorage.setItem('details',JSON.stringify(details));
}
else{
    for(let i=0;i<JSON.parse(localStorage.getItem('details')).length;i++){
                                            const oldmail = JSON.parse(localStorage.getItem('details'))[i].id;
                                            if(oldmail == email.value){
                                                                        alert('Mail id already exist');
                                                                        flag=0;
                                                                        return false;
                                            }
                                        }
                                    if(flag==1){
                                            details.push(user);
                                            localStorage.setItem('details',JSON.stringify(details));
                                            return true;
                                        }
    
}


}

}
