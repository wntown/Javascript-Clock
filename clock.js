const clockEm = document.querySelector(".js-clock"),
    clockTitle = clockEm.querySelector(".clock-title");


function getTime(){
    const date = new Date();
    const timeHours = date.getHours();
    const timeMinutes = date.getMinutes();
    const timeSecond = date.getSeconds();
    return {
        hours : timeHours,
        minutes : timeMinutes,
        second : timeSecond,
    }
}

function init() {
    let now_time = getTime();
    const time_hours = now_time.hours < 10 ? `0${now_time.hours}` : now_time.hours;
        const time_minutes = now_time.minutes < 10 ? `0${now_time.minutes}` : now_time.minutes;
        const time_second = now_time.second < 10 ? `0${now_time.second}` : now_time.second;
        clockTitle.innerText = `${time_hours}:${time_minutes}:${time_second}`;


    setInterval(function(){
        now_time = getTime();
        
        // 3번예제 //
        const time_hours = now_time.hours < 10 ? `0${now_time.hours}` : now_time.hours;
        const time_minutes = now_time.minutes < 10 ? `0${now_time.minutes}` : now_time.minutes;
        const time_second = now_time.second < 10 ? `0${now_time.second}` : now_time.second;
        clockTitle.innerText = `${time_hours}:${time_minutes}:${time_second}`;
        // 3번예제 끝//

                // 1번 예제 //

        // if (now_time.hours < 10) {
        //     time_hours = `0${now_time.hours}`;
        // } else {
        //     time_hours = `${now_time.hours}`;
        // }

        // if (now_time.minutes < 10) {
        //     time_minutes = `0${now_time.minutes}`;
        // } else {
        //     time_minutes = `${now_time.minutes}`;
        // }

        // if (now_time.second < 10) {
        //     time_second = `0${now_time.second}`;
        // } else {
        //     time_second = `${now_time.second}`;
        // }
        
        // clockTitle.innerText = `${time_hours}:${time_minutes}:${time_second}`;

        // 1번 예제 끝 //
        

        // 2번 예제 //
        // clockTitle.innerText = `${now_time.hours < 10 ? `0${now_time.hours}` : now_time.hours}:${
        //     now_time.minutes < 10 ? `0${now_time.minutes}` : now_time.minutes}:${
        //     now_time.second < 10 ? `0${now_time.second}` : now_time.second}`;
        // 2번 예제 끝//
    }, 1000);

}

init();
