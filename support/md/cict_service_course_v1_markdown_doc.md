# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cict/service-course/v1/course_field.proto](#cict_service-course_v1_course_field-proto)
    - [CourseField](#cict-service_course-v1-CourseField)
    - [GetCourseFieldRequest](#cict-service_course-v1-GetCourseFieldRequest)
    - [GetCourseFieldResponse](#cict-service_course-v1-GetCourseFieldResponse)
    - [ListCourseFieldRequest](#cict-service_course-v1-ListCourseFieldRequest)
    - [ListCourseFieldResponse](#cict-service_course-v1-ListCourseFieldResponse)
    - [MutateCourseFieldRequest](#cict-service_course-v1-MutateCourseFieldRequest)
    - [MutateCourseFieldResponse](#cict-service_course-v1-MutateCourseFieldResponse)
  
    - [CourseFieldService](#cict-service_course-v1-CourseFieldService)
  
- [cict/service-course/v1/course_timetable_day.proto](#cict_service-course_v1_course_timetable_day-proto)
    - [CourseTimetableDay](#cict-service_course-v1-CourseTimetableDay)
    - [GetCourseTimetableDayRequest](#cict-service_course-v1-GetCourseTimetableDayRequest)
    - [GetCourseTimetableDayResponse](#cict-service_course-v1-GetCourseTimetableDayResponse)
    - [ListCourseTimetableDayRequest](#cict-service_course-v1-ListCourseTimetableDayRequest)
    - [ListCourseTimetableDayResponse](#cict-service_course-v1-ListCourseTimetableDayResponse)
    - [MutateCourseTimetableDayRequest](#cict-service_course-v1-MutateCourseTimetableDayRequest)
    - [MutateCourseTimetableDayResponse](#cict-service_course-v1-MutateCourseTimetableDayResponse)
  
    - [CourseTimetableDayService](#cict-service_course-v1-CourseTimetableDayService)
  
- [cict/service-course/v1/course_timetable_week.proto](#cict_service-course_v1_course_timetable_week-proto)
    - [CourseTimetableWeek](#cict-service_course-v1-CourseTimetableWeek)
    - [GetCourseTimetableWeekRequest](#cict-service_course-v1-GetCourseTimetableWeekRequest)
    - [GetCourseTimetableWeekResponse](#cict-service_course-v1-GetCourseTimetableWeekResponse)
    - [ListCourseTimetableWeekRequest](#cict-service_course-v1-ListCourseTimetableWeekRequest)
    - [ListCourseTimetableWeekResponse](#cict-service_course-v1-ListCourseTimetableWeekResponse)
    - [MutateCourseTimetableWeekRequest](#cict-service_course-v1-MutateCourseTimetableWeekRequest)
    - [MutateCourseTimetableWeekResponse](#cict-service_course-v1-MutateCourseTimetableWeekResponse)
  
    - [CourseTimetableWeekService](#cict-service_course-v1-CourseTimetableWeekService)
  
- [cict/service-course/v1/course_timetable.proto](#cict_service-course_v1_course_timetable-proto)
    - [GetUserTimetableRequest](#cict-service_course-v1-GetUserTimetableRequest)
    - [GetUserTimetableResponse](#cict-service_course-v1-GetUserTimetableResponse)
  
    - [CourseTimetable](#cict-service_course-v1-CourseTimetable)
  
- [cict/service-course/v1/course.proto](#cict_service-course_v1_course-proto)
    - [Course](#cict-service_course-v1-Course)
    - [GetCourseRequest](#cict-service_course-v1-GetCourseRequest)
    - [GetCourseResponse](#cict-service_course-v1-GetCourseResponse)
    - [ListCourseRequest](#cict-service_course-v1-ListCourseRequest)
    - [ListCourseResponse](#cict-service_course-v1-ListCourseResponse)
    - [MutateCourseRequest](#cict-service_course-v1-MutateCourseRequest)
    - [MutateCourseResponse](#cict-service_course-v1-MutateCourseResponse)
    - [RegisterCourseRequest](#cict-service_course-v1-RegisterCourseRequest)
    - [User](#cict-service_course-v1-User)
  
    - [CourseService](#cict-service_course-v1-CourseService)
  
- [cict/service-course/v1/exam_schedule.proto](#cict_service-course_v1_exam_schedule-proto)
    - [ExamSchedule](#cict-service_course-v1-ExamSchedule)
    - [GetExamScheduleRequest](#cict-service_course-v1-GetExamScheduleRequest)
    - [GetExamScheduleResponse](#cict-service_course-v1-GetExamScheduleResponse)
    - [GetUpcomingExamScheduleRequest](#cict-service_course-v1-GetUpcomingExamScheduleRequest)
    - [GetUpcomingExamScheduleResponse](#cict-service_course-v1-GetUpcomingExamScheduleResponse)
    - [ListExamScheduleRequest](#cict-service_course-v1-ListExamScheduleRequest)
    - [ListExamScheduleResponse](#cict-service_course-v1-ListExamScheduleResponse)
    - [MutateExamScheduleRequest](#cict-service_course-v1-MutateExamScheduleRequest)
    - [MutateExamScheduleResponse](#cict-service_course-v1-MutateExamScheduleResponse)
  
    - [ExamScheduleService](#cict-service_course-v1-ExamScheduleService)
  
- [cict/service-course/v1/exam_score.proto](#cict_service-course_v1_exam_score-proto)
    - [ExamScore](#cict-service_course-v1-ExamScore)
    - [GetExamScoreRequest](#cict-service_course-v1-GetExamScoreRequest)
    - [GetExamScoreResponse](#cict-service_course-v1-GetExamScoreResponse)
    - [ListExamScoreRequest](#cict-service_course-v1-ListExamScoreRequest)
    - [ListExamScoreResponse](#cict-service_course-v1-ListExamScoreResponse)
    - [MutateExamScoreRequest](#cict-service_course-v1-MutateExamScoreRequest)
    - [MutateExamScoreResponse](#cict-service_course-v1-MutateExamScoreResponse)
  
    - [ExamScoreService](#cict-service_course-v1-ExamScoreService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cict_service-course_v1_course_field-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cict/service-course/v1/course_field.proto



<a name="cict-service_course-v1-CourseField"></a>

### CourseField



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | @gotags: gorm:&#34;primaryKey&#34; |
| name | [string](#string) |  | @gotags: gorm:&#34;&lt;-&#34; |
| courses | [Course](#cict-service_course-v1-Course) | repeated | Has many relationships with Course |
| updatedAt | [int64](#int64) |  | @gotags: gorm:&#34;autoUpdateTime:nano&#34; |
| createdAt | [int64](#int64) |  | @gotags: gorm:&#34;autoCreateTime:nano&#34; |






<a name="cict-service_course-v1-GetCourseFieldRequest"></a>

### GetCourseFieldRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  |  |






<a name="cict-service_course-v1-GetCourseFieldResponse"></a>

### GetCourseFieldResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| courseField | [CourseField](#cict-service_course-v1-CourseField) |  |  |






<a name="cict-service_course-v1-ListCourseFieldRequest"></a>

### ListCourseFieldRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| paginate | [cict.common.v1.PaginateRequest](#cict-common-v1-PaginateRequest) |  |  |






<a name="cict-service_course-v1-ListCourseFieldResponse"></a>

### ListCourseFieldResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| courseFields | [CourseField](#cict-service_course-v1-CourseField) | repeated |  |






<a name="cict-service_course-v1-MutateCourseFieldRequest"></a>

### MutateCourseFieldRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| updateMask | [google.protobuf.FieldMask](#google-protobuf-FieldMask) |  |  |
| create | [Course](#cict-service_course-v1-Course) |  |  |
| update | [Course](#cict-service_course-v1-Course) |  |  |
| delete | [Course](#cict-service_course-v1-Course) |  |  |






<a name="cict-service_course-v1-MutateCourseFieldResponse"></a>

### MutateCourseFieldResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mutatedId | [uint64](#uint64) |  |  |





 

 

 


<a name="cict-service_course-v1-CourseFieldService"></a>

### CourseFieldService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| MutateCourseField | [MutateCourseFieldRequest](#cict-service_course-v1-MutateCourseFieldRequest) | [MutateCourseFieldResponse](#cict-service_course-v1-MutateCourseFieldResponse) |  |
| GetCourseField | [GetCourseFieldRequest](#cict-service_course-v1-GetCourseFieldRequest) | [GetCourseFieldResponse](#cict-service_course-v1-GetCourseFieldResponse) |  |
| ListCourseField | [ListCourseFieldRequest](#cict-service_course-v1-ListCourseFieldRequest) | [ListCourseFieldResponse](#cict-service_course-v1-ListCourseFieldResponse) |  |

 



<a name="cict_service-course_v1_course_timetable_day-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cict/service-course/v1/course_timetable_day.proto



<a name="cict-service_course-v1-CourseTimetableDay"></a>

### CourseTimetableDay



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | @gotags: gorm:&#34;primaryKey&#34; |
| day | [uint32](#uint32) |  | @gotags: gorm:&#34;&lt;-&#34; |
| active | [bool](#bool) |  | @gotags: gorm:&#34;&lt;-&#34; |
| courseTimetableWeekId | [uint64](#uint64) |  | Belong to relationship CourseTimetableWeek |
| updatedAt | [int64](#int64) |  | @gotags: gorm:&#34;autoUpdateTime:nano&#34; |
| createdAt | [int64](#int64) |  | @gotags: gorm:&#34;autoCreateTime:nano&#34; |






<a name="cict-service_course-v1-GetCourseTimetableDayRequest"></a>

### GetCourseTimetableDayRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  |  |






<a name="cict-service_course-v1-GetCourseTimetableDayResponse"></a>

### GetCourseTimetableDayResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| courseTimetableDay | [CourseTimetableDay](#cict-service_course-v1-CourseTimetableDay) |  |  |






<a name="cict-service_course-v1-ListCourseTimetableDayRequest"></a>

### ListCourseTimetableDayRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| paginate | [cict.common.v1.PaginateRequest](#cict-common-v1-PaginateRequest) |  |  |






<a name="cict-service_course-v1-ListCourseTimetableDayResponse"></a>

### ListCourseTimetableDayResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| courseTimetableDays | [CourseTimetableDay](#cict-service_course-v1-CourseTimetableDay) | repeated |  |






<a name="cict-service_course-v1-MutateCourseTimetableDayRequest"></a>

### MutateCourseTimetableDayRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| updateMask | [google.protobuf.FieldMask](#google-protobuf-FieldMask) |  |  |
| create | [CourseTimetableDay](#cict-service_course-v1-CourseTimetableDay) |  |  |
| update | [CourseTimetableDay](#cict-service_course-v1-CourseTimetableDay) |  |  |
| delete | [CourseTimetableDay](#cict-service_course-v1-CourseTimetableDay) |  |  |






<a name="cict-service_course-v1-MutateCourseTimetableDayResponse"></a>

### MutateCourseTimetableDayResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mutatedId | [uint64](#uint64) |  |  |





 

 

 


<a name="cict-service_course-v1-CourseTimetableDayService"></a>

### CourseTimetableDayService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| MutateCourseTimetableDay | [MutateCourseTimetableDayRequest](#cict-service_course-v1-MutateCourseTimetableDayRequest) | [MutateCourseTimetableDayResponse](#cict-service_course-v1-MutateCourseTimetableDayResponse) |  |
| GetCourseTimetableDay | [GetCourseTimetableDayRequest](#cict-service_course-v1-GetCourseTimetableDayRequest) | [GetCourseTimetableDayResponse](#cict-service_course-v1-GetCourseTimetableDayResponse) |  |
| ListCourseTimetableDay | [ListCourseTimetableDayRequest](#cict-service_course-v1-ListCourseTimetableDayRequest) | [ListCourseTimetableDayResponse](#cict-service_course-v1-ListCourseTimetableDayResponse) |  |

 



<a name="cict_service-course_v1_course_timetable_week-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cict/service-course/v1/course_timetable_week.proto



<a name="cict-service_course-v1-CourseTimetableWeek"></a>

### CourseTimetableWeek



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | @gotags: gorm:&#34;primaryKey&#34; |
| courseId | [uint64](#uint64) |  | Belong to relationship |
| week | [uint32](#uint32) |  | @gotags: gorm:&#34;&lt;-&#34; |
| active | [bool](#bool) |  | @gotags: gorm:&#34;&lt;-&#34; |
| courseTimetableDays | [CourseTimetableDay](#cict-service_course-v1-CourseTimetableDay) | repeated | HasMany relationship CourseTimetableDay |
| updatedAt | [int64](#int64) |  | @gotags: gorm:&#34;autoUpdateTime:nano&#34; |
| createdAt | [int64](#int64) |  | @gotags: gorm:&#34;autoCreateTime:nano&#34; |






<a name="cict-service_course-v1-GetCourseTimetableWeekRequest"></a>

### GetCourseTimetableWeekRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  |  |






<a name="cict-service_course-v1-GetCourseTimetableWeekResponse"></a>

### GetCourseTimetableWeekResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| courseTimetableWeek | [CourseTimetableWeek](#cict-service_course-v1-CourseTimetableWeek) |  |  |






<a name="cict-service_course-v1-ListCourseTimetableWeekRequest"></a>

### ListCourseTimetableWeekRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| paginate | [cict.common.v1.PaginateRequest](#cict-common-v1-PaginateRequest) |  |  |






<a name="cict-service_course-v1-ListCourseTimetableWeekResponse"></a>

### ListCourseTimetableWeekResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| courseTimetableWeeks | [CourseTimetableWeek](#cict-service_course-v1-CourseTimetableWeek) | repeated |  |






<a name="cict-service_course-v1-MutateCourseTimetableWeekRequest"></a>

### MutateCourseTimetableWeekRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| updateMask | [google.protobuf.FieldMask](#google-protobuf-FieldMask) |  |  |
| create | [CourseTimetableWeek](#cict-service_course-v1-CourseTimetableWeek) |  |  |
| update | [CourseTimetableWeek](#cict-service_course-v1-CourseTimetableWeek) |  |  |
| delete | [CourseTimetableWeek](#cict-service_course-v1-CourseTimetableWeek) |  |  |






<a name="cict-service_course-v1-MutateCourseTimetableWeekResponse"></a>

### MutateCourseTimetableWeekResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mutatedId | [uint64](#uint64) |  |  |





 

 

 


<a name="cict-service_course-v1-CourseTimetableWeekService"></a>

### CourseTimetableWeekService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| MutateCourseTimetableWeek | [MutateCourseTimetableWeekRequest](#cict-service_course-v1-MutateCourseTimetableWeekRequest) | [MutateCourseTimetableWeekResponse](#cict-service_course-v1-MutateCourseTimetableWeekResponse) |  |
| GetCourseTimetableWeek | [GetCourseTimetableWeekRequest](#cict-service_course-v1-GetCourseTimetableWeekRequest) | [GetCourseTimetableWeekResponse](#cict-service_course-v1-GetCourseTimetableWeekResponse) |  |
| ListCourseTimetableWeek | [ListCourseTimetableWeekRequest](#cict-service_course-v1-ListCourseTimetableWeekRequest) | [ListCourseTimetableWeekResponse](#cict-service_course-v1-ListCourseTimetableWeekResponse) |  |

 



<a name="cict_service-course_v1_course_timetable-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cict/service-course/v1/course_timetable.proto



<a name="cict-service_course-v1-GetUserTimetableRequest"></a>

### GetUserTimetableRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userId | [uint64](#uint64) |  |  |
| courseId | [uint64](#uint64) |  |  |
| weekId | [uint64](#uint64) |  |  |






<a name="cict-service_course-v1-GetUserTimetableResponse"></a>

### GetUserTimetableResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| courseTimetableDays | [CourseTimetableDay](#cict-service_course-v1-CourseTimetableDay) | repeated |  |





 

 

 


<a name="cict-service_course-v1-CourseTimetable"></a>

### CourseTimetable


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetUserTimetable | [GetUserTimetableRequest](#cict-service_course-v1-GetUserTimetableRequest) | [GetUserTimetableResponse](#cict-service_course-v1-GetUserTimetableResponse) |  |

 



<a name="cict_service-course_v1_course-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cict/service-course/v1/course.proto



<a name="cict-service_course-v1-Course"></a>

### Course



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | @gotags: gorm:&#34;primaryKey&#34; |
| name | [string](#string) |  | @gotags: gorm:&#34;&lt;-&#34; |
| description | [string](#string) |  | @gotags: gorm:&#34;&lt;-&#34; |
| fromDate | [string](#string) |  | @gotags: gorm:&#34;&lt;-&#34; |
| toDate | [string](#string) |  | @gotags: gorm:&#34;&lt;-&#34; |
| capacity | [uint32](#uint32) |  | @gotags: gorm:&#34;&lt;-&#34; |
| size | [uint32](#uint32) |  | @gotags: gorm:&#34;&lt;-&#34; |
| courseFieldId | [uint64](#uint64) |  | Belong to CourseField |
| courseTimetableWeeks | [CourseTimetableWeek](#cict-service_course-v1-CourseTimetableWeek) | repeated | Has many relationships CourseTimetableWeek |
| examSchedules | [ExamSchedule](#cict-service_course-v1-ExamSchedule) | repeated | Has many relationships ExamSchedule |
| users | [User](#cict-service_course-v1-User) | repeated | Many to many relationship User |
| updatedAt | [int64](#int64) |  | @gotags: gorm:&#34;autoUpdateTime:nano&#34; |
| createdAt | [int64](#int64) |  | @gotags: gorm:&#34;autoCreateTime:nano&#34; |






<a name="cict-service_course-v1-GetCourseRequest"></a>

### GetCourseRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  |  |






<a name="cict-service_course-v1-GetCourseResponse"></a>

### GetCourseResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| course | [Course](#cict-service_course-v1-Course) |  |  |






<a name="cict-service_course-v1-ListCourseRequest"></a>

### ListCourseRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| paginate | [cict.common.v1.PaginateRequest](#cict-common-v1-PaginateRequest) |  |  |






<a name="cict-service_course-v1-ListCourseResponse"></a>

### ListCourseResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| courses | [Course](#cict-service_course-v1-Course) | repeated |  |






<a name="cict-service_course-v1-MutateCourseRequest"></a>

### MutateCourseRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| updateMask | [google.protobuf.FieldMask](#google-protobuf-FieldMask) |  |  |
| create | [Course](#cict-service_course-v1-Course) |  |  |
| update | [Course](#cict-service_course-v1-Course) |  |  |
| delete | [Course](#cict-service_course-v1-Course) |  |  |






<a name="cict-service_course-v1-MutateCourseResponse"></a>

### MutateCourseResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mutatedId | [uint64](#uint64) |  |  |






<a name="cict-service_course-v1-RegisterCourseRequest"></a>

### RegisterCourseRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userId | [uint64](#uint64) |  |  |
| courseId | [uint64](#uint64) |  |  |






<a name="cict-service_course-v1-User"></a>

### User



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | @gotags: gorm:&#34;primaryKey&#34; |
| courses | [Course](#cict-service_course-v1-Course) | repeated | Many to many relationships Course |
| updatedAt | [int64](#int64) |  | @gotags: gorm:&#34;autoUpdateTime:nano&#34; |
| createdAt | [int64](#int64) |  | @gotags: gorm:&#34;autoCreateTime:nano&#34; |





 

 

 


<a name="cict-service_course-v1-CourseService"></a>

### CourseService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| MutateCourse | [MutateCourseRequest](#cict-service_course-v1-MutateCourseRequest) | [MutateCourseResponse](#cict-service_course-v1-MutateCourseResponse) |  |
| GetCourse | [GetCourseRequest](#cict-service_course-v1-GetCourseRequest) | [GetCourseResponse](#cict-service_course-v1-GetCourseResponse) |  |
| ListCourse | [ListCourseRequest](#cict-service_course-v1-ListCourseRequest) | [ListCourseResponse](#cict-service_course-v1-ListCourseResponse) |  |
| RegisterCourse | [RegisterCourseRequest](#cict-service_course-v1-RegisterCourseRequest) | [.google.protobuf.Empty](#google-protobuf-Empty) |  |

 



<a name="cict_service-course_v1_exam_schedule-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cict/service-course/v1/exam_schedule.proto



<a name="cict-service_course-v1-ExamSchedule"></a>

### ExamSchedule



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | @gotags: gorm:&#34;primaryKey&#34; |
| name | [string](#string) |  | @gotags: gorm:&#34;&lt;-&#34; |
| description | [string](#string) |  | @gotags: gorm:&#34;&lt;-&#34; |
| examDate | [string](#string) |  | @gotags: gorm:&#34;&lt;-&#34; |
| courseId | [uint64](#uint64) |  | Belong to relationships Course |
| updatedAt | [int64](#int64) |  | @gotags: gorm:&#34;autoUpdateTime:nano&#34; |
| createdAt | [int64](#int64) |  | @gotags: gorm:&#34;autoCreateTime:nano&#34; |






<a name="cict-service_course-v1-GetExamScheduleRequest"></a>

### GetExamScheduleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  |  |






<a name="cict-service_course-v1-GetExamScheduleResponse"></a>

### GetExamScheduleResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| course | [ExamSchedule](#cict-service_course-v1-ExamSchedule) |  |  |






<a name="cict-service_course-v1-GetUpcomingExamScheduleRequest"></a>

### GetUpcomingExamScheduleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| courseId | [uint64](#uint64) |  |  |






<a name="cict-service_course-v1-GetUpcomingExamScheduleResponse"></a>

### GetUpcomingExamScheduleResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| examSchedules | [ExamSchedule](#cict-service_course-v1-ExamSchedule) | repeated |  |






<a name="cict-service_course-v1-ListExamScheduleRequest"></a>

### ListExamScheduleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| paginate | [cict.common.v1.PaginateRequest](#cict-common-v1-PaginateRequest) |  |  |






<a name="cict-service_course-v1-ListExamScheduleResponse"></a>

### ListExamScheduleResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| courses | [ExamSchedule](#cict-service_course-v1-ExamSchedule) | repeated |  |






<a name="cict-service_course-v1-MutateExamScheduleRequest"></a>

### MutateExamScheduleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| updateMask | [google.protobuf.FieldMask](#google-protobuf-FieldMask) |  |  |
| create | [ExamSchedule](#cict-service_course-v1-ExamSchedule) |  |  |
| update | [ExamSchedule](#cict-service_course-v1-ExamSchedule) |  |  |
| delete | [ExamSchedule](#cict-service_course-v1-ExamSchedule) |  |  |






<a name="cict-service_course-v1-MutateExamScheduleResponse"></a>

### MutateExamScheduleResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mutatedId | [uint64](#uint64) |  |  |





 

 

 


<a name="cict-service_course-v1-ExamScheduleService"></a>

### ExamScheduleService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| MutateExamSchedule | [MutateExamScheduleRequest](#cict-service_course-v1-MutateExamScheduleRequest) | [MutateExamScheduleResponse](#cict-service_course-v1-MutateExamScheduleResponse) |  |
| GetExamSchedule | [GetExamScheduleRequest](#cict-service_course-v1-GetExamScheduleRequest) | [GetExamScheduleResponse](#cict-service_course-v1-GetExamScheduleResponse) |  |
| ListExamSchedule | [ListExamScheduleRequest](#cict-service_course-v1-ListExamScheduleRequest) | [ListExamScheduleResponse](#cict-service_course-v1-ListExamScheduleResponse) |  |
| GetUpcomingExamSchedule | [GetUpcomingExamScheduleRequest](#cict-service_course-v1-GetUpcomingExamScheduleRequest) | [GetUpcomingExamScheduleResponse](#cict-service_course-v1-GetUpcomingExamScheduleResponse) |  |

 



<a name="cict_service-course_v1_exam_score-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cict/service-course/v1/exam_score.proto



<a name="cict-service_course-v1-ExamScore"></a>

### ExamScore



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | @gotags: gorm:&#34;primaryKey&#34; |
| score | [float](#float) |  | @gotags: gorm:&#34;&lt;-&#34; |
| examScheduleId | [uint64](#uint64) |  | Belong to relationship ExamSchedule |
| userId | [uint64](#uint64) |  | Belong to relationship User |
| updatedAt | [int64](#int64) |  | @gotags: gorm:&#34;autoUpdateTime:nano&#34; |
| createdAt | [int64](#int64) |  | @gotags: gorm:&#34;autoCreateTime:nano&#34; |






<a name="cict-service_course-v1-GetExamScoreRequest"></a>

### GetExamScoreRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  |  |






<a name="cict-service_course-v1-GetExamScoreResponse"></a>

### GetExamScoreResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| examScore | [ExamScore](#cict-service_course-v1-ExamScore) |  |  |






<a name="cict-service_course-v1-ListExamScoreRequest"></a>

### ListExamScoreRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| paginate | [cict.common.v1.PaginateRequest](#cict-common-v1-PaginateRequest) |  |  |






<a name="cict-service_course-v1-ListExamScoreResponse"></a>

### ListExamScoreResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| examScores | [ExamScore](#cict-service_course-v1-ExamScore) | repeated |  |






<a name="cict-service_course-v1-MutateExamScoreRequest"></a>

### MutateExamScoreRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| updateMask | [google.protobuf.FieldMask](#google-protobuf-FieldMask) |  |  |
| create | [ExamScore](#cict-service_course-v1-ExamScore) |  |  |
| update | [ExamScore](#cict-service_course-v1-ExamScore) |  |  |
| delete | [ExamScore](#cict-service_course-v1-ExamScore) |  |  |






<a name="cict-service_course-v1-MutateExamScoreResponse"></a>

### MutateExamScoreResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mutatedId | [uint64](#uint64) |  |  |





 

 

 


<a name="cict-service_course-v1-ExamScoreService"></a>

### ExamScoreService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| MutateExamScore | [MutateExamScoreRequest](#cict-service_course-v1-MutateExamScoreRequest) | [MutateExamScoreResponse](#cict-service_course-v1-MutateExamScoreResponse) |  |
| GetExamScore | [GetExamScoreRequest](#cict-service_course-v1-GetExamScoreRequest) | [GetExamScoreResponse](#cict-service_course-v1-GetExamScoreResponse) |  |
| ListExamScore | [ListExamScoreRequest](#cict-service_course-v1-ListExamScoreRequest) | [ListExamScoreResponse](#cict-service_course-v1-ListExamScoreResponse) |  |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

