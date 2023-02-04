protoc := $(shell find ../bazel-out/ -type f -name "protoc")
.PHONY: dart
dart:
	@mkdir -p build
	@$(protoc) --dart_out=grpc:build \
		-I../ -I../bazel-cictapis/external/com_google_protobuf/src \
		../google/api/*.proto
	@$(protoc) --dart_out=grpc:build \
		-I../ -I../bazel-cictapis/external/com_google_protobuf/src \
		../cict/*/v1/*.proto

	@rm -rf ../../../cict
	@rm -rf ../../../google
	@cp -r build/* ../../../
build_descriptor:
	@cd .. && bazel build //envoy/...

ready: build_descriptor dart
