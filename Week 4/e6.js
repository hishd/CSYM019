const h1 = document.getElementById('heading1');
const p1 = document.getElementById('paragraph1');

h1.addEventListener('click', function() {
    h1.firstChild.nodeValue = 'Heading 1 got clicked.';
});

p1.addEventListener('click', function() {
    p1.firstChild.nodeValue = 'Paragraph 1 got clicked.';
});

h1.addEventListener('mouseenter', function() {
    h1.firstChild.nodeValue = 'Mouse entered on heading 1.';
});

h1.addEventListener('mouseleave', function() {
    h1.firstChild.nodeValue = 'Mouse left on heading 1.';
});

p1.addEventListener('mouseenter', function() {
    p1.firstChild.nodeValue = 'Mouse entered on paragraph 1.';
});

p1.addEventListener('mouseleave', function() {
    p1.firstChild.nodeValue = 'Mouse left on paragraph 1.';
});