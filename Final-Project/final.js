  $(function() {
    $(".checkbox").click(function() {
      var show = $(this).data("show");
      var hide = $(this).data("hide");
      if (this.checked) {
        $(show).removeClass("hidden")
        $(hide).addClass("hidden")
      }
    })
  });

  $(function() {
    $(".checkboxyes").click(function() {
      var check = $(this).data("check");
      var x = $(this).data("x");
      if (this.checked) {
        $(check).removeClass("hidden")
        $(x).addClass("hidden")
        }
      })
    $(".checkboxno").click(function() {
      var check = $(this).data("check");
      var x = $(this).data("x");
      if (this.checked) {
        $(check).addClass("hidden")
        $(x).removeClass("hidden")
        }
    })
    });
