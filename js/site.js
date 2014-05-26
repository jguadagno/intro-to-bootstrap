$().ready(function() {

    $("button[data-toggle=tooltip]").tooltip();
    $("a[data-toggle=popover]").popover();
    $("button[data-toggle=popover]").popover();

    $('#loading-example-btn').click(function () {
        var btn = $(this);
        btn.button('loading');
        setTimeout(function() {btn.button('reset')}, 2000);
    });

    /* For theme switching */
    var themeName = $.cookie("themeName");
	var themePath = $.cookie("themePath");
	if (themeName !== undefined) {
		setTheme(themeName, themePath);
	}

    /* Updates the footer with the client size */
    $(window).resize(onWindowResize);
    onWindowResize();
});

function onWindowResize() {
    $('#width').text($(window).width());
    $('#height').text($(window).height());
}

function setTheme(themeName, themePath) {
	var cssLink = "<link rel='stylesheet' id='bootstrapTheme' data-name='" + themeName + "' href='" + themePath + "bootstrap.min.css' type='text/css' />";
	$('#bootstrapTheme').replaceWith(cssLink);

	$.cookie("themeName", themeName, { expires: 7, path: "/" });
	$.cookie("themePath", themePath, { expires: 7, path: "/" });
}
