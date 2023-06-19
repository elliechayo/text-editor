const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

// Logic for installing the PWA
// event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
     deferredPrompt = event;
   });

// click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
     if (deferredPrompt != null) {
       deferredPrompt.prompt();
       const { outcome } = await deferredPrompt.userChoice;
       if (outcome === "accepted") {
         deferredPrompt = null;
       }
     }
   });

// handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
     console.log("Thank you for installing JATE!");
   });