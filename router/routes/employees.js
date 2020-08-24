const express = require('express');
const router = express.Router();

const employees = require('../../models/employees');

// Get all employees with pagination 
router.get('/allEmployees/:page/:pageSize', async (req, res) => {
	try {
		const page = +req.params.page;
		const pageSize = +req.params.pageSize;

		const results = await employees.find().skip(page * pageSize).limit(pageSize).lean().exec();
		res.send({employees: results});
	} catch (error) {
		res.send(error);
	}
});


// Get Employees Count 
router.get('/countEmployees', async (req, res) => {
	try {
		const count = await employees.countDocuments().exec();
		res.send({count});
	}catch(error) {
		res.send(error);
	}
});


// Get Employee by Id 
router.get('/employeeById/:employeeId', async (req, res) => {
	try {	
		const employeeId = req.params.employeeId;

		const employee = await employees.findById(employeeId).lean().exec();
		res.send({employee});
	}catch (error) {
		res.send(error);
	}
});


// Create Employee 
router.post('/employee', async (req, res) => {
	try {
		const employee = req.body; 
		const results = await employees.create(employee);
		res.send(results);
	}catch(error) {
		res.send(error);
	}
});


// Update Employee 
router.put('/employee', async (req, res) => {
	try {
		const employeeId = req.body.employeeId;
		const employeeObj = req.body.employeeObj;
		const results = await employees.findByIdAndUpdate(employeeId, employeeObj).lean().exec();
		res.send(results);
	}catch(error) {
		res.send(error);
	}
});

// Delete Employee 
router.delete('/employee/:employeeId', async (req, res) => {
	try{
		const employeeId = req.params.employeeId;
		const results = await employees.findByIdAndRemove(employeeId).lean().exec();
		res.send(results);
	}catch(error) {
		res.send(error);
	}
});


module.exports = router;