document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generateBtn");
    const qrText = document.getElementById("qrText");
    const qrCodeContainer = document.getElementById("qrCode");
    const copyBtn = document.getElementById("copyBtn");

    generateBtn.addEventListener("click", function () {
        const text = qrText.value.trim();
        
        if (text === "") {
            alert("Please enter a valid URL or text.");
            return;
        }

        // Clear previous QR code
        qrCodeContainer.innerHTML = "";

        // Generate new QR code
        new QRCode(qrCodeContainer, {
            text: text,
            width: 150,
            height: 150
        });

        // Show copy button
        copyBtn.style.display = "block";
    });

    copyBtn.addEventListener("click", function () {
        html2canvas(qrCodeContainer).then(canvas => {
            canvas.toBlob(blob => {
                const item = new ClipboardItem({ "image/png": blob });
                navigator.clipboard.write([item]);
                alert("QR Code copied to clipboard!");
            });
        });
    });
});
