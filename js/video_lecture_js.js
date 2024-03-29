const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Introduction of Data Structure and Algorithm',
        'name': 'DSA_Day_01.mp4',
        'duration': '43:58',
    },
    {
        'id': 'a2',
        'title': ' Basic Programming (Variable and Data type)',
        'name': 'DSA_Day_02.mp4',
        'duration': '56:23',
    },
    {
        'id': 'a3',
        'title': 'Introduction of Array ',
        'name': 'DSA_ARRAY_1Day_03.mp4',
        'duration': '1:19:02',
    },
    {
        'id': 'a4',
        'title': 'Array Declartion Day 2 ',
        'name': 'DSA_arrray_02.mp4',
        'duration': '30:43',
    },
    {
        'id': 'a5',
        'title': 'Array Accessing ,udating Day 2 ',
        'name': 'DSA_arrray_02.mp4',
        'duration': '30:43',
    },
];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="./../image/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = './../image/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = './../image/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = './../image/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = './../videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
