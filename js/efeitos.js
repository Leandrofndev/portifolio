$(document).ready(function () {
    $(".j_servicos").mouseover(function(){
        $(".j_servicos img").toggleClass("bounce");
    });
    $(".j_servicos").mouseout(function(){
        $(".j_servicos img").toggleClass("bounce");
    });
    
//    SERVICOS
    $(".box3").mouseover(function(){
        $(this).toggleClass("bounce");
    });
    $(".box3").mouseout(function(){
        $(this).toggleClass("bounce");
    });
    
    
    
    $(".scroll").click(function () {
        $('html, body').animate({scrollTop: $(this.hash).offset().top}, 1000);
    });

});