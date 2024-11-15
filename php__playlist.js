

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1. Introduction',
        'name': '1. Introduction.mp4',
        'duration': '1.42',
    },
    {
        'id': 'a2',
        'title': '2. Introduction to PHP and how to build your first web application',
        'name': '2. Introduction to PHP and how to build your first web application.mp4',
        'duration': '8:19',
    },
    {
        'id': 'a3',
        'title': '3. Variables',
        'name': '3. Variables.mp4',
        'duration': '4:56',
    },
    {
        'id': 'a4',
        'title': '4. Data Types',
        'name': '4. Data Types.mp4',
        'duration': '5:45',
    },
    {
        'id': 'a5',
        'title': '5. Operators',
        'name': '5. Operators.mp4',
        'duration': '6:26',
    },
    {
        'id': 'a6',
        'title': '6. Arrays',
        'name': '6. Arrays.mp4',
        'duration': '9:57',
    },
    {
        'id': 'a7',
        'title': '7. Conditionals',
        'name': '7. Conditionals.mp4',
        'duration': '9:03',
    },
    {
        'id': 'a8',
        'title': '8. Loops',
        'name': '8. Loops.mp4',
        'duration': '10:17',
    },
    {
        'id': 'a9',
        'title': '9. PHP 8 Match',
        'name': '9. PHP 8 Match.mp4',
        'duration': '4:04',
    },
    {
        'id': 'a10',
        'title': '10. Project Find Job Candidates',
        'name': '10. Project Find Job Candidates.mp4',
        'duration': '7:12',
    },
    {
        'id': 'a11',
        'title': '11. Break and Continue',
        'name': '11. Break and Continue.mp4',
        'duration': '7:11',
    },
    {
        'id': 'a12',
        'title': '12. Add PHP Loop and Conditional inside HTML',
        'name': '12. Add PHP Loop and Conditional inside HTML.mp4',
        'duration': '5:46',
    },
    {
        'id': 'a13',
        'title': '13. Date and Time',
        'name': '13. Date and Time.mp4',
        'duration': '7:05',
    },
    {
        'id': 'a14',
        'title': '14. Project Age in Days Calculator',
        'name': '14. Project Age in Days Calculator.mp4',
        'duration': '4:53',
    },
    {
        'id': 'a15',
        'title': '15. Working with Files',
        'name': '15. Working with Files.mp4',
        'duration': '10:20',
    },
    {
        'id': 'a16',
        'title': '16. CSV',
        'name': '16. CSV.mp4',
        'duration': '7:27',
    },
    {
        'id': 'a17',
        'title': '17. XML and JSON',
        'name': '17. XML and JSON.mp4',
        'duration': '19:19',
    },
    {
        'id': 'a18',
        'title': '18. Project Parse Data and Show Information',
        'name': '18. Project Parse Data and Show Information.mp4',
        'duration': '5:35',
    },
    {
        'id': 'a19',
        'title': '19. Include and Require',
        'name': '19. Include and Require.mp4',
        'duration': '7:07',
    },
    {
        'id': 'a20',
        'title': '20. Project Static website to PHP',
        'name': '20. Project Static website to PHP.mp4',
        'duration': '19:17',
    },
    {
        'id': 'a21',
        'title': '21. Functions',
        'name': '21. Functions.mp4',
        'duration': '14:00',
    },
    {
        'id': 'a22',
        'title': '22. Project Distance Calculator',
        'name': '22. Project Distance Calculator.mp4',
        'duration': '10:43',
    },
    {
        'id': 'a23',
        'title': '23. Isset and Empty',
        'name': '23. Isset and Empty.mp4',
        'duration': '7:38',
    },
    {
        'id': 'a24',
        'title': '24. Form',
        'name': '24. Form.mp4',
        'duration': '13:20',
    },
    {
        'id': 'a25',
        'title': '25. Project Contact Form',
        'name': '25. Project Contact Form.mp4',
        'duration': '20:44',
    },
    {
        'id': 'a26',
        'title': '26. Cookies',
        'name': '26. Cookies.mp4',
        'duration': '11:27',
    },
    {
        'id': 'a27',
        'title': '27. Sessions',
        'name': '27. Sessions.mp4',
        'duration': '6:34',
    },
    {
        'id': 'a28',
        'title': '28. Array Functions',
        'name': '28. Array Functions.mp4',
        'duration': '56:26',
    },
    {
        'id': 'a29',
        'title': '29. String Functions',
        'name': '29. String Functions.mp4',
        'duration': '15:49',
    },
    {
        'id': 'a30',
        'title': '30. PHP 8 New String Functions',
        'name': '30. PHP 8 New String Functions.mp4',
        'duration': '1:35',
    },
    {
        'id': 'a31',
        'title': '31. Class',
        'name': '31. Class.mp4',
        'duration': '7:25',
    },
    {
        'id': 'a32',
        'title': '32. Inheritance',
        'name': '32. Inheritance.mp4',
        'duration': '8:56',
    },
    {
        'id': 'a33',
        'title': '33. Namespace',
        'name': '33. Namespace.mp4',
        'duration': '6:04',
    },
    {
        'id': 'a34',
        'title': '34. Static',
        'name': '34. Static.mp4',
        'duration': '4:24',
    },
    {
        'id': 'a35',
        'title': '35. Method Chaining',
        'name': '35. Method Chaining.mp4',
        'duration': '3:58',
    },
    {
        'id': 'a36',
        'title': '36. Interface',
        'name': '36. Interface.mp4',
        'duration': '7:44',
    },
    {
        'id': 'a37',
        'title': '37. Constant',
        'name': '37. Constant.mp4',
        'duration': '2:49',
    },
    {
        'id': 'a38',
        'title': '38. Abstract Class',
        'name': '38. Abstract Class.mp4',
        'duration': '5:50',
    },
    {
        'id': 'a39',
        'title': '39. Trait',
        'name': '39. Trait.mp4',
        'duration': '3:29',
    },
    {
        'id': 'a40',
        'title': '40. PHP 8 Null Safe Operator',
        'name': '40. PHP 8 Null Safe Operator.mp4',
        'duration': '3:13',
    },
    {
        'id': 'a41',
        'title': '41. PHP 8 Constructor Property Promotion',
        'name': '41. PHP 8 Constructor Property Promotion.mp4',
        'duration': '3:47',
    },
    {
        'id': 'a42',
        'title': '42. Regular Expression',
        'name': '42. Regular Expression.mp4',
        'duration': '6:29',
    },
    {
        'id': 'a43',
        'title': '43. Project Build Router',
        'name': '43. Project Build Router.mp4',
        'duration': '21:12',
    },
    {
        'id': 'a44',
        'title': '44. Validating and Sanitizing',
        'name': '44. Validating and Sanitizing.mp4',
        'duration': '11:45',
    },
    {
        'id': 'a45',
        'title': '45. Database',
        'name': '45. Database.mp4',
        'duration': '19:34',
    },
    {
        'id': 'a46',
        'title': '46. Run System Commands',
        'name': '46. Run System Commands.mp4',
        'duration': '3:08',
    },
    {
        'id': 'a47',
        'title': '47. run python',
        'name': '47. run python.mp4',
        'duration': '4:46',
    },
    {
        'id': 'a48',
        'title': '48. Curl',
        'name': '48. Curl.mp4',
        'duration': '4:24',
    },
    {
        'id': 'a49',
        'title': '49. Project Build a web crawler',
        'name': '49. Project Build a web crawler.mp4',
        'duration': '17:22',
    },
    {
        'id': 'a50',
        'title': '50. Composer and Dependency management',
        'name': '50. Composer and Dependency management.mp4',
        'duration': '13:55',
    },
    {
        'id': 'a51',
        'title': '51. Project Create a package and publish on packagist',
        'name': '51. Project Create a package and publish on packagist.mp4',
        'duration': '25:05',
    },
    {
        'id': 'a52',
        'title': '52. Sending Emails',
        'name': '52. Sending Emails.mp4',
        'duration': '11:53',
    },
    {
        'id': 'a53',
        'title': '53. Testing PHP',
        'name': '53. Testing PHP.mp4',
        'duration': '13:59',
    },
    {
        'id': 'a54',
        'title': '54. Project write test for a code',
        'name': '54. Project write test for a coder.mp4',
        'duration': '13:13',
    },
    {
        'id': 'a55',
        'title': '55. Password hashing and Authentication',
        'name': '55. Password hashing and Authentication.mp4',
        'duration': '5:46',
    },
    {
        'id': 'a56',
        'title': '56. Advanced topics in Functions (splat operator, &, named variables)',
        'name': '56. Advanced topics in Functions (splat operator, &, named variables).mp4',
        'duration': '16:56',
    },
    {
        'id': 'a57',
        'title': '57. PHP 8 Named Arguments',
        'name': '57. PHP 8 Named Arguments.mp4',
        'duration': '3:56',
    },
    {
        'id': 'a58',
        'title': '58. PHP 8 Union Types',
        'name': '58. PHP 8 Union Types.mp4',
        'duration': '5:45',
    },
    {
        'id': 'a59',
        'title': '59. Final Project build a MVC',
        'name': '59. Final Project build a MVC.mp4',
        'duration': '1:05:32',
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
