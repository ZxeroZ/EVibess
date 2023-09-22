document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.remove("nav-menu_visible");
  });
  
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  
  navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("nav-menu_visible");
  });
  

 

  document.addEventListener('DOMContentLoaded', function() {
    var img = document.querySelector('.img img');
    img.addEventListener('click', function() {
        img.classList.toggle('stop-animation');
    });
});


