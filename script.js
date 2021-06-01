function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }


  
  // Close the dropdown if the user clicks outside of it

  
  /**
  window.onclick = function(event) {
    if (!event.target.matches('.ninedot')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  **/

  window.onclick = function(event){

    if(!document.getElementsByClassName('ninedot')[0].contains(event.target)){ 
      //The click is not within any dropdown element. Close the box.
      console.log('yes');
      document.getElementById("myDropdown").classList.remove('show');
    }
  }