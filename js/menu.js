var main = function() {
    $('.menu').click(function() {
        $('.menu').animate({
        left: "-285px"
        }, 200);
        $('body').animate({
            left: "0px"
        }, 200);
    });
    $('.icon-menu').click(function(){
        $('.menu').animate({
            left: "0px"
        }, 200);
        $('body').animate({
            left: "285px"
        }, 200);
    });
};

$(document).ready(main);

window.onclick = myFunction;

    function myFunction() {
        document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
    }
