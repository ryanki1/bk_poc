define(["jquery", "knockout"], function ($, ko) {
    var albumsModel = {
        initialize: function () {
            //debugger;
            ko.applyBindings(albumsModel);
            albumsModel.getAlbums();
            $.ajaxSetup({
                accepts: "application/json"
            });
        },
        album: ko.observableArray([]),
        albumPicture: ko.observableArray([]),
        picture: ko.observable,
        getAlbums: function () {
            $.ajax({
                url: "https://graph.facebook.com/baileysfertilisers/albums",
                data: { "fields": "id,name,cover_photo" },
                type: "GET",
                dataType: "json",
                success: function (fbAlbum) {
                    //debugger;
                    albumsModel.album.removeAll();
                    for (var i = 0; i < fbAlbum.data.length; i++) {
                        albumsModel.album.push(fbAlbum.data[i]);
                    }
                    console.log("Facebook Albums loaded for Baileys Fertilisers");
                },
                error: function (data) {
                    //debugger;   
                    console.log("Failed to get facebook albums")
                }
            });
        },
        //
        // Called to get picture associated with each Albums name
        //
        getAlbumCoverPhoto: function (album, coverPhotoID) {

            $.ajax({
                url: "https://graph.facebook.com/" + coverPhotoID,
                data: { "fields": "picture" },
                type: "GET",
                dataType: "json",
                success: function (fbCoverPhoto) {
                    //debugger;
                    album.cover_photo_jpg = fbCoverPhoto.data.picture;
                    console.log(album.cover_photo_jpg + " set for albums " + album.name);
                },
                error: function (data) {
                    //debugger;   
                    console.log("Failed to get album cover photo")
                }
            });
        },
        //
        // Called to get pictures for selected Albums
        //
        getAlbumPicture: function (album) {
            $.ajax({
                url: "https://graph.facebook.com/" + album.id + "/photos",
                data: { "fields": "id,name,picture" },
                type: "GET",
                dataType: "json",
                success: function (fbAlbumPicture) {
                    //debugger;
                    albumsModel.albumPicture.removeAll();
                    for (var i = 0; i < fbAlbumPicture.data.length; i++) {
                        albumsModel.albumPicture.push(fbAlbumPicture.data[i]);
                    }
                    console.log("Facebook pictures loaded for album " + album.name);
                },
                error: function (data) {
                    //debugger;   
                    console.log("Failed to get album information")
                }
            });
        },
        getPicture: function (albumPicture) {
            albumsModel.picture.name = albumPicture.name;
            albumsModel.picture.jpeg = albumPicture.picture;
        }
    }
    //debugger;
    albumsModel.initialize();
    return albumsModel;
});