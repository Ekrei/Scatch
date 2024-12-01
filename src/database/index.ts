import UserModel from "./Models/UserModule";
import ProductModel from "./Models/ProductModel";
import CatalogModel from "./Models/CatalogModel";
import BusketModel from "./Models/BusketModel";

CatalogModel.hasMany(ProductModel)
ProductModel.belongsTo(CatalogModel)

UserModel.hasOne(BusketModel)
BusketModel.belongsTo(UserModel)

BusketModel.hasMany(ProductModel)
ProductModel.belongsTo(BusketModel)

export {UserModel, ProductModel, CatalogModel, BusketModel}