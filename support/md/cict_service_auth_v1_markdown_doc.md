# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cict/service-auth/v1/enum_authenticate_third_party.proto](#cict_service-auth_v1_enum_authenticate_third_party-proto)
    - [EnumAuthenticateThirdParty](#cict-service_auth-v1-EnumAuthenticateThirdParty)
  
    - [EnumAuthenticateThirdParty.AuthenticateThirdParty](#cict-service_auth-v1-EnumAuthenticateThirdParty-AuthenticateThirdParty)
  
- [cict/service-auth/v1/enum_system_role.proto](#cict_service-auth_v1_enum_system_role-proto)
    - [EnumSystemRole](#cict-service_auth-v1-EnumSystemRole)
  
    - [EnumSystemRole.SystemRole](#cict-service_auth-v1-EnumSystemRole-SystemRole)
  
- [cict/service-auth/v1/profile.proto](#cict_service-auth_v1_profile-proto)
    - [Profile](#cict-service_auth-v1-Profile)
  
    - [ProfileService](#cict-service_auth-v1-ProfileService)
  
- [cict/service-auth/v1/session.proto](#cict_service-auth_v1_session-proto)
    - [AuthenticateSessionRequest](#cict-service_auth-v1-AuthenticateSessionRequest)
    - [Session](#cict-service_auth-v1-Session)
  
    - [SessionService](#cict-service_auth-v1-SessionService)
  
- [cict/service-auth/v1/user.proto](#cict_service-auth_v1_user-proto)
    - [GetUserRequest](#cict-service_auth-v1-GetUserRequest)
    - [GetUserResponse](#cict-service_auth-v1-GetUserResponse)
    - [ListUserRequest](#cict-service_auth-v1-ListUserRequest)
    - [ListUserResponse](#cict-service_auth-v1-ListUserResponse)
    - [LoginRequest](#cict-service_auth-v1-LoginRequest)
    - [LoginResponse](#cict-service_auth-v1-LoginResponse)
    - [LogoutRequest](#cict-service_auth-v1-LogoutRequest)
    - [MutateUserRequest](#cict-service_auth-v1-MutateUserRequest)
    - [MutateUserResponse](#cict-service_auth-v1-MutateUserResponse)
    - [User](#cict-service_auth-v1-User)
  
    - [UserService](#cict-service_auth-v1-UserService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cict_service-auth_v1_enum_authenticate_third_party-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cict/service-auth/v1/enum_authenticate_third_party.proto



<a name="cict-service_auth-v1-EnumAuthenticateThirdParty"></a>

### EnumAuthenticateThirdParty






 


<a name="cict-service_auth-v1-EnumAuthenticateThirdParty-AuthenticateThirdParty"></a>

### EnumAuthenticateThirdParty.AuthenticateThirdParty


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNSPECIFIED | 0 |  |
| GMAIL_ORGANIZATION | 1 |  |
| REGIS | 2 |  |


 

 

 



<a name="cict_service-auth_v1_enum_system_role-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cict/service-auth/v1/enum_system_role.proto



<a name="cict-service_auth-v1-EnumSystemRole"></a>

### EnumSystemRole






 


<a name="cict-service_auth-v1-EnumSystemRole-SystemRole"></a>

### EnumSystemRole.SystemRole


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNSPECIFIED | 0 |  |
| USER | 1 |  |
| ADMIN | 2 |  |
| SUPPER_USER | 3 |  |


 

 

 



<a name="cict_service-auth_v1_profile-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cict/service-auth/v1/profile.proto



<a name="cict-service_auth-v1-Profile"></a>

### Profile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | @gotags: gorm:&#34;primaryKey&#34; |





 

 

 


<a name="cict-service_auth-v1-ProfileService"></a>

### ProfileService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|

 



<a name="cict_service-auth_v1_session-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cict/service-auth/v1/session.proto



<a name="cict-service_auth-v1-AuthenticateSessionRequest"></a>

### AuthenticateSessionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sessionId | [string](#string) |  |  |






<a name="cict-service_auth-v1-Session"></a>

### Session



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| userId | [uint64](#uint64) |  |  |
| email | [string](#string) |  |  |
| name | [string](#string) |  |  |





 

 

 


<a name="cict-service_auth-v1-SessionService"></a>

### SessionService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| AuthenticateSession | [AuthenticateSessionRequest](#cict-service_auth-v1-AuthenticateSessionRequest) | [.google.protobuf.Empty](#google-protobuf-Empty) |  |

 



<a name="cict_service-auth_v1_user-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cict/service-auth/v1/user.proto



<a name="cict-service_auth-v1-GetUserRequest"></a>

### GetUserRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  |  |






<a name="cict-service_auth-v1-GetUserResponse"></a>

### GetUserResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [User](#cict-service_auth-v1-User) |  |  |






<a name="cict-service_auth-v1-ListUserRequest"></a>

### ListUserRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| paginate | [cict.common.v1.PaginateRequest](#cict-common-v1-PaginateRequest) |  |  |






<a name="cict-service_auth-v1-ListUserResponse"></a>

### ListUserResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| users | [User](#cict-service_auth-v1-User) | repeated |  |






<a name="cict-service_auth-v1-LoginRequest"></a>

### LoginRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| email | [string](#string) |  |  |
| password | [string](#string) |  |  |
| validatePassword | [string](#string) |  |  |






<a name="cict-service_auth-v1-LoginResponse"></a>

### LoginResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [User](#cict-service_auth-v1-User) |  |  |
| sessionId | [string](#string) |  |  |






<a name="cict-service_auth-v1-LogoutRequest"></a>

### LogoutRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sessionId | [string](#string) |  |  |






<a name="cict-service_auth-v1-MutateUserRequest"></a>

### MutateUserRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| create | [User](#cict-service_auth-v1-User) |  |  |
| update | [User](#cict-service_auth-v1-User) |  |  |
| delete | [User](#cict-service_auth-v1-User) |  |  |






<a name="cict-service_auth-v1-MutateUserResponse"></a>

### MutateUserResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mutatedId | [uint64](#uint64) |  |  |






<a name="cict-service_auth-v1-User"></a>

### User



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | @gotags: gorm:&#34;primaryKey&#34; |
| authenticateThirdParty | [EnumAuthenticateThirdParty.AuthenticateThirdParty](#cict-service_auth-v1-EnumAuthenticateThirdParty-AuthenticateThirdParty) |  | @gotags: gorm:&#34;&lt;-&#34; |
| gmailOrganization | [string](#string) |  | allow read and write

@gotags: gorm:&#34;&lt;-&#34; |
| regisUsername | [string](#string) |  | @gotags: gorm:&#34;&lt;-&#34; |
| regisPassword | [string](#string) |  | @gotags: gorm:&#34;&lt;-&#34; |
| name | [string](#string) |  | allow read and write

@gotags: gorm:&#34;&lt;-&#34; |
| avatar | [string](#string) |  | allow read and write

@gotags: gorm:&#34;&lt;-&#34; |
| systemRole | [EnumSystemRole.SystemRole](#cict-service_auth-v1-EnumSystemRole-SystemRole) |  | allow read and write

@gotags: gorm:&#34;&lt;-&#34; |
| updatedAt | [int64](#int64) |  | @gotags: gorm:&#34;autoUpdateTime:nano&#34; |
| createdAt | [int64](#int64) |  | @gotags: gorm:&#34;autoCreateTime:nano&#34; |





 

 

 


<a name="cict-service_auth-v1-UserService"></a>

### UserService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Login | [LoginRequest](#cict-service_auth-v1-LoginRequest) | [LoginResponse](#cict-service_auth-v1-LoginResponse) |  |
| Logout | [LogoutRequest](#cict-service_auth-v1-LogoutRequest) | [.google.protobuf.Empty](#google-protobuf-Empty) |  |
| MutateUser | [MutateUserRequest](#cict-service_auth-v1-MutateUserRequest) | [MutateUserResponse](#cict-service_auth-v1-MutateUserResponse) |  |
| GetUser | [GetUserRequest](#cict-service_auth-v1-GetUserRequest) | [GetUserResponse](#cict-service_auth-v1-GetUserResponse) |  |
| ListUser | [ListUserRequest](#cict-service_auth-v1-ListUserRequest) | [ListUserResponse](#cict-service_auth-v1-ListUserResponse) |  |

 



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

