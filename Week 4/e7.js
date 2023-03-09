const button1 = document.getElementById('button1');
const input1 = document.getElementById('input1');
const alertBox = document.querySelector('.alert-box');
alertBox.style.display = 'none';

button1.onclick = () => {
    // alert(`You Entered : ${input1.value}`)
    if(alertBox.style.display === 'none'){
        alertBox.style.display = 'block';
        console.log("Visible")
    }else{
        alertBox.style.display = 'none';
        console.log("Hidden")
    }
}