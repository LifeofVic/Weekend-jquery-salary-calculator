$(document).ready(onReady);

let employees = [];

function onReady() {

	console.log('We made it inside Jquery!!!!');

	$('#addEmployee-Btn').on('click', addingEmployee);

	$('#employeeTable').on('click', '#delete-Btn', deleteEmployee);

}


function addingEmployee() {

	addedEmployees = {
		firstName: $('#firstNameInput').val(),
		lastName: $('#lastNameInput').val(),
		idNumber: $('#idNumberInput').val(),
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

function deleteEmployee() {
	let newEmployeeList = [];
	console.log('We are in the deleteEmployee function');

	let employeeToDelete = $(this)  //the delete <button>
		.parent()            //table data element in which the button lives <td>
		.siblings()          //all <td> in that row.
		.first().text();            //the first of those <td>'s

	console.log('Should match the object info of where the Remove button was clicked: ', employeeToDelete);

	for (let human of employees) {
		//add items that DON'T match contentToDelete into new array. 
		if (human.firstName !== employeeToDelete) {
			newEmployeeList.push(human);
		}

	}
	console.log('newEmployeeList is: ', newEmployeeList);
	employees = newEmployeeList;

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
                <td>${human.idNumber}</td>
                <td>${human.jobTitle}</td>
				<td>${human.annualSalary}</td>
				<td>
                    <button type="delete" id="delete-Btn">Remove</button>
				</td>
				</tr>
        `);
	}
	updateMonthlySalary();

}

function updateMonthlySalary() {

	let totalSum = 0;

	const monthlySum = 12;

	for (human of employees) {
		totalSum += Number(human.annualSalary);
		if ((totalSum / monthlySum) > 20000) {
			$('#totalSalary').addClass('highSalary');
		}
		else {
			$('#totalSalary').removeClass('highSalary');
		}

	}
	console.log('Total sum of all employees salary is: ', totalSum, 'Total monthly salary is: ', monthlySum);

	$('#totalSalary').html(`
			<h2>	
				Total Monthly Salary: $ ${(totalSum / monthlySum).toLocaleString("en-US")}
			</h2>
	`);



}
