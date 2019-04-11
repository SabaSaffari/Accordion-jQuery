$('.wrapper').click(function(){
    var myWrapper = $(this);
    myWrapper.siblings().toggleClass("newHeight");

    if(myWrapper.parent().siblings().find('.newHeight')) {
        myWrapper.parent().siblings().find('.newHeight').removeClass('newHeight');
    }
});

// function myHavij(x) {
//     return 'Hello ' + x;
// }

// console.log(myHavij('ali'));