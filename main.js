(function() {
	var logo = document.getElementById("logo");

	logo.onload = function() {
		var $bottom1 = $("#rect4588-8-1-0-3-8-83-1-6", logo.contentDocument);
		var $bottom2 = $("#rect4588-8-1-0-3-8-83-89", logo.contentDocument);
		var $bottom3 = $("#rect4588-8-1-0-3-8-83-3-60", logo.contentDocument);
		var $bottom4 = $("#rect4588-8-1-0-3-8-31", logo.contentDocument);
		var $bottom5 = $("#rect4588-8-1-0-3-88", logo.contentDocument);

		var squares = [$bottom1, $bottom2, $bottom4, $bottom4, $bottom5];
		setTimeout(function(){
			fade($bottom1, $bottom2, $bottom3, $bottom4, $bottom5);
		}, 200);
	};

	function fade(s1, s2, s3, s4, s5) {
		s1.css({
			stroke: '#E5F4FC',
			transition: "0.5s"
		});
		s2.css({
			stroke: '#E5F4FC',
			transition: "1s"
		});
		s3.css({
			stroke: '#E5F4FC',
			transition: "1.5s"
		});
		s4.css({
			stroke: '#E5F4FC',
			transition: "2s"
		});
		s5.css({
			stroke: '#E5F4FC',
			transition: "2.5s"
		});
		setTimeout(function(){
			unFade(s1, s2, s3, s4, s5);
		}, 1300);
	}

	function unFade(s1, s2, s3, s4, s5) {
		s1.css({
			stroke: '#0099e5',
			transition: "2.5s"
		});
		s2.css({
			stroke: '#0099e5',
			transition: "2s"
		});
		s3.css({
			stroke: '#0099e5',
			transition: "1.5s"
		});
		s4.css({
			stroke: '#0099e5',
			transition: "1s"
		});
		s5.css({
			stroke: '#0099e5',
			transition: "0.5s"
		});
		setTimeout(function(){
			fade(s1, s2, s3, s4, s5);
		}, 1300);
	}
})();
