import {DataTypes} from "sequelize"
import Sequelize from "../"

const UserModel = Sequelize.define("comment",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    mail: {type: DataTypes.STRING},
    phone: {type: DataTypes.INTEGER},
    password: {type: DataTypes.STRING},
    varification: {type: DataTypes.BOOLEAN}
})

export default UserModel