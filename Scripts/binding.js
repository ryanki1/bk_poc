define(["albumsmodel", "knockout"], function (AlbumsModel, ko) {
    console.log("binding's turn")
    ko.applyBindings(AlbumsModel);
    return AlbumsModel;
})