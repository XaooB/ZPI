(function() {
    let links = document.getElementsByName('mobile-nav-link');

    links.forEach(item => {
      item.addEventListener('click', () => {
        let navToggleInput = document.querySelector('#nav-toggle');

        navToggleInput.checked = false;
      })
    })
}());
