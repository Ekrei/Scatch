import {DataTypes} from "sequelize"
import Sequelize from "../"

const BusketModel = Sequelize.define("comment",{
    userId: {type: DataTypes.INTEGER},
    productId: {type: DataTypes.INTEGER}
})

export default BusketModel