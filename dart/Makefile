.PHONY: dart
dart:
	@../bazel-out/host/bin/external/com_google_protobuf/protoc \
		--dart_out=grpc:build \
		-I../ -I../google -I../bazel-cictapis/external/com_google_protobuf/src \
		../cict/*/v1/*.proto

.PHONY: build_descriptor
build_descriptor:
	cd .. && bazel build //envoy/...

ready: build_descriptor dart
