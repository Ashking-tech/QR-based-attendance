// QR Code Generation
const qrCanvas = document.getElementById('qr-canvas');
const qr = new QRious({
    element: qrCanvas,
    size: 200, // Adjust size as needed
    value: 'initial-content' // Start with default content
});

// Function to generate a unique URL for the QR code
function generateUniqueQRCode() {
    // Replace with your local IP address if needed
    const baseUrl = 'http://192.168.233.175:3000/record-attendance'; // Use your local IP address
    const uniqueId = Date.now(); // Generate a unique ID using the current timestamp
    const newValue = `${baseUrl}?id=${uniqueId}`; // Create a URL with a unique query parameter
    qr.set({ value: newValue }); // Update the QR code
    console.log('Generated QR Code with value:', newValue); // Log the new value to the console for testing
}

// Function to handle QR code scanning
document.getElementById('scan-button').addEventListener('click', function () {
    let scanner = new Instascan.Scanner({ video: document.getElementById('qr-video') });

    scanner.addListener('scan', function (content) {
        console.log('Scanned content: ' + content);

        // Send the scanned content (QR code) to the server
        fetch('/record-attendance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                scannedUrl: content,              // Scanned QR code content (URL)
                timestamp: new Date().toISOString() // Current timestamp
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data);
            alert('Attendance recorded successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error recording attendance.');
        });
    });

    // Start the scanner with the first available camera
    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
            document.getElementById('qr-video').style.display = 'block';
        } else {
            alert('No cameras found.');
        }
    }).catch(function (error) {
        console.error('Error accessing camera:', error);
        alert('Error accessing camera: ' + error);
    });
});

// Event listener for generating QR code
document.getElementById('generate-qr').addEventListener('click', generateUniqueQRCode);

// Generate an initial QR code when the page loads
generateUniqueQRCode();
