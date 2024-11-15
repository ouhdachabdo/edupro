

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1 Skills Required',
        'name': '1 Skills Required.mp4',
        'duration': '0:55',
    },
    {
        'id': 'a2',
        'title': '2 What is React',
        'name': '2 What is React.mp4',
        'duration': '4:42',
    },
    
    {
        'id': 'a3',
        'title': '3 Project Overview',
        'name': '3 Project Overview.mp4',
        'duration': '0:58',
    },

    {
        'id': 'a4',
        'title': '4 Hello React',
        'name': '4 Hello React.mp4',
        'duration': '6:23',
    },
    {
        'id': 'a5',
        'title': '5 Tools Needed',
        'name': '5 Tools Needed.mp4',
        'duration': '1:02',
    },
    {
        'id': 'a6',
        'title': '6 Code Pen',
        'name': '6 Code Pen.mp4',
        'duration': '4:40',
    },
    {
        'id': 'a7',
        'title': '7 Intro to JSX',
        'name': '7 Intro to JSX.mp4',
        'duration': '4:05',
    },
    {
        'id': 'a8',
        'title': '8 Functional Components in React',
        'name': '8 Functional Components in React.mp4',
        'duration': '5:31',
    },
    {
        'id': 'a9',
        'title': '9 Why Components',
        'name': '9 Why Components.mp4',
        'duration': '3:02',
    },
    {
        'id': 'a10',
        'title': '10 Intro to Props in React',
        'name': '10 Intro to Props in React.mp4',
        'duration': '3:51',
    },
    {
        'id': 'a11',
        'title': '11 React Components, Props and Callbacks',
        'name': '11 React Components, Props and Callbacks.mp4',
        'duration': '4:16',
    },
    {
        'id': 'a12',
        'title': '12 Building the calculator visuals',
        'name': '12 Building the calculator visuals.mp4',
        'duration': '11:01',
    },
    {
        'id': 'a13',
        'title': '13 OnClick Events in React',
        'name': '13 OnClick Events in React.mp4',
        'duration': '5:46',
    },
    {
        'id': 'a14',
        'title': '14 Passing Parameters in Callback Functions',
        'name': '14 Passing Parameters in Callback Functions.mp4',
        'duration': '4:28',
    },
    {
        'id': 'a15',
        'title': '15 Using React State Hook',
        'name': '15 Using React State Hook.mp4',
        'duration': '4:22',
    },
    {
        'id': 'a16',
        'title': '16 Implementing the calculator - Display',
        'name': '16 Implementing the calculator - Display.mp4',
        'duration': '7:27',
    },
    {
        'id': 'a17',
        'title': '17 Implementing the calculator - Operators',
        'name': '17 Implementing the calculator - Operators.mp4',
        'duration': '10:11',
    },
    {
        'id': 'a18',
        'title': '18 Debugging in React',
        'name': '18 Debugging in React.mp4',
        'duration': '5:09',
    },
    {
        'id': 'a19',
        'title': '19 Project Summary',
        'name': '19 Project Summary.mp4',
        'duration': '1:49',
    },
    {
        'id': 'a20',
        'title': '20 Project Overview',
        'name': '20 Project Overview.mp4',
        'duration': '1:26',
    },
    {
        'id': 'a21',
        'title': '21 Tools Needed',
        'name': '21 Tools Needed.mp4',
        'duration': '0:53',
    },
    {
        'id': 'a22',
        'title': '22 Creating the Game Board',
        'name': '22 Creating the Game Board.mp4',
        'duration': '11:48',
    },
    {
        'id': 'a23',
        'title': '23 Game Circle - OnClickEvent',
        'name': '23 Game Circle - OnClickEvent.mp4',
        'duration': '5:33',
    },
    {
        'id': 'a24',
        'title': '24 Passing Props - Destructing - React Children',
        'name': '24 Passing Props - Destructing - React Children.mp4',
        'duration': '6:57',
    },
    {
        'id': 'a25',
        'title': '25 Passing Arguments to Click Events',
        'name': '25 Passing Arguments to Click Events.mp4',
        'duration': '9:18',
    },
    {
        'id': 'a26',
        'title': '26 Inline Styling',
        'name': '26 Inline Styling.mp4',
        'duration': '5:39',
    },
    {
        'id': 'a27',
        'title': '27 Square to Circle Component',
        'name': '27 Square to Circle Component.mp4',
        'duration': '13:11',
    },
    {
        'id': 'a28',
        'title': '28 Global Styling',
        'name': '28 Global Styling.mp4',
        'duration': '6:36',
    },
    {
        'id': 'a29',
        'title': '29 Dynamic Styling',
        'name': '29 Dynamic Styling.mp4',
        'duration': '3:52',
    },
    {
        'id': 'a30',
        'title': '30 Dynamic Classes',
        'name': '30 Dynamic Classes.mp4',
        'duration': '3:40',
    },
    {
        'id': 'a31',
        'title': '31 Handling Callbacks',
        'name': '31 Handling Callbacks.mp4',
        'duration': '5:52',
    },
    {
        'id': 'a32',
        'title': '32 Using React State Hook (again)',
        'name': '32 Using React State Hook (again).mp4',
        'duration': '14:24',
    },
    {
        'id': 'a33',
        'title': '33 Updating the Player Circle',
        'name': '33 Updating the Player Circle.mp4',
        'duration': '17:05',
    },
    {
        'id': 'a34',
        'title': '34 Initializing the Game Board',
        'name': '34 Initializing the Game Board.mp4',
        'duration': '8:12',
    },
    {
        'id': 'a35',
        'title': '35 React Key Property',
        'name': '35 React Key Property.mp4',
        'duration': '2:04',
    },
    {
        'id': 'a36',
        'title': '36 Styling the Game Board - Header and Footer',
        'name': '36 Styling the Game Board - Header and Footer.mp4',
        'duration': '11:09',
    },
    {
        'id': 'a37',
        'title': '37 Calculating the Winner',
        'name': '37 Calculating the Winner.mp4',
        'duration': '13:30',
    },
    {
        'id': 'a38',
        'title': '38 Displaying the Winner',
        'name': '38 Displaying the Winner.mp4',
        'duration': '14:33',
    },
    {
        'id': 'a39',
        'title': '39 Determining a Draw Condition',
        'name': '39 Determining a Draw Condition.mp4',
        'duration': '5:43',
    },
    {
        'id': 'a40',
        'title': '40 React Lifecycle Events',
        'name': '40 React Lifecycle Events.mp4',
        'duration': '3:16',
    },
    {
        'id': 'a41',
        'title': '41 Initializing the Game',
        'name': '41 Initializing the Game.mp4',
        'duration': '6:15',
    },
    {
        'id': 'a42',
        'title': '42 Suggesting a Move - Implementing a Computer Player',
        'name': '42 Suggesting a Move - Implementing a Computer Player.mp4',
        'duration': '11:51',
    },
    {
        'id': 'a43',
        'title': '43 Smart Computer Player (Basic AI)',
        'name': '43 Smart Computer Player (Basic AI).mp4',
        'duration': '19:00',
    },
    {
        'id': 'a44',
        'title': '44 CSS Variablesks',
        'name': '44 CSS Variables.mp4',
        'duration': '7:06',
    },
    {
        'id': 'a45',
        'title': '45 Conditional Rendering',
        'name': '45 Conditional Rendering.mp4',
        'duration': '8:15',
    },
    {
        'id': 'a46',
        'title': '46 Deploy to Netlify',
        'name': '46 Deploy to Netlify.mp4',
        'duration': '6:00',
    },
    {
        'id': 'a47',
        'title': '47 Deploy to Surge',
        'name': '47 Deploy to Surge.mp4',
        'duration': '2:39',
    },
    {
        'id': 'a48',
        'title': '48 Project Summary',
        'name': '48 Project Summary.mp4',
        'duration': '2:34',
    },
    {
        'id': 'a49',
        'title': '49 Prroject Overview',
        'name': '49 Prroject Overview.mp4',
        'duration': '1:53',
    },

    {
        'id': 'a50',
        'title': '50 Scaffolding the Project',
        'name': '50 Scaffolding the Project.mp4',
        'duration': '3:57',
    },
    {
        'id': 'a51',
        'title': '51 Intro to JSON Server',
        'name': '51 Intro to JSON Server.mp4',
        'duration': '4:00',
    },
    {
        'id': 'a52',
        'title': '52 Fetch API',
        'name': '52 Fetch API.mp4',
        'duration': '10:33',
    },
    {
        'id': 'a53',
        'title': '53 Styling the Store',
        'name': '53 Styling the Store.mp4',
        'duration': '4:07',
    },
    {
        'id': 'a54',
        'title': '54 Rendering the Categories',
        'name': '54 Rendering the Categories.mp4',
        'duration': '10:48',
    },
    {
        'id': 'a55',
        'title': '55 Binding the Products',
        'name': '55 Binding the Products.mp4',
        'duration': '8:04',
    },
    {
        'id': 'a56',
        'title': '56 Refactor the Fetch API call',
        'name': '56 Refactor the Fetch API call.mp4',
        'duration': '8:49',
    },
    {
        'id': 'a57',
        'title': '57 Dealing with errors in Fetch API',
        'name': '57 Dealing with errors in Fetch API.mp4',
        'duration': '8:25',
    },
    {
        'id': 'a58',
        'title': '58 Tidy the Fetch API call',
        'name': '58 Tidy the Fetch API call.mp4',
        'duration': '2:21',
    },
    {
        'id': 'a59',
        'title': '59 Styling the Product List',
        'name': '59 Styling the Product List.mp4',
        'duration': '13:00',
    },
    {
        'id': 'a60',
        'title': '60 Installing React Router',
        'name': '60 Installing React Router.mp4',
        'duration': '6:06',
    },
    {
        'id': 'a61',
        'title': '61 Fixing the Key Warning',
        'name': '61 Fixing the Key Warning.mp4',
        'duration': '3:56',
    },
    {
        'id': 'a62',
        'title': '62 React Router - Detail Page',
        'name': '62 React Router - Detail Page.mp4',
        'duration': '12:24',
    },
    {
        'id': 'a63',
        'title': '63 Fetch API - Get Product By Id',
        'name': '63 Fetch API - Get Product By Id.mp4',
        'duration': '8:55',
    },

    {
        'id': 'a64',
        'title': '64 Product Description',
        'name': '64 Product Description.mp4',
        'duration': '5:25',
    },

    {
        'id': 'a65',
        'title': '65 Intro to Styled Components',
        'name': '65 Intro to Styled Components.mp4',
        'duration': '13:00',
    },

    {
        'id': 'a66',
        'title': '66 Styled Components - Product Description',
        'name': '66 Styled Components - Product Description.mp4',
        'duration': '3:07',
    },

    {
        'id': 'a67',
        'title': '67 Dangerously Set HTML (yeah really)',
        'name': '67 Dangerously Set HTML (yeah really).mp4',
        'duration': '4:07',
    },

    {
        'id': 'a68',
        'title': '68 Refactor the Categories',
        'name': '68 Refactor the Categories.mp4',
        'duration': '8:23',
    },

    {
        'id': 'a69',
        'title': '69 Refactor the Layout',
        'name': '69 Refactor the Layout.mp4',
        'duration': '5:25',
    },

    {
        'id': 'a70',
        'title': '70 Refactor the Home Page',
        'name': '70 Refactor the Home Page.mp4',
        'duration': '5:50',
    },
    {
        'id': 'a71',
        'title': '71 Intro to Context in React',
        'name': '71 Intro to Context in React.mp4',
        'duration': '8:53',
    },
    {
        'id': 'a72',
        'title': '72 UseContext Hook and UseReducer Hook in React',
        'name': '72 UseContext Hook and UseReducer Hook in React.mp4',
        'duration': '17:59',
    },
    {
        'id': 'a73',
        'title': '73 Basket Layout',
        'name': '73 Basket Layout.mp4',
        'duration': '11:11',
    },
    {
        'id': 'a74',
        'title': '74 Implementing the Basket',
        'name': '74 Implementing the Basket.mp4',
        'duration': '6:22',
    },
    {
        'id': 'a75',
        'title': '75 Implementing Basket Icons',
        'name': '75 Implementing Basket Icons.mp4',
        'duration': '4:36',
    },
    {
        'id': 'a76',
        'title': '76 Implementing Basket Total',
        'name': '76 Implementing Basket Total.mp4',
        'duration': '7:50',
    },
    {
        'id': 'a77',
        'title': '77 Finishing the Checkout',
        'name': '77 Finishing the Checkout.mp4',
        'duration': '1:06',
    },
    {
        'id': 'a78',
        'title': '78 Checkout - Fixing the State',
        'name': '78 Checkout - Fixing the State.mp4',
        'duration': '12:31',
    },
    {
        'id': 'a79',
        'title': '79 Implementing the Order Confirmation',
        'name': '79 Implementing the Order Confirmation.mp4',
        'duration': '6:43',
    },
    {
        'id': 'a80',
        'title': '80 Intro to Local Storage',
        'name': '80 Intro to Local Storage.mp4',
        'duration': '13:07',
    },
    {
        'id': 'a81',
        'title': '81 Implementing Search Results',
        'name': '81 Implementing Search Results.mp4',
        'duration': '14:23',
    },
    {
        'id': 'a82',
        'title': '82 Better Searching with Debouncing',
        'name': '82 Better Searching with Debouncing.mp4',
        'duration': '7:36',
    },
    {
        'id': 'a83',
        'title': '83 Validating Forms in React - Part 1',
        'name': '83 Validating Forms in React - Part 1.mp4',
        'duration': '8:47',
    },
    {
        'id': 'a84',
        'title': '84 Validating Forms in React - Part 2',
        'name': '84 Validating Forms in React - Part 2mp4',
        'duration': '9:15',
    },{
        'id': 'a85',
        'title': '85 Validating Forms in React - Part 3',
        'name': '85 Validating Forms in React - Part 3.mp4',
        'duration': '8:11',
    },
    {
        'id': 'a86',
        'title': '86 Validating Forms in React - Part 4',
        'name': '86 Validating Forms in React - Part 4.mp4',
        'duration': '7:55',
    },
    {
        'id': 'a87',
        'title': '87 Project Summary',
        'name': '87 Project Summary.mp4',
        'duration': '2:45',
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
