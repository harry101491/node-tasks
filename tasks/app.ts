
// function addStudents(numStudents) {
//     return numStudents - 1;
// }

// const obj = ["", ""];
// if (new Boolean(false)) {
//     console.log("it is truthy");
// }

// console.log("the value: ", +"     \t");

// console.log(addStudents("16"));

// console.log("value is:",String([]));

// console.log("value is:", Number({ valueOf() { return 3; } }));

// console.log("boolean value is:", Boolean([]));
// Utility Types
// 'use strict';

// NonNullable Type
// type T0 = NonNullable<string | number | undefined | null>;

// Extract Type
// type T1 = Extract<"a" | "b" | "c", "a" | "f">;

// Exclude Type
// type T2 = Exclude<string | number | (() => void), (() => void)>;

// Pick and Omit Type
// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }

// type TodoPreview = Pick<Todo, 'completed' | 'title'>
// type TodoOmit = Omit<Todo, 'completed'>;

// const todo: TodoPreview = {
//     title: 'Clean Room',
//     completed: false
// };

// const todoOmit: TodoOmit = {
//     title: 'clean desk',
//     description: 'clean desk and organize files in computer'
// };

// Record Type
// interface CatInfo {
//     age: number;
//     breed: string;
// }

// type CatName = 'miffy' | 'boris' | 'mordred';

// const cats: Record<CatName, CatInfo> = {
//     miffy: { age: 2, breed: 'Persian' },
//     boris: { age: 5, breed: 'Maine Coon' },
//     mordred: { age: 16, breed: 'British Shorthair' }
// };

// console.log(cats.boris);

// Readonly Type
// interface Todo {
//     title: string;
// }

// // at compile time
// const todo: Readonly<Todo> = {
//     title: 'Get Milk'
// };

// Object.freeze(todo);

// todo.title = 'Get Milk Powder'; // cannot reassign readonly property

// Required Type; makes every property required
// interface Props {
//     a?: number;
//     b?: number;
// }

// const obj: Props = { a: 5 };
// const obj2: Required<Props> = { a: 5 }; // error as b property is missing

// Partial Type
// interface Todo {
//     title: string;
//     description: string;
// }

// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
//     return { ...todo, ...fieldsToUpdate };
// }

// const todo1: Todo = {
//     title: 'organize desk',
//     description: 'clear clutter'
// };

// const todo2 = updateTodo(todo1, { description: 'throw the garbage' });
// console.log(todo2);

// Genrics
// enum TaskType {
//     feature = "feature",
//     bug = "bug"
// }

// type Task<T = TaskType> = {
//     name: string;
//     type: T;
// }

// const task: Task = { name: 'My new Feature', type: TaskType.feature };
// task.type = TaskType.bug;

// type FeatureType = Task<TaskType.feature>;

// const newFeatureTask: FeatureType = { name: 'My new Feature', type: TaskType.bug }; // cannot assign to a TaskType.bug
// newFeatureTask.type = TaskType.bug; // not assignable as I have specified TaskType.feature earlier

// Lookup Types
// type Animal = {
//     human: {
//         isTwoLegged: boolean;
//         isMammel: boolean;
//         canLaugh: boolean;
//     };
//     dogs: {
//         isTwoLegged: boolean;
//         isMammel: boolean;
//         canLaugh: boolean;
//     }
// }

// type Dog = Animal['dogs'];
// type Human = Animal['human'];

// const harshit: Human = {
//     isMammel: true,
//     canLaugh: true,
//     isTwoLegged: true
// }

// const heidi: Dog = {
//     isMammel: true,
//     isTwoLegged: false,
//     canLaugh: false
// };


// assert type guards
// import { AssertionError } from "assert"


// function assertIsNumber(val: any): asserts val is number {
//     if (typeof val !== 'number') {
//         throw new AssertionError({ message: 'Not a Number' });
//     }
// }

// const double = (num: any) => {
//     assertIsNumber(num);

//     return num * 2;
// }

// console.log(double(4));

// guards in Typescript
// type type1 = {
//     name: string;
//     delimiter: "comma" | "period";
// }

// type type2 = {
//     text: string;
// }

// type Fish = {
//     swim: () => void;
// }

// type Bird = {
//     fly: () => void;
// }

// type Pet = Fish | Bird;

// const IsFish = (pet: Pet): pet is Fish => {
//     return pet !== undefined;
// }

