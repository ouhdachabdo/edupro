

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1 Introduction',
        'name': '1 Introduction.mp4',
        'duration': '1:24',
    },
    {
        'id': 'a2',
        'title': '2 Interface and Create First Document',
        'name': '2 Interface and Create First Document.mp4',
        'duration': '15:08',
    },
    
    {
        'id': 'a3',
        'title': '3 Selection Tool',
        'name': '3 Selection Tool.mp4',
        'duration': '6:04',
    },

    {
        'id': 'a4',
        'title': '4 Customize Shape Using Selection Tool',
        'name': '4 Customize Shape Using Selection Tool.mp4',
        'duration': '14:22',
    },
    {
        'id': 'a5',
        'title': '5 Direct Selection Tool',
        'name': '5 Direct Selection Tool.mp4',
        'duration': '2:50',
    },
    {
        'id': 'a6',
        'title': '6 Group Selection Tool',
        'name': '6 Group Selection Tool.mp4',
        'duration': '4:05',
    },
    {
        'id': 'a7',
        'title': '7 Magic Wand Tool',
        'name': '7 Magic Wand Tool.mp4',
        'duration': '4:30',
    },
    {
        'id': 'a8',
        'title': '8 Lasso Tool',
        'name': '8 Lasso Tool.mp4',
        'duration': '5:06',
    },
    {
        'id': 'a9',
        'title': '9 Pen Tool',
        'name': '9 Pen Tool.mp4',
        'duration': '10:31',
    },
    {
        'id': 'a10',
        'title': '10 Anchor Tool',
        'name': '10 Anchor Tool.mp4',
        'duration': '4:42',
    },
    {
        'id': 'a11',
        'title': '11 Curvature Tool',
        'name': '11 Curvature Tool.mp4',
        'duration': '5:26',
    },
    {
        'id': 'a12',
        'title': '12 Type Tool',
        'name': '12 Type Tool.mp4',
        'duration': '13:49',
    },
    
    {
        'id': 'a13',
        'title': '13 Area Type Tool',
        'name': '13 Area Type Tool.mp4',
        'duration': '4:13',
    },

    {
        'id': 'a14',
        'title': '14 Type on Path and Vertical Tool',
        'name': '14 Type on Path and Vertical Toolmp4',
        'duration': '3:21',
    },
    {
        'id': 'a15',
        'title': '15 Vertical Area Type Tool and More',
        'name': '15 Vertical Area Type Tool and More.mp4',
        'duration': '4:02',
    },
    {
        'id': 'a16',
        'title': '16 Touch Tool',
        'name': '16 Touch Tool.mp4',
        'duration': '2:49',
    },
    {
        'id': 'a17',
        'title': '17 Case and Alignment',
        'name': '17 Case and Alignment.mp4',
        'duration': '7:45',
    },
    {
        'id': 'a18',
        'title': '18 Line Arc Spiral Tools',
        'name': '18 Line Arc Spiral Tools.mp4',
        'duration': '5:57',
    },
    {
        'id': 'a19',
        'title': '19 Grid Tool',
        'name': '19 Grid Tool.mp4',
        'duration': '3:53',
    },
    {
        'id': 'a20',
        'title': '20 Rectangle Tool',
        'name': '20 Rectangle Tool.mp4',
        'duration': '9:38',
    },
    {
        'id': 'a21',
        'title': '21 Polygon and Star Tools',
        'name': '21 Polygon and Star Tools.mp4',
        'duration': '8:09',
    },
    {
        'id': 'a22',
        'title':'22 Brush Tool',
        'name': '22 Brush Tool.mp4',
        'duration': '7:27',
    },
    
    {
        'id': 'a23',
        'title': '23 Shaper Tool and Pencil Tool',
        'name': '23 Shaper Tool and Pencil Tool.mp4',
        'duration': '4:13',
    },

    {
        'id': 'a24',
        'title': '24 Smooth Path Eraser and Join Tools',
        'name': '24 Smooth Path Eraser and Join Tools.mp4',
        'duration': '6:19',
    },
    {
        'id': 'a25',
        'title': '25 Eraser Scissors and Knife Tools',
        'name': '25 Eraser Scissors and Knife Tools.mp4',
        'duration': '7:20',
    },
    {
        'id': 'a26',
        'title': '26 Rotate Tool',
        'name': '26 Rotate Tool.mp4',
        'duration': '3:33',
    },
    {
        'id': 'a27',
        'title': '27 Reflect Tool',
        'name': '27 Reflect Tool.mp4',
        'duration': '2:21',
    },
    {
        'id': 'a28',
        'title': '28 Scale Shear Reshape Tool',
        'name': '28 Scale Shear Reshape Tool.mp4',
        'duration': '5:51',
    },
    {
        'id': 'a29',
        'title': '29 Width Warp Twirl Pucker Bloat',
        'name': '29 Width Warp Twirl Pucker Bloat.mp4',
        'duration': '7:38',
    },
    {
        'id': 'a30',
        'title': '30 Scallop Tool',
        'name': '30 Scallop Tool.mp4',
        'duration': '2:00',
    },
    {
        'id': 'a31',
        'title': '31 Free Transform Tool',
        'name': '31 Free Transform Tool.mp4',
        'duration': '1:43',
    },
    
];
//${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. in p
data.forEach((video, i) => {
    var s=0;
    s=s+video.duration;
    let video_element = `
            
                <div class="video" data-id="${video.id}">
                    <img src="../../img/pause.svg" alt="">
                    <p>  </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
    

}) 

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = '../../img/play.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = '../../img/pause.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = '../../img/play.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'video/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
