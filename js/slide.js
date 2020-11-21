$('.slide-cat').slick({
  infinite: false,
  slidesToShow: 5,
  arrows: true,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1550,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});
