const { timer, combineLatest } = require('rxjs');


// timerOne emits first value at 1s, then once every 4s
const timerOne$ = timer(1000, 4000);
// timerTwo emits first value at 2s, then once every 4s
const timerTwo$ = timer(2000, 4000);
// timerThree emits first value at 3s, then once every 4s
const timerThree$ = timer(3000, 4000);

combineLatest(timerOne$, timerTwo$, timerThree$).subscribe((value) => {
    console.log(value);
});