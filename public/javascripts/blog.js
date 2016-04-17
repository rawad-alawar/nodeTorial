

$('.blog-nav-item').click(function(e){
  console.log('it s running')
  var contentTile= $('.blog-title').text().toUpperCase();
  if(contentTile.indexOf('NODE')>=0){
    $(".blog-nav-item").removeClass('active')
    $(".blog-nav-item[href='/home']").addClass('active')
  }else if(contentTile.indexOf('ABOUT')>=0){
    $(".blog-nav-item").removeClass('active')
    $(".blog-nav-item[href='/about']").addClass('active')
  }else{
    $(".blog-nav-item").removeClass('active')
    $(".blog-nav-item[href='/links']").addClass('active')
  }
})
