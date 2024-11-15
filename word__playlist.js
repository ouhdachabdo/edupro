

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1 Welcome and Introduction',
        'name': '1 Welcome and Introduction.mp4',
        'duration': '2:34',
    },
    {
        'id': 'a2',
        'title': '2 How to Take The Program',
        'name': '2 How to Take The Program.mp4',
        'duration': '3:30',
    },
    
    {
        'id': 'a3',
        'title': '3 Program Objectives',
        'name': '3 Program Objectives.mp4',
        'duration': '1:24',
    },

    {
        'id': 'a4',
        'title': '4 How To Create, Save and Close A Document',
        'name': '4 How To Create, Save and Close A Document.mp4',
        'duration': '6:14',
    },
    {
        'id': 'a5',
        'title': '5 How To Open Documents Using Recent List',
        'name': '5 How To Open Documents Using Recent List.mp4',
        'duration': '5:33',
    },
    {
        'id': 'a6',
        'title': '6 How To Use Templates',
        'name': '6 How To Use Templates.mp4',
        'duration': '8:05',
    },
    {
        'id': 'a7',
        'title': '7 How To Create Your Personal Template',
        'name': '7 How To Create Your Personal Template.mp4',
        'duration': '8:29',
    },
    {
        'id': 'a8',
        'title': '8 How To Select Text',
        'name': '8 How To Select Text.mp4',
        'duration': '5:39',
    },
    {
        'id': 'a9',
        'title': '9 How To Select Text Using Your Keyboard',
        'name': '9 How To Select Text Using Your Keyboard.mp4',
        'duration': '4:28',
    },
    {
        'id': 'a10',
        'title': '10 How To See Non-Printing Characters',
        'name': '10 How To See Non-Printing Characters.mp4',
        'duration': '2:05',
    },
    {
        'id': 'a11',
        'title': '11 How To Cut, Copy and Paste Text',
        'name': '11 How To Cut, Copy and Paste Text.mp4',
        'duration': '5:32',
    },
    {
        'id': 'a12',
        'title': '12 How To Use Office Clipboard',
        'name': '12 How To Use Office Clipboard.mp4',
        'duration': '3:55',
    },
    {
        'id': 'a13',
        'title': '13 How To Drag and Drop Text',
        'name': '13 How To Drag and Drop Text.mp4',
        'duration': '1:47',
    },
    {
        'id': 'a14',
        'title': '14 How To Set Paste Options',
        'name': '14 How To Set Paste Options.mp4',
        'duration': '1:47',
    },
    {
        'id': 'a15',
        'title': '15 How To Undo and Redo Actions',
        'name': '15 How To Undo and Redo Actions.mp4',
        'duration': '3:32',
    },
    {
        'id': 'a16',
        'title': '16 How To Find and Replace Text',
        'name': '16 How To Find and Replace Text.mp4',
        'duration': '5:43',
    },
    {
        'id': 'a17',
        'title': '17 How To Change Font Face and Size',
        'name': '17 How To Change Font Face and Size.mp4',
        'duration': '4:39',
    },
    {
        'id': 'a18',
        'title': '18 How To Use Highlighter and Change Case',
        'name': '18 How To Use Highlighter and Change Case.mp4',
        'duration': '3:00',
    },
    {
        'id': 'a19',
        'title': '19 How To Change Font Color & Add Font Enhancements',
        'name': '19 How To Change Font Color & Add Font Enhancements.mp4',
        'duration': '4:38',
    },
    {
        'id': 'a20',
        'title': '20 How To Use Format Painter',
        'name': '20 How To Use Format Painter.mp4',
        'duration': '4:51',
    },
    {
        'id': 'a21',
        'title': '21 How To Use The Font Dialogue Box',
        'name': '21 How To Use The Font Dialogue Box.mp4',
        'duration': '2:03',
    },
    {
        'id': 'a22',
        'title': '22 How To Change Paragraph Spacing',
        'name': '22 How To Change Paragraph Spacing.mp4',
        'duration': '4:36',
    },
    {
        'id': 'a23',
        'title': '23 How To Set Alignments',
        'name': '23 How To Set Alignments.mp4',
        'duration': '3:33',
    },
    
    {
        'id': 'a24',
        'title': '24 How To Set Indents and Tabs',
        'name': '24 How To Set Indents and Tabs.mp4',
        'duration': '3:52',
    },

    {
        'id': 'a25',
        'title': '25 How To Add Bullets and Numbering',
        'name': '25 How To Add Bullets and Numbering.mp4',
        'duration': '3:10',
    },
    {
        'id': 'a26',
        'title': '26 How To Add Borders and Shadings',
        'name': '26 How To Add Borders and Shadings.mp4',
        'duration': '3:10',
    },
    {
        'id': 'a27',
        'title': '27 How To Add Headers and Footers',
        'name': '27 How To Add Headers and Footers.mp4',
        'duration': '3:04',
    },
    {
        'id': 'a28',
        'title': '28 Headers and Footers Part 2',
        'name': '28 Headers and Footers Part 2.mp4',
        'duration': '5:40',
    },
    {
        'id': 'a29',
        'title': '29 How To Add Page and Section Breaks',
        'name': '29 How To Add Page and Section Breaks.mp4',
        'duration': '3:08',
    },
    {
        'id': 'a30',
        'title': '30 How To Format Text As Columns',
        'name': '30 How To Format Text As Columns.mp4',
        'duration': '2:45',
    },
    {
        'id': 'a31',
        'title': '31 How To Color Page and Make Page Borders',
        'name': '31 How To Color Page and Make Page Borders.mp4',
        'duration': '1:40',
    },
    {
        'id': 'a32',
        'title': '32 How To Use Page Setup Dialogue Box',
        'name': '32 How To Use Page Setup Dialogue Box.mp4',
        'duration': '3:02',
    },
    {
        'id': 'a33',
        'title': '33 How To Apply Styles',
        'name': '33 How To Apply Styles.mp4',
        'duration': '4:38',
    },
    {
        'id': 'a34',
        'title': '34 How To Use Apply Styles Dialogue Box',
        'name': '34 How To Use Apply Styles Dialogue Box.mp4',
        'duration': '2:36',
    },
    {
        'id': 'a35',
        'title': '35 How To Use The Styles Pane',
        'name': '35 How To Use The Styles Pane.mp4',
        'duration': '2:03',
    },
    {
        'id': 'a36',
        'title': '36 How To Create A Style',
        'name': '36 How To Create A Style.mp4',
        'duration': '4:04',
    },
    {
        'id': 'a37',
        'title': '37 How Modify, Delete Style and Reveal Formatting',
        'name': '37 How Modify, Delete Style and Reveal Formatting.mp4',
        'duration': '4:46',
    },
    {
        'id': 'a38',
        'title': '38 How To Check Spelling and Grammar',
        'name': '38 How To Check Spelling and Grammar.mp4',
        'duration': '4:52',
    },
    {
        'id': 'a39',
        'title': '39 How To Preview and Print a Document',
        'name': '39 How To Preview and Print a Document.mp4',
        'duration': '6:07',
    },
    {
        'id': 'a40',
        'title': '40 How To Share and Email Documents',
        'name': '40 How To Share and Email Documents.mp4',
        'duration': '8:06',
    },
    {
        'id': 'a41',
        'title': '41 What Next',
        'name': '41 What Next.mp4',
        'duration': '3:41',
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
