// Way of using async and await for async operation Template

const asyncHandler = (requestHandler) => {
  return (req,res,next) => {
    Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
  }
}

// const asyncHandler = (fn) => async (req, res, next) => {   //! Higher Order Function use
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
