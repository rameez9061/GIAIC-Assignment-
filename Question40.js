var music_album = function (artist, album_title, tracks) {
    var album_info = { artist: artist, album_title: album_title };
    if (tracks !== undefined) {
        album_info['tracks'] = tracks;
    }
    return album_info;
};
console.log(music_album("asrtist one", "Album 1"));
console.log(music_album("asrtist Two", "Album 2"));
console.log(music_album("asrtist Three", "Album 3", 25));
