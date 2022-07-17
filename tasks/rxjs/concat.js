const { of, concat, interval } = require('rxjs');

concat(
    of(1, 2, 3),
    of(4, 5, 6),
    of(7, 8, 9)
).subscribe((value) => {
    console.log(value);
});

// concat(of('This', 'Never', 'Runs'), interval(1000))
//     .subscribe(console.log);
