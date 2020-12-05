  const $menuToggler = document.querySelector(".menu-toggler")
  const $topNav = document.querySelector(".top-nav")
  const $navLink = document.querySelector(".top-nav, .nav-link")
  const $navA = document.querySelectorAll('nav a[href^="#"]')

  $menuToggler.addEventListener("click", () => {
    $menuToggler.classList.toggle("open")
    $topNav.classList.toggle("open")
  })

  $navLink.addEventListener("click", () => {
    $menuToggler.classList.remove("open")
    $topNav.classList.remove("open")
  })

  AOS.init({
    easing: "ease",
    duration: 1800,
  });

  

