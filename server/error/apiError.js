export default class ApiError extends Error {
  constructor(code, message) {
    super();
    this.code = code;
    this.message = message;
  }

  static badRequest = (message) => new ApiError(404, message);
  static internal = (message) => new ApiError(500, message);
  static forbidden = (message) => new ApiError(403, message);
}
