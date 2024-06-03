const Sequelize = require('sequelize')
const student = require('./student')
const lesson = require('./lesson')
const teacher = require('./teacher')
const {lessthan} = require("nunjucks/src/tests");
const {resetWatchers} = require("nodemon/lib/monitor/watch");

const env = process.env.NODE_ENV || 'development'
const config = require('../config/config')[env]
const db = {}

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
)

db.sequelize = sequelize;

db.Student = student
db.Lesson = lesson
db.Teacher= teacher

Object.keys(db).forEach(modelName => {
  db[modelName].init(sequelize)
})

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db