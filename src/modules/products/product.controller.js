import MESSAGES from "../../common/contstants/messages.js";
import createError from "../../common/utils/error.js";
import handleAsync from "../../common/utils/handleAsync.js";
import createResponse from "../../common/utils/response.js";
import Product from "./product.model.js";


export const getAllProduct = handleAsync(async(req, res, next) => {
    const data = await Product.find();
    if(!data || data.length === 0){
        return next(createError(404, MESSAGES.CATEGORY.NOT_FOUND, data))
    }
    return res.json(createResponse(true, 200, MESSAGES.PRODUCT.GET_SUCCESS, data))
})

export const getDetailProduct = handleAsync(async(req, res, next) => {
    const data = await Product.findById(req.params.id)
    if(!data){
        return next(createError(404, MESSAGES.PRODUCT.NOT_FOUND));
    }
    return res.json(createResponse(true, 200 , MESSAGES.PRODUCT.GET_SUCCESS, data))
});

