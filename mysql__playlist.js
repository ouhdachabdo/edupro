

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1. Introduction',
        'name': '1. Introduction.mp4',
        'duration': '3.54',
    },
    {
        'id': 'a2',
        'title': '2. Course Curriculum overview',
        'name': '2. Course Curriculum overview.mp4',
        'duration': '4:22',
    },
    
    {
        'id': 'a3',
        'title': '3. Overview of Databases',
        'name': '3. Overview of Databases.mp4',
        'duration': '8:56',
    },

    {
        'id': 'a4',
        'title': '4. What is Source code',
        'name': '4. What is Source code.mp4',
        'duration': '8:47',
    },
    {
        'id': 'a5',
        'title': '5. Learn What is Generative AI  Gen AI',
        'name': '5. Learn What is Generative AI  Gen AI.mp4',
        'duration': '14:06',
    },
    {
        'id': 'a6',
        'title': '6. Microsoft SQL Server Installation',
        'name': '6. Microsoft SQL Server Installation.mp4',
        'duration': '27:19',
    },
    {
        'id': 'a7',
        'title': '7. Microsoft SQL Management Studio Installation (SSMS)',
        'name': '7. Microsoft SQL Management Studio Installation (SSMS).mp4',
        'duration': '7:50',
    },
    {
        'id': 'a8',
        'title': '8. Connecting to MS-SQL (Windows Authentication)',
        'name': '8. Connecting to MS-SQL (Windows Authentication).mp4',
        'duration': '4:40',
    },
    {
        'id': 'a9',
        'title': '9. Connecting to MS-SQL (SQL Server Authentication)',
        'name': '9. Connecting to MS-SQL (SQL Server Authentication).mp4',
        'duration': '5:34',
    },
    {
        'id': 'a10',
        'title': '10. Overview of Challenges',
        'name': '10. Overview of Challenges.mp4',
        'duration': '2:38',
    },
    {
        'id': 'a11',
        'title': '11. SQL Statement Basic',
        'name': '11. SQL Statement Basic.mp4',
        'duration': '12:54',
    },
    {
        'id': 'a12',
        'title': '12. SELECT Statement',
        'name': '12. SELECT Statement.mp4',
        'duration': '16:28',
    },
    {
        'id': 'a13',
        'title': '13. SELECT DISTINCT',
        'name': '13. SELECT DISTINCT.mp4',
        'duration': '16:53',
    },
    {
        'id': 'a14',
        'title': '14. Column AS Statement',
        'name': '14. Column AS Statement.mp4',
        'duration': '9:12',
    },
    {
        'id': 'a15',
        'title': '15. COUNT',
        'name': '15. COUNT.mp4',
        'duration': '9:41',
    },
    {
        'id': 'a16',
        'title': '16. SELECT WHERE Clause – One',
        'name': '16. SELECT WHERE Clause – One.mp4',
        'duration': '4:58',
    },
    {
        'id': 'a17',
        'title': '17. SELECT WHERE Clause – Two',
        'name': '17. SELECT WHERE Clause – Two.mp4',
        'duration': '11:38',
    },
    {
        'id': 'a18',
        'title': '18. ORDER BY',
        'name': '18. ORDER BY.mp4',
        'duration': '9:33',
    },
    {
        'id': 'a19',
        'title': '19. TOP in MS SQL',
        'name': '19. TOP in MS SQL.mp4',
        'duration': '5:38',
    },
    {
        'id': 'a20',
        'title': '20. BETWEEN',
        'name': '20. BETWEEN.mp4',
        'duration': '13:13',
    },
    {
        'id': 'a21',
        'title': '21. IN',
        'name': '21. IN.mp4',
        'duration': '8:12',
    },
    {
        'id': 'a22',
        'title': '22. LIKE',
        'name': '22. LIKE.mp4',
        'duration': '12:53',
    },
    {
        'id': 'a23',
        'title': '23. Overview of GROUP BY',
        'name': '23. Overview of GROUP BY.mp4',
        'duration': '8:12',
    },
    {
        'id': 'a24',
        'title': '24. Aggregation Function – SUM()',
        'name': '24. Aggregation Function – SUM().mp4',
        'duration': '11:51',
    },
    {
        'id': 'a25',
        'title': '25. Aggregation Function – MIN()-MAX()r',
        'name': '25. Aggregation Function – MIN()-MAX().mp4',
        'duration': '8:21',
    },
    {
        'id': 'a26',
        'title': '26. GROUP BY – One(theory)',
        'name': '26. GROUP BY – One(theory).mp4',
        'duration': '10:54',
    },
    {
        'id': 'a27',
        'title': '27. GROUP BY – Two(practical)',
        'name': '27. GROUP BY – Two(practical).mp4',
        'duration': '13:54',
    },
    {
        'id': 'a28',
        'title': '28. HAVING on SQL Statement',
        'name': '28. HAVING on SQL Statement.mp4',
        'duration': '14:45',
    },
    {
        'id': 'a29',
        'title': '29. Overview of Assessment Test 1',
        'name': '29. Overview of Assessment Test 1.mp4',
        'duration': '1:59',
    },
    {
        'id': 'a32',
        'title': '32. Overview of JOINS',
        'name': '32. Overview of JOINS.mp4',
        'duration': '6:39',
    },
    {
        'id': 'a33',
        'title': '33. Introduction to JOINS',
        'name': '33. Introduction to JOINS.mp4',
        'duration': '7:08',
    },
    {
        'id': 'a34',
        'title': '34. AS Statement (table)',
        'name': '34. AS Statement (table).mp4',
        'duration': '3:44',
    },
    {
        'id': 'a35',
        'title': '35. INNER Join',
        'name': '35. INNER Join.mp4',
        'duration': '12:20',
    },
    {
        'id': 'a36',
        'title': '36. Full Outer Join',
        'name': '36. Full Outer Join.mp4',
        'duration': '7:23',
    },
    {
        'id': 'a37',
        'title': '37. Left Outer Join',
        'name': '37. Left Outer Join.mp4',
        'duration': '5:58',
    },
    {
        'id': 'a38',
        'title': '38. Right Outer Join',
        'name': '38. Right Outer Join.mp4',
        'duration': '7:51',
    },
    {
        'id': 'a39',
        'title': '39. Union',
        'name': '39. Union.mp4',
        'duration': '7:24',
    },
    {
        'id': 'a42',
        'title': '42. Basic of Advanced SQL Commands',
        'name': '42. Basic of Advanced SQL Commands.mp4',
        'duration': '4:20',
    },
    {
        'id': 'a43',
        'title': '43. Timestamp',
        'name': '43. Timestamp.mp4',
        'duration': '11:39',
    },
    {
        'id': 'a44',
        'title': '44. Extract from Timestamp',
        'name': '44. Extract from Timestamp.mp4',
        'duration': '6:21',
    },
    {
        'id': 'a45',
        'title': '45. Mathematical Scalar Functions',
        'name': '45. Mathematical Scalar Functions.mp4',
        'duration': '11:07',
    },
    {
        'id': 'a46',
        'title': '46. String Functions',
        'name': '46. String Functions.mp4',
        'duration': '16:39',
    },
    {
        'id': 'a47',
        'title': '47. SubQuery',
        'name': '47. SubQuery.mp4',
        'duration': '7:09',
    },
    {
        'id': 'a48',
        'title': '48. Basic of Database and Tables',
        'name': '48. Basic of Database and Tables.mp4',
        'duration': '9:41',
    },
    {
        'id': 'a49',
        'title': '49. Data Types',
        'name': '49. Data Types.mp4',
        'duration': '10:54',
    },
    {
        'id': 'a50',
        'title': '50. Select Data type on SSMS',
        'name': '50. Select Data type on SSMS.mp4',
        'duration': '5:05',
    },
    {
        'id': 'a51',
        'title': '51. Create Table Using SQL Server Management Studio',
        'name': '51. Create Table Using SQL Server Management Studio.mp4',
        'duration': '7:45',
    },
    {
        'id': 'a52',
        'title': '52. Create Table using SQL Script',
        'name': '52. Create Table using SQL Script.mp4',
        'duration': '7:12',
    },
    {
        'id': 'a53',
        'title': '53. How to set Primary Key',
        'name': '53. How to set Primary Key.mp4',
        'duration': '5:36',
    },
    {
        'id': 'a54',
        'title': '54. How to set Foreign Key',
        'name': '54. How to set Foreign Key.mp4',
        'duration': '12:11',
    },
    {
        'id': 'a55',
        'title': '55. Insert Statement in MS SQL',
        'name': '55. Insert Statement in MS SQL.mp4',
        'duration': '6:28',
    },
    {
        'id': 'a56',
        'title': '56. Update Statement in MS SQL',
        'name': '56. Update Statement in MS SQL.mp4',
        'duration': '8:02',
    },
    {
        'id': 'a57',
        'title': '57. Delete Statement in MS SQL',
        'name': '57. Delete Statement in MS SQL.mp4',
        'duration': '6:34',
    },
    {
        'id': 'a58',
        'title': '58. Alter  Modification Table in MS SQL',
        'name': '58. Alter  Modification Table in MS SQL.mp4',
        'duration': '4:20',
    },
    {
        'id': 'a59',
        'title': '59. Drop Table in MS SQL',
        'name': '59. Drop Table in MS SQL.mp4',
        'duration': '2:55',
    },
    {
        'id': 'a60',
        'title': '60. Check Constraint',
        'name': '60. Check Constraint.mp4',
        'duration': '14:07',
    },
    {
        'id': 'a61',
        'title': '61. NOT NULL Constraint',
        'name': '61. NOT NULL Constraint.mp4',
        'duration': '11:46',
    },
    {
        'id': 'a62',
        'title': '62. UNIQUE Constraint',
        'name': '62. UNIQUE Constraint.mp4',
        'duration': '11:15',
    },
    {
        'id': 'a63',
        'title': '63. Overview of Database and Tables',
        'name': '63. Overview of Database and Tables.mp4',
        'duration': '3:31',
    },
    {
        'id': 'a64',
        'title': '64. Creating a Database backup using SSMS',
        'name': '64. Creating a Database backup using SSMS.mp4',
        'duration': '10:50',
    },
    {
        'id': 'a65',
        'title': '65. Restoring a Database from backup using SSMS',
        'name': '65. Restoring a Database from backup using SSMS.mp4',
        'duration': '7:35',
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
