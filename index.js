// Write your solution in this file!
const employee ={ 
    name:"Cynthia",
    streetAdress:"Nairobi",
   
};

function updateEmployeeWithKeyAndValue(employee,key,value){
        const newEmployee = {...employee}
        newEmployee[key] = value;

  return newEmployee;
}


function deleteFromEmployeeByKey(employee, key) {

    const newEmployee = {...employee}

    delete newEmployee.name
    delete newEmployee.streetAdress

  return newEmployee;


}

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee.name
    delete employee.streetAdress
    return employee;
}

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key]=value;
return employee;
}   
