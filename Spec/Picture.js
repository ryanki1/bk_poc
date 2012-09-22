function Picture(id, name, picture) {{
    // id,name,picture
    this.default = {
        id:"397189573645594",
        name:"Smart Approved Watermark Products",
        picture:"397189573645594",
        created_time:"2012-04-19T17:42:29+0000"
        }
    }
    this.id = id ? id : this.default.id;
    this.name = name ? name : this.default.name;
    this.picture = picture ? picture : this.default.picture;
    this.created_time = this.default.created_time;
}