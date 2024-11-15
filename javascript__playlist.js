

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1. Introduction',
        'name': '1. Introduction.mp4',
        'duration': '6.14',
    },
    {
        'id': 'a2',
        'title': '2. Introduction to JavaScript',
        'name': '2. Introduction to JavaScript.mp4',
        'duration': '6:26',
    },
    
    {
        'id': 'a3',
        'title': '3. Downloading your text Editor',
        'name': '3. Downloading your text Editor.mp4',
        'duration': '5:58',
    },

    {
        'id': 'a4',
        'title': '4. Writing our first line of code',
        'name': '4. Writing our first line of code.mp4',
        'duration': '6:49',
    },
    {
        'id': 'a5',
        'title': '5. Various Data Types',
        'name': '5. Various Data Types.mp4',
        'duration': '6:01',
    },
    {
        'id': 'a6',
        'title': '6. Working with variables',
        'name': '6. Working with variables.mp4',
        'duration': '10:54',
    },
    {
        'id': 'a7',
        'title': '7. Basic string methods Part 1',
        'name': '7. Basic string methods Part 1.mp4',
        'duration': '6:35',
    },
    {
        'id': 'a8',
        'title': '8. Basic string methods Part 2',
        'name': '8. Basic string methods Part 2.mp4',
        'duration': '7:56',
    },
    {
        'id': 'a9',
        'title': '9. Working with numbers',
        'name': '9. Working with numbers.mp4',
        'duration': '12:08',
    },
    {
        'id': 'a10',
        'title': '10. Google console and taking user input',
        'name': '10. Google console and taking user input.mp4',
        'duration': '9:07',
    },
    {
        'id': 'a11',
        'title': '11. Practicing everything Part 1',
        'name': '11. Practicing everything Part 1.mp4',
        'duration': '12:46',
    },
    {
        'id': 'a12',
        'title': '12. Practicing everything Part 2',
        'name': '12. Practicing everything Part 2.mp4',
        'duration': '7:08',
    },
    {
        'id': 'a13',
        'title': '13. Using arrays Part 1',
        'name': '13. Using arrays Part 1.mp4',
        'duration': '13:29',
    },
    {
        'id': 'a14',
        'title': '14. Using Arrays Part 2',
        'name': '14. Using Arrays Part 2.mp4',
        'duration': '2:45',
    },
    {
        'id': 'a15',
        'title': '15. Creating Basic Functions',
        'name': '15. Creating Basic Functions.mp4',
        'duration': '11:17',
    },
    {
        'id': 'a16',
        'title': '16. Practice Part 1',
        'name': '16. Practice Part 1.mp4',
        'duration': '11:32',
    },
    {
        'id': 'a17',
        'title': '17. Practice Part 2',
        'name': '17. Practice Part 2.mp4',
        'duration': '7:39',
    },
    {
        'id': 'a18',
        'title': '18. Practice Part 3',
        'name': '18. Practice Part 3.mp4',
        'duration': '1:16',
    },
    {
        'id': 'a19',
        'title': '19. Introduction to Statements',
        'name': '19. Introduction to Statements.mp4',
        'duration': '5:16',
    },
    {
        'id': 'a20',
        'title': '20. Practicing the IF statement Part 1',
        'name': '20. Practicing the IF statement Part 1.mp4',
        'duration': '13:59',
    },
    {
        'id': 'a21',
        'title': '21. Practicing the IF statement Part 2',
        'name': '21. Practicing the IF statement Part 2.mp4',
        'duration': '4:24',
    },
    {
        'id': 'a22',
        'title': '22. The Basics of Loops',
        'name': '22. The Basics of Loops.mp4',
        'duration': '5:44',
    },
    {
        'id': 'a23',
        'title': '23. The basics of the FOR loop',
        'name': '23. The basics of the FOR loop.mp4',
        'duration': '6:46',
    },
    {
        'id': 'a24',
        'title': '24. Understanding the WHILE loop',
        'name': '24. Understanding the WHILE loop.mp4',
        'duration': '12:10',
    },
    {
        'id': 'a25',
        'title': '25. Final Project part 1',
        'name': '25. Final Project part 1.mp4',
        'duration': '13:16',
    },
    {
        'id': 'a26',
        'title': '26. Final Project Part 2',
        'name': '26. Final Project Part 2.mp4',
        'duration': '11:51',
    },
    {
        'id': 'a27',
        'title': '27. Final Project Part 3',
        'name': '27. Final Project Part 3.mp4',
        'duration': '24:16',
    },
    {
        'id': 'a28',
        'title': '28. Conclusion',
        'name': '28. Conclusion.mp4',
        'duration': '3:58',
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
