load("@rules_proto//proto:defs.bzl", "proto_library")

package(default_visibility = ["//visibility:public"])

proto_library(
  name = "file_slim_proto",
  srcs = ["file_slim.proto"],
  deps = []
)

proto_library(
  name = "mail_proto",
  srcs = ["mail.proto"],
  deps = [
    "//google/api:annotations_proto",
    "@com_google_protobuf//:empty_proto",
    "//cict/common/v1:annotations_proto",
  ]
)

proto_library(
  name = "template_proto",
  srcs = ["template.proto"],
  deps = [
    "//google/api:annotations_proto",
    "@com_google_protobuf//:field_mask_proto",
    "//cict/common/v1:annotations_proto",
    "//cict/common/v1:enum_mask_behavior_proto",
    "//cict/common/v1:paginate_proto",
    ":file_slim_proto",
  ]
)
