const dropdownToggle = document.querySelector('.js-lang');

dropdownToggle.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('is-active');
});