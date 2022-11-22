module.exports = {
  // ERQU
  files: [
    'google/api/annotations.proto',
    'google/api/http.proto',

    'cict/common/v1/annotations.proto',
    'cict/common/v1/config.proto',
    'cict/common/v1/crud_policy.proto',
    'cict/common/v1/paginate.proto',

    'cict/service-auth/v1/enum_authenticate_third_party.proto',
    'cict/service-auth/v1/enum_system_role.proto',
    'cict/service-auth/v1/profile.proto',
    'cict/service-auth/v1/session.proto',
    'cict/service-auth/v1/user.proto',

    'cict/service-course/v1/course_field.proto',
    'cict/service-course/v1/course_timetable_day.proto',
    'cict/service-course/v1/course_timetable_week.proto',
    'cict/service-course/v1/course_timetable.proto',
    'cict/service-course/v1/course.proto',
    'cict/service-course/v1/exam_schedule.proto',
    'cict/service-course/v1/exam_score.proto',

    'cict/service-dormitory/v1/registration_form.proto',
    'cict/service-dormitory/v1/user.proto',
  ],
  // Optional
  dist: 'apischema.json',
  // Optional
  formatServicePath: (path) => path.replace(/\./g, '/'),
  // Optional, will convert long to string by default
  long: 'number',
  // Optional
  // This will merge and overwrite the result parsed from protobuffer file.
  // `paths` will merge by path
  // `components` will merge by component except shcemas
  customSchema: {
    swagger: '2.0',
    paths: {
      '/api/test': {
        get: {
          responses: {
            200: {
              schema: {
                $ref: 'GetDataResponse', // Tell me the protobuf message name
              },
            },
          },
          params: [],
        },
      },
    },
    components: {
      securitySchemes: {
        cookieAuth: {
          type: 'apiKey',
          in: 'cookie',
          name: 'token',
        },
      },
    },
    security: [
      {
        cookieAuth: [],
      },
    ],
  },
  // Optional, you may use this hook to overwrite the original transform result.
  transform(type, result, args) {
    switch (type) {
      case 'field': {
        const [field, options] = args;
        console.log('message field:', field);
        console.log('options:', options);
        break;
      }
      case 'message': {
        const [message, options] = args;
        console.log('message:', message);
        console.log('options:', options);
        break;
      }
      case 'enum': {
        const [enumval] = args;
        console.log('enum:', enumval);
        break;
      }
      case 'service': {
        const [service, root, options] = args;
        console.log('service:', service);
        console.log('proto root:', root);
        console.log('options:', options);
      }
    }
    return result;
  },
};
