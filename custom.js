  $(document).ready( function(){

  	$("#tab a").click( function(){
  		var id = $(this).attr("href");
  		$(".page").hide();                  
  		$("#tab a").removeClass("act");
  		$(this).addClass("act");
  		$(id).show();
     return false;
   })


  	$(".page a").click( function(){
      var loai = $("#rtcAudioPath").val();
      var mp3 = $(this).attr("file");
      $(".page a").removeClass("act");
      $(this).addClass("act");         
      var audio = $("audio");
      var attr = $(this).attr('data-random');

      if (typeof attr !== 'undefined' && attr !== false) {
           var rand = Math.floor(Math.random() * attr) + 1;
           //mp3 = mp3.substr(mp3.length - 5);
           mp3 = mp3.substring(0,mp3.length - 2)
           mp3 = mp3 + "-" + rand;
      }
      
      audio.attr("src","https://audiogct.ga/" + loai + "/" +mp3 + ".mp3");                
      audio[0].play();
    });




  	$('.page a').simpleTooltip({
  		title: '...'
  	});

  })