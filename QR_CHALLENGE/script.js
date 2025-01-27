// Generate a QR code inside the #qrcode div
const qrCode = new QRCode(document.getElementById("qrcode"), {
    text: "https://example.com", // Replace with your desired URL
    width: 150,
    height: 150,
    colorDark: "#000000",
    colorLight: "#FFFFFF",
    correctLevel: QRCode.CorrectLevel.H
  });
  
  // Add subtle hover animation (optional)
  document.querySelector('.box').addEventListener('mouseenter', () => {
    console.log('Card Hovered');
  });
  