// const findFishOrBird = () => {
//     const pet: Pet = {} as Pet;

//     if(IsFish(pet)) {
//         pet.swim();
//     } else {
//         pet.fly();
//     }
// }

// const fun = (doc: type1 | type2) => {
//     if ('delimiter' in doc) {
//         // opertation of type1
//     } else {
//         // operation of type2
//     }
// }


// Binary Tree Interview Problems
// class BinaryNode {
//     public value: string;
//     public left: BinaryNode;
//     public right: BinaryNode;

//     constructor(val) {
//         this.value = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// const a = new BinaryNode('a');
// const b = new BinaryNode('b');
// const c = new BinaryNode('c');
// const d = new BinaryNode('d');
// const e = new BinaryNode('e');
// const f = new BinaryNode('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// // Target Value
// const findValue = (root: BinaryNode, target: string): boolean => {
//     if (root === null) return false;

//     return root.value === target || findValue(root.left, target) || findValue(root.right, target);
// }

// const maxPath = (root: BinaryNode, distance: number) => {
//     if (root === null) return 0;

//     const leftMax = maxPath(root.left, distance + 1);
//     const righMax = maxPath(root.right, distance + 1);

//     return Math.max(leftMax, righMax) + 1;
// }

// const sumTree = (root: BinaryNode) => {
//     if (root === null) return 0;

//     const leftSum = sumTree(root.left);
//     const rightSum = sumTree(root.right);

//     return root.value + leftSum + rightSum;
// }

// const minTree = (root: BinaryNode) => {
//     if (root === null) return Number.MAX_VALUE;

//     return Math.min(root.value, minTree(root.left), minTree(root.right));
// }

// const depthFirstTreeRecurse = (root: BinaryNode): any[] => {
//     if (root === null) return [];

//     const leftValues = depthFirstTreeRecurse(root.left);
//     const rightValues = depthFirstTreeRecurse(root.right);

//     return [ root.value, ...leftValues, ...rightValues ];
//     // console.log(root.value);

//     // if (root.left !== null) {
//     //     depthFirstTreeRecurse(root.left);
//     // }
//     // if (root.right !== null) {
//     //     depthFirstTreeRecurse(root.right);
//     // }
// };

// const depthFirstTreeIterative = (root) => {
//     const stack = [ root ];

//     while(stack.length > 0) {
//         const current = stack.pop();
//         console.log(current.value);
//         if (current.right !== null) {
//             stack.push(current.right);
//         }
//         if (current.left !== null) {
//             stack.push(current.left);
//         }
//     }
// }

// depthFirstTreeIterative(a);
// console.log(depthFirstTreeRecurse(a));
// console.log(maxPath(a, 0));

// Graph Representation in JavaScript

// Shortest Path
// Largest Component
// const largestComponent = (graph) => {
//     let maxSize = 0;
//     Object.keys(graph).forEach((node) => {
//         const size = exploreSize(graph, node, new Set());
//         if (size > maxSize) {
//             maxSize = size;
//         }
//     });
//     return maxSize;
// }

// const exploreSize = (graph, node, visited): number => {
//     if(visited.has(node)) return 0;
//     let value = 1;

//     visited.add(node);
//     for (const adjacent of graph[node]) {
//         value += exploreSize(graph, adjacent, visited);
//     }

//     return value;
// }

// console.log(largestComponent({
//     0: ["8", "1", "5"],
//     1: ["0"],
//     5: ["0", "8"],
//     8: ["0", "5"],
//     2: ["3", "4"],
//     3: ["2", "4"],
//     4: [ "3", "2"]
// }));


// const graph = {
//     f: [ 'g', 'i' ],
//     g: [ 'h' ],
//     h: [],
//     i: ["g", "k"],
//     j: ["i"],
//     k: []
// };

// const edges = [
//     ["i", "j"],
//     ["k", "i"],
//     ["m", "k"],
//     ["k", "l"],
//     ["o", "n"]
// ];

// const graph = {};

// const populateUndirectedGraph = () => {
//     for (const edge of edges) {
//         const [a, b] = edge;
//         if (!(a in graph)) {
//             graph[a] = [];
//         }
//         if (!(b in graph)) {
//             graph[b] = [];
//         }
//         graph[a].push(b);
//         graph[b].push(a);
//     }
// }

// const populateDirectedGraph = () => {
//     for (const edge of edges) {
//         const [ a, b ] = edge;
//         if (!(a in graph)) {
//             graph[a] = [];
//         }
//         graph[a].push(b);
//     }
// }

