const qrImg = document.getElementById("qrImg");
const studentId = document.getElementById("studentId");
console.log("HELLO")

let qrValue = studentId.value;

if(!qrValue) return;

qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;