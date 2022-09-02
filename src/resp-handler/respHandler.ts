import ApiResponse from './apiResponse'
import { RESPONSE_STATUS, ERROR_TYPE, STATUS_CODE } from './constants'
import exception from "./customException"


let result:any

function sendResponse(res, rslt, statusCode: any = undefined) {
  let err = rslt && rslt.error
  if (err) {
switch (err.errType) {
      case ERROR_TYPE.INTERNAL_SERVER_ERROR:
        return res.status(RESPONSE_STATUS.INTERNAL_ERROR).send(rslt)
      case ERROR_TYPE.BAD_REQUEST:
        return res.status(RESPONSE_STATUS.BAD_REQUEST).send(rslt)
      case ERROR_TYPE.NOT_IMPLEMENTED:
        return res.status(RESPONSE_STATUS.NOT_IMPLEMENTED).send(rslt)
      case ERROR_TYPE.ALREADY_EXISTS:
        return res.status(RESPONSE_STATUS.ALREADY_EXISTS).send(rslt)
      case ERROR_TYPE.NOT_ALLOWED:
        return res.status(RESPONSE_STATUS.NOT_ALLOWED).send(rslt)
      case ERROR_TYPE.NOT_FOUND:
        return res.status(RESPONSE_STATUS.NOT_FOUND).send(rslt)
      default:
        return res.status(RESPONSE_STATUS.INTERNAL_ERROR).send(rslt)
    }
  }

  if (statusCode) return res.status(statusCode).send(rslt)
  return res.status(RESPONSE_STATUS.SUCCESS).send(rslt)
}

function sendError(res, err) {
  if (!err?.errType) {
    err = exception.internalServerError
  }
  result = new ApiResponse(STATUS_CODE.ERROR, err)
  sendResponse(res, result)
}

function handleError(err, req, res, next) {
  // unhandled error
  sendError(res, err)
}

function sendSuccess(res, result, statusCode = RESPONSE_STATUS.SUCCESS) {
  result = new ApiResponse(STATUS_CODE.SUCCESS, result)
  sendResponse(res, result, statusCode)
}

function sendSuccessWithMsg(res, msg, statusCode = RESPONSE_STATUS.SUCCESS) {
  let rslt = { message: msg }
  let result = new ApiResponse(STATUS_CODE.SUCCESS, rslt)
  sendResponse(res, result, statusCode)
}

 export {
  sendResponse,
  sendError,
  sendSuccess,

}
