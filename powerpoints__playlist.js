

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1 Hello world!',
        'name': '1 Hello world!.mp4',
        'duration': '1:19',
    },
    {
        'id': 'a2',
        'title': '2 Course goals and who is it for',
        'name': '2 Course goals and who is it for.mp4',
        'duration': '3:32',
    },
    
    {
        'id': 'a3',
        'title': '3 What is Microsoft PowerPoint',
        'name': '3 What is Microsoft PowerPoint.mp4',
        'duration': '3:47',
    },

    {
        'id': 'a4',
        'title': '4 Why should you learn PowerPoint',
        'name': '4 Why should you learn PowerPoint.mp4',
        'duration': '5:23',
    },
    {
        'id': 'a5',
        'title': '5 Important - diffirence between versions',
        'name': '5 Important - diffirence between versions.mp4',
        'duration': '5:51',
    },
    {
        'id': 'a6',
        'title': '6 Interface',
        'name': '6 Interface.mp4',
        'duration': '4:14',
    },
    {
        'id': 'a7',
        'title': '7 Adding slides',
        'name': '7 Adding slides.mp4',
        'duration': '3:27',
    },
    {
        'id': 'a8',
        'title': '8 Adding shapes',
        'name': '8 Adding shapes.mp4',
        'duration': '4:33',
    },
    {
        'id': 'a9',
        'title': '9 Editing shapes',
        'name': '9 Editing shapes.mp4',
        'duration': '4:25',
    },
    {
        'id': 'a10',
        'title': '10 Adding text boxes',
        'name': '10 Adding text boxes.mp4',
        'duration': '4:41',
    },
    {
        'id': 'a11',
        'title': '11 Thin line between text and shape',
        'name': '11 Thin line between text and shape.mp4',
        'duration': '5:46',
    },
    {
        'id': 'a12',
        'title': '12 Picture  drawing specific options',
        'name': '12 Picture  drawing specific options.mp4',
        'duration': '5:44',
    },
    {
        'id': 'a13',
        'title': '13 Saving & exporting presentations',
        'name': '13 Saving & exporting presentations.mp4',
        'duration': '3:29',
    },
    {
        'id': 'a14',
        'title': '14 Designing your first HQ slide Part 1',
        'name': '14 Designing your first HQ slide Part 1.mp4',
        'duration': '7:25',
    },
    {
        'id': 'a15',
        'title': '15 Designing your first HQ slide Part 2',
        'name': '15 Designing your first HQ slide Part 2.mp4',
        'duration': '4:40',
    },
    {
        'id': 'a16',
        'title': '16 Little promo (Masterclass)',
        'name': '16 Little promo (Masterclass).mp4',
        'duration': '2:29',
    },
    {
        'id': 'a17',
        'title': '17 Animations',
        'name': '17 Animations.mp4',
        'duration': '2:57',
    },
    {
        'id': 'a18',
        'title': '18 Transitions',
        'name': '18 Transitions.mp4',
        'duration': '6:18',
    },
    {
        'id': 'a19',
        'title': '19 Types of animation',
        'name': '19 Types of animation.mp4',
        'duration': '5:03',
    },
    {
        'id': 'a20',
        'title': '20 Animation Pane & start options',
        'name': '20 Animation Pane & start options.mp4',
        'duration': '4:14',
    },
    {
        'id': 'a21',
        'title': '21 Animation timing',
        'name': '21 Animation timing.mp4',
        'duration': '3:35',
    },
    {
        'id': 'a22',
        'title': '22 Complex animations',
        'name': '22 Complex animations.mp4',
        'duration': '2:33',
    },
    {
        'id': 'a23',
        'title': '23 Advanced animation features',
        'name': '23 Advanced animation features.mp4',
        'duration': '3:57',
    },
    {
        'id': 'a24',
        'title': '24 Design your first HQ animation',
        'name': '24 Design your first HQ animation.mp4',
        'duration': '7:05',
    },
    {
        'id': 'a25',
        'title': '25 04-09 Little promo (Animation)',
        'name': '25 04-09 Little promo (Animation).mp4',
        'duration': '2:04',
    },
    {
        'id': 'a26',
        'title': '26 Did we really do this Thank you!',
        'name': '26 Did we really do this Thank you!.mp4',
        'duration': '2:10',
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
