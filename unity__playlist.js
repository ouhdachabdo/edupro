

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1. Unity 3D Introduction',
        'name': '1. Unity 3D Introduction.mp4',
        'duration': '2.04',
    },
    {
        'id': 'a2',
        'title': '2. Unity 3D Fast Facts',
        'name': '2. Unity 3D Fast Facts.mp4',
        'duration': '1:21',
    },
    
    {
        'id': 'a3',
        'title': '3. Unity Editor Introduction',
        'name': '3. Unity Editor Introduction.mp4',
        'duration': '6:49',
    },

    {
        'id': 'a4',
        'title': '4. Scene View Navigation',
        'name': '4. Scene View Navigation.mp4',
        'duration': '6:10',
    },
    {
        'id': 'a5',
        'title': '5. How to Import 3D Models',
        'name': '5. How to Import 3D Models.mp4',
        'duration': '3:33',
    },
    {
        'id': 'a6',
        'title': '6. Introduction to Unity Asset Store',
        'name': '6. Introduction to Unity Asset Store.mp4',
        'duration': '1:56',
    },
    {
        'id': 'a7',
        'title': '7. Adding a SkyBox',
        'name': '7. Adding a SkyBox.mp4',
        'duration': '3:53',
    },
    {
        'id': 'a8',
        'title': '8. Creating and Using Materials',
        'name': '8. Creating and Using Materials.mp4',
        'duration': '4:07',
    },
    {
        'id': 'a9',
        'title': '9. Importing and Using Textures',
        'name': '9. Importing and Using Textures.mp4',
        'duration': '2:29',
    },
    {
        'id': 'a10',
        'title': '10. Texture Size Best Practice Power of 2',
        'name': '10. Texture Size Best Practice Power of 2.mp4',
        'duration': '0:47',
    },
    {
        'id': 'a11',
        'title': '11. How to Add Water',
        'name': '11. How to Add Watert.mp4',
        'duration': '4:39',
    },
    {
        'id': 'a12',
        'title': '12. Introduction to Scripting',
        'name': '12. Introduction to Scripting.mp4',
        'duration': '6:23',
    },
    {
        'id': 'a13',
        'title': '13. How to Access GameObject in Script',
        'name': '13. How to Access GameObject in Script.mp4',
        'duration': '10:10',
    },
    {
        'id': 'a14',
        'title': '14. Introduction to Unity Sound',
        'name': '14. Introduction to Unity Sound.mp4',
        'duration': '3:55',
    },
    {
        'id': 'a15',
        'title': '15. Ten Quick Unity 3D IDE Tips',
        'name': '15. Ten Quick Unity 3D IDE Tips.mp4',
        'duration': '8:17',
    },
    {
        'id': 'a16',
        'title': '16. Introduction to Physics',
        'name': '16. Introduction to Physics.mp4',
        'duration': '7:43',
    },
    {
        'id': 'a17',
        'title': '17. Introduction to Collision Detection',
        'name': '17. Introduction to Collision Detection.mp4',
        'duration': '10:07',
    },
    {
        'id': 'a18',
        'title': '18. Introduction to Triggers',
        'name': '18. Introduction to Triggers.mp4',
        'duration': '9:02',
    },
    {
        'id': 'a19',
        'title': '19. Introduction to Prefabs',
        'name': '19. Introduction to Prefabs.mp4',
        'duration': '8:19',
    },
    {
        'id': 'a20',
        'title': '20. Introduction to Animation',
        'name': '20. Introduction to Animation.mp4',
        'duration': '13:09',
    },
    {
        'id': 'a21',
        'title': '21. Introduction to Animation Parameters',
        'name': '21. Introduction to Animation Parameters.mp4',
        'duration': '1:59',
    },
    {
        'id': 'a22',
        'title': '22. Access Device Camera',
        'name': '22. Access Device Camera.mp4',
        'duration': '3:02',
    },
    {
        'id': 'a23',
        'title': '23. How to Get Keyboard Input',
        'name': '23. How to Get Keyboard Input.mp4',
        'duration': '6:10',
    },
    {
        'id': 'a24',
        'title': '24. Move a GameObject with Keyboard Keys',
        'name': '24. Move a GameObject with Keyboard Keys.mp4',
        'duration': '3:10',
    },
    {
        'id': 'a25',
        'title': '25. How to Make the Camera Follow the Player',
        'name': '25. How to Make the Camera Follow the Player.mp4',
        'duration': '7:23',
    },
    {
        'id': 'a26',
        'title': '26. Moving the Player Using Rigidbody Physics',
        'name': '26. Moving the Player Using Rigidbody Physics.mp4',
        'duration': '30:53',
    },
    {
        'id': 'a27',
        'title': '27. How to Move and Animate a 3D Character',
        'name': '27. How to Move and Animate a 3D Character.mp4',
        'duration': '5:03',
    },
    {
        'id': 'a28',
        'title': '28. Difference Between Update and FixedUpdate',
        'name': '28. Difference Between Update and FixedUpdate.mp4',
        'duration': '4:24',
    },
    {
        'id': 'a29',
        'title': '29. OnEnable() and OnDisable() Functions',
        'name': '29. OnEnable() and OnDisable() Functions.mp4',
        'duration': '4:54',
    },
    {
        'id': 'a30',
        'title': '30. Scenes Management',
        'name': '30. Scenes Management.mp4',
        'duration': '6:47',
    },
    {
        'id': 'a31',
        'title': '31. How to Detect Mouse Click or Touch on a GameObject',
        'name': '31. How to Detect Mouse Click or Touch on a GameObject.mp4',
        'duration': '7:01',
    },
    {
        'id': 'a32',
        'title': '32. Intelligent Player Movement (Navigation & Path-finding, Navigation Mesh & Agent)',
        'name': '32. Intelligent Player Movement (Navigation & Path-finding, Navigation Mesh & Agent).mp4',
        'duration': '5:23',
    },
    {
        'id': 'a33',
        'title': '33. Play Audio Through Multiple Scenes',
        'name': '33. Play Audio Through Multiple Scenes.mp4',
        'duration': '2:02',
    },
    {
        'id': 'a34',
        'title': '34. Audio Only Be Heard in a Certain Radius,Distance',
        'name': '34. Audio Only Be Heard in a Certain Radius,Distance.mp4',
        'duration': '8:59',
    },
    {
        'id': 'a35',
        'title': '35. Audio Import Settings, WAV or MP3, Reduce Scene Load Time',
        'name': '35. Audio Import Settings, WAV or MP3, Reduce Scene Load Time.mp4',
        'duration': '4:35',
    },
    {
        'id': 'a36',
        'title': '36. How to Save and Load Data',
        'name': '36. How to Save and Load Data.mp4',
        'duration': '4:20',
    },
    {
        'id': 'a37',
        'title': '37. Introduction to Lighting',
        'name': '37. Introduction to Lighting.mp4',
        'duration': '5:17',
    },
    {
        'id': 'a38',
        'title': '38. Assign Materials Using C# Code',
        'name': '38. Assign Materials Using C# Code.mp4',
        'duration': '5:44',
    },
    {
        'id': 'a39',
        'title': '39. Introduction to Particle System',
        'name': '39. Introduction to Particle System.mp4',
        'duration': '12:34',
    },
    {
        'id': 'a40',
        'title': '40. How to Shoot Bullet & Kill Enemy',
        'name': '40. How to Shoot Bullet & Kill Enemy.mp4',
        'duration': '6:49',
    },
    {
        'id': 'a41',
        'title': '41. Introduction to Unity UI',
        'name': '41. Introduction to Unity UI.mp4',
        'duration': '2:54',
    },
    {
        'id': 'a42',
        'title': '42. How to Get Name of Button that was Clicked',
        'name': '42. How to Get Name of Button that was Clicked.mp4',
        'duration': '2:58',
    },
    {
        'id': 'a43',
        'title': '43. How to Open Url in Browser on Button Click',
        'name': '43. How to Open Url in Browser on Button Clickr.mp4',
        'duration': '6:05',
    },
    {
        'id': 'a44',
        'title': '44. Introduction to Terrain',
        'name': '44. Introduction to Terrain.mp4',
        'duration': '1:10',
    },
    {
        'id': 'a45',
        'title': '45. Rotate Camera with Mouse',
        'name': '45. Rotate Camera with Mouse.mp4',
        'duration': '1:10',
    },
    {
        'id': 'a46',
        'title': '46. Move Camera with Mouse',
        'name': '46. Move Camera with Mouse.mp4',
        'duration': '1:25',
    },
    {
        'id': 'a47',
        'title': '47. Drag & Drop Game Objectst',
        'name': '47. Drag & Drop Game Objects.mp4',
        'duration': '44:05',
    },
    {
        'id': 'a48',
        'title': '48. Create a Game from Start',
        'name': '48. Create a Game from Start.mp4',
        'duration': '6:41',
    },
    {
        'id': 'a49',
        'title': '49. Easiest way to Move, Rotate and Jump Player',
        'name': '49. Easiest way to Move, Rotate and Jump Player.mp4',
        'duration': '6:25',
    },
    {
        'id': 'a50',
        'title': '50. Make a Touch Screen Virtual Joystick from Scratch',
        'name': '50. Make a Touch Screen Virtual Joystick from Scratch.mp4',
        'duration': '3:03',
    },
    {
        'id': 'a51',
        'title': '51. How to Change Skybox through Code',
        'name': '51. How to Change Skybox through Code.mp4',
        'duration': '6:18',
    },
    {
        'id': 'a52',
        'title': '52. How to Walk Around a Sphere (Walk on Planet)',
        'name': '52. How to Walk Around a Sphere (Walk on Planet).mp4',
        'duration': '9:39',
    },
    {
        'id': 'a53',
        'title': '53. How to Continue Firing when Button is Touched',
        'name': '53. How to Continue Firing when Button is Touched.mp4',
        'duration': '1:30',
    },
    {
        'id': 'a54',
        'title': '54. How to Detect if Running on Mobile or Desktop',
        'name': '54. How to Detect if Running on Mobile or Desktop.mp4',
        'duration': '1:47',
    },
    {
        'id': 'a55',
        'title': '55. Wrap Up & User Experience Ehnancemen55. How to Hide and Lock the Cursor',
        'name': '55. How to Hide and Lock the Cursor.mp4',
        'duration': '6:17',
    },
    {
        'id': 'a56',
        'title': '56. How to Read an XML Document',
        'name': '56. How to Read an XML Document.mp4',
        'duration': '1:51',
    },
    {
        'id': 'a57',
        'title': '57. Check Internet Availability',
        'name': '57. Check Internet Availability.mp4',
        'duration': '1:40',
    },
    {
        'id': 'a58',
        'title': '58. Rotate a Gameobject through Script',
        'name': '58. Rotate a Gameobject through Script.mp4',
        'duration': '3:10',
    },
    {
        'id': 'a59',
        'title': '59. LookAt To Only Rotate on Y Axis',
        'name': '59. LookAt To Only Rotate on Y Axis.mp4',
        'duration': '5:30',
    },
    {
        'id': 'a60',
        'title': '60. Rotate Camera with Mouse, Keyboard Keys and Accelerometer with Single Script',
        'name': '60. Rotate Camera with Mouse, Keyboard Keys and Accelerometer with Single Script.mp4',
        'duration': '9:20',
    },
    {
        'id': 'a61',
        'title': '61. Ask Users to Rate the App',
        'name': '61. Ask Users to Rate the App.mp4',
        'duration': '0:55',
    },
    {
        'id': 'a62',
        'title': '62. How to Make 3D Text Look Sharp and Smooth',
        'name': '62. How to Make 3D Text Look Sharp and Smooth.mp4',
        'duration': '2:50',
    },
    {
        'id': 'a63',
        'title': '63. How to Prevent Mouse Click from Passing Through GUI Controls',
        'name': '63. How to Prevent Mouse Click from Passing Through GUI Controls.mp4',
        'duration': '00:46',
    },
    {
        'id': 'a64',
        'title': '64. Unable to Merge Android Manifests Error',
        'name': '64. Unable to Merge Android Manifests Error.mp4',
        'duration': '12:22',
    },
    {
        'id': 'a65',
        'title': '65. Introduction to the Profiler and Quality Settings',
        'name': '65. Introduction to the Profiler and Quality Settings.mp4',
        'duration': '17:01',
    },
    {
        'id': 'a66',
        'title': '66. Improving Game Performance with Object Pooling',
        'name': '66. Improving Game Performance with Object Pooling.mp4',
        'duration': '5:15',
    },
    {
        'id': 'a67',
        'title': '67. How to Know if Audio Source Finished Playing',
        'name': '67. How to Know if Audio Source Finished Playing.mp4',
        'duration': '6:37',
    },
    {
        'id': 'a68',
        'title': '68. Loading and Playing AudioClip at Runtime',
        'name': '68. Loading and Playing AudioClip at Runtime.mp4',
        'duration': '1:55',
    },
    {
        'id': 'a69',
        'title': '69. Play Audio After Certain Timer',
        'name': '69. Play Audio After Certain Timer.mp4',
        'duration': '1:27',
    },
    {
        'id': 'a70',
        'title': '70. Where Unity Asset Store, Saves the Packages',
        'name': '70. Where Unity Asset Store, Saves the Packages.mp4',
        'duration': '1:41',
    },
    {
        'id': 'a71',
        'title': '71. How Do I Get the Name of the Active Scene',
        'name': '71. How Do I Get the Name of the Active Scene.mp4',
        'duration': '2:55',
    },
    {
        'id': 'a72',
        'title': '72. Find and Modify Android Manifest File',
        'name': '72. Find and Modify Android Manifest File.mp4',
        'duration': '3:03',
    },
    {
        'id': 'a73',
        'title': '73. Make Your Game More Beautiful in 10 Seconds',
        'name': '73. Make Your Game More Beautiful in 10 Seconds.mp4',
        'duration': '2:26',
    },
    {
        'id': 'a74',
        'title': '74. How to Generate a Random Number',
        'name': '74. How to Generate a Random Number.mp4',
        'duration': '3:29',
    },
    {
        'id': 'a75',
        'title': '75. Create Funny Voices for Your Game',
        'name': '75. Create Funny Voices for Your Game.mp4',
        'duration': '6:29',
    },
    {
        'id': 'a76',
        'title': '76. Get Royalty Free Music For Your Games',
        'name': '76. Get Royalty Free Music For Your Games.mp4',
        'duration': '2:05',
    },
    {
        'id': 'a77',
        'title': '77. The Execution Order of Events',
        'name': '77. The Execution Order of Events.mp4',
        'duration': '6:06',
    },
    {
        'id': 'a78',
        'title': '78. Tips for an Independent App Developer',
        'name': '78. Tips for an Independent App Developer.mp4',
        'duration': '4:39',
    },
    {
        'id': 'a79',
        'title': '79. Switch Between Cameras',
        'name': '79. Switch Between Cameras.mp4',
        'duration': '0:50',
    },
    {
        'id': 'a80',
        'title': '80. Fog Effect',
        'name': '80. Fog Effect.mp4',
        'duration': '6:31',
    },
    {
        'id': 'a81',
        'title': '81. Occlusion Culling - Improve Game Performance',
        'name': '81. Occlusion Culling - Improve Game Performance.mp4',
        'duration': '1:03',
    },
    {
        'id': 'a82',
        'title': '82. How to Vibrate Device',
        'name': '82. How to Vibrate Device.mp4',
        'duration': '1:57',
    },
    {
        'id': 'a84',
        'title': '84. Introduction to Paint 3D & Export the Model to Unity3D',
        'name': '84. Introduction to Paint 3D & Export the Model to Unity3D.mp4',
        'duration': '4:39',
    },{
        'id': 'a85',
        'title': '85. Simple Dynamic Clouds',
        'name': '85. Simple Dynamic Clouds.mp4',
        'duration': '2:34',
    },
    {
        'id': 'a86',
        'title': '86. Skybox from 360 Panorama Image',
        'name': '86. Skybox from 360 Panorama Image.mp4',
        'duration': '1:50',
    },
    {
        'id': 'a87',
        'title': '87. How to Make a Door Open and Close',
        'name': '87. How to Make a Door Open and Close.mp4',
        'duration': '7:27',
    },
    {
        'id': 'a88',
        'title': '88. Camera or Screen Shake Effect',
        'name': '88. Camera or Screen Shake Effect.mp4',
        'duration': '1:00',
    },
    {
        'id': 'a89',
        'title': '89. How to Make Camera Follow Player Position & Rotation',
        'name': '89. How to Make Camera Follow Player Position & Rotation.mp4',
        'duration': '1:46',
    },
    {
        'id': 'a90',
        'title': '90. Coroutines in Unity',
        'name': '90. Coroutines in Unity.mp4',
        'duration': '6:45',
    },
    {
        'id': 'a91',
        'title': '91. How to make a Loading Bar & Load Scene Asynchronously',
        'name': '91. How to make a Loading Bar & Load Scene Asynchronously.mp4',
        'duration': '5:09',
    },
    {
        'id': 'a92',
        'title': '92. How to Find Size of Game Object',
        'name': '92. How to Find Size of Game Object.mp4',
        'duration': '2:01',
    },
    {
        'id': 'a93',
        'title': '93. Play Video in Unity 3D',
        'name': '93. Play Video in Unity 3D.mp4',
        'duration': '3:58',
    },
    {
        'id': 'a94',
        'title': '94. How to Dynamically Create a Cube and Color it',
        'name': '94. How to Dynamically Create a Cube and Color it.mp4',
        'duration': '2:43',
    },
    {
        'id': 'a95',
        'title': '95. Rotating Ceiling Fan through Script in Unity 3D',
        'name': '95. Rotating Ceiling Fan through Script in Unity 3D.mp4',
        'duration': '2:00',
    },
    {
        'id': 'a96',
        'title': '96. Counter, Timer & Game Over Logic - C# Script',
        'name': '96. Counter, Timer & Game Over Logic - C# Script.mp4',
        'duration': '7:11',
    },
    {
        'id': 'a97',
        'title': '97. Make an AR app in 5 minutes',
        'name': '97. Make an AR app in 5 minutes.mp4',
        'duration': '5:09',
    },
    {
        'id': 'a98',
        'title': '98. How to implement AdMob Banner Ad',
        'name': '98. How to implement AdMob Banner Ad.mp4',
        'duration': '3:07',
    },
    {
        'id': 'a99',
        'title': '99. Ten Essential Interview Questions and Answers',
        'name': '99. Ten Essential Interview Questions and Answersr.mp4',
        'duration': '6:01',
    },
    {
        'id': 'a100',
        'title': '100. Execution Order of Event Functions',
        'name': '100. Execution Order of Event Functions.mp4',
        'duration': '3:23',
    },
    {
        'id': 'a101',
        'title': '101. Make Your Game Faster',
        'name': '101. Make Your Game Faster.mp4',
        'duration': '1:27',
    },
    {
        'id': 'a102',
        'title': '102. CPU Optimization',
        'name': '102. CPU Optimization.mp4',
        'duration': '1:45',
    },
    {
        'id': 'a103',
        'title': '103. Riddles Brain Teasers',
        'name': '103. Riddles Brain Teasers.mp4',
        'duration': '8:39',
    },
    {
        'id': 'a104',
        'title': '104. Endless Kitten Run',
        'name': '104. Endless Kitten Run.mp4',
        'duration': '10:35',
    },
    {
        'id': 'a105',
        'title': '105. Mushroom Conflict',
        'name': '105. Mushroom Conflict.mp4',
        'duration': '25:28',
    },
    {
        'id': 'a106',
        'title': '106. Maze Warrior',
        'name': '106. Maze Warrior.mp4',
        'duration': '12:55',
    },
    {
        'id': 'a107',
        'title': '107. 3D Space Museum',
        'name': '107. 3D Space Museum.mp4',
        'duration': '6:30',
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
