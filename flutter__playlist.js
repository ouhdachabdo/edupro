

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1. Course Introduction',
        'name': '1. Course Introduction.mp4',
        'duration': '2.11',
    },
    {
        'id': 'a2',
        'title': '2. Flutter Setup (Windows)',
        'name': '2. Flutter Setup (Windows).mp4',
        'duration': '10:05',
    },
    
    {
        'id': 'a3',
        'title': '3. Flutter Setup (MACOS)',
        'name': '3. Flutter Setup (MACOS).mp4',
        'duration': '6:09',
    },

    {
        'id': 'a4',
        'title': '4. Install Visual Studio Code & Extensions (Windows  MacOS)',
        'name': '4. Install Visual Studio Code & Extensions (Windows  MacOS).mp4',
        'duration': '2:19',
    },
    {
        'id': 'a5',
        'title': '5. Git Check & Github Account Creation',
        'name': '5. Git Check & Github Account Creation.mp4',
        'duration': '1:33',
    },
    {
        'id': 'a6',
        'title': '6. Functions in Dart',
        'name': '6. Functions in Dart.mp4',
        'duration': '6:41',
    },
    {
        'id': 'a7',
        'title': '7. Data types in Dart',
        'name': '7. Data types in Dart.mp4',
        'duration': '7:17',
    },
    {
        'id': 'a8',
        'title': '8. Return types in Dart',
        'name': '8. Return types in Dart.mp4',
        'duration': '4:30',
    },
    {
        'id': 'a9',
        'title': '9. OOP & Classes in dart (Constructors, Properties, Methods)',
        'name': '9. OOP & Classes in dart (Constructors, Properties, Methods).mp4',
        'duration': '14:50',
    },
    {
        'id': 'a10',
        'title': '10. Inheritance in Dart',
        'name': '10. Inheritance in Dart.mp4',
        'duration': '6:47',
    },
    {
        'id': 'a11',
        'title': '11. Create & RUN first flutter project',
        'name': '11. Create & RUN first flutter project.mp4',
        'duration': '6:11',
    },
    {
        'id': 'a12',
        'title': '12. Fixing Errors throughout this course (Very, Very Important - Must be noted)',
        'name': '12. Fixing Errors throughout this course (Very, Very Important - Must be noted).mp4',
        'duration': '2:56',
    },
    {
        'id': 'a13',
        'title': '13. What well build (Hello Flutter intro)',
        'name': '13. What well build (Hello Flutter intro).mp4',
        'duration': '0:41',
    },
    {
        'id': 'a14',
        'title': '14. Clone Hello Flutter App from GitHub on your device',
        'name': '14. Clone Hello Flutter App from GitHub on your device.mp4',
        'duration': '3:50',
    },
    {
        'id': 'a15',
        'title': '15. Start Working on Hello Flutter App',
        'name': '15. Start Working on Hello Flutter App.mp4',
        'duration': '6:09',
    },
    {
        'id': 'a16',
        'title': '16. Understanding & using widgets',
        'name': '16. Understanding & using widgets.mp4',
        'duration': '5:50',
    },
    {
        'id': 'a17',
        'title': '18. Hot Restart, Hot Reload, Hard restart & Custom Widget',
        'name': '18. Hot Restart, Hot Reload, Hard restart & Custom Widget.mp4',
        'duration': '7:04',
    },
    {
        'id': 'a19',
        'title': '19. Using Container Widget',
        'name': '19. Using Container Widget.mp4',
        'duration': '8:58',
    },
    {
        'id': 'a20',
        'title': '20. Columns in Flutter',
        'name': '20. Columns in Flutter.mp4',
        'duration': '4:51',
    },
    {
        'id': 'a21',
        'title': '21. Widgets basics, Wrapping & More',
        'name': '21. Widgets basics, Wrapping & More.mp4',
        'duration': '5:46',
    },
    {
        'id': 'a22',
        'title': '22. Rows & Text Styling',
        'name': '22. Rows & Text Styling.mp4',
        'duration': '7:05',
    },
    {
        'id': 'a23',
        'title': '23. Loading images in Flutter',
        'name': '23. Loading images in Flutter.mp4',
        'duration': '7:11',
    },
    {
        'id': 'a24',
        'title': '24. Fonts In Flutter',
        'name': '24. Fonts In Flutter.mp4',
        'duration': '8:31',
    },
    {
        'id': 'a25',
        'title': '25. Refactoring  Splitting code into multiple files',
        'name': '25. Refactoring  Splitting code into multiple files.mp4',
        'duration': '7:18',
    },
    {
        'id': 'a26',
        'title': '26. Wrap up',
        'name': '26. Wrap up.mp4',
        'duration': '4:26',
    },
    {
        'id': 'a27',
        'title': '27. What Well Build (Billionaire App Intro)',
        'name': '27. What Well Build (Billionaire App Intro).mp4',
        'duration': '1:02',
    },
    {
        'id': 'a28',
        'title': '28. Clone Billionaire App from Github on your device',
        'name': '28. Clone Billionaire App from Github on your device.mp4',
        'duration': '2:18',
    },
    {
        'id': 'a29',
        'title': '29. Start new flutter project with dark mode',
        'name': '29. Start new flutter project with dark mode.mp4',
        'duration': '5:09',
    },
    {
        'id': 'a30',
        'title': '30. Working with Buttons',
        'name': '30. Working with Buttons.mp4',
        'duration': '5:47',
    },
    {
        'id': 'a31',
        'title': '31. Expanded, Flex & Button Styling',
        'name': '31. Expanded, Flex & Button Styling.mp4',
        'duration': '10:27',
    },
    {
        'id': 'a32',
        'title': '32. StatefulWidgets & States in Flutter',
        'name': '32. StatefulWidgets & States in Flutter.mp4',
        'duration': '6:59',
    },
    {
        'id': 'a33',
        'title': '33. SharedPreferences (Saving data locally)',
        'name': '33. SharedPreferences (Saving data locally).mp4',
        'duration': '10:18',
    },
    {
        'id': 'a34',
        'title': '34. initState() in StatefulWidget',
        'name': '34. initState() in StatefulWidget.mp4',
        'duration': '2:35',
    },
    {
        'id': 'a35',
        'title': '35. Child To Parent Communication in Flutter',
        'name': '35. Child To Parent Communication in Flutter.mp4',
        'duration': '3:34',
    },
    {
        'id': 'a36',
        'title': '36. Parent to child communication',
        'name': '36. Parent to child communication.mp4',
        'duration': '6:41',
    },
    {
        'id': 'a37',
        'title': '37. App Icons in Flutter & Wrap up',
        'name': '37. App Icons in Flutter & Wrap up.mp4',
        'duration': '6:52',
    },
    {
        'id': 'a38',
        'title': '38. What Well Build (Todo App Intro)',
        'name': '38. What Well Build (Todo App Intro).mp4',
        'duration': '6:31',
    },
    {
        'id': 'a39',
        'title': '39. Clone Todo App from Github on your device',
        'name': '39. Clone Todo App from Github on your device.mp4',
        'duration': '0:57',
    },
    {
        'id': 'a40',
        'title': '40. Start New Project in Light Mode',
        'name': '40. Start New Project in Light Mode.mp4',
        'duration': '3:46',
    },
    {
        'id': 'a41',
        'title': '41. Using Icons, Scaffold Actions, Drawer & More',
        'name': '41. Using Icons, Scaffold Actions, Drawer & More.mp4',
        'duration': '5:18',
    },
    {
        'id': 'a42',
        'title': '42. GestureDetector, InkWell & BottomSheet',
        'name': '42. GestureDetector, InkWell & BottomSheet.mp4',
        'duration': '7:41',
    },
    {
        'id': 'a43',
        'title': '43. Text Field & TextEditingController',
        'name': '43. Text Field & TextEditingController.mp4',
        'duration': '6:29',
    },
    {
        'id': 'a44',
        'title': '44. Advanced Child to parent communication (Passing data)',
        'name': '44. Advanced Child to parent communication (Passing data).mp4',
        'duration': '6:32',
    },
    {
        'id': 'a45',
        'title': '45. Understanding Lists in Dart',
        'name': '45. Understanding Lists in Dart.mp4',
        'duration': '7:34',
    },
    {
        'id': 'a46',
        'title': '46. ListView Builder & ListTile',
        'name': '46. ListView Builder & ListTile.mp4',
        'duration': '5:34',
    },
    {
        'id': 'a47',
        'title': '47. Manipulating data in List',
        'name': '47. Manipulating data in List.mp4',
        'duration': '5:42',
    },
    {
        'id': 'a48',
        'title': '48. Preserving List Data',
        'name': '48. Preserving List Data.mp4',
        'duration': '4:16',
    },
    {
        'id': 'a49',
        'title': '49. IF, Else statement in DART',
        'name': '49. IF, Else statement in DART.mp4',
        'duration': '7:56',
    },
    {
        'id': 'a50',
        'title': '50. Using AlertDialog and If Else Statement in todo App',
        'name': '50. Using AlertDialog and If Else Statement in todo App.mp4',
        'duration': '5:50',
    },
    {
        'id': 'a51',
        'title': '51. Refactoring Functions & Widgets',
        'name': '51. Refactoring Functions & Widgets.mp4',
        'duration': '4:52',
    },
    {
        'id': 'a52',
        'title': '52. Working on Drawer',
        'name': '52. Working on Drawer.mp4',
        'duration': '4:44',
    },
    {
        'id': 'a53',
        'title': '53. Rendering Widgets Conditionally',
        'name': '53. Rendering Widgets Conditionally.mp4',
        'duration': '6:54',
    },
    {
        'id': 'a54',
        'title': '54. Dismissable Widget',
        'name': '54. Dismissable Widget.mp4',
        'duration': '6:54',
    },
    {
        'id': 'a55',
        'title': '55. Wrap Up & User Experience Ehnancement',
        'name': '55. Wrap Up & User Experience Ehnancement.mp4',
        'duration': '3:48',
    },
    {
        'id': 'a56',
        'title': '56. What Well Build (Bucket List App)',
        'name': '56. What Well Build (Bucket List App).mp4',
        'duration': '1:06',
    },
    {
        'id': 'a57',
        'title': '57. Clone Bucket List App from Github on your device',
        'name': '57. Clone Bucket List App from Github on your device.mp4',
        'duration': '1:54',
    },
    {
        'id': 'a59',
        'title': '59. Setup dummy API on Firebase',
        'name': '59. Setup dummy API on Firebase.mp4',
        'duration': '3:23',
    },
    {
        'id': 'a60',
        'title': '60. Postman & JSON',
        'name': '60. Postman & JSON.mp4',
        'duration': '1:51',
    },
    {
        'id': 'a61',
        'title': '61. Maps in Dart',
        'name': '61. Maps in Dart.mp4',
        'duration': '4:26',
    },
    {
        'id': 'a62',
        'title': '62. Sending JSON data to server',
        'name': '62. Sending JSON data to server.mp4',
        'duration': '4:43',
    },
    {
        'id': 'a63',
        'title': '63. Start Bucket List App with DIO for HTTP Requests',
        'name': '63. Start Bucket List App with DIO for HTTP Requests.mp4',
        'duration': '4:56',
    },
    {
        'id': 'a64',
        'title': '64. Asynchronous vs Synchronous Programming, Async, Await & Future in DART',
        'name': '64. Asynchronous vs Synchronous Programming, Async, Await & Future in DART.mp4',
        'duration': '5:54',
    },
    {
        'id': 'a65',
        'title': '65. Making first HTTP request from app',
        'name': '65. Making first HTTP request from app.mp4',
        'duration': '4:08',
    },
    {
        'id': 'a66',
        'title': '66. Error handling in DART using TRY CATCH',
        'name': '66. Error handling in DART using TRY CATCH.mp4',
        'duration': '5:11',
    },
    {
        'id': 'a67',
        'title': '67. Using API data on App',
        'name': '67. Using API data on App.mp4',
        'duration': '6:24',
    },
    {
        'id': 'a68',
        'title': '68. Loading state Indicator & RefreshIndicator',
        'name': '68. Loading state Indicator & RefreshIndicator.mp4',
        'duration': '6:52',
    },
    {
        'id': 'a69',
        'title': '69. Multi Screen Navigation (Named Routes & Material Page Route)',
        'name': '69. Multi Screen Navigation (Named Routes & Material Page Route).mp4',
        'duration': '7:10',
    },
    {
        'id': 'a70',
        'title': '70. Passing data between screens',
        'name': '70. Passing data between screens.mp4',
        'duration': '6:28',
    },
    {
        'id': 'a71',
        'title': '71. Refactoring Widgets on same file Working with Mini Custom Widgets',
        'name': '71. Refactoring Widgets on same file Working with Mini Custom Widgets.mp4',
        'duration': '9:24',
    },
    {
        'id': 'a72',
        'title': '72. PopMenuButton, List Check & More',
        'name': '72. PopMenuButton, List Check & More.mp4',
        'duration': '8:33',
    },
    {
        'id': 'a73',
        'title': '73. Navigation back detection, Delete Request & More',
        'name': '73. Navigation back detection, Delete Request & More.mp4',
        'duration': '11:32',
    },
    {
        'id': 'a74',
        'title': '74. Updating data - Patch',
        'name': '74. Updating data - Patch.mp4',
        'duration': '8:04',
    },
    {
        'id': 'a75',
        'title': '75. Understanding Data Filter from List using .where()',
        'name': '75. Understanding Data Filter from List using .where().mp4',
        'duration': '9:07',
    },
    {
        'id': 'a76',
        'title': '76. Filter Bucket List Data',
        'name': '76. Filter Bucket List Data.mp4',
        'duration': '6:51',
    },
    {
        'id': 'a77',
        'title': '77. Add data to API',
        'name': '77. Add data to API.mp4',
        'duration': '11:31',
    },
    {
        'id': 'a78',
        'title': '78. Forms in Flutter & Form Validation',
        'name': '78. Forms in Flutter & Form Validation.mp4',
        'duration': '9:25',
    },
    {
        'id': 'a79',
        'title': '79. Refactor & Wrapup Bucket List',
        'name': '79. Refactor & Wrapup Bucket List.mp4',
        'duration': '3:08',
    },
    {
        'id': 'a80',
        'title': '80. What Well Build (Fun Facts Intro & Source code)',
        'name': '80. What Well Build (Fun Facts Intro & Source code).mp4',
        'duration': '1:00',
    },
    {
        'id': 'a81',
        'title': '81. Setup for Fun Facts App',
        'name': '81. Setup for Fun Facts App.mp4',
        'duration': '3:29',
    },
    {
        'id': 'a82',
        'title': '82. Using PageView Builder',
        'name': '82. Using PageView Builder.mp4',
        'duration': '4:40',
    },
    {
        'id': 'a83',
        'title': '83. Dummy read only API through GitHub',
        'name': '83. Dummy read only API through GitHub.mp4',
        'duration': '7:39',
    },
    {
        'id': 'a84',
        'title': '84. Why Global State Management  The Problem',
        'name': '84. Why Global State Management  The Problem.mp4',
        'duration': '4:37',
    },{
        'id': 'a85',
        'title': '85. Using Provider for Global State Management',
        'name': '85. Using Provider for Global State Management.mp4',
        'duration': '6:57',
    },
    {
        'id': 'a86',
        'title': '86. Updating Global State',
        'name': '86. Updating Global State.mp4',
        'duration': '5:33',
    },
    {
        'id': 'a87',
        'title': '87. Preserving and loading data on app start + App Wrapup',
        'name': '87. Preserving and loading data on app start + App Wrapup.mp4',
        'duration': '3:55',
    },
    {
        'id': 'a88',
        'title': '88. What Well Build (GlobalChat App)',
        'name': '88. What Well Build (GlobalChat App).mp4',
        'duration': '1:00',
    },
    {
        'id': 'a90',
        'title': '90. Setup GlobalChat App & Firebase Project',
        'name': '90. Setup GlobalChat App & Firebase Project.mp4',
        'duration': '8:06',
    },
    {
        'id': 'a91',
        'title': '91. Initialize Firebase',
        'name': '91. Initialize Firebase.mp4',
        'duration': '5:30',
    },
    {
        'id': 'a92',
        'title': '92. Basic setup (Fonts, Icons, App Name)',
        'name': '92. Basic setup (Fonts, Icons, App Name).mp4',
        'duration': '5:41',
    },
    {
        'id': 'a93',
        'title': '93. Splash Screen',
        'name': '93. Splash Screen.mp4',
        'duration': '6:18',
    },
    {
        'id': 'a94',
        'title': '94. Enabling firebase authentication & Using forms',
        'name': '94. Enabling firebase authentication & Using forms.mp4',
        'duration': '7:57',
    },{
        'id': 'a95',
        'title': '95. Firebase Authentication Creating user account',
        'name': '95. Firebase Authentication Creating user account.mp4',
        'duration': '12:10',
    },
    {
        'id': 'a96',
        'title': '96. Using controllers for separating Logic from UI',
        'name': '96. Using controllers for separating Logic from UI.mp4',
        'duration': '3:26',
    },
    {
        'id': 'a97',
        'title': '97. Firebase Authentication User Login & Splash Forwarding',
        'name': '97. Firebase Authentication User Login & Splash Forwarding.mp4',
        'duration': '6:03',
    },
    {
        'id': 'a98',
        'title': '98. GlobalChat Basic Decoration',
        'name': '98. GlobalChat Basic Decoration.mp4',
        'duration': '4:41',
    },
    {
        'id': 'a99',
        'title': '99. Enabling firestore database & using it on Flutter',
        'name': '99. Enabling firestore database & using it on Flutter.mp4',
        'duration': '3:14',
    },
    {
        'id': 'a100',
        'title': '100. Creating user account on Database (Adding Data)',
        'name': '100. Creating user account on Database (Adding Data).mp4',
        'duration': '7:59',
    },
    {
        'id': 'a101',
        'title': '101. Setting up chatrooms & Getting data from Database',
        'name': '101. Setting up chatrooms & Getting data from Database.mp4',
        'duration': '8:14',
    },
    {
        'id': 'a102',
        'title': '102. Saving user data on global state (User Provider)',
        'name': '102. Saving user data on global state (User Provider).mp4',
        'duration': '9:16',
    },
    {
        'id': 'a103',
        'title': '103. Create & List Chatrooms',
        'name': '103. Create & List Chatrooms.mp4',
        'duration': '10:03',
    },
    {
        'id': 'a104',
        'title': '104. Custom Drawer and Profile Improvements',
        'name': '104. Custom Drawer and Profile Improvements.mp4',
        'duration': '9:20',
    },
    {
        'id': 'a105',
        'title': '105. Update data on database (Edit profile)',
        'name': '105. Update data on database (Edit profile).mp4',
        'duration': '11:11',
    },
    {
        'id': 'a106',
        'title': '106. Fixing provider issue with Login & Signup',
        'name': '106. Fixing provider issue with Login & Signupr.mp4',
        'duration': '4:46',
    },
    {
        'id': 'a107',
        'title': '107. Chatroom Page & send chat message',
        'name': '107. Chatroom Page & send chat message.mp4',
        'duration': '6:30',
    },
    {
        'id': 'a108',
        'title': '108. Send chat messages into chatroom',
        'name': '108. Send chat messages into chatroom.mp4',
        'duration': '8:16',
    },
    {
        'id': 'a109',
        'title': '109. Retrieve data using StreamBuilder for Realtime Updates',
        'name': '109. Retrieve data using StreamBuilder for Realtime Updates.mp4',
        'duration': '9:20',
    },
    {
        'id': 'a110',
        'title': '110. Database query with conditions & Index creation',
        'name': '110. Database query with conditions & Index creation.mp4',
        'duration': '6:55',
    },
    {
        'id': 'a111',
        'title': '111. Formatting chat messages & Wrapup',
        'name': '111. Formatting chat messages & Wrapup.mp4',
        'duration': '10:02',
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
