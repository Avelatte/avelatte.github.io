//const link = document.querySelector('.menu-link');
const linkList = document.querySelectorAll('.menu-link');

linkList.forEach(link =>{
    link.addEventListener('click', () => {
        document.querySelector('.link-selected')?.classList.remove('link-selected');
        link.classList.add('link-selected');
    });
});