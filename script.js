document.addEventListener('DOMContentLoaded', (event) => {
    const textarea = document.getElementById('content');
    const status = document.getElementById('status');
    const SAVE_INTERVAL = 5000; 


    const savedContent = localStorage.getItem('autosaveContent');
    if (savedContent) {
        textarea.value = savedContent;
        status.innerText = 'Content loaded from last save.';
    }


    const saveContent = () => {
        localStorage.setItem('autosaveContent', textarea.value);
        status.innerText = 'Content auto-saved at ' + new Date().toLocaleTimeString();
    };


    setInterval(saveContent, SAVE_INTERVAL);

   
    setInterval(() => {
        status.innerText = '';
    }, 10000); 
})