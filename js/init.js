$( document ).ready(function(){
    $(".button-collapse").sideNav();
    
    var currentIndex = 0;
    var items = $(".slides .slide");
    var itemAmt = $(".slides .slide").length;
    
    function cicleItems(){
        var item = items.eq(currentIndex);
        items.hide();
        item.fadeIn();
        item.css("display" , "inline-block");
    }
    var autoSlide = setInterval(function(){
       currentIndex += 1;
        if(currentIndex > itemAmt -1){
            currentIndex = 0;
        }
        cicleItems();
    } , 3000);  
    $(".scroll").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top-65}, 600);
   });
	$("body").fadeIn(1500).removeClass("hidden");
	
	$("#portifolio").hover(function(){
		$(this).find(".card-title").fadeIn();
	} , function(){
		$(this).find(".card-title").fadeOut();
	});
});
