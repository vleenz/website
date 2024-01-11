const navItems = document.querySelectorAll('nav li');

navItems.forEach(item => {
    const link = item.querySelector('a');

    link.addEventListener('mouseover', function (e) {
        link.style.textDecoration = 'underline';
    });

    link.addEventListener('mouseout', function (e) {
        link.style.textDecoration = '';
    });
});