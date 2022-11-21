# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cict/common/v1/annotations.proto](#cict_common_v1_annotations-proto)
    - [File-level Extensions](#cict_common_v1_annotations-proto-extensions)
  
- [cict/common/v1/config.proto](#cict_common_v1_config-proto)
    - [Config](#cict-common-v1-Config)
    - [DatabaseConfig](#cict-common-v1-DatabaseConfig)
    - [MetadataConfig](#cict-common-v1-MetadataConfig)
    - [OtLoggerConfig](#cict-common-v1-OtLoggerConfig)
    - [OtMetricConfig](#cict-common-v1-OtMetricConfig)
    - [OtTracerConfig](#cict-common-v1-OtTracerConfig)
    - [RedisConfig](#cict-common-v1-RedisConfig)
    - [ServerConfig](#cict-common-v1-ServerConfig)
  
- [cict/common/v1/crud_policy.proto](#cict_common_v1_crud_policy-proto)
    - [CrudPolicyEnum](#cict-common-v1-CrudPolicyEnum)
  
    - [CrudPolicyEnum.CrudPolicy](#cict-common-v1-CrudPolicyEnum-CrudPolicy)
  
- [cict/common/v1/paginate.proto](#cict_common_v1_paginate-proto)
    - [PaginateRequest](#cict-common-v1-PaginateRequest)
    - [PaginateResponse](#cict-common-v1-PaginateResponse)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cict_common_v1_annotations-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cict/common/v1/annotations.proto


 

 


<a name="cict_common_v1_annotations-proto-extensions"></a>

### File-level Extensions
| Extension | Type | Base | Number | Description |
| --------- | ---- | ---- | ------ | ----------- |
| crudPolicy | CrudPolicyEnum.CrudPolicy | .google.protobuf.MethodOptions | 1000001 |  |

 

 



<a name="cict_common_v1_config-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cict/common/v1/config.proto



<a name="cict-common-v1-Config"></a>

### Config



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ot_tracer_config | [OtTracerConfig](#cict-common-v1-OtTracerConfig) |  |  |
| ot_logger_config | [OtLoggerConfig](#cict-common-v1-OtLoggerConfig) |  |  |
| ot_metric_config | [OtMetricConfig](#cict-common-v1-OtMetricConfig) |  |  |
| redis_config | [RedisConfig](#cict-common-v1-RedisConfig) |  |  |
| server_config | [ServerConfig](#cict-common-v1-ServerConfig) |  |  |
| database_config | [DatabaseConfig](#cict-common-v1-DatabaseConfig) |  |  |
| metadata_config | [MetadataConfig](#cict-common-v1-MetadataConfig) |  |  |






<a name="cict-common-v1-DatabaseConfig"></a>

### DatabaseConfig



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |
| port | [int32](#int32) |  |  |
| user_name | [string](#string) |  |  |
| password | [string](#string) |  |  |
| database | [string](#string) |  |  |
| migrations | [bool](#bool) |  |  |






<a name="cict-common-v1-MetadataConfig"></a>

### MetadataConfig



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session_id | [string](#string) |  |  |
| internal_auth_error | [string](#string) |  |  |






<a name="cict-common-v1-OtLoggerConfig"></a>

### OtLoggerConfig







<a name="cict-common-v1-OtMetricConfig"></a>

### OtMetricConfig







<a name="cict-common-v1-OtTracerConfig"></a>

### OtTracerConfig



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| endpoints | [string](#string) |  |  |
| use_ssl_credentials | [bool](#bool) |  |  |
| ssl_credentials_cacert_path | [string](#string) |  |  |






<a name="cict-common-v1-RedisConfig"></a>

### RedisConfig



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |
| port | [int32](#int32) |  |  |
| redis_db | [string](#string) |  |  |
| redis_default_db | [string](#string) |  |  |
| min_idl_conns | [int32](#int32) |  |  |
| pool_size | [int32](#int32) |  |  |
| pool_timeout | [int32](#int32) |  |  |
| session_timeout | [int32](#int32) |  |  |






<a name="cict-common-v1-ServerConfig"></a>

### ServerConfig



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |
| port | [int32](#int32) |  |  |





 

 

 

 



<a name="cict_common_v1_crud_policy-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cict/common/v1/crud_policy.proto



<a name="cict-common-v1-CrudPolicyEnum"></a>

### CrudPolicyEnum






 


<a name="cict-common-v1-CrudPolicyEnum-CrudPolicy"></a>

### CrudPolicyEnum.CrudPolicy


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNSPECIFIED | 0 | Not specfied, should show fatal error. |
| SUPPER_USER | 1 | Supper user can operate admin. |
| ADMIN | 2 | Admin can operate data Supper user can operate data. |
| USER | 3 | User can operate data Admin, supperuser can operate data |
| AUTH | 4 | Auth user can operate |
| ANONYMOUS | 5 | Anonymous user can operate. |
| ANYONE | 6 | Anyone can operate. |
| SYSTEM | 7 | System can operate. |
| STANDARD_PRIVACY | 8 | User can operate their own data; admin, supperuser can operate data. |


 

 

 



<a name="cict_common_v1_paginate-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cict/common/v1/paginate.proto



<a name="cict-common-v1-PaginateRequest"></a>

### PaginateRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| page | [int32](#int32) |  |  |
| per_page | [int32](#int32) |  |  |






<a name="cict-common-v1-PaginateResponse"></a>

### PaginateResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| current_page | [int32](#int32) |  |  |
| per_page | [int32](#int32) |  |  |
| total | [int32](#int32) |  |  |
| last_page | [int32](#int32) |  |  |
| first_page_url | [string](#string) |  |  |
| last_page_url | [string](#string) |  |  |
| next_page_url | [string](#string) |  |  |
| prev_page_url | [string](#string) |  |  |
| from | [int32](#int32) |  |  |
| to | [int32](#int32) |  |  |





 

 

 

 



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

