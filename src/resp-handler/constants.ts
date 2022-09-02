
const  STATUS_CODE= {
    ERROR: 0,
    SUCCESS: 1,
    INVALID_TOKEN: 1000,
  }
 const RESPONSE_STATUS= {
    SUCCESS: 200,
    SUCCESS_CREATED: 201,
    SUCCESS_NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    NOT_ALLOWED: 405,
    INTERNAL_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    ALREADY_EXISTS: 409,
    PCP_CONSTRAINT: 400
  }
  const ERROR_TYPE= {
    NOT_FOUND: 'NotFoundError',
    INTERNAL_SERVER_ERROR: 'InternalServerError',
    BAD_REQUEST: 'BadRequestError',
    NOT_IMPLEMENTED: 'NotImplementedError',
    ALREADY_EXISTS: 'DateANDTimeExistsError',
    NOT_ALLOWED: 'MethodNotAllowedError',
  }

  export {ERROR_TYPE, STATUS_CODE, RESPONSE_STATUS}
//   USER_ROLE: {
//     provider: "Provider",
//     platfromAdmin: "Platform Admin",
//     patient: "Patient",
//     family: "Family",
//     PlatformSuperAdmin: 'Platform Super Admin',
//     OrganizationAdmin: "Organization Admin"
//   },

//   DeleteFamilySubject: 'Delete Family Of a Patient Request',
//   OnboardFmilysubject: 'On Boarding of the Patient Family',
//   DeleteTemplate: './template/unassignFamily.html',
//   OnboardTemplate: './template/familyDetail.html',

//   DefaultStartDate: 'January 1, 1970 00:00:00',


//   BiometricData_PROCESS_FAILED: "Failed to process Biometric data",
//   Notification_Failure: "Notification Failure",
//   Invited:"invited",



//   KEYFALSE : 'false',
//   KEYTRUE : 'true',
//   ImportUserLimit:101,

// }

