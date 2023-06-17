const header = document.querySelectorAll(".main-header");
header[0].innerHTML = `

  <!-- Header Section -->
<header class="header" id="header">
  <nav class="navbar-header container-header">
     <a href="home" class="brand-header"><img src="images/logo/header-logo.png" alt=""></a>
     <div class="burger-header" id="burger-header">
        <span class="burger-header-line"></span>
        <span class="burger-header-line"></span>
        <span class="burger-header-line"></span>
     </div>
     <div class="menu-header" id="menu-header">
        <ul class="menu-header-inner">
           <li class="menu-header-item"><a href="home" class="menu-header-link effect7"><span>Home</span></a></li>
           <li class="menu-header-item"><a href="about" class="menu-header-link effect7"><span>about</span></a></li>
            <li class="menu-header-item"><a href="IFRS-Technical-Advisory" class="menu-header-link effect7"><span>services</span></a>
                        
                            
                        </li>
           <li class="menu-header-item"><a href="contact" class="menu-header-link effect7"><span>Contact</span></a></li>
        </ul>
     </div>
  </nav>
</header>

`

const headerTop = document.querySelectorAll(".top-bar");
headerTop[0].innerHTML = `
<div class="container">
        <div class="clearfix">
            <div class="col-left float_left">
               

                <ul class="top-bar-info">
                    <li><a style="color:white;" href="tel:+92-336-5415909"><i class="icon-technology"></i>Phone: +92-336-5415909</a></li>
                    <li><a style="color:white;" href="mailto:info@kpglobalconsultants.com"><i class="icon-note2"></i>info@kpglobalconsultants.com</a></li>
                </ul>
            </div>
            <div class="col-right float_right">
                <ul class="social">
                    <li>Stay Connected: </li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
                
            </div>
                
                
        </div>
            

    </div>
`;

const footer = document.querySelectorAll(".main-footer");
footer[0].innerHTML = `

     
     <!--Footer Bottom-->
     <section class="footer-bottom">
        <div class="container" style="display:flex;justify-content:center">
            <div class="pull-left copy-text">
                <p style="text-align:center; color:white;">Copyrights © 2023 All Rights Reserved. Powered by  <a href="http://giantssolutions.com/" target="_blank" style="color:white; font-weight:900"> Giants Solutions</a></p>
                
            </div><!-- /.pull-right -->
           <!-- <div class="pull-right get-text">
                <ul>
                    <li><a href="#">Support |  </a></li>
                    <li><a href="#">Privacy & Policy |</a></li>
                    <li><a href="#"> Terms & Conditions</a></li>
                </ul>
            </div>--><!-- /.pull-left -->
        </div><!-- /.container -->
    </section>
`;



 const navbarMenu = document.getElementById("menu-header");
const burger = document.getElementById("burger-header");
const headerMenu = document.getElementById("header");

// Toggle Navbar Menu-header on Burger-header Click
if (burger && navbarMenu) {
   burger.addEventListener("click", () => {
      burger.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Closed Navbar Menu-header on Links Click
document.querySelectorAll(".menu-header-link").forEach((link) => {
   link.addEventListener("click", () => {
      burger.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Fixed Navbar Menu-header on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth >= 769) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
      }
   }
});

const headerMargin = document.querySelectorAll(".header");
let isScrolled = false;

function handleScroll() {
  if (window.pageYOffset > 0 && !isScrolled) {
    headerMargin[0].style.margin = "0";
    isScrolled = true;
  } else if (window.pageYOffset === 0 && isScrolled) {
    headerMargin[0].style.margin = "";
    isScrolled = false;
  }
}

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);

