/**
 * Base class of all exceptions in framework
 */
export class Exception extends Error {
  /**
   * Constructs new exception with message
   * @param message - error message
   */
  constructor(message?: string) {
    super(message);
  }
}

/**
 * Exception thrown when functionality is not supported
 */
export class NotSupported extends Exception {}

/**
 * Exception thrown when argument passed to function is invalid eg. out of range
 */
export class InvalidArgument extends Exception {}

/**
 * The exception that is thrown when a method call is invalid for the object's current state.
 */
export class InvalidOperation extends Exception {}

/**
 * Exception is thrown when authentication fails eg. user credentials are invalid
 */
export class AuthenticationFailed extends Exception {}

/**
 * Exception is thrown when request data are invalid
 */
export class BadRequest extends Exception {}

/**
 * Exception indicating that an access to resource by a client has been forbidden by the server
 * HTTP 403 - Forbidden
 */
export class Forbidden extends Exception {}
 

/**
 * Exception thrown when there was error with IO operations ie. not accessible file
 */
export class IOFail extends Exception {}

/**
 * The exception that is thrown when resource is not found eg. model in database or missing file
 */
export class ResourceNotFound extends Exception {}

/**
 * The exception that is thrown when method is not implemented
 */
export class MethodNotImplemented extends Exception {}

/**
 * The exception that is thrown when strange things happends in server eg. generic server error
 */
export class UnexpectedServerError extends Exception {}

/**
 * Exception occurs when resource is duplicated eg. unique constraint failed in db
 */
export class ResourceDuplicated extends Exception {}

/**
 * The exception that is thrown when JSON entity is checked against schema and is invalid
 */
export class ValidationFailed extends Exception {
  public parameter: any;

  constructor(message: string, validationErrors: any) {
    super(message);
    this.parameter = validationErrors;
  }
}

/**
 * The exception that is thrown when JSON entity is checked against schema and is invalid
 */
export class JsonValidationFailed extends Exception {}

/**
 * The exception that is thrown if app not supports requestes `Accept` header eg. if client wants
 * html response but server can send only json.
 */
export class ExpectedResponseUnacceptable extends Exception {}
