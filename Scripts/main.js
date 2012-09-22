require.config({
    paths: {
        albumsmodel: "../Model/albumsModel",
        jquery: "jquery-1.7.1",
        jmobile: "jquery.mobile-1.1.0",
        jvalidate: "jquery.validate",
        knockout: "knockout-2.1.0"
    },
    waitSeconds: 15
});

require(["albumsmodel", "domReady!","jmobile", "jquery"],
    function (AlbumsModel,doc,JMobile,$) {
                //This function is called once the DOM is ready.
                //It will be safe to query the DOM and manipulate
                //DOM nodes in this function.
                //debugger;
                $("#albumList li a").click(function () {
                    //debugger;
                    // Get child index of list element clicked
                    ancestorLi = this.parentElement.parentElement.parentElement;
                    var albumIndex = $.inArray(ancestorLi, $("#albumList li"));
                    console.log("Album " + albumIndex + " clicked :-)");
                    AlbumsModel.getAlbumPicture(AlbumsModel.album()[albumIndex]);
                });
                $(document).bind("pageshow", function (x, prevPage) {
                    //debugger;
                    if ($(prevPage).attr("id") == "albumPage") console.log("albumPicture page showed");
                });
    });