let start;
let ileminut;
let koniec;
let pozostalo;

setInterval(() => {
    let teraz = moment().format("YYYY-MM-DD");
    start = moment(`${teraz} ${document.getElementById("start").value}`, "YYYY-MM-DD HH:mm");
    ileminut = parseInt(document.getElementById("dlugosc").value) || 0;
    
    if (!start.isValid() || ileminut <= 0) return;

    koniec = moment(start).add(ileminut, 'minutes');
    document.getElementById("koniec").value = koniec.format("HH:mm");

    let now = moment();
    pozostalo = koniec.diff(now);

    document.getElementById("pozostalo").value = moment.utc(pozostalo).format("HH:mm:ss");
}, 1000);
