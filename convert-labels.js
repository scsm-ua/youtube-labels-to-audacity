const fs = require('fs');

const data = fs.readFileSync(process.argv[2], 'utf8');
console.log(data)
const rows = data.split(/[\r\n]/).map(r => r.trim()).filter(Boolean);
const rows_parsed = rows.map(r => {
    let items = r.split(/\t/);
    

    let total_seconds = Math.round(parseFloat(items[0]));

    let hours = Math.floor(total_seconds / 3600);
    let seconds_wo_hours = total_seconds - hours * 3600;
    let minutes = Math.floor(seconds_wo_hours / 60);
    let seconds = total_seconds % 60;

    let time = '(' + (hours ? hours + ':' : '') + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0') + ')';
    

    return items[2] + ' ' + time;
})

console.log(rows_parsed.join('\n'));