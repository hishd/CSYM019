const input1 = document.getElementById('input1');
const text = document.getElementById('text');
input1.onkeyup = function() {
  console.log(input1.value);
  text.firstChild.nodeValue = input1.value;
}