// const hasPathDepthFirst = (src, dest, visited): boolean => {
//     if (src === dest) {
//         return true;
//     }
//     if (visited.has(src)) return false;

//     visited.add(src);
//     for (const adjacent of graph[src]) {
//         if (hasPathDepthFirst(adjacent, dest, visited)) {
//             return true;
//         }
//     }

//     return false;
// }


// const undirectedPath = (nodeA, nodeB) => {
//     populateUndirectedGraph();
//     return hasPathDepthFirst(nodeA, nodeB, new Set());
// }

// populateUndirectedGraph();
// populateDirectedGraph();
// console.log(graph);
// console.log(undirectedPath("i", "k") ? "Path Exist" : "Path Doesn't Exits");



// const hasPathBreathFirst = (src, dest) => {
//     const queue = [ src ];

//     while (queue.length > 0) {
//         const current = queue.shift();
//         if (current === dest) return true;
//         for (const adjecent of graph[current]) {
//             queue.push(adjecent);
//         }
//     }

//     return false;
// }


// const graph = {
//     "a": ["b", "c"],
//     "b": ["d"],
//     "c": ["e"],
//     "d": ["f"],
//     "e": [],
//     "f": []
// };

// // finding source
// const findSource = () => {
//     const map = {};
//     // populate Map
//     Object.keys(graph).forEach((node) => map[node] = 0);
//     Object.keys(graph).forEach((node) => {
//         for(const adjecent of graph[node]) {
//             map[adjecent] = 1;
//         }
//     });

//     console.log(Object.keys(map).filter((node) => map[node] === 0));
// }

// // Printing Nodes in breath first order
// const breathFirstPrint = (source) => {
//     const queue = [source];

//     while(queue.length > 0) {
//         const current = queue.shift();
//         console.log(current);

//         for (const adjecent of graph[current]) {
//             queue.push(adjecent);
//         }
//     }
// }

// // Printing Nodes in depth first order
// const depthFirstPrintIterative = (source) => {
//     const stack = [ source ];

//     while (stack.length > 0) {
//         const current = stack.pop();
//         console.log(current);

//         for (const adjecent of graph[current]) {
//             stack.push(adjecent);
//         }
//     }
// }

// const depthFirstPrintRecursive = (current) => {
//     console.log(current);
//     for (const adjecent of graph[current]) {
//         depthFirstPrintRecursive(adjecent);
//     }
// }

// findSource();

// console.log("Iterative");
// depthFirstPrintIterative("a");
// console.log("Recursive");
// depthFirstPrintRecursive("a");
// breathFirstPrint(graph, "a");

// import * as examples from './rxjs';

// const romans = {
//     "I": 1,
//     "V": 5,
//     "X": 10,
//     "L": 50,
//     "C": 100,
//     "D": 500,
//     "M": 1000
// };

// const romanToInt = (s) => {
//     let i = 0;
//     let sum = 0;
//     while (i < s.length) {
//         switch (s[i]) {
//             case "I":
//                 if (s[i+1] === "V") {
//                     sum += (romans.V - romans.I);
//                     i++;
//                 } else if (s[i+1] === "X") {
//                     sum += (romans.X - romans.I);
//                     i++;
//                 } else {
//                     sum += romans.I;
//                 }
//                 break;
//             case "V":
//                 sum += romans.V;
//                 break;
//             case "X":
//                 if (s[i+1] === "L") {
//                     sum += (romans.L - romans.X);
//                     i++;
//                 } else if(s[i+1] === "C") {
//                     sum += (romans.C - romans.X);
//                     i++;
//                 } else {
//                     sum += romans.X;
//                 }
//                 break;
//             case "L":
//                 sum += 50;
//                 break;
//             case "C":
//                 if (s[i+1] === "D") {
//                     sum += (romans.D - romans.C);
//                     i++;
//                 } else if(s[i+1] === "M") {
//                     sum += (romans.M - romans.C);
//                     i++;
//                 } else {
//                     sum += romans.C;
//                 }
//                 break;
//             case "D":
//                 sum += romans.D;
//                 break;
//             case "M":
//                 sum += romans.M;
//                 break;
//         }
//         i++;
//     }
//     return sum;
// };

// console.log(romanToInt("IX"));

// import { Observable, of, from, fromEvent, concat} from 'rxjs';

// // passing observer object
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
