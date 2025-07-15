
import MESSAGES from "../../common/contstants/messages.js";
import createError from "../../common/utils/error.js";
import handleAsync from "../../common/utils/handleAsync.js";
import createResponse from "../../common/utils/response.js";
import Category from "./category.model.js";


export const createCategory = handleAsync(async(req, res, next) => {
  const exit = await Category.findOne({title: req.body.title})
    if(exit) return next(createError(400, MESSAGES.CATEGORY.CREATE_ERROR_EXISTS))
    const data = await Category.create(req.body);
return res.json(createResponse(true, 201, MESSAGES.CATEGORY.CREATE_SUCCESS, data))
});

export const getListCategory = handleAsync(async(req,res,next) => {
    const data = await Category.find();
    if(!data || data.length === 0 ){
        return next(createError(404, MESSAGES.CATEGORY.NOT_FOUND))
    }
    return res.json(createResponse(true, 200, MESSAGES.CATEGORY.GET_SUCCESS, data))
});

export const getDetailCategory = handleAsync(async(req,res,next) => {
    const data = await findOne(req.params.id);
    if(!data) {
        next(createError(404, MESSAGES.CATEGORY.NOT_FOUND));
    }
    return res.json(createResponse(true, 200, MESSAGES.CATEGORY.GET_SUCCESS, data))
});

export const updateCategory = handleAsync(async(req,res,next) => {
    const data = await Category.findByIdAndUpdate(req.params.id, req.body);
    if(data) return res.json(createResponse(true, 200, MESSAGES.CATEGORY.UPDATE_SUCCESS, data))
        next(createError(false, 404, MESSAGES.CATEGORY.UPDATE_ERROR))
})

export const deleteCategory = handleAsync(async(req, res, next) => {
    const data = await Category.findByIdAndDelete(id);
    if(data) return res.json(createResponse(true,200,MESSAGES.CATEGORY.DELETE_SUCCESS, data))
        next(createError(false, 404, MESSAGES.CATEGORY.NOT_FOUND))
})

export const softDeleteCategory = handleAsync(async(req,res,next)=> {
   
})

export const restoreCategory = handleAsync(async(req, res, next) => {
 
})