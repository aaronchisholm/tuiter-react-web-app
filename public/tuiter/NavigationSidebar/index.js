const NavigationSidebar = () => {
    return(`
   <div class="list-group">
      <a class="list-group-item" href="/">
         <i class="fab fa-twitter"></i>
      </a>
      <a class="list-group-item" href="../home.html">
        <i class="fas fa-home col"></i>
        <h6 class="d-none d-xl-inline-block mb-0"> Home </h6>
      </a>
      <a class="list-group-item btn-primary border-primary" href="../explore/index.html">
        <i class="fas fa-hashtag col"></i>
        <h6 class="d-none d-xl-inline-block mb-0"> Explore </h6>
      </a>
      <a class="list-group-item" href="#">
        <i class="fas fa-bell col"></i>
        <h6 class="d-none d-xl-inline-block mb-0"> Notifications </h6>
      </a>
     <a class="list-group-item" href="#">
        <i class="fas fa-envelope col"></i>
        <h6 class="d-none d-xl-inline-block mb-0"> Messages </h6>
      </a>
     <a class="list-group-item" href="../bookmarks/index.html">
        <i class="fas fa-bookmark col"></i>
        <h6 class="d-none d-xl-inline-block mb-0"> Bookmarks </h6>
      </a>
     <a class="list-group-item" href="#">
        <i class="fas fa-list"></i>
         <h6 class="d-none d-xl-inline-block mb-0"> Lists </h6>
      </a>
     <a class="list-group-item" href="../profile.html">
         <i class="fas fa-user"></i>
         <h6 class="d-none d-xl-inline-block mb-0"> Profile </h6>
      </a>
     <a class="list-group-item" href="#">
         <i class="fas fa-circle"></i>
         <h6 class="d-none d-xl-inline-block mb-0"> More </h6>
      </a>
   </div>
   <div class="d-grid mt-2">
     <a href="../tuit.html" class="btn btn-primary rounded-pill w-100">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;