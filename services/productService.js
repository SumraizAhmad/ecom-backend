const productModel = require("../model/productsModel");

module.exports = {
  createProduct: async function (body) {
    const data = await productModel.createProduct(body);
    return data;
  },
  getProduct: async function (body) {
    const data = await productModel.getProduct(body);
    return data;
  },
  updateProduct: async function (body) {
    const data = await productModel.updateProduct(body);
    return data;
  },
  deleteProduct: async function (id) {
    // const student = await studentModel.getStudentById(id);
    // if (student.count != 0) {
    //   return "Student already exists!";
    // }
    const data = await productModel.deleteProduct(id);

    return data;
  },

};
