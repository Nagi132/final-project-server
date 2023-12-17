/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		imageUrl: "https://s29068.pcdn.co/wp-content/uploads/68th-street-campus.jpg.optimal.jpg",
		description: "This is a school in New York, New York."
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		imageUrl: "https://macaulay.cuny.edu/wp-content/uploads/2016/07/qc10_bg_000056-1920x1080.jpg",
		description: "This is a school in Queens, New York."
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		imageUrl: "https://www.brooklyn.cuny.edu/web/com_socialImages/BrooklynCollegeLibrary_1200x628.jpg",
		description: "This is a school in Brooklyn, New York."
	});

	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Nobita",
		lastname: "Nobi",
		email: "nobita@example.com",
		imageUrl: "https://www.tv-asahi.co.jp/doraemon/cast/img/nobita.jpg",
		gpa: 1.5
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Shizuka",
		lastname: "Minamoto",
		email: "shizuka@example.com",
		imageUrl: "https://www.tv-asahi.co.jp/doraemon/cast/img/shizuka.jpg",
		gpa: 4.0
	});
	// Create a new student for a campus
	const dummy_student3 = await Student.create({
		firstname: "Takeshi",
		lastname: "Goda",
		email: "giant@example.com",
		imageUrl: "https://www.tv-asahi.co.jp/doraemon/cast/img/takeshi.jpg",
		gpa: 3.5
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;