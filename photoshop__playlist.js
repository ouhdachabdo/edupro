

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1 What This Course Is And What It Is Not - Why This Class',
        'name': '1 What This Course Is And What It Is Not - Why This Class.mp4',
        'duration': '2:26',
    },
    {
        'id': 'a2',
        'title': '2 Course Structure What You Can Expect',
        'name': '2 Course Structure What You Can Expect.mp4',
        'duration': '3:16',
    },
    
    {
        'id': 'a3',
        'title': '3 What You Can Do After This Course',
        'name': '3 What You Can Do After This Course.mp4',
        'duration': '3:46',
    },

    {
        'id': 'a4',
        'title': '4 Connect With Me Online To Get The Most Out of This Course',
        'name': '4 Connect With Me Online To Get The Most Out of This Course.mp4',
        'duration': '2:04',
    },
    {
        'id': 'a5',
        'title': '5 If You Dont Have The Software, Start Here',
        'name': '5 If You Dont Have The Software, Start Here.mp4',
        'duration': '3:15',
    },
    {
        'id': 'a6',
        'title': '6 Finding Your Way Around The UI - What Is All This Stuff',
        'name': '6 Finding Your Way Around The UI - What Is All This Stuff.mp4',
        'duration': '3:28',
    },
    {
        'id': 'a7',
        'title': '7 File Menus Rundown',
        'name': '7 File Menus Rundown.mp4',
        'duration': '4:02',
    },
    {
        'id': 'a8',
        'title': '8 Size Matters',
        'name': '8 Size Matters.mp4',
        'duration': '4:04',
    },
    {
        'id': 'a9',
        'title': '9 Essential Tool Palettes',
        'name': '0 Essential Tool Palettes.mp4',
        'duration': '5:13',
    },
    {
        'id': 'a10',
        'title': '10 You Must Master This Lecture!',
        'name': '10 You Must Master This Lecture!.mp4',
        'duration': '2:19',
    },
    {
        'id': 'a11',
        'title': '11 The Key To An Optimized Workflow',
        'name': '11 The Key To An Optimized Workflow.mp4',
        'duration': '3:30',
    },
    {
        'id': 'a12',
        'title': '12 Drawing Tools',
        'name': '12 Drawing Tools.mp4',
        'duration': '5:42',
    },
    {
        'id': 'a13',
        'title': '13 The Most Used Drawing Tool',
        'name': '13 The Most Used Drawing Tool.mp4',
        'duration': '4:21',
    },
    {
        'id': 'a14',
        'title': '14 Selection Tools',
        'name': '14 Selection Tools.mp4',
        'duration': '5:12',
    },
    {
        'id': 'a15',
        'title': '15 More Selection Help',
        'name': '15 More Selection Help.mp4',
        'duration': '4:16',
    },
    {
        'id': 'a16',
        'title': '16 Editing Tools',
        'name': '16 Editing Tools.mp4',
        'duration': '5:41',
    },
    {
        'id': 'a17',
        'title': '17 Intro to Layers',
        'name': '17 Intro to Layers.mp4',
        'duration': '2:55',
    },
    {
        'id': 'a18',
        'title': '18 More Layers and Masking',
        'name': '18 More Layers and Masking.mp4',
        'duration': '5:17',
    },
    {
        'id': 'a19',
        'title': '19 Masking, Blending Modes, Layer Styles',
        'name': '19 Masking, Blending Modes, Layer Styles.mp4',
        'duration': '6:07',
    },
    {
        'id': 'a20',
        'title': '20 Practice Project Coloring a Sketch',
        'name': '20 Practice Project Coloring a Sketch.mp4',
        'duration': '0:30',
    },
    {
        'id': 'a21',
        'title': '21 Adjustment Layers Explained',
        'name': '21 Adjustment Layers Explained.mp4',
        'duration': '9:12',
    },
    {
        'id': 'a22',
        'title': '22 More Adjustment Layer Mastery',
        'name': '22 More Adjustment Layer Mastery.mp4',
        'duration': '4:38',
    },
    {
        'id': 'a23',
        'title': '23 Practice Project Use Adjustment Layers To Enhance A Landscape',
        'name': '23 Practice Project Use Adjustment Layers To Enhance A Landscape.mp4',
        'duration': '0:30',
    },
    {
        'id': 'a24',
        'title': '24 Overview of Some Handy Filters',
        'name': '24 Overview of Some Handy Filters.mp4',
        'duration': '4:30',
    },
    {
        'id': 'a25',
        'title': '25 Previewing All The Filters',
        'name': '25 Previewing All The Filters.mp4',
        'duration': '4:53',
    },
    {
        'id': 'a26',
        'title': '26 Example Projects Overview',
        'name': '26 Example Projects Overview.mp4',
        'duration': '1:52',
    },
    {
        'id': 'a27',
        'title': '27 Painting a Portrait With Photoshop CC',
        'name': '27 Painting a Portrait With Photoshop CC.mp4',
        'duration': '5:21',
    },
    {
        'id': 'a28',
        'title': '28 A Basic Photo Edit  Enhance',
        'name': '28 A Basic Photo Edit  Enhance.mp4',
        'duration': '9:51',
    },
    {
        'id': 'a29',
        'title': '29 Post-Processing A 3d Rendering (or a photo)',
        'name': '29 Post-Processing A 3d Rendering (or a photo).mp4',
        'duration': '3:44',
    },
    {
        'id': 'a30',
        'title': '30 Turn A Photo  Rendering Into A Watercolor Painting',
        'name': '30 Turn A Photo  Rendering Into A Watercolor Painting.mp4',
        'duration': '16:06',
    },
    {
        'id': 'a31',
        'title': '31 Thank You & Goodbye',
        'name': '31 Thank You & Goodbye.mp4',
        'duration': '2:28',
    },
    {
        'id': 'a32',
        'title': '32 Learning Path For More Photoshop and Related Skills',
        'name': '32 Learning Path For More Photoshop and Related Skills.mp4',
        'duration': '7:07',
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
