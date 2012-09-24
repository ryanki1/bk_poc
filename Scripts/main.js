require.config({
    paths: {
        albumsmodel: "../Model/albumsModel",
        jquery: "jquery-1.7.2",
        jui: "jquery-ui-1.8.20",
        jmobile: "jquery.mobile-1.1.1",
        jvalidate: "jquery.validate",
        knockout: "knockout-2.1.0",
        binding: "binding"
    },
    waitSeconds: 15
});

require(["jquery", "binding"],
    function ($, AlbumsModel) {
        
        console.log("main's turn");
        //This function is called once the DOM is ready.
        //It will be safe to query the DOM and manipulate
        //DOM nodes in this function.
        //debugger;
        //var t = window.setTimeout(function () { alert("Finished waiting :-)");}, 2000);    
        //debugger; When this statement active $("#albumList li a") present, otherwise not.
        $("#albumList li a").click(function () {
            //debugger;
            // Get child index of list element clicked
            //ancestorLi = this.parentElement.parentElement.parentElement; // Before css limited to struc and theme
            ancestorLi = this.parentElement;
            var albumIndex = $.inArray(ancestorLi, $("#albumList li"));
            console.log("Album " + albumIndex + " clicked :-)");
            AlbumsModel.getAlbumPicture(AlbumsModel.album()[albumIndex]);
        });
        $(document).bind("pageshow", function (x, prevPage) {
            //debugger;
            if ($(prevPage).attr("id") == "albumPage") console.log("albumPicture page showed");
        });
    });