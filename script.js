

function registration() {
    let Email = document.userForm.email.value
    let Password = document.userForm.password.value
     console.log("Email : " + Email)
     console.log("Password : " + Password)
     document.getElementById('table').style.display='block'
     document.getElementById('id01').style.display='none'

}


function a() {
    document.getElementById('id01').style.display='block'
    document.getElementById('Register').style.display='none'
}

function b() {
    document.getElementById('id01').style.display='none'
    document.getElementById('Register').style.display='block'

}
