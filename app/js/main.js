//Плеер
$(document).ready(function () {
	$('video').mediaelementplayer();
	$('.contentWatch>.btn').click(function () {
		$('body').css({ "overflow-y": "hidden" });
		$('.videoContainer').addClass('show');
	});
	$('.video').click(function () {
		$('.videoContainer').removeClass('show');
		$('body').css({ "overflow-y": "auto" });
		$('video').each(function () {
			this.player.pause()
		});
	});
	$('.videoPlaer').click(function (event) {
		event.stopPropagation();
	});

});

//Плавная прокрутка
  $(document).ready(function() {
    $('a[data-target="menu"]').click(function() {
        var target = $(this).attr('href');
        // $('a').removeClass('active');
        // $(this).addClass('active');
        $('html, body').animate({ scrollTop: $(target).offset().top}, 700);
		});
		});