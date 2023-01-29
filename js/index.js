$('.intro').animate({'opacity': 0}, 1000, function () {
    $(this).text;
})
.animate({'opacity': 1}, 1000);

$('.getdown a.projects-link').on('click', function(e) {
    $(this).next('ul').slideToggle(250);
    e.preventDefault(); 
});

$(".about-text").animate({'opacity': 0}, 1000, function () {
    $(this).text;
})
.animate({'opacity': 1}, 1000);

