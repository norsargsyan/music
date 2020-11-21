$('.mobile-menu-icon, .close-menu').click(function(){
  $('.mobile-menu-icon').toggleClass('clicked');
  $('.header__menu').toggleClass('show');
  $('body').toggleClass('overflow_h');
  $('.close-menu').toggleClass('get_close');
});
let element;
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();

        });
        $(this).toggleClass('active').next('ul.select-options').toggle();

    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $styledSelect.css('background', '#fff');
        $styledSelect.css('color', '#000000');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});
let opened;
$('.sign-btn').click(function(event){
  $('#toggle-login').show(500);
  if(event.target.className == 'btn-first-span' || event.target.className == 'sign-btn')
  {
    $('#register').hide(500);
    $('#login').show(500);
    opened = $('#login');
  }
  else if(event.target.className == 'btn-second-span')
  {
    $('#login').hide(500);
    $('#register').show(500);
    opened = $('#register');
  }
});
$('.close-modal').click(function(){
    opened.hide(500);
    $('#toggle-login').hide(500);
});
$('.sign-up-back').click(function(event){
  if(event.target.className == 'sign-up-back'){
    opened.hide(500);
    $('#toggle-login').hide(500);
  }
});
$('.login').click(function(){
  $('#register').hide(500);
  $('#login').show(500);
})
$('.signup').click(function(){
  $('#register').show(500);
  $('#login').hide(500);
});
let annot = true;
$('#annot-btn, #show-comments').click(function(){
  if(annot)
  {
    $('.comments-hided').show(500);
    $('#annot-btn').html('<i class="fas fa-chevron-up"></i>  Roll up');
    annot = !annot;
  }
  else {
    $('.comments-hided').hide(500);
    $('#annot-btn').html('+ Add Annotation');
    annot = !annot;
  }
});
$('.like').click(function(){
  let num = 1;
  if(!$(this).hasClass('like-active'))
  {
    if($(this).next('.dislike').hasClass('like-active')){
      num = 2;
    }
    $('.fas').css('font-weight', '900');
    let mark;
    let count =  $(this).prev('.like-count').html();
    count = parseInt(count) + num;
    if(count >= 0){
      mark = '+';
    }
    else{
      mark = '';
    }
    $(this).prev('.like-count').html(mark + count);
  }
  $(this).addClass('like-active');
  $(this).next('.dislike').removeClass('like-active');
});
$('.dislike').click(function(){
  let num = 1;
  if(!$(this).hasClass('like-active'))
  {
    if(($(this)).prev('.like').hasClass('like-active')){
      num = 2
    }
    let count =  $(this).prev().prev('.like-count').html();
    count = parseInt(count) - num;
    let mark;
    if(count >= 0){
      mark = '+';
    }
    else{
      mark = '';
    }
    $(this).prev().prev('.like-count').html(mark + count);
  }
  $(this).addClass('like-active');
  $(this).prev('.like').removeClass('like-active');
});
$('#exit-popup').click(function(){
  $('.hided-pop').hide(500);
});
$('.read-more').click(function(){
  $('.hided-pop').show(500);
});
$('.hided-pop__inner').click(function(event){
  if(event.target.className == 'hided-pop__inner'){
    $('.hided-pop').hide(500);
  }
});
