import './style.css'

// make an api call to this dummy api
//https://dummy.restapiexample.com/api/v1/employees

// use map()

// use the destruct syntax
// create api url
const API_url = "https://dummy.restapiexample.com/api/v1/employees";
const container = document.querySelector(".container");

function getEmployees (){
    fetch(API_url)
        .then(data =>{
            return data.json();
    })
        .then(({data:employeesData}) => {
            const newEmployeeData = employeesData.map(({employee_name, employee_age, employee_salary}) =>{
                return  `<li class="employee-list">${employee_name} age: ${employee_age} salary: ${employee_salary}</li><br></br>`

            }).join('')
            container.innerHTML = newEmployeeData;
        })
}

 getEmployees();









