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
      var file = $(this).attr("file");
      var file2;
      $(".page a").removeClass("act");
      $(this).addClass("act");
      var audio = $("audio");

      if (file=="repeat") {
        var repeat = localStorage.getItem('repeat');
        audio.attr("src",repeat);
        audio[0].play();
      }
      else{

        var attr = $(this).attr('data-random');

        if (typeof attr !== 'undefined' && attr !== false) {
         var rand = Math.floor(Math.random() * attr) + 1;
           //mp3 = mp3.substr(mp3.length - 5);
           file2 = file.substring(0,file.length - 2);
           file2 = file2 + "-" + rand;
         }
         else{
          file2 = file;
         }
         var link = "https://audiogct.ga/" + loai + "/" +file2 + ".mp3";
         audio.attr("src", link );
         audio[0].play();

         if (file=="men-1" || file=="women-1" || file=="z-1") {
           localStorage.setItem('repeat', link);
         }

         console.log("file: " +file);
         console.log("file2: " + file2);
       }

     });




  	$('.page a').simpleTooltip({
  		title: '...'
  	});

  })
