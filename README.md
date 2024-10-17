QR Code Attendance System

This project is a simple **QR Code Attendance System** that allows teachers to generate QR codes, and students can scan them to record their attendance. The attendance data (student name, QR code content, and timestamp) is saved into a local CSV file.

## Features

- **QR Code Generation**: Teachers can generate a unique QR code for each session.
- **QR Code Scanning**: Students scan the QR code using their mobile device or webcam.
- **Attendance Recording**: Attendance is saved to a **CSV file** locally on the server.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: Local CSV file for storing attendance data
- **QR Code Generation**: [QRious](https://github.com/neocotic/qrious)
- **QR Code Scanning**: [Instascan](https://github.com/schmich/instascan)

## Prerequisites

- **Node.js** and **npm** installed

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/qr-code-attendance.git
   cd qr-code-attendance
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the Server:**

   ```bash
   node server.js
   ```

4. **Access the Application:**
   - Open `http://localhost:3000` in your browser.
   - You can generate and scan QR codes for attendance.

5. **View Attendance Data:**
   - The attendance data is saved to `attendance.csv` in the root directory of the project.

## Project Structure

```
qr-code-attendance/
│
├── public/                    # Contains static assets
│   ├── index.html             # Main frontend HTML page
│   ├── styles.css             # Styling for the project
│   ├── script.js              # QR code generation and scanning logic
│
├── attendance.csv             # CSV file storing attendance data
├── server.js                  # Node.js server to handle requests and save attendance data
├── package.json               # Project dependencies and scripts
├── README.md                  # Project documentation (this file)
```

## How It Works

1. The teacher generates a unique QR code for each session.
2. The student scans the QR code using their mobile device or webcam.
3. Upon scanning, the student enters their name, and the data is sent to the server.
4. The server saves the attendance data (student name, QR code content, timestamp) into a CSV file.

## Future Enhancements

- Add user authentication for teachers and students.
- Enhance security by adding unique session IDs and authentication tokens in the QR codes.
- Improve the UI and add more functionality like attendance reports.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
