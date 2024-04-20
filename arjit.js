
var music=new Audio('music/arjit_songs/1.mp3');

songsideimg=document.getElementsByClassName('song_side');




let Back = document.getElementById('back_icon');
let Next=document.getElementById('next_icon');




//   myFunction=()=>{
//     const music=new Audio('music/01_Vaaste.mp3');
//     // music.play();    
//   }

const songs=[
    {
        id:1,
        songName:`Halka Halka<br> <div class="subtitle">
        Arjit Singh
   </div>`,
        poster:"images/arjit_images/1.jpg"
    },
    {
        id:2,
        songName:`What Jhumka <br> <div class="subtitle">
        Arjit Singh
   </div>`,
        poster:"images/arjit_images/2.jpg"
    },
    {
        id:3,
        songName:`Le aaunga <br> <div class="subtitle">
        Arjit Singh
   </div>`,
        poster:"images/arjit_images/3.jpg"
    },
    {
        id:4,
        songName:`Tum kya Mile<br> <div class="subtitle">
        Arjit Singh
   </div>`,
        poster:"images/arjit_images/4.jpg"
    },
    {
        id:5,
        songName:`O Maahi <br> <div class="subtitle">
        Arjit singh
   </div>`,
        poster:"images/arjit_images/5.jpg"
    },
    {
        id:6,
        songName:`Ve Kamleye <br> <div class="subtitle">
        Arjit singh
   </div>`,
        poster:"images/arjit_images/6.jpg"
    },
    {
        id:7,
        songName:`Lutt Putt Gaya<br> <div class="subtitle">
        Arjit singh
   </div>`,
        poster:"images/arjit_images/7.jpg"
    },
    {
        id:8,
        songName:`Jawan Chaleya <br> <div class="subtitle">
        Arjit singh
   </div>`,
        poster:"images/arjit_images/8.jpg"
    },
    {
        id:9,
        songName:`Kudiye Ni Tere <br> <div class="subtitle">
        Arjit Singh
   </div>`,
        poster:"images/arjit_images/9.jpg"
    },
//     {
//         id:10,
//         songName:`Brown rang <br> <div class="subtitle">
//         Honey Singh
//    </div>`,
//         poster:"images/10_Brown rang_image.jpg"
//     },
//     {
//         id:11,
//         songName:`Blue Eyes <br> <div class="subtitle">
//         Honey Singh
//    </div>`,
//         poster:"images/11_Blue Eyes_image.jpg"
//     },
//     {
//         id:12,
//         songName:`Dope Shope <br> <div class="subtitle">
//         Honey Singh
//    </div>`,
//         poster:"images/12_Dope Shope_image.jpg"
//     },
//     {
//         id:13,
//         songName:`Theekh Hu Mei <br> <div class="subtitle">
//         Emiway
//    </div>`,
//         poster:"images/13_Theekh Hu Mei_image.jpg"
//     },
//     {
//         id:14,
//         songName:`Fake ones<br> <div class="subtitle">
//         Emiway
//    </div>`,
//         poster:"images/14_Fake ones_image.jpg"
//     },
//     {
//         id:15,
//         songName:`Good Boy <br> <div class="subtitle">
//         Emiway
//    </div>`,
//         poster:"images/15_Good Boy_image.jpg"
//     },
//     {
//         id:16,
//         songName:`Still Number 1<br> <div class="subtitle">
//         Emiway
//    </div>`,
//         poster:"images/16_Still Number 1_image.jpg"
//     },
//     {
//         id:17,
//         songName:`O Mere Humnava <br> <div class="subtitle">
//         Sonu nigam
//    </div>`,
//         poster:"images/17_O Mere Humnava_image.jpg"
//     },
//     {
//         id:18,
//         songName:`Ishq Di Gali Vich No Entry <br> <div class="subtitle">
//         Sonu nigam
//    </div>`,
//         poster:"images/18_Ishq Di Gali Vich No Entry_image.jpg"
//     },
]



Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    // let img = document.createElement('img');
    // console.log(songs[i].poster)
    //         img.src =songs[0].poster;
    //         document.getElementsByClassName('songItem')[i].appendChild(img);
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;

})

