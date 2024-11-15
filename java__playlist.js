

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1.Java Hello World Program',
        'name': '1.Java Hello World Program.mp4',
        'duration': '4.15',
    },
    {
        'id': 'a2',
        'title': '2. Java Arithmetic Operators',
        'name': '2. Java Arithmetic Operators.mp4',
        'duration': '2:54',
    },
    {
        'id': 'a3',
        'title': '3. Java Unary Operators',
        'name': '3. Java Unary Operators.mp4',
        'duration': '4:08',
    },

    {
        'id': 'a4',
        'title': '4. Java Bitwise Operators',
        'name': '4. Java Bitwise Operators.mp4',
        'duration': '5:54',
    },
    {
        'id': 'a5',
        'title': '5. Java Relational Operators',
        'name': '5. Java Relational Operators.mp4',
        'duration': '2:11',
    },
    {
        'id': 'a6',
        'title': '6. Java Conditional Operator',
        'name': '6. Java Conditional Operator.mp4',
        'duration': '1:41',
    },
    {
        'id': 'a7',
        'title': '7. Java Input And Output Techniques',
        'name': '7. Java Input And Output Techniques.mp4',
        'duration': '8:02',
    },
    {
        'id': 'a8',
        'title': '8. Java Strings',
        'name': '8. Java Strings.mp4',
        'duration': '3:43',
    },
    {
        'id': 'a9',
        'title': '9. Java String Functions',
        'name': '9. Java String Functions.mp4',
        'duration': '11:32',
    },
    {
        'id': 'a10',
        'title': '10. Java String Buffer and String Builder',
        'name': '10. Java String Buffer and String Builder.mp4',
        'duration': '4:15',
    },
    {
        'id': 'a11',
        'title': '11. Java Static Keyword',
        'name': '11. Java Static Keyword.mp4',
        'duration': '6:29',
    },
    {
        'id': 'a12',
        'title': '12. Java Class And Objects',
        'name': '12. Java Class And Objects.mp4',
        'duration': '2:58',
    },
    {
        'id': 'a13',
        'title': '13. Java Boolean Datatype',
        'name': '13. Java Boolean Datatype.mp4',
        'duration': '1:56',
    },
    {
        'id': 'a14',
        'title': '14. Java Character Type Data',
        'name': '14. Java Character Type Data.mp4',
        'duration': '2:09',
    },
    {
        'id': 'a15',
        'title': '15. Java This Keyword',
        'name': '15. Java This Keyword.mp4',
        'duration': '3:24',
    },
    {
        'id': 'a16',
        'title': '16. Java User Defined Exceptions',
        'name': '16. Java User Defined Exceptions.mp4',
        'duration': '5:02',
    },
    {
        'id': 'a17',
        'title': '17. Java Switch Case Statement',
        'name': '17. Java Switch Case Statement.mp4',
        'duration': '4:57',
    },
    {
        'id': 'a18',
        'title': '18. Java Arrays',
        'name': '18. Java Arrays.mp4',
        'duration': '4:12',
    },
    {
        'id': 'a19',
        'title': '19. Java Array List',
        'name': '19. Java Array List.mp4',
        'duration': '2:39',
    },
    {
        'id': 'a20',
        'title': '20. Java Thread Synchronization',
        'name': '20. Java Thread Synchronization.mp4',
        'duration': '6:08',
    },
    {
        'id': 'a21',
        'title': '21. Java Vectors',
        'name': '21. Java Vectors.mp4',
        'duration': '3:16',
    },
    {
        'id': 'a22',
        'title': '22. Java Packages',
        'name': '22. Java Packages.mp4',
        'duration': '3:29',
    },
    {
        'id': 'a23',
        'title': '23. Java Polymorphism Function Overriding',
        'name': '23. Java Polymorphism Function Overriding.mp4',
        'duration': '4:00',
    },
    {
        'id': 'a24',
        'title': '24. Java Sets.',
        'name': '24. Java Sets..mp4',
        'duration': '5:03',
    },
    {
        'id': 'a25',
        'title': '25. Java Real Type Data.r',
        'name': '25. Java Real Type Data..mp4',
        'duration': '2:26',
    },
    {
        'id': 'a26',
        'title': '26. Java Polymorphism functions overloading',
        'name': '26. Java Polymorphism functions overloading.mp4',
        'duration': '3:44',
    },
    {
        'id': 'a27',
        'title': '27. Java Stack Class',
        'name': '27. Java Stack Class.mp4',
        'duration': '3:16',
    },
    {
        'id': 'a28',
        'title': '28. Java Queue.',
        'name': '28. Java Queue..mp4',
        'duration': '3:04',
    },
    {
        'id': 'a29',
        'title': '29. Java Programming Abstraction',
        'name': '29. Java Programming Abstraction.mp4',
        'duration': '10:21',
    },
    {
        'id': 'a30',
        'title': '30. Java Priority queue',
        'name': '30. Java Priority queue.mp4',
        'duration': '5:32',
    },
    {
        'id': 'a31',
        'title': '31. Java Inheritance',
        'name': '31. Java Inheritance.mp4',
        'duration': '3:22',
    },
    {
        'id': 'a32',
        'title': '32. Java Commenting Techniques',
        'name': '32. Java Commenting Techniques.mp4',
        'duration': '2:35',
    },
    {
        'id': 'a33',
        'title': '33. Java Linked List',
        'name': '33. Java Linked List.mp4',
        'duration': '4:03',
    },
    {
        'id': 'a34',
        'title': '34. Java Interfaces',
        'name': '34. Java Interfaces.mp4',
        'duration': '18:20',
    },
    {
        'id': 'a35',
        'title': '35. Java Multithreading by extending thread class',
        'name': '35. Java Multithreading by extending thread class.mp4',
        'duration': '4:22',
    },
    {
        'id': 'a36',
        'title': '36. Java Multithreading by runnable interface',
        'name': '36. Java Multithreading by runnable interface.mp4',
        'duration': '4:08',
    },
    {
        'id': 'a37',
        'title': '37. Java Hash Map',
        'name': '37. Java Hash Map.mp4',
        'duration': '4:28',
    },
    {
        'id': 'a38',
        'title': '38. Java Hash Table',
        'name': '38. Java Hash Table.mp4',
        'duration': '4:46',
    },
    {
        'id': 'a39',
        'title': '39. Java Functions',
        'name': '39. Java Functions.mp4',
        'duration': '5:52',
    },
    {
        'id': 'a40',
        'title': '40. Java Final Keyword',
        'name': '40. Java Final Keyword.mp4',
        'duration': '5:04',
    },
    {
        'id': 'a41',
        'title': '41. Java Comparator To Sort',
        'name': '41. Java Comparator To Sort.mp4',
        'duration': '2:58',
    },
    {
        'id': 'a42',
        'title': '42. Java Continue Statement',
        'name': '42. Java Continue Statement.mp4',
        'duration': '2:59',
    },
    {
        'id': 'a43',
        'title': '43. Java Break Statement',
        'name': '43. Java Break Statement.mp4',
        'duration': '1:35',
    },
    {
        'id': 'a44',
        'title': '44. Java For Loop',
        'name': '44. Java For Loop.mp4',
        'duration': '4:49',
    },
    {
        'id': 'a45',
        'title': '45. Java While Loop',
        'name': '45. Java While Loop.mp4',
        'duration': '2:56',
    },
    {
        'id': 'a46',
        'title': '46. Java File Handling',
        'name': '46. Java File Handling.mp4',
        'duration': '4:42',
    },
    {
        'id': 'a47',
        'title': '47. Java Constructor Of A Class',
        'name': '47. Java Constructor Of A Class.mp4',
        'duration': '4:37',
    },
    {
        'id': 'a48',
        'title': '48. Java Exception Handling',
        'name': '48. Java Exception Handling.mp4',
        'duration': '10:06',
    },
    {
        'id': 'a49',
        'title': '49. Java Enumeration and iterators',
        'name': '49. Java Enumeration and iterators.mp4',
        'duration': '5:23',
    },
    {
        'id': 'a50',
        'title': '50. Java Wrapper Classes',
        'name': '50. Java Wrapper Classes.mp4',
        'duration': '8:08',
    },
    {
        'id': 'a51',
        'title': '51. Java Access Specifiers',
        'name': '51. Java Access Specifiers.mp4',
        'duration': '6:47',
    },
    {
        'id': 'a52',
        'title': '52. Java Built-In Exceptions',
        'name': '52. Java Built-In Exceptions.mp4',
        'duration': '4:39',
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
