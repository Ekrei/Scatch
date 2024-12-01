import {DataTypes} from "sequelize"
import Sequelize from "../"

const ProductModel = Sequelize.define("comment",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.ARRAY(DataTypes.STRING)},
    price: {type: DataTypes.INTEGER},
    pathImage: {type: DataTypes.STRING}
})

export default ProductModel