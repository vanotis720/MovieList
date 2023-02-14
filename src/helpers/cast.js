export function formatMilliToTime(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (
        seconds == 60 ?
            (minutes + 1) + ":00" :
            minutes + ":" + (seconds < 10 ? "0" : "") + seconds
    );
}

export function formatSecondsToTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export function formatMinutesToHours(time) {
    const hours = Math.floor(time / 60);
    const minutes = time - hours * 60;
    return `${hours}h${minutes < 10 ? '0' : ''}${minutes}m`;
}

export function getYearOfDate(date) {
    const d = new Date(date);
    return d.getFullYear();
}

export function numberToK(number) {
    return (number < 1000) ? number : ((number / 1000).toFixed(1) + 'k');
}