const responceHandler = {
    success: (res, statuscode = 200, message, data) => {
        return res.status(statuscode).json({
            success: true,
            message,
            data
        })
    },
    error: (res, statuscode = 500, message) => {
        return res.status(statuscode).json({
            success: false,
            message: message || "internal server error",
        })
    }
}

module.exports = {responceHandler}