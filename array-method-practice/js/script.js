const employees = [
    {
        name: "Isac",
        lastName: "Holstad",
        isAdmin: true,
        mark: "90",
        age: 20
    },
    {
        name: "Lonardo",
        lastName: "Dicaprio",
        isAdmin: false,
        mark: "70",
        age: 55
    },
    {
        name: "Demarcus",
        lastName: "Cusins the third",
        isAdmin: true,
        mark: "85",
        age: 21
    },
    {
        name: "Morten",
        lastName: "Olfstad",
        isAdmin: true,
        mark: "91",
        age: 60
    },
    {
        name: "Mark",
        lastName: "Louis",
        isAdmin: false,
        mark: "25",
        age: 31
    },
    {
        name: "Leo",
        lastName: "Mortensen",
        isAdmin: false,
        mark: "34",
        age: 19
    },
];
const filteredEmployees = employees.filter((newEmployees) =>{
    if(newEmployees.isAdmin === true){
        return true
    }
})
console.log(filteredEmployees)