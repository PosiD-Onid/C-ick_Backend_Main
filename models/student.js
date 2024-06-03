// const DataTypes = require('sequelize')
// const {d} = require("nunjucks/src/filters");
// const  { Model } = DataTypes
//
// module.exports = class User extends Model {
//     static init(sequelize) {
//         return super.init(
//             {
//                 id: {
//                     type: DataTypes.STRING(15),
//                     allowNull: false,
//                     unique: true,
//                     primaryKey: true,
//                     comment: "사용자 ID"
//                 },
//                 password: {
//                     type: DataTypes.STRING(20),
//                     allowNull: false,
//                     comment: "비밀번호"
//                 },
//                 name: {
//                     type: DataTypes.STRING(5),
//                     allowNull: false,
//                     comment: "이름"
//                 },
//                 grade: {
//                     type: DataTypes.INTEGER,
//                     allowNull: false,
//                     comment: "학년"
//                 },
//                 classNum: {
//                     type: DataTypes.INTEGER,
//                     allowNull: false,
//                     comment: "반"
//                 },
//                 number: {
//                     type: DataTypes.INTEGER,
//                     allowNull: false,
//                     comment: "번호"
//                 },
//                 phoneNumber: {
//                     type: DataTypes.STRING(11),
//                     allowNull: false,
//                     comment: "전화번호"
//                 },
//             }, {
//                 modelName: 'User',
//                 tableName: 'Student',
//                 // charset: 'utf8',
//                 // collate: 'utf8',
//                 sequelize,
//             }
//         )
//     }
//     static associate(db) {
//         db.User.belongsToMany(db.Lesson, {
//             through: 'class',
//             as: 'classes',
//             foreignKey: 'lessonId'
//         })
//     }
//
// }

const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Student extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.STRING(15),
                    allowNull: false,
                    unique: true,
                    primaryKey: true,
                    comment: "사용자 ID"
                },
                password: {
                    type: DataTypes.STRING(20),
                    allowNull: false,
                    comment: "비밀번호"
                },
                name: {
                    type: DataTypes.STRING(5),
                    allowNull: false,
                    comment: "이름"
                },
                grade: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    comment: "학년"
                },
                classNum: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    comment: "반"
                },
                number: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    comment: "번호"
                },
                phoneNumber: {
                    type: DataTypes.STRING(11),
                    allowNull: false,
                    comment: "전화번호"
                }
            }, {
                modelName: 'Student',
                tableName: 'Student',
                sequelize,
            }
        );
    }

    static associate(db) {
        db.Student.belongsToMany(db.Lesson, {
            through: 'StudentLesson',
            as: 'classes',
            foreignKey: 'id',
            otherKey: 'lessonId'
        });
    }
};
