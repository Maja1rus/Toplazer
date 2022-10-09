export function tabsFn(className) {
    const tabNavs = className.querySelectorAll('.nav-tab');
    const tabPanels = className.querySelectorAll('.tab-pane');
    tabPanels.forEach(item => {
        item.addEventListener('click', e => {
            const dataNumber = e.target.closest('.tab-pane').dataset.tabContent;
            [...tabNavs].find(item => !item.classList.contains('hidden')).classList.add('hidden');
            [...tabNavs].find(item => item.dataset.tab === dataNumber).classList.remove('hidden');
            [...tabPanels].find(item => {
                item.dataset.tabContent === dataNumber
                    ? item.classList.add('active')
                    : item.classList.remove('active');
            })
        });
    });
}