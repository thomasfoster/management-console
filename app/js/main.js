$(document).ready(function(){
    // expand user menu on more click
    $('.icon-expand_more').click(function(){
        $('.user-sub-menu').toggle();
    });

    //// expand sidebar on hover.
    //$('.global-sidebar').hover(function(){
    //    $('body').addClass('sidebar-open');
    //}, function(){
    //    $('body').removeClass('sidebar-open');
    //});


    var $globalSidebar = document.querySelector('.global-sidebar'),
        $body = document.body;


    // global sidebar mouseover and mouseout
    $globalSidebar.onmouseover = function(){ $body.classList.add('sidebar-open') }
    $globalSidebar.onmouseout = function(){ $body.classList.remove('sidebar-open') }

    // set the height of an element to the bottom of the page
    var extendToBottom = function(element) {
        var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            newHeight = windowHeight - element.offsetTop;
        element.style.height = newHeight + 'px';
    };



    $(window).resize(function(){
        extendToBottom($globalSidebar);
    });
    $(window).trigger('resize');
});