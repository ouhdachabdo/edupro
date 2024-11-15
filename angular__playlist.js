

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1. Angular for Beginners - Helicopter View',
        'name': '1. Angular for Beginners - Helicopter View.mp4',
        'duration': '4:19',
    },
    {
        'id': 'a2',
        'title': '2. Course Kickoff - Development Environment Setup',
        'name': '2. Course Kickoff - Development Environment Setup.mp4',
        'duration': '5:53',
    },
    
    {
        'id': 'a3',
        'title': '3. Introduction To Angular - Custom HTML Elements, Model vs View',
        'name': '3. Introduction To Angular - Custom HTML Elements, Model vs View.mp4',
        'duration': '8:55',
    },

    {
        'id': 'a4',
        'title': '4. Why Angular Learn the Key Features of Angular Core',
        'name': '4. Why Angular Learn the Key Features of Angular Core.mp4',
        'duration': '11:36',
    },
    {
        'id': 'a5',
        'title': '5. New Section - Angular Components and Core Directives',
        'name': '5. New Section - Angular Components and Core Directives.mp4',
        'duration': '4:00',
    },
    {
        'id': 'a6',
        'title': '6. Building our First Angular Component',
        'name': '6. Building our First Angular Component.mp4',
        'duration': '5:42',
    },
    {
        'id': 'a7',
        'title': '7. Component Inputs and the @Input Decorator',
        'name': '7. Component Inputs and the @Input Decorator.mp4',
        'duration': '9:42',
    },
    {
        'id': 'a8',
        'title': '8. Angular Component @Output - Custom Events and Event Emitters',
        'name': '8. Angular Component @Output - Custom Events and Event Emitters.mp4',
        'duration': '9:53',
    },
    {
        'id': 'a9',
        'title': '9. Angular @for Syntax',
        'name': '9. Angular @for Syntax.mp4',
        'duration': '5:17',
    },
    {
        'id': 'a10',
        'title': '10. Angular @for @empty, $index and other extra options',
        'name': '10. Angular @for @empty, $index and other extra options.mp4',
        'duration': '9:13',
    },
    {
        'id': 'a11',
        'title': '11. Comparison between @for and ngFor',
        'name': '11. Comparison between @for and ngFor.mp4',
        'duration': '1:15',
    },
    {
        'id': 'a12',
        'title': '12. Angular @if Syntax',
        'name': '12. Angular @if Syntax.mp4',
        'duration': '5:05',
    },
    {
        'id': 'a13',
        'title': '13. Comparison between @if and ngIf',
        'name': '13. Comparison between @if and ngIf.mp4',
        'duration': '1:43',
    },
    {
        'id': 'a14',
        'title': '14. Angular ngClass Core Directive - Learn All Features',
        'name': '14. Angular ngClass Core Directive - Learn All Features.mp4',
        'duration': '9:07',
    },
    {
        'id': 'a15',
        'title': '15. Angular ngStyle Core Directive - When to use it and Why',
        'name': '15. Angular ngStyle Core Directive - When to use it and Why.mp4',
        'duration': '6:29',
    },
    {
        'id': 'a16',
        'title': '16. Angular @switch Syntax',
        'name': '16. Angular @switch Syntax.mp4',
        'duration': '3:52',
    },
    {
        'id': 'a17',
        'title': '17. 15 Angular Built-In Pipes - Complete Catalog',
        'name': '17. 15 Angular Built-In Pipes - Complete Catalog.mp4',
        'duration': '11:17',
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
