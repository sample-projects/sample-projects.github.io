const qrImg = document.getElementById("qrImg");
const studentId = document.getElementById("studentId");

if (studentId.value != '') {
    let qrValue = studentId.value; 
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
}