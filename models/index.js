const Sequelize = require('sequelize');
const Student = require('./student');
const Lesson = require('./lesson');
const Subject = require('./subject');
const Assessment = require('./assessment');
const Teacher = require('./teacher');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.Student = Student;
db.Lesson = Lesson;
db.Teacher = Teacher;
db.Subject = Subject;
db.Assessment = Assessment;

// Object.keys(db).forEach((modelName) => {
//   db[modelName].init(sequelize)
// })

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db)
//   }
// })
Student.init(sequelize);
Lesson.init(sequelize);
Teacher.init(sequelize);
Subject.init(sequelize);
Assessment.init(sequelize);

Student.associate(db);
Lesson.associate(db);
Teacher.associate(db);
Subject.associate(db);
Assessment.associate(db);

module.exports = db;
