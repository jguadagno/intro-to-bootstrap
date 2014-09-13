function onWindowResize() {
    $('#width').text($(window).width());
    $('#height').text($(window).height());
}

$().ready(function () {

    $("button[data-toggle=tooltip]").tooltip();
    $("a[data-toggle=popover]").popover();
    $("button[data-toggle=popover]").popover();

    $('#loading-example-btn').click(function () {
        var btn = $(this);
        btn.button('loading');
        window.setTimeout(function () {btn.button('reset'); }, 2000);
    });

    // Setup the theme selectors
    $('#ThemeList').bootstrapThemeSwitcher();

    // Change the theme
    //$().bootstrapThemeSwitcher('switchTheme', 'default', '//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css');

    // Load the previously selected theme from the cookies
    //$().bootstrapThemeSwitcher('loadThemeFromCookie');

    /* Updates the footer with the client size */
    $(window).resize(onWindowResize);
    onWindowResize();
});
