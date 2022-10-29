$(document).ready(onReady);

let employees = [];

function onReady() {

	console.log('Checking if Jquery Loaded up properly');

	$('#addEmployee-Btn').on('click', addingEmployee);


}


function addingEmployee() {

	addedEmployees = {
		firstName: $('#firstNameInput').val(),
		lastName: $('#lastNameInput').val(),
		iDNumber: $('#idNumberInput').val(),
		jobTitle: $('#jobTitleInput').val(),
		annualSalary: $('#annualSalaryInput').val()
	}
	console.log('Current Array of employee: ', employees);

	$('#firstNameInput').val('');
	$('#lastNameInput').val('');
	$('#idNumberInput').val('');
	$('#jobTitleInput').val('');
	$('#annualSalaryInput').val('');

	employees.push(addedEmployees);

	updateRender();

}

function updateRender() {

	//clearing the DOM to get ready to add the employees array of objects.
	$('#employeeTable').empty()

	//Doing a for loop that will create a table with a row for each objects in the employees array and display it accordingly to the array. 
	for (let human of employees) {
		$('#employeeTable').append(`
            <tr>
                <td>${human.firstName}</td>
                <td>${human.lastName}</td>
                <td>${human.iDNumber}</td>
                <td>${human.jobTitle}</td>
				<td>${human.annualSalary}</td>
                    <button class ="delete-btn">
                        Delete
                    </button>
                </td>
            </tr>
        `);
	}





}

function updateMonthlySalary() {
	$('#totalSalary').val();
	





}