import './sass/main.scss';
import menu from './menu.json';
import menuTemplate from './templates/menu.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menuItem: document.querySelector('.js-menu'),
  body: document.querySelector('body'),
  checkboxTheme: document.querySelector('#theme-switch-toggle'),
};

refs.menuItem.innerHTML = menuTemplate(menu);
refs.body.classList.add(Theme.LIGHT);

changeTheme();

refs.checkboxTheme.addEventListener('change', onCheckboxClick);

function onCheckboxClick() {
  refs.body.classList.toggle(Theme.DARK);
  refs.body.classList.toggle(Theme.LIGHT);
  const currentTheme = refs.body.classList.value;
  localStorage.setItem('Theme', currentTheme);
}

function changeTheme() {
  const saveTheme = localStorage.getItem('Theme');
  if (saveTheme === Theme.DARK) {
    refs.checkboxTheme.checked = 'true';
    onCheckboxClick();
  }
}