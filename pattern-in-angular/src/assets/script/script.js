$( document ).ready(function() {

    $("#emailCheck").on("change", function (e) {
      var emailContainer = $(".hidden-email");
      if (this.checked) {
        emailContainer.slideDown();
      }
      else {
        emailContainer.slideUp();
      }
   
    })
   
   });