'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
  if (elem) {
    elem.classList.toggle('active');
  }
}

// Sidebar functionality
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener('click', () => elementToggleFunc(sidebar));
}

// Custom select functionality
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]'); // Note: Typo in original HTML (selecct-value)
const filterBtn = document.querySelectorAll('[data-filter-btn]');

if (select && selectValue) {
  select.addEventListener('click', () => elementToggleFunc(select));
}

// Add event to all select items
if (selectItems.length && selectValue) {
  selectItems.forEach(item => {
    item.addEventListener('click', function () {
      const selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });
}

// Filter functionality
const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
  if (!filterItems.length) return;

  filterItems.forEach(item => {
    const itemCategory = item.dataset.category.toLowerCase();
    if (selectedValue === 'all' || selectedValue === itemCategory) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Add event to all filter button items
let lastClickedBtn = document.querySelector('[data-filter-btn].active') || filterBtn[0];

if (filterBtn.length && selectValue) {
  filterBtn.forEach(btn => {
    btn.addEventListener('click', function () {
      const selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);
      lastClickedBtn.classList.remove('active');
      this.classList.add('active');
      lastClickedBtn = this;
    });
  });
}

// Contact form functionality
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

if (form && formInputs.length && formBtn) {
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      formBtn.disabled = !form.checkValidity();
    });
  });
}

// Page navigation functionality
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

if (navigationLinks.length && pages.length) {
  navigationLinks.forEach((link, index) => {
    link.addEventListener('click', function () {
      const targetPage = this.innerHTML.toLowerCase();
      pages.forEach((page, pageIndex) => {
        if (targetPage === page.dataset.page) {
          page.classList.add('active');
          navigationLinks[pageIndex].classList.add('active');
          window.scrollTo(0, 0);
        } else {
          page.classList.remove('active');
          navigationLinks[pageIndex].classList.remove('active');
        }
      });
    });
  });
}