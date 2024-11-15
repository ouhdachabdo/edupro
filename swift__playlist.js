

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1 Download Xcode from the App Store',
        'name': '1 Download Xcode from the App Store.mp4',
        'duration': '0:56',
    },
    {
        'id': 'a2',
        'title': '2 Introduction to playground',
        'name': '2 Introduction to playground.mp4',
        'duration': '6:01',
    },
    
    {
        'id': 'a3',
        'title': '3 Constants and variables',
        'name': '3 Constants and variables.mp4',
        'duration': '6:45',
    },

    {
        'id': 'a4',
        'title': '4 Introduction to Data Types',
        'name': '4 Introduction to Data Types.mp4',
        'duration': '3:40',
    },
    {
        'id': 'a5',
        'title': '5 Introduction to String Data Type',
        'name': '5 Introduction to String Data Type.mp4',
        'duration': '8:52',
    },
    {
        'id': 'a6',
        'title': '6 Introduction to Int data Type',
        'name': '6 Introduction to Int data Type.mp4',
        'duration': '3:40',
    },
    {
        'id': 'a7',
        'title': '7 Introduction to Float and Double Type',
        'name': '7 Introduction to Float and Double Type.mp4',
        'duration': '8:13',
    },
    {
        'id': 'a8',
        'title': '8 Introduction to Boolean Data Type',
        'name': '8 Introduction to Boolean Data Type.mp4',
        'duration': '2:29',
    },
    {
        'id': 'a9',
        'title': '9 String interpolation',
        'name': '9 String interpolation.mp4',
        'duration': '4:44',
    },
    {
        'id': 'a10',
        'title': '10 String interpolation continued',
        'name': '10 String interpolation continued.mp4',
        'duration': '1:05',
    },
    {
        'id': 'a11',
        'title': '11 Good naming conventions to follow',
        'name': '11 Good naming conventions to follow.mp4',
        'duration': '6:27',
    },
    {
        'id': 'a12',
        'title': '12 Arithmetic operators',
        'name': '12 Arithmetic operators.mp4',
        'duration': '4:45',
    },
    {
        'id': 'a13',
        'title': '13 Integer division and possible errors',
        'name': '13 Integer division and possible errors.mp4',
        'duration': '4:11',
    },
    {
        'id': 'a14',
        'title': '14 Remainder operator',
        'name': '14 Remainder operator.mp4',
        'duration': '4:51',
    },
    {
        'id': 'a15',
        'title': '15 Compound assignment operators',
        'name': '15 Compound assignment operators.mp4',
        'duration': '3:46',
    },
    {
        'id': 'a16',
        'title': '16 Comparison operator',
        'name': '16 Comparison operator.mp4',
        'duration': '2:20',
    },
    {
        'id': 'a17',
        'title': '17 Comparison operator - checking for equality',
        'name': '17 Comparison operator - checking for equality.mp4',
        'duration': '5:13',
    },
    {
        'id': 'a18',
        'title': '18 NOT operator',
        'name': '18 NOT operator.mp4',
        'duration': '3:34',
    },
    {
        'id': 'a19',
        'title': '19 How to find out the data types of variables',
        'name': '19 How to find out the data types of variables.mp4',
        'duration': '5:50',
    },
    {
        'id': 'a20',
        'title': '20 Type Casting',
        'name': '20 Type Casting.mp4',
        'duration': '3:36',
    },
    {
        'id': 'a21',
        'title': '21 Problem Solution 1 - Swap variables',
        'name': '21 Problem Solution 1 - Swap variables.mp4',
        'duration': '3:18',
    },
    {
        'id': 'a22',
        'title': '22 Problem Solution 2 - Area and perimeter',
        'name': '22 Problem Solution 2 - Area and perimeter.mp4',
        'duration': '4:19',
    },
    {
        'id': 'a23',
        'title': '23 Problem Solution 3 - Calculate Percentage',
        'name': '23 Problem Solution 3 - Calculate Percentage.mp4',
        'duration': '4:23',
    },
    {
        'id': 'a24',
        'title': '24 Problem Solution 4 - Last digits of a number',
        'name': '24 Problem Solution 4 - Last digits of a number.mp4',
        'duration': '3:34',
    },
    {
        'id': 'a25',
        'title': '25 Introduction to If statements',
        'name': '25 Introduction to If statements.mp4',
        'duration': '3:36',
    },
    {
        'id': 'a26',
        'title': '26 Else branch',
        'name': '26 Else branch.mp4',
        'duration': '2:16',
    },
    {
        'id': 'a27',
        'title': '27 Nested if statement',
        'name': '27 Nested if statement.mp4',
        'duration': '6:12',
    },
    {
        'id': 'a28',
        'title': '28 Elseif statements',
        'name': '28 Elseif statements.mp4',
        'duration': '4:10',
    },
    {
        'id': 'a29',
        'title': '29 Problem and Solution Maximum of two numbers',
        'name': '29 Problem and Solution Maximum of two numbers.mp4',
        'duration': '3:28',
    },
    {
        'id': 'a30',
        'title': '30 Problem and Solution Even or odd number',
        'name': '30 Problem and Solution Even or odd number.mp4',
        'duration': '3:28',
    },
    {
        'id': 'a31',
        'title': '31 Problem and Solution Divisibilty calculations',
        'name': '31 Problem and Solution Divisibilty calculations.mp4',
        'duration': '3:01',
    },
    {
        'id': 'a32',
        'title': '32 Logical AND operator',
        'name': '32 Logical AND operator.mp4',
        'duration': '3:29',
    },
    {
        'id': 'a33',
        'title': '33 Logical OR operator',
        'name': '33 Logical OR operator.mp4',
        'duration': '5:43',
    },
    {
        'id': 'a34',
        'title': '34 Problem Solution  Class marks',
        'name': '34 Problem Solution  Class marks.mp4',
        'duration': '6:18',
    },
    {
        'id': 'a35',
        'title': '35 Problem Solution Divisibility revisited',
        'name': '35 Problem Solution Divisibility revisited.mp4',
        'duration': '4:14',
    },
    {
        'id': 'a36',
        'title': '36 Ternary conditional operator',
        'name': '36 Ternary conditional operator.mp4',
        'duration': '4:04',
    },
    {
        'id': 'a37',
        'title': '37 Switch statements',
        'name': '37 Switch statements.mp4',
        'duration': '8:15',
    },
    {
        'id': 'a38',
        'title': '38 Switch case - matching multiple values',
        'name': '38 Switch case - matching multiple values.mp4',
        'duration': '3:38',
    },
    {
        'id': 'a39',
        'title': '39 Switch range matching',
        'name': '39 Switch range matching.mp4',
        'duration': '5:07',
    },
    {
        'id': 'a40',
        'title': '40 Switch break statement',
        'name': '40 Switch break statement.mp4',
        'duration': '3:37',
    },
    {
        'id': 'a41',
        'title': '41 Fallthrough statement',
        'name': '41 Fallthrough statement.mp4',
        'duration': '4:14',
    },
    {
        'id': 'a42',
        'title': '42 Introduction to Swift Array',
        'name': '42 Introduction to Swift Array.mp4',
        'duration': '7:56',
    },
    {
        'id': 'a43',
        'title': '43 Reading values from array',
        'name': '43 Reading values from array.mp4',
        'duration': '4:17',
    },
    {
        'id': 'a44',
        'title': '44 Getting multiple values using closed range',
        'name': '44 Getting multiple values using closed range.mp4',
        'duration': '3:42',
    },
    {
        'id': 'a45',
        'title': '45 Array type and Any type',
        'name': '45 Array type and Any type.mp4',
        'duration': '4:59',
    },
    {
        'id': 'a46',
        'title': '46 Merging two arrays',
        'name': '46 Merging two arrays.mp4',
        'duration': '3:14',
    },
    {
        'id': 'a47',
        'title': '47 Adding values to existing array',
        'name': '47 Adding values to existing array.mp4',
        'duration': '4:14',
    },
    {
        'id': 'a48',
        'title': '48 Removing values from arrays',
        'name': '48 Removing values from arrays.mp4',
        'duration': '2:42',
    },
    {
        'id': 'a49',
        'title': '49 Modifying values in arrays',
        'name': '49 Modifying values in arrays.mp4',
        'duration': '6:30',
    },

    {
        'id': 'a50',
        'title': '50 Mutable and immutable array',
        'name': '50 Mutable and immutable array.mp4',
        'duration': '1:42',
    },
    {
        'id': 'a51',
        'title': '51 Copying value from one array to another - reference and value types',
        'name': '51 Copying value from one array to another - reference and value types.mp4',
        'duration': '6:02',
    },
    {
        'id': 'a52',
        'title': '52 Introduction to Dictionary',
        'name': '52 Introduction to Dictionary.mp4',
        'duration': '7:22',
    },
    {
        'id': 'a53',
        'title': '53 Retrieving values from a dictionary',
        'name': '53 Retrieving values from a dictionary.mp4',
        'duration': '3:35',
    },
    {
        'id': 'a54',
        'title': '54 Adding a new key-value pair to a dictionary',
        'name': '54 Adding a new key-value pair to a dictionary.mp4',
        'duration': '4:00',
    },
    {
        'id': 'a55',
        'title': '55 Updating value in a dictionary',
        'name': '55 Updating value in a dictionary.mp4',
        'duration': '3:06',
    },
    {
        'id': 'a56',
        'title': '56 Removing items from dictionary',
        'name': '56 Removing items from dictionary.mp4',
        'duration': '3:02',
    },
    {
        'id': 'a57',
        'title': '57 Other dictionary methods',
        'name': '57 Other dictionary methods.mp4',
        'duration': '3:11',
    },
    {
        'id': 'a58',
        'title': '58 Introduction to For Loop',
        'name': '58 Introduction to For Loop.mp4',
        'duration': '5:17',
    },
    {
        'id': 'a59',
        'title': '59 Using value of i in a loop and the underscore variable',
        'name': '59 Using value of i in a loop and the underscore variable.mp4',
        'duration': '3:52',
    },
    {
        'id': 'a60',
        'title': '60 Looping through arrays',
        'name': '60 Looping through arrays.mp4',
        'duration': '4:27',
    },
    {
        'id': 'a61',
        'title': '61 Looping over dictionaries',
        'name': '61 Looping over dictionaries.mp4',
        'duration': '3:11',
    },
    {
        'id': 'a62',
        'title': '62 Problem and Solution Maximum value in an array',
        'name': '62 Problem and Solution Maximum value in an array.mp4',
        'duration': '4:19',
    },
    {
        'id': 'a63',
        'title': '63 Problem and Solution Separate numbers into odd and even',
        'name': '63 Problem and Solution Separate numbers into odd and even.mp4',
        'duration': '2:12',
    },

    {
        'id': 'a64',
        'title': '64 Problem and Solution Sum the content of an array',
        'name': '64 Problem and Solution Sum the content of an array.mp4',
        'duration': '3:14',
    },

    {
        'id': 'a65',
        'title': '65 Problem and Solution Reversed array',
        'name': '65 Problem and Solution Reversed array.mp4',
        'duration': '4:32',
    },

    {
        'id': 'a66',
        'title': '66 Inner loops',
        'name': '66 Inner loops.mp4',
        'duration': '4:30',
    },

    {
        'id': 'a67',
        'title': '67 Break statement',
        'name': '67 Break statement.mp4',
        'duration': '3:24',
    },

    {
        'id': 'a68',
        'title': '68 Continue statement',
        'name': '68 Continue statement.mp4',
        'duration': '4:19',
    },

    {
        'id': 'a69',
        'title': '69 Introduction to While Loop',
        'name': '69 Introduction to While Loop.mp4',
        'duration': '7:07',
    },

    {
        'id': 'a70',
        'title': '70 Beware of an infinite loop',
        'name': '70 Beware of an infinite loop.mp4',
        'duration': '3:44',
    },
    {
        'id': 'a71',
        'title': '71 Repeat while loop',
        'name': '71 Repeat while loop.mp4',
        'duration': '3:09',
    },
    {
        'id': 'a72',
        'title': '72 Repeat while loop example',
        'name': '72 Repeat while loop example.mp4',
        'duration': '7:02',
    },
    {
        'id': 'a73',
        'title': '73 Problem and Solution Separate numbers to array - while loop example',
        'name': '73 Problem and Solution Separate numbers to array - while loop example.mp4',
        'duration': '4:15',
    },
    {
        'id': 'a74',
        'title': '74 Introduction to Function',
        'name': '74 Introduction to Function.mp4',
        'duration': '6:14',
    },
    {
        'id': 'a75',
        'title': '75 Function parameters',
        'name': '75 Function parameters.mp4',
        'duration': '7:49',
    },
    {
        'id': 'a76',
        'title': '76 Multiple parameters of a function',
        'name': '76 Multiple parameters of a function.mp4',
        'duration': '1:21',
    },
    {
        'id': 'a77',
        'title': '77 Returning values from functions',
        'name': '77 Returning values from functions.mp4',
        'duration': '7:20',
    },
    {
        'id': 'a78',
        'title': '78 Calling a function from another function',
        'name': '78 Calling a function from another function.mp4',
        'duration': '7:15',
    },
    {
        'id': 'a79',
        'title': '79 Parameter as a let constant',
        'name': '79 Parameter as a let constant.mp4',
        'duration': '2:18',
    },
    {
        'id': 'a80',
        'title': '80 Introduction to Optionals',
        'name': '80 Introduction to Optionals.mp4',
        'duration': '9:56',
    },
    {
        'id': 'a81',
        'title': '81 Introduction to Optionals contd',
        'name': '81 Introduction to Optionals contd.mp4',
        'duration': '8:58',
    },
    {
        'id': 'a82',
        'title': '82 Returning nil from a function',
        'name': '82 Returning nil from a function.mp4',
        'duration': '3:14',
    },
    {
        'id': 'a83',
        'title': '83 How to work with optional values',
        'name': '83 How to work with optional values.mp4',
        'duration': '3:51',
    },
    {
        'id': 'a84',
        'title': '84 Unwrapping optional values',
        'name': '84 Unwrapping optional values.mp4',
        'duration': '8:51',
    },{
        'id': 'a85',
        'title': '85 Force unwrap optional types',
        'name': '85 Force unwrap optional types.mp4',
        'duration': '7:15',
    },
    {
        'id': 'a86',
        'title': '86 Implicitly unwrapped Optionals',
        'name': '86 Implicitly unwrapped Optionals.mp4',
        'duration': '11:30',
    },
    {
        'id': 'a87',
        'title': '87 Nil coalescing operator',
        'name': '87 Nil coalescing operator.mp4',
        'duration': '5:39',
    },
    {
        'id': 'a88',
        'title': '88 Multiple optional binding - unwrapping multiple optionals',
        'name': '88 Multiple optional binding - unwrapping multiple optionals.mp4',
        'duration': '7:55',
    },
    {
        'id': 'a89',
        'title': '89 Optional Chaining',
        'name': '89 Optional Chaining.mp4',
        'duration': '7:39',
    },
    {
        'id': 'a90',
        'title': '90 Variable scopes',
        'name': '90 Variable scopes.mp4',
        'duration': '5:56',
    },
    {
        'id': 'a91',
        'title': '91 Conclusion',
        'name': '91 Conclusion.mp4',
        'duration': '0:45',
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
