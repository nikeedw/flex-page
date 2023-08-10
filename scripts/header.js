const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = toggleBtn.querySelector('ion-icon');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', () => {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.name = isOpen
        ? 'chevron-up-outline'
        : 'chevron-down-outline';

		
});

const closeDropDown = () => {
    dropDownMenu.classList.remove('open');
    toggleBtnIcon.name = 'chevron-down-outline';
};

const links = dropDownMenu.querySelectorAll('.dropdown_menu li');
links.forEach(link => {
    link.addEventListener('click', closeDropDown);
});
