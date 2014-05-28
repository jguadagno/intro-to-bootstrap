$().ready(function() {
    var tour = new Tour({
        name: "tour",
        backdrop: false,
        debug: true,
        orphan: false,
        steps: [
            {
                element: ".navbar-brand",
                title: "Welcome",
                content: "Welcome to site.<br /><br />Just wanted to give you a quick tour of the site.<br /><br />Click here to come back to the starting page.",
                placement: "bottom"
            },
            {
                element: "[role=navigation]",
                title: "Navigate the site",
                content: "Navigate through the site through the menu.",
                placement: "bottom"
            },
            {
                element: "a:contains('The Tour')",
                title: "The Tour",
                content: "Click this menu to go through items part of the <b>Bootstrap</b> tour.",
                placement: "bottom"
            },
            {
                element: "a:contains('Bootstrap Site'):first",
                title: "Bootstrap Sites",
                content: "Links to the Twitter Bootstrap site and documentation.",
                placement: "bottom"
            },
            {
                element: "a:contains('Other Bootstrap Sites')",
                title: "Other Bootstrap Sites",
                content: "Links to other sites the provide themes, plugins, components or helpful tips on Twitter Bootstrap.",
                placement: "bottom"
            },
            {
                element: "a:contains('CDNs')",
                title: "Content Delivery Networks",
                content: "A list of known content delivery networks that host Bootstrap.",
                placement: "bottom"
            },
            {
                element: "a:contains('Themes')",
                title: "Themes",
                content: "Try out this site is a different theme / color scheme.",
                placement: "bottom"
            },
            {
                element: "a:contains('About')",
                title: "About",
                content: "About this site and the technologies used.",
                placement: "bottom"
            },
            {
                element: "a > .fa-angle-left",
                title: "Previous",
                content: "Click here to go to the previous page of the tour.",
                placement: "top"
            },
            {
                element: "a > .fa-angle-right",
                title: "Next",
                content: "Click here to go to the next page of the tour.",
                placement: "top"
            },
            {
                element: "a.navbar-text:contains('josephguadagno.net')",
                title: "My Site",
                content: "Click here to visit my blog.",
                placement: "top"
            },
            {
                element: "a.navbar-text:contains('@jguadagno')",
                title: "Twitter",
                content: "Click here to follow me on Twitter.",
                placement: "top"
            },
            {
                element: "p > #width",
                title: "Size",
                content: "The current width times height of the client window.",
                placement: "top"
            }
        ]
    });
    tour.init();
    tour.start();
});
