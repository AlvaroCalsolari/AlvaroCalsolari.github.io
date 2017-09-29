$( document ).ready(function(){
    // Inicializa a barra de navegação
    $(".button-collapse").sideNav();
    // Ativa a função de parallax 
    $('.parallax').parallax();
    
    // Efeito de fadeIn quando o site carrega
	$("body").fadeIn(1500).removeClass("hidden");

    // Codigo referente ao slide da tela inicial 
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
        $('html,body').animate({scrollTop:$(this.hash).offset().top-64}, 1000);
   });        
});