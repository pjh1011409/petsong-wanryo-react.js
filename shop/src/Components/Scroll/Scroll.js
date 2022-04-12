import $ from 'jquery';

$(window).scroll(function(){
    var scrollTop = $(document).scrollTop();
    if (scrollTop < 180) {
     scrollTop = 200;
    }
    $(".Scroll").stop();
    $(".Scroll").animate( { "top" : scrollTop });
    });



function Scroll(){
    return(
        <div className="Scroll" style={{float:'right'}}>d</div>

    )
}

export default Scroll;
