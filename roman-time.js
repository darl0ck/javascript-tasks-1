var hours = process.argv[2];
var minutes = process.argv[3];
var RomeHours;
var RomeMinutes;
// Немного замечательного кода и магии
if (hours > 24 || hours < 0 || minutes > 59 || minutes < 0) {
    console.log('Время указанно неверно')
}
else {

    var Rome1to9 = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var Rome10 = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    RomeMinutes = Rome10[Math.floor(minutes / 10)] + Rome1to9[minutes % 10];
    RomeHours = Rome10[Math.floor(hours / 10)] + Rome1to9[hours % 10];
    if (hours == 0 || hours == 24) RomeHours = 'NN';
    if (minutes == 0) RomeMinutes = 'NN';
    var HexToRomConv = RomeHours + ' ' + ':' + ' ' + RomeMinutes;
    console.log(HexToRomConv);
}

