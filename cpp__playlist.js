

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1. Writing First C++ Program',
        'name': '1. Writing First C++ Program.mp4',
        'duration': '6.52',
    },
    {
        'id': 'a2',
        'title': '2. Write a program to print welcome message in separate lines.',
        'name': '2. Write a program to print welcome message in separate lines..mp4',
        'duration': '5:23',
    },
    
    {
        'id': 'a3',
        'title': '3. Write a program to the sum of two numbers',
        'name': '3. Write a program to the sum of two numbers.mp4',
        'duration': '4:39',
    },

    {
        'id': 'a4',
        'title': '4. Write a program to swap two numbers',
        'name': '4. Write a program to swap two numbers.mp4',
        'duration': '5:16',
    },
    {
        'id': 'a5',
        'title': '5. Write a program that takes number as input and prints its table',
        'name': '5. Write a program that takes number as input and prints its table.mp4',
        'duration': '5:21',
    },
    {
        'id': 'a6',
        'title': '6. Write a program to print first and last number in four digit numbers',
        'name': '6. Write a program to print first and last number in four digit numbers.mp4',
        'duration': '6:11',
    },
    {
        'id': 'a7',
        'title': '7. Header in C++',
        'name': '7. Header in C++.mp4',
        'duration': '4:59',
    },
    {
        'id': 'a8',
        'title': '8. Namespace in C++',
        'name': '8. Namespace in C++.mp4',
        'duration': '4:47',
    },
    {
        'id': 'a9',
        'title': '9. Function in C++',
        'name': '9. Function in C++.mp4',
        'duration': '5:14',
    },
    {
        'id': 'a10',
        'title': '10. Block and Semicolon',
        'name': '10. Block and Semicolon.mp4',
        'duration': '6:38',
    },
    {
        'id': 'a11',
        'title': '11. Arithmetic Operators',
        'name': '11. Arithmetic Operators.mp4',
        'duration': '5:39',
    },
    {
        'id': 'a12',
        'title': '12. Assignment Operators',
        'name': '12. Assignment Operators.mp4',
        'duration': '7:06',
    },
    {
        'id': 'a13',
        'title': '13. Logical Operator',
        'name': '13. Logical Operator.mp4',
        'duration': '7:24',
    },
    {
        'id': 'a14',
        'title': '14. Comparison Operator',
        'name': '14. Comparison Operator.mp4',
        'duration': '7:13',
    },
    {
        'id': 'a15',
        'title': '15. Overloading Operator',
        'name': '15. Overloading Operator.mp4',
        'duration': '7:48',
    },
    {
        'id': 'a16',
        'title': '16. If Statements',
        'name': '16. If Statements.mp4',
        'duration': '4:38',
    },
    {
        'id': 'a17',
        'title': '17. If Else Statements',
        'name': '17. If Else Statements.mp4',
        'duration': '4:31',
    },
    {
        'id': 'a18',
        'title': '18. Else If Statements',
        'name': '18. Else If Statements.mp4',
        'duration': '6:17',
    },
    {
        'id': 'a19',
        'title': '19. Switch Statements',
        'name': '19. Switch Statements.mp4',
        'duration': '6:56',
    },
    {
        'id': 'a20',
        'title': '20. Nested If Statements',
        'name': '20. Nested If Statements.mp4',
        'duration': '7:26',
    },
    {
        'id': 'a21',
        'title': '21. For Loop',
        'name': '21. For Loop.mp4',
        'duration': '4:33',
    },
    {
        'id': 'a22',
        'title': '22. While Loop',
        'name': '22. While Loop.mp4',
        'duration': '4:38',
    },
    {
        'id': 'a23',
        'title': '23. Do While Loop',
        'name': '23. Do While Loop.mp4',
        'duration': '4:27',
    },
    {
        'id': 'a24',
        'title': '24. Break Statement',
        'name': '24. Break Statement.mp4',
        'duration': '4:43',
    },
    {
        'id': 'a25',
        'title': '25. Continue Statement',
        'name': '25. Continue Statement.mp4',
        'duration': '4:29',
    },
    {
        'id': 'a26',
        'title': '26. Multiple Catch Blocks',
        'name': '26. Multiple Catch Blocks.mp4',
        'duration': '10:27',
    },
    {
        'id': 'a27',
        'title': '27. Stack Unwinding',
        'name': '27. Stack Unwinding.mp4',
        'duration': '6:29',
    },
    {
        'id': 'a28',
        'title': '28. Nested Exceptions',
        'name': '28. Nested Exceptions.mp4',
        'duration': '6:58',
    },
    {
        'id': 'a29',
        'title': '29. Rethrowing Exception',
        'name': '29. Rethrowing Exception.mp4',
        'duration': '8:34',
    },
    {
        'id': 'a30',
        'title': '30. Constructor and Destructor',
        'name': '30. Constructor and Destructor.mp4',
        'duration': '7:38',
    },
    {
        'id': 'a31',
        'title': '31. Declaring Variables',
        'name': '31. Declaring Variables.mp4',
        'duration': '5:22',
    },
    {
        'id': 'a32',
        'title': '32. Declare Multiple Variables',
        'name': '32. Declare Multiple Variables.mp4',
        'duration': '6:07',
    },
    {
        'id': 'a33',
        'title': '33. Identifiers',
        'name': '33. Identifiers.mp4',
        'duration': '6:25',
    },
    {
        'id': 'a34',
        'title': '34. Constants',
        'name': '34. Constants.mp4',
        'duration': '6:04',
    },
    {
        'id': 'a35',
        'title': '35. Numeric Data Types',
        'name': '35. Numeric Data Types.mp4',
        'duration': '7:24',
    },
    {
        'id': 'a36',
        'title': '36. Boolean Data Types',
        'name': '36. Boolean Data Types.mp4',
        'duration': '5:01',
    },
    {
        'id': 'a37',
        'title': '37. Character Data Types',
        'name': '37. Character Data Types.mp4',
        'duration': '5:26',
    },
    {
        'id': 'a38',
        'title': '38. String Data Types',
        'name': '38. String Data Types.mp4',
        'duration': '6:31',
    },
    {
        'id': 'a39',
        'title': '39. String Concatenation',
        'name': '39. String Concatenation.mp4',
        'duration': '6:19',
    },
    {
        'id': 'a40',
        'title': '40. Numbers and Strings',
        'name': '40. Numbers and Strings.mp4',
        'duration': '6:57',
    },
    {
        'id': 'a41',
        'title': '41. String Length',
        'name': '41. String Length.mp4',
        'duration': '5:12',
    },
    {
        'id': 'a42',
        'title': '42. Access Strings',
        'name': '42. Access Strings.mp4',
        'duration': '5:35',
    },
    {
        'id': 'a43',
        'title': '43. Special Characters',
        'name': '43. Special Characters.mp4',
        'duration': '6:36',
    },
    {
        'id': 'a44',
        'title': '44. User Input Strings',
        'name': '44. User Input Strings.mp4',
        'duration': '5:24',
    },
    {
        'id': 'a45',
        'title': '45. String Namespace',
        'name': '45. String Namespace.mp4',
        'duration': '6:19',
    },
    {
        'id': 'a46',
        'title': '46. Arrays',
        'name': '46. Arrays.mp4',
        'duration': '4:55',
    },
    {
        'id': 'a47',
        'title': '47. Multi-Dimensional Arrays',
        'name': '47. Multi-Dimensional Arrays.mp4',
        'duration': '6:24',
    },
    {
        'id': 'a48',
        'title': '48. Structures',
        'name': '48. Structures.mp4',
        'duration': '6:39',
    },
    {
        'id': 'a49',
        'title': '49. Creating & Modify Pointers',
        'name': '49. Creating & Modify Pointers.mp4',
        'duration': '7:28',
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
