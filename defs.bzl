"""Compilation rules definition for proto_descriptor."""	

def proto_descriptor(name, out, srcs = [], external_deps = []):
  """Function description.

  Args:
    name: argument description, can be
      multiline with additional indentation.
    out: argument out
    srcs: argument srcs
    external_deps: arguments external_deps
  """
  input_files = ["$(location " + src + ")" for src in srcs]	
  include_paths = [".", native.package_name()]	

  if "well_known_protos" in external_deps:	
    srcs.append("@com_google_protobuf//:well_known_protos")	
    include_paths.append("external/com_google_protobuf/src")	

  options = ["--include_imports"]	
  options.extend(["-I" + include_path for include_path in include_paths])	
  options.append("--descriptor_set_out=$@")	

  cmd = "$(location @com_google_protobuf//:protoc) " + " ".join(options + input_files)	
  native.genrule(	
    name = name,	
    srcs = srcs,	
    outs = [out],	
    cmd = cmd,	
    tools = ["@com_google_protobuf//:protoc"],	
  )
