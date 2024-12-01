import {DataTypes} from "sequelize"
import Sequelize from "../"

const CatalogModel = Sequelize.define("comment",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
})

export default CatalogModel