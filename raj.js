document.addEventListener('DOMContentLoaded', function () {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://seriousblack01.github.io/my-offers/your-html-file.html'; // Replace with your HTML file URL
    iframe.style.width = '100%';
    iframe.style.height = '100vh';
    document.body.appendChild(iframe);
});