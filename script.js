const wrapper=document.querySelector(".wrapper");
const getbtn=wrapper.querySelector(".form button");

const qrInput =wrapper.querySelector(".form input");
const qrimg =wrapper.querySelector(".qr-code img");


getbtn.addEventListener("click",()=>{

    let qrvalue=qrInput.value;
    if(!qrvalue) return;
    getbtn.innerHTML="QR code Generating ...";
    qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
    qrimg.addEventListener("load",()=>{
        getbtn.innerHTML="Generate QR code"
        wrapper.classList.add("active");
    })
});
qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value)
    {
        wrapper.classList.remove("active");
    }
})