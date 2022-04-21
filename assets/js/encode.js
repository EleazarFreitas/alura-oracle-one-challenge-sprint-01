
function codeString() {
  let textarea = document.getElementById("string").value;
  document.getElementById("print").innerHTML = btoa(textarea);
  let copied = document.querySelector(".copy");
  copied.textContent = 'Copiar'; 
  
}

function decodeString() {
  let textarea = document.getElementById("string").value;
  document.getElementById("print").innerHTML = atob(textarea);
  let copied = document.querySelector(".copy");
  copied.textContent = 'Copiar';
}

function copyText(){
  let toCopy = document.getElementById("print");
  toCopy.select();
  navigator.clipboard.writeText(toCopy.value);
  let copied = document.querySelector(".copy");
  copied.textContent = 'Copiado';
}
