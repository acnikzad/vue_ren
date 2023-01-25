<template>

<nav class="navbar navbar-expand-xl navbar-dark  navbar-togglable  fixed-top">
          <div class="container">
    
            <!-- Brand -->
            <a class="navbar-brand" href="index.html">
              <img  class="img-fluid" width="125" src="../public/assets/img/ex2Rw4R1R3CB.png">
              <svg class="navbar-brand-svg" viewBox="0 0 245 80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <!-- <img src="../public/assets/img/Ren-4.png"> -->
                <!-- <text x="40" y="70" font-family="Arial, sans-serif" font-size="60" font-weight="bold" letter-spacing="-.025em" fill="currentColor">REN</text> -->
              </svg>
            </a>
      
            <!-- Toggler -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
      
            <!-- Collapse -->
            <div class="collapse navbar-collapse" id="navbarCollapse">
    
              <!-- Social -->
              <ul class="navbar-nav mr-auto">
                <li class="nav-item-divider">
                  <span class="nav-link">
                    <span></span>
                  </span>
                </li>
                <li class="nav-item">
                  <a href="https://www.linkedin.com/in/royanikzad/" class="nav-link">
                    <i class="fab fa-linkedin"></i> 
                    <span class="d-xl-none ml-2">
                      LinkedIn
                    </span>
                  </a>
                </li>
              </ul>
    
              <!-- Links -->
              <ul class="navbar-nav ml-auto">
                <li class="nav-item ">
                  <a href="#learnmore" class="nav-link">
                    Learn More
                  </a>
                </li>
                <li class="nav-item-divider">
                  <span class="nav-link">
                    <span></span>
                  </span>
                </li>
                <li class="nav-item">
                  <a href="https://themes.getbootstrap.com/product/incline-landing-page-set/" target="_blank" class="nav-link">
                    Purchase now
                  </a>
                </li>
              </ul>
    
            </div> <!-- / .navbar-collapse -->
      
          </div> <!-- / .container -->    
        </nav>

  <router-view/>

  <footer class="section bg-dark">
    
    <!-- Triangles -->
    <div class="bg-triangle bg-triangle-light bg-triangle-bottom bg-triangle-left"></div>
    <div class="bg-triangle bg-triangle-light bg-triangle-bottom bg-triangle-right"></div>

    <!--Content -->
    <div class="container">
      <div class="row align-self-center">
        <div class="col-md-auto">

          <!-- Brand -->
          <p>
            <a href="#" class="footer-brand text-white">
              <svg class="footer-brand-svg" viewBox="0 0 235 80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M0 0 L 20 10 L 0 20 Z" class="text-primary" fill="currentColor"></path>
                <path d="M0 30 L 20 40 L 0 50 Z M20 45 L 0 55 L 20 65 Z M0 60 L 20 70 L 0 80 Z" fill="currentColor"></path>
                <text x="40" y="70" font-family="Arial, sans-serif" font-size="60" font-weight="bold" letter-spacing="-.025em" fill="currentColor">incline.</text>
              </svg>
            </a>
          </p>
      
        </div>
        <div class="col-md">
      
          <!-- Links -->
          <ul class="list-unstyled list-inline text-md-right">
            <li class="list-inline-item mr-2">
              <a href="#" class="text-white">
                Terms and conditions
              </a>
            </li>
            <li class="list-inline-item mr-2">
              <a href="#" class="text-white">
                Privacy policy
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-white">
                Contact us
              </a>
            </li>
          </ul>

        </div>
      </div> <!-- / .row -->
      <div class="row align-items-center">
        <div class="col-md">
      
          <!-- Copyright -->
          <p class="text-white text-muted">
            <small>
              &copy; Copyright <span class="current-year"></span> Simpleqode. All rights reserved.
            </small>
          </p>

        </div>
        <div class="col-md">
      
          <!-- Social links -->
          <ul class="list-inline list-unstyled text-md-right">
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li class="list-inline-item ml-3">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item ml-3">
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>

        </div>
      </div> <!-- / .row -->
    </div> <!-- / .container -->

  </footer>

</template>

<style>

</style>
