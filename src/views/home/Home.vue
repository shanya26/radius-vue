<template>
  <div>
         
  <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div class="container">
        <img src="icons/logo-w.png" style="width: 80px;" class="px-2">
        <a class="navbar-brand logo-text page-scroll" href="/">MEYI CLOUD</a>
            <!-- Mobile Menu Toggle Button -->
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-awesome fas fa-bars"></span>
                <span class="navbar-toggler-awesome fas fa-times"></span>
            </button>
            <!-- end of mobile menu toggle button -->

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                                    <router-link to="/">
                                        <a class="btn-outline-sm selected">HOME <span class="sr-only">(current)</span></a>
                                    </router-link>
                        
                    </li>

                </ul>
                            <span class="nav-item">
                                    <router-link to="/login" v-if="!isLoggedIn">
                                        <a class="btn-outline-sm">LOG IN</a>
                                    </router-link> 
                                    <a class="btn-outline-sm" @click.prevent="signout" v-if="isLoggedIn">Logout</a> 
                    
                            </span>
            </div>
        </div> <!-- end of container -->
    </nav>
    <header id="header" class="header">
        <div class="header-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-xl-5">
                        <div class="text-container">
                            <h1>Geo specific Cloud RADIUS</h1>
                            <p class="p-large">Manage Wifi/VPN/Broadband access and accounting via Cloud RADIUS server</p> 
                                    <router-link to="/register" v-if="!isLoggedIn">
                                      <a class="btn-outline-sm btn-solid-lg page-scroll">SIGN UP</a>
                                    </router-link> 
                                    <router-link to="/dashboard" v-if="isLoggedIn">
                                      <a class="btn-outline-sm btn-solid-lg page-scroll">Dashboard</a>
                                    </router-link>              
                        </div> <!-- end of text-container -->
                    </div> <!-- end of col -->
                    <div class="col-lg-6 col-xl-7">
                        <div class="image-container">
                            <div class="img-wrapper"> 
                            <img class="img-fluid" src="img/aws-global-infrastructure.png" alt="alternative">
                            </div> <!-- end of img-wrapper -->
                        </div> <!-- end of image-container -->
                    </div> <!-- end of col -->
                </div> <!-- end of row -->
            </div> <!-- end of container -->
        </div> <!-- end of header-content -->
    </header> <!-- end of header -->
    <svg class="header-frame" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 310"><defs></defs><title>header-frame</title><path class="cls-1" d="M0,283.054c22.75,12.98,53.1,15.2,70.635,14.808,92.115-2.077,238.3-79.9,354.895-79.938,59.97-.019,106.17,18.059,141.58,34,47.778,21.511,47.778,21.511,90,38.938,28.418,11.731,85.344,26.169,152.992,17.971,68.127-8.255,115.933-34.963,166.492-67.393,37.467-24.032,148.6-112.008,171.753-127.963,27.951-19.26,87.771-81.155,180.71-89.341,72.016-6.343,105.479,12.388,157.434,35.467,69.73,30.976,168.93,92.28,256.514,89.405,100.992-3.315,140.276-41.7,177-64.9V0.24H0V283.054Z"/></svg>
    <!-- end of header -->


    <!-- Customers -->

    <!-- end of customers -->


    <!-- Description -->
    <div class="cards-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="above-heading">DESCRIPTION</div>
                    <h2 class="h2-heading">AAA is easier than ever</h2>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
            <div class="row">
                <div class="col-lg-12">

                    <!-- Card -->
                    <div class="card">
                        <div class="card-image"> 
                            <img class="img-fluid" src="img/description-1.png" alt="alternative">
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">User Analytics</h4>
                            <p>Dig deeper & Analyze your trading history</p>
                        </div>
                    </div>
                    <!-- end of card -->

                    <!-- Card -->
                    <div class="card">
                        <div class="card-image"> 
                            <img class="img-fluid" src="img/description-2.png" alt="alternative">        
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">Funds Management</h4>
                            <p>Deposit and Withdraw Funds in 3 clicks</p>
                        </div>
                    </div>
                    <!-- end of card -->

                    <!-- Card -->
                    <div class="card">
                        <div class="card-image">
                            <img class="img-fluid" src="img/description-3.png" alt="alternative">  
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">Simpler Trading</h4>
                            <p>Trade any pair in 1 click directly from your browser</p>
                        </div>
                    </div>
                    <!-- end of card -->

                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of cards-1 -->
    <!-- end of description -->




    <!-- Footer -->
    <svg class="footer-frame" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 79"><defs></defs><title>footer-frame</title><path class="cls-2" d="M0,72.427C143,12.138,255.5,4.577,328.644,7.943c147.721,6.8,183.881,60.242,320.83,53.737,143-6.793,167.826-68.128,293-60.9,109.095,6.3,115.68,54.364,225.251,57.319,113.58,3.064,138.8-47.711,251.189-41.8,104.012,5.474,109.713,50.4,197.369,46.572,89.549-3.91,124.375-52.563,227.622-50.155A338.646,338.646,0,0,1,1920,23.467V79.75H0V72.427Z" transform="translate(0 -0.188)"/></svg>
     <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="footer-col first">
                        <h4>About MEYI CLOUD</h4>
                        <p class="p-small">MEYICLOUD provide access and accounting for managing internet connections more securly and seamlessly </p>
                    </div>
                </div> <!-- end of col -->
                <div class="col-md-4">
                    <div class="footer-col middle">
                        <h4>Important Links</h4>
                        <ul class="list-unstyled li-space-lg p-small">
                          <li class="media">
                              <i class="fas fa-square"></i>
                              <div class="media-body">Pricing <a class="white" href="#your-link">meyicloud.com</a></div>
                          </li>
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body">Our Partners <a class="white" href="#your-link">meyicloud.net</a></div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body">Read our <a class="white" href="terms-conditions.html">Terms & Conditions</a>, <a class="white" href="privacy-poliy.html">Privacy Policy</a></div>
                            </li>
                        </ul>
                    </div>
                </div> <!-- end of col -->
                <div class="col-md-4">
                    <div class="footer-col last">
                        <h4>Contact</h4>
                        <ul class="list-unstyled li-space-lg p-small">
                            <li class="media">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="media-body">Chennai, India</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="media-body">Tel: +91 7507820101</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-envelope"></i>
                                <div class="media-body">
                                    <a class="white" href="mailto:info@rawforex.com">info@meyicloud.com</a> 
                                </div>
                                <div class="media-body">
                                    <i class="fas fa-globe"></i>
                                    <a class="white" href="#your-link">www.meyicloud.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of footer -->
    </div>
</template>

<script>
import WidgetsDropdown from '../widgets/WidgetsDropdown'

export default {
  name: 'Dashboard',
  components: {
    WidgetsDropdown
  },
  data () {
    return { 
        isLoggedIn : this.$store.getters.isLoggedIn
    }
  },
  methods: {
    signout(){
        this.$store.dispatch("logout");
        this.$router.push("/login")
    }
  }
}
</script>
