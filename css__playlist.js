

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1 Introduction to CSS',
        'name': '1 Introduction to CSS.mp4',
        'duration': '3:31',
    },
    {
        'id': 'a2',
        'title': '2 Parts of a CSS Rule',
        'name': '2 Parts of a CSS Rule.mp4',
        'duration': '6:31',
    },
    
    {
        'id': 'a3',
        'title': '3 Types of CSS Rules',
        'name': '3 Types of CSS Rules.mp4',
        'duration': '2:54',
    },

    {
        'id': 'a4',
        'title': '4 CSS - Color Names and Codes',
        'name': '4 CSS - Color Names and Codes.mp4',
        'duration': '2:17',
    },
    {
        'id': 'a5',
        'title': '5 CSS Classes and Spans',
        'name': '5 CSS Classes and Spans.mp4',
        'duration': '5:43',
    },
    {
        'id': 'a6',
        'title': '6 CSS Divisions - DIVs',
        'name': '6 CSS Divisions - DIVs.mp4',
        'duration': '2:52',
    },
    {
        'id': 'a7',
        'title': '7 CSS IDs',
        'name': '7 CSS IDs.mp4',
        'duration': '5:53',
    },
    {
        'id': 'a8',
        'title': '8 CSS Margins',
        'name': '8 CSS Margins.mp4',
        'duration': '3:52',
    },
    {
        'id': 'a9',
        'title': '9 CSS Padding',
        'name': '9 CSS Padding.mp4',
        'duration': '2:12',
    },
    {
        'id': 'a10',
        'title': '10 CSS Text Properties',
        'name': '10 CSS Text Properties.mp4',
        'duration': '8:28',
    },
    {
        'id': 'a11',
        'title': '11 CSS Font Properties',
        'name': '11 CSS Font Properties.mp4',
        'duration': '3:00',
    },
    {
        'id': 'a12',
        'title': '12 CSS Borders',
        'name': '12 CSS Borders.mp4',
        'duration': '2:19',
    },
    {
        'id': 'a13',
        'title': '13 CSS Backgrounds',
        'name': '13 CSS Backgrounds.mp4',
        'duration': '6:25',
    },
    {
        'id': 'a14',
        'title': '14 CSS Transparency',
        'name': '14 CSS Transparency.mp4',
        'duration': '2:52',
    },
    {
        'id': 'a15',
        'title': '15 CSS Text on Top of Images',
        'name': '15 CSS Text on Top of Images.mp4',
        'duration': '5:09',
    },
    {
        'id': 'a16',
        'title': '16 CSS Width and Height Properties',
        'name': '16 CSS Width and Height Properties.mp4',
        'duration': '6:03',
    },
    {
        'id': 'a17',
        'title': '17 CSS Display Properties',
        'name': '17 CSS Display Properties.mp4',
        'duration': '2:09',
    },
    {
        'id': 'a18',
        'title': '18 CSS Static Positioning',
        'name': '18 CSS Static Positioning.mp4',
        'duration': '1:54',
    },
    {
        'id': 'a19',
        'title': '19 CSS Relative Positioning',
        'name': '19 CSS Relative Positioning.mp4',
        'duration': '4:03',
    },
    {
        'id': 'a20',
        'title': '20 CSS Absolute Positioning',
        'name': '20 CSS Absolute Positioning.mp4',
        'duration': '2:12',
    },
    {
        'id': 'a21',
        'title': '21 CSS Fixed Positioning',
        'name': '21 CSS Fixed Positioning.mp4',
        'duration': '2:07',
    },
    {
        'id': 'a22',
        'title': '22 HTML Table Background Image',
        'name': '22 HTML Table Background Image.mp4',
        'duration': '1:11',
    },
    {
        'id': 'a23',
        'title': '22 CSS Float Property',
        'name': '22 CSS Float Property.mp4',
        'duration': '2:23',
    },
    {
        'id': 'a24',
        'title': '24 CSS Z-Index',
        'name': '24 CSS Z-Index.mp4',
        'duration': '1:39',
    },
    {
        'id': 'a25',
        'title': '25 CSS Styling Links',
        'name': '25 CSS Styling Links.mp4',
        'duration': '2:01',
    },
    {
        'id': 'a26',
        'title': '26 CSS Tables',
        'name': '26 CSS Tables.mp4',
        'duration': '2:16',
    },
    {
        'id': 'a27',
        'title': '27 CSS Project - Introduction',
        'name': '27 CSS Project - Introduction.mp4',
        'duration': '1:22',
    },
    {
        'id': 'a28',
        'title': '28 CSS Project - CSS Rules',
        'name': '28 CSS Project - CSS Rules.mp4',
        'duration': '5:35',
    },
    {
        'id': 'a29',
        'title': '29 CSS Project - Navigation Rules',
        'name': '29 CSS Project - Navigation Rules.mp4',
        'duration': '2:19',
    },
    {
        'id': 'a30',
        'title': '30 CSS Project - Responsive CSS',
        'name': '30 CSS Project - Responsive CSS.mp4',
        'duration': '2:37',
    },
    {
        'id': 'a31',
        'title': '31 CSS Project - Page Elements',
        'name': '31 CSS Project - Page Elements.mp4',
        'duration': '2:33',
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
