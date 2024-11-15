

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1. Introduction Tutorial 1-Installing Anaconda',
        'name': '1. Introduction Tutorial 1-Installing Anaconda.mp4',
        'duration': '3.43',
    },
    {
        'id': 'a2',
        'title': '2. Tutorial 2-Python Overview(Demonstration)',
        'name': '2. Tutorial 2-Python Overview(Demonstration).mp4',
        'duration': '13:46',
    },
    
    {
        'id': 'a3',
        'title': '3. Tutorial 3-Python Variables And Constants',
        'name': '3. Tutorial 3-Python Variables And Constants.mp4',
        'duration': '3:23',
    },

    {
        'id': 'a4',
        'title': '4. Tutorial 4-Python Class And Objects',
        'name': '4. Tutorial 4-Python Class And Objects.mp4',
        'duration': '4:22',
    },
    {
        'id': 'a5',
        'title': '5. Tutorial 5-Python Array Implementation',
        'name': '5. Tutorial 5-Python Array Implementation.mp4',
        'duration': '8:50',
    },
    {
        'id': 'a6',
        'title': '6. Tutorial 6-Python Keywords And Identifiers',
        'name': '6. Tutorial 6-Python Keywords And Identifiers.mp4',
        'duration': '21:38',
    },
    {
        'id': 'a7',
        'title': '7. Tutorial 7-Python Tuples',
        'name': '7. Tutorial 7-Python Tuples.mp4',
        'duration': '12:58',
    },
    {
        'id': 'a8',
        'title': '8. Tutorial 8-Python sets',
        'name': '8. Tutorial 8-Python sets.mp4',
        'duration': '13:03',
    },
    {
        'id': 'a9',
        'title': '9. Tutorial 9-Python Different Modules',
        'name': '9. Tutorial 9-Python Different Modules.mp4',
        'duration': '1:32',
    },
    {
        'id': 'a10',
        'title': '10. Tutorial 10-Python Directory And File management',
        'name': '10. Tutorial 10-Python Directory And File management.mp4',
        'duration': '4:32',
    },
    {
        'id': 'a11',
        'title': '11. Tutorial 11-Python Dictionary',
        'name': '11. Tutorial 11-Python Dictionary.mp4',
        'duration': '7:33',
    },
    {
        'id': 'a12',
        'title': '12. Tutorial 12-Python Strings',
        'name': '12. Tutorial 12-Python Strings.mp4',
        'duration': '14:25',
    },
    {
        'id': 'a13',
        'title': '13. Tutorial 13-Python Data Type Conversion',
        'name': '13. Tutorial 13-Python Data Type Conversion.mp4',
        'duration': '3:24',
    },
    {
        'id': 'a14',
        'title': '14. Tutorial 14-Python Numbers',
        'name': '14. Tutorial 14-Python Numbers.mp4',
        'duration': '13:43',
    },
    {
        'id': 'a15',
        'title': '15. Tutorial 15-Python Namespace and scope',
        'name': '15. Tutorial 15-Python Namespace and scope.mp4',
        'duration': '4:51',
    },
    {
        'id': 'a16',
        'title': '16. Tutorial 16-Python global local nonlocal',
        'name': '16. Tutorial 16-Python global local nonlocal.mp4',
        'duration': '4:53',
    },
    {
        'id': 'a17',
        'title': '17. Tutorial 17-Python Global Keywords',
        'name': '17. Tutorial 17-Python Global Keywords.mp4',
        'duration': '2:31',
    },
    {
        'id': 'a18',
        'title': '18. Tutorial 18-Python Iterators',
        'name': '18. Tutorial 18-Python Iterators.mp4',
        'duration': '8:42',
    },
    {
        'id': 'a19',
        'title': '19. Tutorial 19-Python Iterations Using for',
        'name': '19. Tutorial 19-Python Iterations Using for.mp4',
        'duration': '3:20',
    },
    {
        'id': 'a20',
        'title': '20. Tutorial 20-Python Inheritance',
        'name': '20. Tutorial 20-Python Inheritance.mp4',
        'duration': '6:22',
    },
    {
        'id': 'a21',
        'title': '21. Tutorial 21-Python Multiple Inheritance',
        'name': '21. Tutorial 21-Python Multiple Inheritance.mp4',
        'duration': '3:14',
    },
    {
        'id': 'a22',
        'title': '22. Tutorial 22-Python Function Arguments',
        'name': '22. Tutorial 22-Python Function Arguments.mp4',
        'duration': '7:20',
    },
    {
        'id': 'a23',
        'title': '23. Tutorial 23-Python Functions',
        'name': '23. Tutorial 23-Python Functions.mp4',
        'duration': '10:43',
    },
    {
        'id': 'a24',
        'title': '24. Tutorial 24-Python break statement',
        'name': '24. Tutorial 24-Python break statement.mp4',
        'duration': '2:27',
    },
    {
        'id': 'a25',
        'title': '25. Tutorial 25-Python continue statement',
        'name': '25. Tutorial 25-Python continue statement.mp4',
        'duration': '1:47',
    },
    {
        'id': 'a26',
        'title': '26. Tutorial 26-Python Errors And Exceptions',
        'name': '26. Tutorial 26-Python Errors And Exceptions.mp4',
        'duration': '6:47',
    },
    {
        'id': 'a27',
        'title': '27. Tutorial 27-Python Try, Except And Finally',
        'name': '27. Tutorial 27-Python Try, Except And Finally.mp4',
        'duration': '5:20',
    },
    {
        'id': 'a28',
        'title': '28. Tutorial 28-Python User Defined Exception',
        'name': '28. Tutorial 28-Python User Defined Exception.mp4',
        'duration': '4:29',
    },
    {
        'id': 'a29',
        'title': '29. Tutorial 29-Python OOP Approach',
        'name': '29. Tutorial 29-Python OOP Approach.mp4',
        'duration': '12:37',
    },
    {
        'id': 'a30',
        'title': '30. Tutorial 30-Python Nested Dictionary Implementation',
        'name': '30. Tutorial 30-Python Nested Dictionary Implementation.mp4',
        'duration': '5:42',
    },
    {
        'id': 'a31',
        'title': '31. Tutorial 31-Python Operator Overloading',
        'name': '31. Tutorial 31-Python Operator Overloading.mp4',
        'duration': '5:02',
    },
    {
        'id': 'a32',
        'title': '32. Tutorial 32-Python Statements And Comments',
        'name': '32. Tutorial 32-Python Statements And Comments.mp4',
        'duration': '4:06',
    },
    {
        'id': 'a33',
        'title': '33. Tutorial 33-Python Pass Statement',
        'name': '33. Tutorial 33-Python Pass Statement.mp4',
        'duration': '1:10',
    },
    {
        'id': 'a34',
        'title': '34. Tutorial 34-Python Generators',
        'name': '34. Tutorial 34-Python Generators.mp4',
        'duration': '5:51',
    },
    {
        'id': 'a35',
        'title': '35. Tutorial 35-Python Decorators',
        'name': '35. Tutorial 35-Python Decorators.mp4',
        'duration': '5:30',
    },
    {
        'id': 'a36',
        'title': '36. Tutorial 36-Python While Loop',
        'name': '36. Tutorial 36-Python While Loop.mp4',
        'duration': '16:37',
    },
    {
        'id': 'a37',
        'title': '37. Tutorial 37-Python use of If,elif,else',
        'name': '37. Tutorial 37-Python use of If,elif,else.mp4',
        'duration': '5:26',
    },
    {
        'id': 'a38',
        'title': '38. Tutorial 38-Python Matrix Implementation',
        'name': '38. Tutorial 38-Python Matrix Implementation.mp4',
        'duration': '5:49',
    },
    {
        'id': 'a39',
        'title': '39. Tutorial 39-Python Regular Expressions',
        'name': '39. Tutorial 39-Python Regular Expressions.mp4',
        'duration': '22:14',
    },
    {
        'id': 'a40',
        'title': '40. Tutorial 40-Python List Comprehension',
        'name': '40. Tutorial 40-Python List Comprehension.mp4',
        'duration': '7:45',
    },
    {
        'id': 'a41',
        'title': '41. Tutorial 41-Python Recursion',
        'name': '41. Tutorial 41-Python Recursion.mp4',
        'duration': '1:57',
    },
    {
        'id': 'a42',
        'title': '42. Tutorial 42-Python Input, Output And Import',
        'name': '42. Tutorial 42-Python Input, Output And Import.mp4',
        'duration': '8:01',
    },
    {
        'id': 'a43',
        'title': '43. Tutorial 43-Python Shallow And Deep Copy',
        'name': '43. Tutorial 43-Python Shallow And Deep Copyr.mp4',
        'duration': '7:20',
    },
    {
        'id': 'a44',
        'title': '44. Tutorial 44-Python Lamda Function',
        'name': '44. Tutorial 44-Python Lamda Function.mp4',
        'duration': '3:52',
    },
    {
        'id': 'a45',
        'title': '45. Tutorial 45-Python Assert',
        'name': '45. Tutorial 45-Python Assert.mp4',
        'duration': '3:31',
    },
    {
        'id': 'a46',
        'title': '46. Tutorial 46-Python @property',
        'name': '46. Tutorial 46-Python @property.mp4',
        'duration': '10:11',
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
