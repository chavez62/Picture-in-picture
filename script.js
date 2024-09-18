const videoElement = document.getElementById('video');
const button = document.getElementById('button');
let mediaStream = null; // Store the media stream globally

// Function to select webcam stream
async function selectWebcamStream() {
    try {
        // Request access to the webcam
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = mediaStream;

        // Wait until the video metadata is loaded and then play the video
        videoElement.onloadedmetadata = () => {
            videoElement.play().then(() => {
                console.log('Webcam feed is playing...');
                // Enable the button now that the video is ready
                button.disabled = false;
            }).catch((error) => {
                console.error('Error playing webcam video:', error);
            });
        };
    } catch (error) {
        console.log('Error accessing webcam:', error);
    }
}

// Event listener for the button click to enter Picture-in-Picture mode
button.addEventListener('click', async () => {
    // Disable the button to prevent multiple clicks
    button.disabled = true;

    try {
        // Check if Picture-in-Picture is supported and request PiP mode
        if ('pictureInPictureEnabled' in document && videoElement.requestPictureInPicture) {
            await videoElement.requestPictureInPicture();
        } else {
            console.log('Picture-in-Picture is not supported in this browser.');
        }
    } catch (error) {
        console.error('Failed to enter Picture-in-Picture mode:', error);
    }

    // Enable the button again after the process
    button.disabled = false;
});

// Function to stop the webcam stream
function stopWebcamStream() {
    if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
        console.log('Webcam stream stopped.');
    }
}

// On load, select the webcam stream
selectWebcamStream();

// Example: Stop the stream when the user exits Picture-in-Picture mode (optional)
videoElement.addEventListener('leavepictureinpicture', () => {
    stopWebcamStream();
});