// document.addEventListener("DOMContentLoaded", function() {
//     // Get all elements with the class "songItem"
//     var songItems = document.querySelectorAll('.songItem');
    
//     // Loop through each song item
//     songItems.forEach(function(songItem, index) {
//         // Get the corresponding poster URL from the songs array
//         var posterUrl = songs[index].poster;
        
//         // Find the img tag inside the current song item
//         var imgElement = songItem.querySelector('img');
        
//         // Set the src attribute of the img tag to the poster URL
//         imgElement.setAttribute('src', posterUrl);
//     });
// });



// let target=document.getElementsByClassName('Ayush')
// target.src='images/04_Leja Re_image.jpeg';
// console.log(target.src)
// target.currentSrc='images/18_Ishq Di Gali Vich No Entry_image.jpeg'



// console.log(target[0].span);







let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];



pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
    // console.log("right movement");
})
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
    // console.log("right movement");
})

let pop_artist_left=document.getElementById('pop_artist_left');
let pop_artist_right=document.getElementById('pop_artist_right');
let item=document.getElementsByClassName('item')[0];

pop_artist_left.addEventListener('click',()=>{
    item.scrollLeft -=270;
    // console.log("right movement");
})
pop_artist_right.addEventListener('click',()=>{
    item.scrollLeft +=270;
})


let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementById('wave');
// let wave2=document.getElementById('wave2');
// let wave3=document.getElementById('wave3');
// let masterPlay=document.getElementsByClassName('test');
masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime<=0) {
        music.play();
        // wave.classList.add(active1);
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        // wave2.classList.add(active1);
        // wave3.classList.add(active1);
        
    } else {
        music.pause();
        // wave.classList.remove(active1);
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }
   
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((e1)=>{
        e1.classList.add('bi-pause-fill');
        e1.classList.remove('bi-play-fill');
    })
}
const makeAllBackground=()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background='rgb(105,105,105,.0)';
    })
}



let search_results=document.getElementsByClassName('search_results')[0];

songs.forEach(e => {
    const {id,songName,poster}=e;
   
    let card=document.createElement('a');
    card.classList.add('card');
    card.href="#"+id;

    card.innerHTML=`<img src="${poster}">
    <div class="content">
    ${songName}    
    </div>`
    ;
    search_results.appendChild(card);

});

let input=document.getElementsByTagName('input')[0];

input.addEventListener('keyup',()=>{
    let input_value=input.value.toUpperCase();
    let items=search_results.getElementsByTagName('a');

    for(let i=0;i<items.length;i++)
    {
        let as=items[i].getElementsByClassName('content')[0];
        let text_value=as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value)>-1) {
             items[i].style.display="flex";
        } else {
            items[i].style.display="none";
        }

        if(input.value==0)
        {
            search_results.style.display="none";
        }else{
            search_results.style.display="";
        }

    }
})



