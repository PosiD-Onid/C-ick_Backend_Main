// const DataTypes = require('sequelize')
// const {Sequelize} = require("sequelize");
// const  { Model } = DataTypes
//
// module.exports = class Lesson extends Model {
//     static init(sequelize) {
//         return super.init(
//             {
//                 lessonId: {
//                     type: DataTypes.INTEGER,
//                     autoIncrement: true,
//                     allowNull: false,
//                     unique: true,
//                     primaryKey: true,
//                     comment: "수업 ID"
//                 },
//                 lessonName: {
//                     type: DataTypes.STRING(10),
//                     allowNull: false,
//                     comment: "수업 이름"
//                 },
//                 // created_at: {
//                 //     type: DataTypes.DATE,
//                 //     allowNull: false,
//                 //     defaultValue: DataTypes.NOW
//                 // },
//                 // updated_at: {
//                 //
//                 // }
//             }, {
//                 modelName: 'Lesson',
//                 tableName: 'Lesson',
//                 timestamps: true,
//                 // charset: 'utf8',
//                 // collate: 'utf8',
//                 sequelize,
//             }
//         )
//     }
//
//     static associate(db) {
//         db.Lesson.belongsToMany(db.User, {
//             through: 'student',
//             as: 'students',
//             foreignKey: 'id'
//         })
//     }
//
// }

const DataTypes = require('sequelize');
const { Sequelize } = require('sequelize');
const { Model } = DataTypes;

module.exports = class Lesson extends Model {
    static init(sequelize) {
        return super.init(
            {
                lessonId: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    unique: true,
                    primaryKey: true,
                    comment: "수업 ID"
                },
                lessonName: {
                    type: DataTypes.STRING(10),
                    allowNull: false,
                    comment: "수업 이름"
                }
            }, {
                modelName: 'Lesson',
                tableName: 'Lesson',
                timestamps: true,
                sequelize,
            }
        );
    }

    static associate(db) {
        db.Lesson.belongsToMany(db.Student, {
            through: 'StudentLesson',
            as: 'students',
            foreignKey: 'lessonId',
            otherKey: 'studentId'
        });
    }


};
