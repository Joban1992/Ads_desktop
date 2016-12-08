   function $(className){
     return document.getElementsByClassName(className);
   }
  function getActionBar(){
    $('overlay')[0].style.display="block";
    $('action-container')[0].style.bottom=0;
	return false;
  }
  var length=$('action-item').length;
    for(var i=0;i<length;i++){
      $('action-item')[i].addEventListener('click', function(){
        $('overlay')[0].style.display="none";
        $('action-container')[0].style.bottom=-215;
    });
  } 
  $('search-icon')[0].addEventListener('click', function(){
    getActionBar();
  });
  
  //menu
  function openMenu(flag){
    if(flag){
      $('menu')[0].classList.add('menu-active');
	  $('container')[0].classList.add('container-deactive');
	  //setTimeout(function(){$('container')[0].style.display="none";},500);
	}else{
	  $('menu')[0].classList.remove('menu-active');
	  $('container')[0].classList.remove('container-deactive');
	}
  }
  
  
