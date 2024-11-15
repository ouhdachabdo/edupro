

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1 Opening Excel and creating a new sheet',
        'name': '1 Opening Excel and creating a new sheet.mp4',
        'duration': '4:15',
    },
    {
        'id': 'a2',
        'title': '2 Saving Excel files',
        'name': '2 Saving Excel files.mp4',
        'duration': '2:09',
    },
    
    {
        'id': 'a3',
        'title': '3 The important file types',
        'name': '3 The important file types.mp4',
        'duration': '2:55',
    },

    {
        'id': 'a4',
        'title': '4 The formula bar',
        'name': '4 The formula bar.mp4',
        'duration': '2:33',
    },
    {
        'id': 'a5',
        'title': '5 Adding, Modifying, and Deleting data in cells',
        'name': '5 Adding, Modifying, and Deleting data in cells.mp4',
        'duration': '4:35',
    },
    {
        'id': 'a6',
        'title': '6 Creating a new workbook',
        'name': '6 Creating a new workbook.mp4',
        'duration': '1:59',
    },
    {
        'id': 'a7',
        'title': '7 Develop the habit of using file save as',
        'name': '7 Develop the habit of using file save as.mp4',
        'duration': '3:55',
    },
    {
        'id': 'a8',
        'title': '8 The important data types',
        'name': '8 The important data types.mp4',
        'duration': '14:18',
    },
    {
        'id': 'a9',
        'title': '9 Before we start Lets zoom in and out',
        'name': '9 Before we start Lets zoom in and out.mp4',
        'duration': '0:43',
    },
    {
        'id': 'a10',
        'title': '10 How Excel works',
        'name': '10 How Excel works',
        'duration': '6:47',
    },
    {
        'id': 'a11',
        'title': '11 The relative cell reference',
        'name': '11 The relative cell reference.mp4',
        'duration': '3:35',
    },
    {
        'id': 'a12',
        'title': '12 Review Enter and leave edit mode',
        'name': '12 Review Enter and leave edit mode.mp4',
        'duration': '2:21',
    },
    {
        'id': 'a13',
        'title': '13 Example using relative cell references',
        'name': '13 Example using relative cell references.mp4',
        'duration': '9:15',
    },
    {
        'id': 'a14',
        'title': '14 Relative vs absolute cell references',
        'name': '14 Relative vs absolute cell references.mp4',
        'duration': '8:03',
    },
    {
        'id': 'a15',
        'title': '15 Test your skills  Create cell references',
        'name': '15 Test your skills  Create cell references.mp4',
        'duration': '1:42',
    },
    {
        'id': 'a16',
        'title': '16 Test your skills  Copy and paste a cell reference',
        'name': '16 Test your skills  Copy and paste a cell reference.mp4',
        'duration': '4:04',
    },
    {
        'id': 'a17',
        'title': '17 Add  Subtract  Multiple  Divide',
        'name': '17 Add  Subtract  Multiple  Divide.mp4',
        'duration': '5:04',
    },
    {
        'id': 'a18',
        'title': '18 Add numbers using a more complicated formula',
        'name': '18 Add numbers using a more complicated formula.mp4',
        'duration': '8:05',
    },
    {
        'id': 'a19',
        'title': '19 Review Cut and Paste  Moving Cells',
        'name': '19 Review Cut and Paste  Moving Cells.mp4',
        'duration': '4:34',
    },
    {
        'id': 'a20',
        'title': '20 Recap Select  Move (cut and paste)  Copy and paste',
        'name': '20 Recap Select  Move (cut and paste)  Copy and paste.mp4',
        'duration': '2:47',
    },
    {
        'id': 'a21',
        'title': '21 Very! Fast Overview Creating a budget',
        'name': '21 Very! Fast Overview Creating a budget.mp4',
        'duration': '1:36',
    },
    {
        'id': 'a22',
        'title': '22 Building the budget  Part 1',
        'name': '22 Building the budget  Part 1.mp4',
        'duration': '16:03',
    },
    {
        'id': 'a23',
        'title': '23 Building the budget  Part 2',
        'name': '23 Building the budget  Part 2.mp4',
        'duration': '6:56',
    },
    
    {
        'id': 'a24',
        'title': '24 How to make good formulas even better',
        'name': '24 How to make good formulas even better.mp4',
        'duration': '5:36',
    },
    {
        'id': 'a25',
        'title': '25 Building the budget  Part 3',
        'name': '25 Building the budget  Part 3.mp4',
        'duration': '8:58',
    },
    {
        'id': 'a26',
        'title': '26 Very! fast overview Creating a personal budget',
        'name': '26 Very! fast overview Creating a personal budget.mp4',
        'duration': '0:59',
    },
    {
        'id': 'a27',
        'title': '27 Getting set up',
        'name': '27 Getting set up.mp4',
        'duration': '4:53',
    },
    {
        'id': 'a28',
        'title': '28 Creating the Income Row',
        'name': '28 Creating the Income Row.mp4',
        'duration': '6:00',
    },
    {
        'id': 'a29',
        'title': '29 Creating the expenses',
        'name': '29 Creating the expenses.mp4',
        'duration': '5:23',
    },
    {
        'id': 'a30',
        'title': '30 Calculating savingsloss',
        'name': '30 Calculating savingsloss.mp4',
        'duration': '4:39',
    },
    {
        'id': 'a31',
        'title': '31 Expressing expenses as a _ of income',
        'name': '31 Expressing expenses as a _ of income.mp4',
        'duration': '4:08',
    },
    {
        'id': 'a32',
        'title': '32 Easily calculate a multi-year budget',
        'name': '32 Easily calculate a multi-year budget.mp4',
        'duration': '5:21',
    },
    {
        'id': 'a33',
        'title': '33 Formatting text changing font',
        'name': '33 Formatting text changing font.mp4',
        'duration': '1:49',
    },
    {
        'id': 'a34',
        'title': '34 Review Cut and paste  Move text',
        'name': '34 Review Cut and paste  Move text.mp4',
        'duration': '0:52',
    },
    {
        'id': 'a35',
        'title': '35 Resizing columns',
        'name': '35 Resizing columns.mp4',
        'duration': '5:28',
    },
    {
        'id': 'a36',
        'title': '36 Cleaning up  Wrap text',
        'name': '36 Cleaning up  Wrap text.mp4',
        'duration': '3:07',
    },
    {
        'id': 'a37',
        'title': '37 Adding fake values',
        'name': '37 Adding fake values.mp4',
        'duration': '1:25',
    },
    {
        'id': 'a38',
        'title': '38 Formatting text centering',
        'name': '38 Formatting text centering.mp4',
        'duration': '1:37',
    },
    {
        'id': 'a39',
        'title': '39 Selecting all text at once',
        'name': '39 Selecting all text at once.mp4',
        'duration': '1:49',
    },
    {
        'id': 'a40',
        'title': '40 Review Adding a SUM function',
        'name': '40 Review Adding a SUM function.mp4',
        'duration': '2:25',
    },
    {
        'id': 'a41',
        'title': '41 Review Copy and paste the function',
        'name': '41 Review Copy and paste the function.mp4',
        'duration': '2:06',
    },
    {
        'id': 'a42',
        'title': '42 Formatting text center  fill with color  sort',
        'name': '42 Formatting text center  fill with color  sort.mp4',
        'duration': '3:23',
    },
    {
        'id': 'a43',
        'title': '43 Improve the first function',
        'name': '43 Improve the first function.mp4',
        'duration': '8:15',
    },
    {
        'id': 'a44',
        'title': '44 Review Use the fill feature  Merge cells and center text',
        'name': '44 Review Use the fill feature  Merge cells and center text.mp4',
        'duration': '4:07',
    },
    {
        'id': 'a45',
        'title': '45 Improve the formula using the SUMPRODUCT function',
        'name': '45 Improve the formula using the SUMPRODUCT function.mp4',
        'duration': '4:53',
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
