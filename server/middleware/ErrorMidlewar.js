import ApiError from "../error/apiError.js";

export default (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.code).json({ message: err.message });
  }

  return res.status(500).json({ message: "Unknown error" });
};
