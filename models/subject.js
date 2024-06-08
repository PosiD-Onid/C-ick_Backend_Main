
const DataTypes = require('sequelize');
const { Sequelize } = require('sequelize');
const { Model } = DataTypes;

module.exports = class Subject extends Model {
    static init(sequelize) {
        return super.init(
            {
                subjectId: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    unique: true,
                    primaryKey: true,
                    comment: "과목 ID"
                },
                subjectName: {
                    type: DataTypes.STRING(10),
                    allowNull: false,
                    comment: "과목 이름"
                }
            }, {
                modelName: 'Subject',
                tableName: 'Subject',
                timestamps: true,
                sequelize,
            }
        );
    }

    static associate(db) {
        db.Subject.belongsToMany(db.Lesson, {
            through: 'SubjectLesson',
            as: 'classes',
            foreignKey: 'subjectId',
            otherKey: 'LessonId'
        });
        db.Subject.belongsToMany(db.Teacher, {
            through: 'TeacherSubject',
            as: 'subjects',
            foreignKey: 'subjectId',
            otherKey: 'id'
        });
        db.Subject.belongsToMany(db.Assessment, {
            through: 'SubjectAssessment',
            as: 'assessments',
            foreignKey: 'subjectId',
            otherKey: 'assessmentId'
        });
    }
};
