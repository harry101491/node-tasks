
// Understanding the double negation experession
const str: string = 'harshit';

console.log('The value of str boolean is: ', !!str);


// import { Observable, of, from, fromEvent, concat} from 'rxjs';

//#region Subscribing Observables with Observers

// const currentTime$ = new Observable(subscribe => {
//     const currentTimeString = new Date().toLocaleDateString();
//     subscribe.next(currentTimeString);
//     subscribe.complete();
// });

// currentTime$.subscribe((value) => console.log(value));

// setTimeout(() => {
//     cur
// }, 1000);


//#endregion


//#region Creating Observables

// passing observer object
// const myObserver = {
//     next: (value) => console.log(value),
//     error: (err) => console.log(err),
//     complete: () => console.log('It has completed')
// };

// const source$ = of(1, 2, 3);

// source$.subscribe(myObserver);


// Understanding the of, from and fromEvent operators
// const sampleObject = {
//     name: "harshit pareek",
//     age: 29,
//     workplace: 'unknown',
//     status: 'single'
// };


// const source1$ = from(Object.values(sampleObject));

// // source1$.subscribe(value => console.log(value));

// const source2$ = from([1, 2, 3, 4]);

// // source2$.subscribe(value => console.log(value));

// concat(source1$, source2$).subscribe(value => console.log(value));

// Creating first Observable from constructor
// const subscribe = (subscriber: Subscriber<number>) => {
//     for (let i of [1, 2, 3, 4, 5, 6]) {
//         subscriber.next(i);
//     }

//     setTimeout(() => {
//         subscriber.complete();
//     }, 2000);

//     return () => console.log('Tear it down');
// };

// const source$ = new Observable(subscribe);

// source$.subscribe(value => console.log(value));

//#endregion