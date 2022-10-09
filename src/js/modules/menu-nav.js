export function menu(className) {
    const menuNav = className.querySelector('.header__right');
    const menuBtn = className.querySelector('.btn-nav');
    const btnIcon = menuBtn.querySelector('.btn-nav__icon');

    menuBtn.addEventListener('click', menuHandler);


    function menuHandler() {
        if (!menuNav.classList.contains('header__right--active')) {
            menuActive();
            disableScroll();
            menuLink();
            
            window.addEventListener('keydown', escapeHandler);
        } else {
            menuClose();
            enableScroll();
        }
    }

    function menuLink() {
        const links = menuNav.querySelectorAll('.js-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuClose();
                enableScroll();
            })
        });
    }

    function menuActive() {
        btnIcon.classList.add('btn-nav__icon--active');
        menuNav.classList.add('header__right--active');   
    }

    function menuClose() {
        btnIcon.classList.remove('btn-nav__icon--active');
        menuNav.classList.remove('header__right--active');
    }

    function disableScroll() {
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
        document.body.classList.add('modal-open')
        document.body.style.paddingRight = paddingOffset;
    }

    function enableScroll() {
        document.body.classList.remove('modal-open')
        document.body.style.removeProperty('padding-right');
    }

    function escapeHandler(e) {
        // закрытие меню по кнопке escape
        if (e.key === 'Escape') {
            menuClose();
            enableScroll();
        }
    }

}