const copyToClipboard = emailToCopy => {
    emailToCopy = document.getElementById('email').innerText;

    const el = document.createElement('textarea');
    
    el.value = emailToCopy;
    
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    el.style.opacity = 0;
    
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};