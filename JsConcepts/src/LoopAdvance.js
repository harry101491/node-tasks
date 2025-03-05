const object = {
    firstName: "John",
    lastName: "Doe",
    age: 75,
};

for (let value in object) {
    console.log("value is:" , value);
}

const array = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 75,
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 53
    }
];


for (let value of array) {
    console.log("value in array is: ", value);
}
