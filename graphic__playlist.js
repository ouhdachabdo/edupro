

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1 Getting Started With Canva',
        'name': '1 Getting Started With Canva.mp4',
        'duration': '2:57',
    },
    {
        'id': 'a2',
        'title': '2 Overview Of Canva',
        'name': '2 Overview Of Canva.mp4',
        'duration': '5:35',
    },
    
    {
        'id': 'a3',
        'title': '3 Canva Free vs Paid',
        'name': '3 Canva Free vs Paid.mp4',
        'duration': '4:00',
    },

    {
        'id': 'a4',
        'title': '4 Design Inspiration',
        'name': '4 Design Inspiration.mp4',
        'duration': '2:21',
    },
    {
        'id': 'a5',
        'title': '5 Exporting Your Designs',
        'name': '5 Exporting Your Designs.mp4',
        'duration': '2:02',
    },
    {
        'id': 'a6',
        'title': '6 Animations',
        'name': '6 Animations.mp4',
        'duration': '3:09',
    },
    {
        'id': 'a7',
        'title': '7 Typography',
        'name': '7 Typography.mp4',
        'duration': '5:15',
    },
    {
        'id': 'a8',
        'title': '8 Shadows',
        'name': '8 Shadows.mp4',
        'duration': '4:43',
    },
    {
        'id': 'a9',
        'title': '9 Text Masking',
        'name': '9 Text Masking.mp4',
        'duration': '3:59',
    },
    {
        'id': 'a10',
        'title': '10 Image Filters & Effects',
        'name': '10 Image Filters & Effects.mp4',
        'duration': '3:39',
    },
    {
        'id': 'a11',
        'title': '11 Text Effects',
        'name': '11 Text Effectsmp4',
        'duration': '1:57',
    },
    {
        'id': 'a12',
        'title': '12 Adjust, Crop, Flip',
        'name': '12 Adjust, Crop, Flip.mp4',
        'duration': '2:17',
    },
    {
        'id': 'a13',
        'title': '13 Position, Transparency, Lock, Duplicate',
        'name': '13 Position, Transparency, Lock, Duplicate.mp4',
        'duration': '4:02',
    },
    {
        'id': 'a14',
        'title': '14 Copy  Paste Element Style',
        'name': '14 Copy  Paste Element Style.mp4',
        'duration': '1:54',
    },
    {
        'id': 'a15',
        'title': '15 Logo Design',
        'name': '15 Logo Design.mp4',
        'duration': '8:19',
    },
    {
        'id': 'a16',
        'title': '16 Twitter Header Design',
        'name': '16 Twitter Header Design.mp4',
        'duration': '5:36',
    },
    {
        'id': 'a17',
        'title': '17 YouTube Thumbnail Project',
        'name': '17 YouTube Thumbnail Project.mp4',
        'duration': '9:45',
    },
    {
        'id': 'a18',
        'title': '18 Blog Title Image',
        'name': '18 Blog Title Image.mp4',
        'duration': '7:29',
    },
    {
        'id': 'a19',
        'title': '19 Twitter Post Design',
        'name': '19 Twitter Post Design.mp4',
        'duration': '12:23',
    },
    {
        'id': 'a20',
        'title': '20 Poster Design',
        'name': '20 Poster Design.mp4',
        'duration': '10:38',
    },
    {
        'id': 'a21',
        'title': '21 YouTube Banner Design',
        'name': '21 YouTube Banner Design.mp4',
        'duration': '12:52',
    },
    {
        'id': 'a22',
        'title': '22 Bonus Free 250+ Page SEO eBook',
        'name': '22 Bonus Free 250+ Page SEO eBook.mp4',
        'duration': '1:05',
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
