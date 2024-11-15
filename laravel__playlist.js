

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1. Course Introduction',
        'name': '1. Course Introduction.mp4',
        'duration': '0.29',
    },
    {
        'id': 'a2',
        'title': '2. Course Objectives',
        'name': '2. Course Objectives.mp4',
        'duration': '1:09',
    },
    
    {
        'id': 'a3',
        'title': '3. What is Laravel',
        'name': '3. What is Laravel.mp4',
        'duration': '1:12',
    },

    {
        'id': 'a4',
        'title': '4. Course Requirements',
        'name': '4. Course Requirements.mp4',
        'duration': '1:21',
    },
    {
        'id': 'a5',
        'title': '5. Installing Composer',
        'name': '5. Installing Composer.mp4',
        'duration': '2:08',
    },
    {
        'id': 'a6',
        'title': '6. Installing Laravel',
        'name': '6. Installing Laravel.mp4',
        'duration': '5:32',
    },
    {
        'id': 'a7',
        'title': '7. Routing',
        'name': '7. Routing.mp4',
        'duration': '8:17',
    },
    {
        'id': 'a8',
        'title': '8. Views',
        'name': '8. Views.mp4',
        'duration': '2:52',
    },
    {
        'id': 'a9',
        'title': '9. Databases',
        'name': '9. Databases.mp4',
        'duration': '3:25',
    },
    {
        'id': 'a10',
        'title': '10. Creating tables',
        'name': '10. Creating tables.mp4',
        'duration': '7:13',
    },
    {
        'id': 'a11',
        'title': '11. Migrations',
        'name': '11. Migrations.mp4',
        'duration': '6:36',
    },
    {
        'id': 'a12',
        'title': '12. Models',
        'name': '12. Models.mp4',
        'duration': '7:52',
    },
    {
        'id': 'a13',
        'title': '13. Blade',
        'name': '13. Blade.mp4',
        'duration': '5:00',
    },
    {
        'id': 'a14',
        'title': '14. Setting Up New Project',
        'name': '14. Setting Up New Project.mp4',
        'duration': '15:29',
    },
    {
        'id': 'a15',
        'title': '15. Seeding and displaying books',
        'name': '15. Seeding and displaying books.mp4',
        'duration': '19:37',
    },
    {
        'id': 'a16',
        'title': '16. Login Form',
        'name': '16. Login Form.mp4',
        'duration': '14:47',
    },
    {
        'id': 'a17',
        'title': '17. Logging In',
        'name': '17. Logging In.mp4',
        'duration': '16:33',
    },
    {
        'id': 'a18',
        'title': '18. Laravel Filters',
        'name': '18. Laravel Filters.mp4',
        'duration': '3:51',
    },
    {
        'id': 'a19',
        'title': '19. User Registration',
        'name': '19. User Registration.mp4',
        'duration': '14:56',
    },
    {
        'id': 'a20',
        'title': '20. Final Words',
        'name': '20. Final Words.mp4',
        'duration': '0:21',
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
