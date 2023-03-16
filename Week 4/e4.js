document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.getElementById('heading1');
    h1.firstChild.nodeValue = 'This is the updated heading 1 by javascript.';

    const p1 = document.getElementById('paragraph1');
    p1.firstChild.nodeValue = 'This is the updated paragraph by javascript.';
});