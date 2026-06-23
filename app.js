async function processVideo() {
  const formData = new FormData();
  // Logic to append files from input IDs to formData
  // fetch('/api/process', { method: 'POST', body: formData })
  console.log("Sending files to backend for processing...");
}

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