let poster_master_play=document.getElementById('poster_master_play');
let music_download=document.getElementById('music_download');
let index=1;
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click',(e1)=>{
        index=e1.target.id;
        // console.log(index);
        music.src=`music/arjit_songs/${index}.mp3`;
        poster_master_play.src=`images/arjit_images/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        music_download.href=`music/arjit_songs/${index}.mp3`;

        let songTitles=songs.filter((els)=>{
            return els.id== index;
        });

        songTitles.forEach(elss=>{
            let {songName} =elss;
            title.innerHTML=songName;
            music_download.setAttribute('download',songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)';

        makeAllPlays();
        e1.target.classList.remove('bi-pause-fill');
        e1.target.classList.add('bi-play-fill');
        // wave.classList.add(active1);
    })
});
Back.addEventListener('click',()=>{
    // console.log(index);
    if(index==1){
        index=songs.length;
    }
    else{
    index-=1;}
     music.src=`music/arjit_songs/${index}.mp3`;
        poster_master_play.src=`images/arjit_images/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        music_download.href=`music/arjit_songs/${index}.mp3`;

        let songTitles=songs.filter((els)=>{
            return els.id== index;
        });

        songTitles.forEach(elss=>{
            let {songName} =elss;
            title.innerHTML=songName;
            music_download.setAttribute('download',songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)';

        makeAllPlays();
        e1.target.classList.remove('bi-pause-fill');
        e1.target.classList.add('bi-play-fill');
})
Next.addEventListener('click',()=>{
    // console.log(index);
    if(index==songs.length){
        index=1;
    }
    else{
    index+=1;}
     music.src=`music/arjit_songs/${index}.mp3`;
        poster_master_play.src=`images/arjit_images/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles=songs.filter((els)=>{
            return els.id== index;
        });

        songTitles.forEach(elss=>{
            let {songName} =elss;
            title.innerHTML=songName;
            music_download.setAttribute('download',songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)';

        makeAllPlays();
        e1.target.classList.remove('bi-pause-fill');
        e1.target.classList.add('bi-play-fill');
});



// let currentStart=document.getElementsById('currentstart');
let currentStart=document.getElementById('currentstart')
let currentEnd=document.getElementById('currentend');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementById('dot');

music.addEventListener('timeupdate',()=>{
    // console.log("iamw");
    let music_cur=music.currentTime;
    let music_dur=music.duration;
    // console.log(music_dur);
    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);

    // console.log(min1)
    // console.log(":")
    // console.log(sec1)
    
    if(sec1<10)
    {
        sec1=`0${sec1}`;
    }
   
    currentEnd.innerText = `${min1}:${sec1}`

    let min2=Math.floor(music_cur/60);
    let sec2=Math.floor(music_cur%60);

    if(sec2<10)
    {
        sec2=`0${sec2}`;
    }

    currentStart.innerText=`${min2}:${sec2}`;

    let progressbar=parseInt((music_cur/music_dur)*100);
    seek.value=progressbar;
    // console.log(seek.value);
    let seekBar=seek.value;
    bar2.style.width=`${seekBar}%`;
    dot.style.left=`${seekBar}%`;

});

seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration /100;
})

let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementById('vol_bar');
let vol_dot=document.getElementById('vol_dot');


vol.addEventListener('change',()=>{
    if(vol.value==0)
    {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off');
    }
    if(vol.value>0)
    {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off');
    }
    if(vol.value>50)
    {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off');
    }

    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;
})


let shuffle=document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',()=>{
    let a=shuffle.innerHTML;
    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');

            shuffle.innerHTML="repeat";
        
            break;

        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');

            shuffle.innerHTML="random";
        
            break;

        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');

            shuffle.innerHTML="next";
        
            break;
    
        default:
            break;
    }
});


music.addEventListener('ended',()=>{

   let b=shuffle.innerHTML;
   switch (b) {
    case "next":
        next_music();
        
        break;
    case "random":
        random_music();
        
        break;
    case "repeat":
        repeat_music();
        
        break;
   
    default:
        break;
   }
});

const next_music=()=>{
    // console.log("called after music ends");
    if(index==songs.length){
        index=1;
    }
    else{
    index+=1;}
    music.src=`music/arjit_songs/${index}.mp3`;
        poster_master_play.src=`images/arjit_images/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles=songs.filter((els)=>{
            return els.id== index;
        });

        songTitles.forEach(elss=>{
            let {songName} =elss;
            title.innerHTML=songName;
            music_download.setAttribute('download',songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)';

        makeAllPlays();
}
const repeat_music=()=>{
    
    index;
    music.src=`music/arjit_songs/${index}.mp3`;
        poster_master_play.src=`images/arjit_images/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles=songs.filter((els)=>{
            return els.id== index;
        });

        songTitles.forEach(elss=>{
            let {songName} =elss;
            title.innerHTML=songName;
            music_download.setAttribute('download',songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)';

        makeAllPlays();
}
const random_music=()=>{
  
    index=Math.floor((Math.random()*songs.length)+1);

    music.src=`music/arjit_songs/${index}.mp3`;
        poster_master_play.src=`images/arjit_images/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles=songs.filter((els)=>{
            return els.id== index;
        });

        songTitles.forEach(elss=>{
            let {songName} =elss;
            title.innerHTML=songName;
            music_download.setAttribute('download',songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)';

        makeAllPlays();
}