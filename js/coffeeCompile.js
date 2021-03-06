(function() {
  'use-strict';
  $(document).ready(function() {
    var scrollToController = new ScrollMagic.Controller();

    new ScrollMagic.Scene({triggerElement: "#metodologia"})
          .setClassToggle(".header-scroll", "active") // add class toggle
          .addTo(scrollToController);

    /*console.log(scrollToController);
    scrollToController.scrollTo(function(newpos) {
      console.log(newpos);
      TweenMax.to(window, 0.5, {
        scrollTo: {
          y: newpos
        }
      });
    });*/
    $(document).on('click', 'a[href^=#]', function(e) {
      var id;
      id = $(this).attr('href');
      if ($(id).length > 0 && !id.match(/nav/g) && !id.match(/carousel/g)) {
        e.preventDefault();
        scrollToController.scrollTo(id);
      }
    });
    // Header estático
    var headerController = new ScrollMagic.Controller();
    var headerScene = new ScrollMagic.Scene({
      triggerHook: 'onEnter',
      triggerElement: '.header-trigger'
      // duration: $(item).height()
      })
      .setClassToggle('.site-wrapper', 'header-fixed')
      .addTo(headerController);
  });

}).call(this);



