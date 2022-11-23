cmake_minimum_required(VERSION 3.8)

install(DIRECTORY "grpc-gateway/bazel-bin/cict/common/v1/cict_common_v1_api_gateway_grpc/cict/" DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/swagger)
install(DIRECTORY "grpc-gateway/bazel-bin/cict/service-auth/v1/cict_service_auth_v1_api_gateway_grpc/cict/" DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/swagger)
install(DIRECTORY "grpc-gateway/bazel-bin/cict/service-course/v1/cict_service_course_v1_api_gateway_grpc/cict/" DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/swagger)
install(DIRECTORY "grpc-gateway/bazel-bin/cict/service-dormitory/v1/cict_service_dormitory_v1_api_gateway_grpc/cict/" DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/swagger)
