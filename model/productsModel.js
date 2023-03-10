const { models } = require("../model/definition");

module.exports = {
	createProduct: async function (body) {
		const result = await models.Product.create(body);
		return result;
	},
    getProduct: async function () {
		const result = await models.Product.findAll();
		return result;
	},
    updateProduct: async function (body) {
		const result = await models.Product.update(
			{
				...body,
			},
			{
				where: { id: body.id },
			},
		);
		return result;
	},
    deleteProduct: async function (id) {
		const result = await models.Product.destroy({
			where: { id: id },
		});
		return 'Deleted Product';
	},
}