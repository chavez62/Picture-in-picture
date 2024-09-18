# Webcam Picture-in-Picture Project

This project demonstrates how to access a user's webcam feed, display it in a video element, and enable Picture-in-Picture (PiP) mode. It uses the browser's `getUserMedia` API to access the webcam and `requestPictureInPicture` API to trigger PiP mode.

## Features

- Capture live webcam feed using `navigator.mediaDevices.getUserMedia()`.
- Display the webcam feed in a video element.
- Enable Picture-in-Picture mode, allowing the video to float above other windows.
- Option to stop the webcam stream when exiting Picture-in-Picture mode.

## Technologies

- HTML
- JavaScript
- Picture-in-Picture API
- getUserMedia API

## Getting Started

### Prerequisites

This project works in modern browsers that support the `getUserMedia` and Picture-in-Picture APIs. Make sure you are using a compatible browser such as:

- Google Chrome (v70+)
- Microsoft Edge (v79+)
- Firefox (v68+)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/webcam-picture-in-picture.git
   ```
2. Navigate to the project directory:

   ```bash
   cd webcam-picture-in-picture
   ```
3. Open the index.html file in your browser.


## Usage
1. When the page loads, you will be prompted to allow access to your webcam.
2. After accepting, the webcam feed will be displayed in a <video> element.
3. Click the "Enable Picture-in-Picture" button to switch the webcam feed into Picture-in-Picture mode.
4. When you exit Picture-in-Picture mode, the webcam stream will stop.
