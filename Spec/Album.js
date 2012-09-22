function Album(id, name, cover_photo) {
    // id,name,cover_photo
    this.default = {
        id : "397187640312454",
        name : "Smart Approved Watermark Products",
        cover_photo : "397189573645594",
        created_time : "2012-04-19T17:42:29+0000"
    }
    this.id = id ? id: this.default.id;
    this.name = name ? name : this.default.name;
    this.cover_photo = cover_photo ? cover_photo : this.default.cover_photo;
    this.created_time = this.default.created_time;
}