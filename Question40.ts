

let music_album=(artist:string,album_title:string,tracks?:number)=>{

    let album_info={artist,album_title}
    if(tracks!==undefined){
        album_info['tracks'] = tracks;
    }

    return album_info;
}

console.log(music_album("asrtist one","Album 1"))
console.log(music_album("asrtist Two","Album 2"))
console.log(music_album("asrtist Three","Album 3",25))
