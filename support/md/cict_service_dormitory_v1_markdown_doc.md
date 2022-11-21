# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cict/service-dormitory/v1/registration_form.proto](#cict_service-dormitory_v1_registration_form-proto)
    - [GetRegistrationFormRequest](#cict-service_dormitory-v1-GetRegistrationFormRequest)
    - [GetRegistrationFormResponse](#cict-service_dormitory-v1-GetRegistrationFormResponse)
    - [ListRegistrationFormRequest](#cict-service_dormitory-v1-ListRegistrationFormRequest)
    - [ListRegistrationFormResponse](#cict-service_dormitory-v1-ListRegistrationFormResponse)
    - [MutateRegistrationFormRequest](#cict-service_dormitory-v1-MutateRegistrationFormRequest)
    - [MutateRegistrationFormResponse](#cict-service_dormitory-v1-MutateRegistrationFormResponse)
    - [RegistrationForm](#cict-service_dormitory-v1-RegistrationForm)
  
    - [RegistrationFormService](#cict-service_dormitory-v1-RegistrationFormService)
  
- [cict/service-dormitory/v1/user.proto](#cict_service-dormitory_v1_user-proto)
    - [User](#cict-service_dormitory-v1-User)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cict_service-dormitory_v1_registration_form-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cict/service-dormitory/v1/registration_form.proto



<a name="cict-service_dormitory-v1-GetRegistrationFormRequest"></a>

### GetRegistrationFormRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  |  |






<a name="cict-service_dormitory-v1-GetRegistrationFormResponse"></a>

### GetRegistrationFormResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| registrationForm | [RegistrationForm](#cict-service_dormitory-v1-RegistrationForm) |  |  |






<a name="cict-service_dormitory-v1-ListRegistrationFormRequest"></a>

### ListRegistrationFormRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| paginate | [cict.common.v1.PaginateRequest](#cict-common-v1-PaginateRequest) |  |  |






<a name="cict-service_dormitory-v1-ListRegistrationFormResponse"></a>

### ListRegistrationFormResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| registrationForms | [RegistrationForm](#cict-service_dormitory-v1-RegistrationForm) | repeated |  |






<a name="cict-service_dormitory-v1-MutateRegistrationFormRequest"></a>

### MutateRegistrationFormRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| updateMask | [google.protobuf.FieldMask](#google-protobuf-FieldMask) |  |  |
| create | [RegistrationForm](#cict-service_dormitory-v1-RegistrationForm) |  |  |
| update | [RegistrationForm](#cict-service_dormitory-v1-RegistrationForm) |  |  |
| delete | [RegistrationForm](#cict-service_dormitory-v1-RegistrationForm) |  |  |






<a name="cict-service_dormitory-v1-MutateRegistrationFormResponse"></a>

### MutateRegistrationFormResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mutatedId | [uint64](#uint64) |  |  |






<a name="cict-service_dormitory-v1-RegistrationForm"></a>

### RegistrationForm



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | @gotags: gorm:&#34;primaryKey&#34; |
| userId | [uint64](#uint64) |  | Belong to relationships |
| updatedAt | [int64](#int64) |  | @gotags: gorm:&#34;autoUpdateTime:nano&#34; |
| createdAt | [int64](#int64) |  | @gotags: gorm:&#34;autoCreateTime:nano&#34; |





 

 

 


<a name="cict-service_dormitory-v1-RegistrationFormService"></a>

### RegistrationFormService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| MutateRegistrationForm | [MutateRegistrationFormRequest](#cict-service_dormitory-v1-MutateRegistrationFormRequest) | [MutateRegistrationFormResponse](#cict-service_dormitory-v1-MutateRegistrationFormResponse) |  |
| GetRegistrationForm | [GetRegistrationFormRequest](#cict-service_dormitory-v1-GetRegistrationFormRequest) | [GetRegistrationFormResponse](#cict-service_dormitory-v1-GetRegistrationFormResponse) |  |
| ListRegistrationForm | [ListRegistrationFormRequest](#cict-service_dormitory-v1-ListRegistrationFormRequest) | [ListRegistrationFormResponse](#cict-service_dormitory-v1-ListRegistrationFormResponse) |  |

 



<a name="cict_service-dormitory_v1_user-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cict/service-dormitory/v1/user.proto



<a name="cict-service_dormitory-v1-User"></a>

### User



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | @gotags: gorm:&#34;primaryKey&#34; |
| registrationForms | [RegistrationForm](#cict-service_dormitory-v1-RegistrationForm) | repeated | Has many relationship RegistrationForm |
| updatedAt | [int64](#int64) |  | @gotags: gorm:&#34;autoUpdateTime:nano&#34; |
| createdAt | [int64](#int64) |  | @gotags: gorm:&#34;autoCreateTime:nano&#34; |





 

 

 

 



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

