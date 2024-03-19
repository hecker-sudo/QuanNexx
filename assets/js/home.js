function loadScript(src, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
}

loadScript('/dist/uv.handler.js', function () {
    loadScript('/dist/uv.bundle.js', function () {
        loadScript('/dist/uv.config.js', function () {
            console.log('Loaded assets');
        });
    });
});


function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let month = now.getMonth() + 1;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const milliseconds = now.getMilliseconds().toString().padStart(2,'0');
    const date = now.getDate().toString().padStart(2,'0');
    const year = now.getFullYear().toString().padStart(2,'0');

    if (hours > 12) {
        hours -= 12;
    }
    if (hours === 0) {
        hours = 12;
    }

    const timeString = `${hours}:${minutes}:${seconds}:${milliseconds} | ${month}-${date}-${year}`;
    document.getElementById('time').textContent = timeString;
}

updateClock();
setInterval(updateClock, 10);


const options = [
    "Right-Click to access more features",
    "Set a custom background in settings.",
    "Tab Cloaking is highly recommended",
    "About:Blank Cloak is highly recommended",
    "Finally, an actual site unblocker that works fast!",
    "It is not important to share this proxy with anyone",
    "Quantum Physics is highly important!",
    "© Copyright 2024 QuanNex Network. All Rights Reserved.",
    "Customize QuanNex by going to Setttings>Themes",
    "Automatically changing time and date",
    "Please don't use our website for illegal activities.",
    "Please support us on discord",
    "Support Anonymous Hacking Group!",
    "We support Human Rights and Privacy",
    "Privacy is our number one priority!",
    

];

function getRandomOption() {
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
}

function setRandomPlaceholder() {
    const placeholder = document.getElementById("placeholder");
    placeholder.textContent = getRandomOption();
}

setRandomPlaceholder();

var proxybar = document.querySelector('.proxybar');
var search = document.getElementById('search');
proxybar.addEventListener('focus', () => {
    search.style.marginLeft = '-367px';
});

proxybar.addEventListener('blur', () => {
    search.style.marginLeft = '-150px';
});

let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);
if (isMobileDevice) {
 window.location.href = '/mobile.html';
}

/*
var scriptElement = document.createElement('script');
scriptElement.type = 'text/javascript';
scriptElement.innerHTML = `
  atOptions = {
    'key' : 'fc0ad22bd8c1ea22c8c08df927121e8f',
    'format' : 'iframe',
    'height' : 60,
    'width' : 468,
    'params' : {}
  };
  document.write('<scr' + 'ipt type="text/javascript" src="//topcreativeformat.com/fc0ad22bd8c1ea22c8c08df927121e8f/invoke.js"></scr' + 'ipt>');
`;
document.body.appendChild(scriptElement);

window.onload = function() {
    var adFrame = document.querySelector('iframe');
    if (adFrame) {
      adFrame.style.borderRadius = '10px';
      adFrame.style.position = 'absolute';
      adFrame.style.bottom = '1%';
      adFrame.style.left = '50%'; // Set left to 50%
      adFrame.style.transform = 'translateX(-50%)'; // Center horizontally using translateX
    } else {
      console.error('Iframe not found on the page.');
    }
};
*/