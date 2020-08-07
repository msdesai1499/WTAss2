document.querySelector('#submit').addEventListener("click",displayEntry);
let row=1;
function displayEntry()
{

    var t=new Date();
    var time=t.getTime();
            console.log(time);

      var fname=document.getElementById("fname").value;
      var lname=document.getElementById("lname").value;
      var username=document.getElementById("username").value;
      var password=document.getElementById("password").value;
      var email=document.getElementById("email").value;
      var mobno=document.getElementById("mobno").value;
      var clg=document.getElementById("clg").value;
      var dept = document.getElementById("dept");
    var deptname = dept.options[dept.selectedIndex].value;
    var lang = document.getElementById("lang");
    var langname = lang.options[lang.selectedIndex].value;
    var fname1 = /^[a-zA-Z]+ [a-zA-Z]+$/;
    
      var regPh=/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
      var titleregex=/^[A-Za-z]+$/;
      var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!fname || !lname || !username || !email || !mobno || !password || !clg) {
        alert('Please fill all details');
        return;
    }
    else if (fname.length < 3) {
        alert('Enter valid first name');
    }
    else if (lname.length < 3) {
        alert('Enter valid middle name');	
    }
    else if(!regPh.test(mobno)){
        alert('Enter valid mobile number');
    }
    else if(!regEmail.test(email))
    {
        alert("Enter valid email_id");
    }
    else
    {
    var display=document.getElementById("display");
    var newrow=display.insertRow(row);
    var cell1=newrow.insertCell(0);
    var cell2=newrow.insertCell(1);
    var cell3=newrow.insertCell(2);
    var cell4=newrow.insertCell(3);
    var cell5=newrow.insertCell(4);
    var cell6=newrow.insertCell(5);
    var cell7=newrow.insertCell(6);
    var cell8=newrow.insertCell(7);
    var cell9=newrow.insertCell(8);
        cell1.innerHTML=time;
        cell2.innerHTML=fname;
        cell3.innerHTML=lname;
        cell4.innerHTML=username;
        cell5.innerHTML=email;
        cell6.innerHTML=mobno;
        cell7.innerHTML=clg;
        cell8.innerHTML=deptname;
        cell9.innerHTML=langname;
        row++;
        alert("Your registration is done successfully");
    flag=1;
    }
    if(flag==1) {
 
    document.getElementById('fname').value='';
    document.getElementById('lname').value='';
    document.getElementById("username").value='';
    document.getElementById("password").value='';
    email=document.getElementById("email").value='';
    mobno=document.getElementById("mobno").value='';
    clg=document.getElementById("clg").value='';
    }
    
}

function disp(e)
{
if(e==1)
{
    document.getElementById("home").style.display="block";
    document.getElementById("registeration").style.display="none";
    document.getElementById("details").style.display="none";
}
else if(e==2)
{
    document.getElementById("home").style.display="none";
    document.getElementById("registeration").style.display="block";
    document.getElementById("details").style.display="none";
}
else if(e==3)
{
    document.getElementById("home").style.display="none";
    document.getElementById("registeration").style.display="none";
    document.getElementById("details").style.display="block";
}
}