function validate
{
    let name=document.getElementById("text");
    let email=document.getElementsById("email").value;
    let password=document.getElementsById("password").value;
    let cpassword=document.getElementsById("password").value;
    let msg="";
    if(name.value=="")
    {
        alert("Enter your Name !!!");
        return false;
    }
}