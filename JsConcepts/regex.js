// How to tests if a pattern mentioned in the regex exists in a given string
// const str = "all your base belong to us";
// const regex = /Base/;
// const isExisting = regex.test(str);

// console.log(isExisting);

// ^ and $ sign in the regex pattern
// const regex = /^base$/; // it should start with the base and should end with the base
// const str = "all your base belong to us";
// const str2 = "base";
// // const isExisting = regex.test(str);
// const isExisting = regex.test(str2);

// console.log(isExisting);

// extract partition
const str = "arn:aws-cn:iam::123456789012:user/johndoe";
const regex = /arn:(\w[-?\w]*):iam::(\d+)/g;
let match = regex.exec(str);

if (match) {
    console.log("partition is: ", match[1], match[2]);
} else {
    console.log("no partition or invalid ARN");
}