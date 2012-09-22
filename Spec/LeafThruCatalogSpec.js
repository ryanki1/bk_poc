require.config({
    paths: {

        albumsmodel: "../Model/albumsModel",
        jas: "../Scripts/jasmine",
        jasHTML: "../Scripts/jasmine-html",
        jquery: "../Scripts/jquery-1.7.1",
        jmobile: "../Scripts/jquery.mobile-1.1.0",
        jvalidate: "../Scripts/jquery.validate",
        knockout: "../Scripts/knockout-2.1.0"
    }
});

function jasInitialize() {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    var currentWindowOnload = window.onload;

    window.onload = function () {
        if (currentWindowOnload) {
            currentWindowOnload();
        }
        execJasmine();
    };

    function execJasmine() {
        jasmineEnv.execute();
    }

}

require(["jas","jasHTML","knockout", "albumsmodel"],
    function (jas, jasHTML, ko, AlbumsModel) {
        jasInitialize();
        describe("LeafThruCatalog", function () {
            var album;
            var picture;
            
            beforeEach(function () {
                debugger;
                album = new Album();
                AlbumsModel.album.push(album);
                AlbumsModel.getAlbumPicture(album);
                //picture = new Picture();
            });
            afterEach(function () {
                //debugger;
                AlbumsModel.album = ko.observableArray([]);
                AlbumsModel.albumPicture = ko.observableArray([]);
            });

            it("should return a set number of pictures for the 'Smart Approved Watermark Products' album", function () {
                //debugger;
                expect(AlbumsModel.albumPicture().length).toEqual(8);
            });

            it("should contain 3 specific pictures for the 'Smart Approved Watermark Products' album", function () {
                // "grosorb","lawn reviver", and ""
                //debugger;
                var arrayNames = [];
                $.each(AlbumsModel.albumPicture(), function (index, picture) {
                    var nameText = picture.name ? picture.name.toLowerCase() : "";
                    arrayNames.push(nameText.substring(0,nameText.indexOf("\n\n"))); // Name separated from body by newline
                    debugger;
                });

                expect(arrayNames).toContain("grosorb");
                expect(arrayNames).toContain("lawn reviver");
                expect(arrayNames).toContain("");
            });

        });
    })

