function toggleMenu() {
    var menu = document.querySelector('.menu');
    var rightPosition = menu.style.right;
    var menuToggle = document.querySelector('.toggle-menu');

    if (rightPosition == '0px') {
      menu.style.right = '-152px';
    }
    else {
      menu.style.right = '0px';
    }
  }