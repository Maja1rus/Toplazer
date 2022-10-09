export function scrollTopShow(btn) {
    window.addEventListener('scroll', scrollHandler)

    function scrollHandler() {
        if (window.scrollY > 500) {
            btn.classList.add('active')
            btn.addEventListener('click', scrollTop);
        } else if (window.scrollX < 500) {
            btn.classList.remove('active');
            btn.removeEventListener('click', scrollTop);
        }
    }
    function scrollTop() {
        window.scrollTo(0, 0);
        console.log('object');
    }
}
