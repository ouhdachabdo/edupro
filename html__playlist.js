

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1 Introduction to HTML',
        'name': '1 Introduction to HTML.mp4',
        'duration': '1:46',
    },
    {
        'id': 'a2',
        'title': '2 Basic Structure of a Web Page',
        'name': '2 Basic Structure of a Web Page.mp4',
        'duration': '3:35',
    },
    
    {
        'id': 'a3',
        'title': '3 HTML Head Tags',
        'name': '3 HTML Head Tags.mp4',
        'duration': '7:59',
    },

    {
        'id': 'a4',
        'title': '4 HTML Body Tag',
        'name': '4 HTML Body Tag.mp4',
        'duration': '3:18',
    },
    {
        'id': 'a5',
        'title': '5 HTML Paragraph Spacing',
        'name': '5 HTML Paragraph Spacing.mp4',
        'duration': '2:57',
    },
    {
        'id': 'a6',
        'title': '6 HTML Line Breaks',
        'name': '6 HTML Line Breaks.mp4',
        'duration': '2:04',
    },
    {
        'id': 'a7',
        'title': '7 HTML Non-Breaking Space',
        'name': '7 HTML Non-Breaking Space.mp4',
        'duration': '2:38',
    },
    {
        'id': 'a8',
        'title': '8 HTML Header Tags',
        'name': '8 HTML Header Tags.mp4',
        'duration': '1:58',
    },
    {
        'id': 'a9',
        'title': '9 HTML Text Formatting and Decoration',
        'name': '9 HTML Text Formatting and Decoration.mp4',
        'duration': '5:15',
    },
    {
        'id': 'a10',
        'title': '10 HTML Inline Text Formatting',
        'name': '10 HTML Inline Text Formatting.mp4',
        'duration': '2:04',
    },
    {
        'id': 'a11',
        'title': '11 HTML Unordered Lists',
        'name': '11 HTML Unordered Lists.mp4',
        'duration': '2:36',
    },
    {
        'id': 'a12',
        'title': '12 HTML Ordered Lists',
        'name': '12 HTML Ordered Lists.mp4',
        'duration': '2:39',
    },
    {
        'id': 'a13',
        'title': '13 HTML Image Insertion',
        'name': '13 HTML Image Insertion.mp4',
        'duration': '3:57',
    },
    {
        'id': 'a14',
        'title': '14 HTML Embedding Videos',
        'name': '14 HTML Embedding Videos.mp4',
        'duration': '2:50',
    },
    {
        'id': 'a15',
        'title': '15 HTML Absolute vs Relative File Referencing',
        'name': '15 HTML Absolute vs Relative File Referencing.mp4',
        'duration': '2:00',
    },
    {
        'id': 'a16',
        'title': '16 HTML Link Creation',
        'name': '16 HTML Link Creation.mp4',
        'duration': '6:34',
    },
    {
        'id': 'a17',
        'title': '17 HTML Anchor Tags',
        'name': '17 HTML Anchor Tags.mp4',
        'duration': '6:16',
    },
    {
        'id': 'a18',
        'title': '18 HTML Tables',
        'name': '18 HTML Tables.mp4',
        'duration': '11:29',
    },
    {
        'id': 'a19',
        'title': '19 HTML Nested Tables',
        'name': '19 HTML Nested Tables.mp4',
        'duration': '6:26',
    },
    {
        'id': 'a20',
        'title': '20 HTML Merging Cells',
        'name': '20 HTML Merging Cells.mp4',
        'duration': '1:00',
    },
    {
        'id': 'a21',
        'title': '21 HTML Text Wrapping',
        'name': '21 HTML Text Wrapping.mp4',
        'duration': '1:17',
    },
    {
        'id': 'a22',
        'title': '22 HTML Table Background Image',
        'name': '22 HTML Table Background Image.mp4',
        'duration': '1:11',
    },
    {
        'id': 'a23',
        'title': '23 HTML Cell Alignment',
        'name': '23 HTML Cell Alignment.mp4',
        'duration': '0:39',
    },
    {
        'id': 'a24',
        'title': '24 HTML - Introduction to Forms',
        'name': '24 HTML - Introduction to Forms.mp4',
        'duration': '3:29',
    },
    {
        'id': 'a25',
        'title': '25 HTML Form Tags and Attributes',
        'name': '25 HTML Form Tags and Attributes.mp4',
        'duration': '3:59',
    },
    {
        'id': 'a26',
        'title': '26 HTML Forms - Post vs Get',
        'name': '26 HTML Forms - Post vs Get.mp4',
        'duration': '2:08',
    },
    {
        'id': 'a27',
        'title': '27 HTML Forms - Input Text Fields',
        'name': '27 HTML Forms - Input Text Fields.mp4',
        'duration': '3:59',
    },
    {
        'id': 'a28',
        'title': '28 HTML Forms - Select Menus',
        'name': '28 HTML Forms - Select Menus.mp4',
        'duration': '5:32',
    },
    {
        'id': 'a29',
        'title': '29 HTML Forms - Check Boxes and Radio Buttons',
        'name': '29 HTML Forms - Check Boxes and Radio Buttons.mp4',
        'duration': '5:44',
    },
    {
        'id': 'a30',
        'title': '30 HTML Forms - Text Areas and Buttons',
        'name': '30 HTML Forms - Text Areas and Buttons.mp4',
        'duration': '5:49',
    },
    {
        'id': 'a31',
        'title': '31 HTML Iframes',
        'name': '31 HTML Iframes.mp4',
        'duration': '4:03',
    },
    {
        'id': 'a32',
        'title': '32 HTML Project - Introduction',
        'name': '32 HTML Project - Introduction.mp4',
        'duration': '1:40',
    },
    {
        'id': 'a33',
        'title': '33 HTML Project - Header',
        'name': '33 HTML Project - Header.mp4',
        'duration': '3:33',
    },
    {
        'id': 'a34',
        'title': '34 HTML Project - Callout',
        'name': '34 HTML Project - Callout.mp4',
        'duration': '3:19',
    },
    {
        'id': 'a35',
        'title': '35 HTML Project - Image Insertion',
        'name': '35 HTML Project - Image Insertion.mp4',
        'duration': '1:34',
    },
    {
        'id': 'a36',
        'title': '36 HTML Project - Text Insertion',
        'name': '36 HTML Project - Text Insertion.mp4',
        'duration': '1:23',
    },
    {
        'id': 'a37',
        'title': '37 HTML Project - Links and Form',
        'name': '37 HTML Project - Links and Form.mp4',
        'duration': '3:28',
    },
    {
        'id': 'a38',
        'title': '38 HTML Project - Tabular Data',
        'name': '38 HTML Project - Tabular Data.mp4',
        'duration': '2:23',
    },
    {
        'id': 'a39',
        'title': '39 HTML Project - Footer',
        'name': '39 HTML Project - Footer.mp4',
        'duration': '1:21',
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
