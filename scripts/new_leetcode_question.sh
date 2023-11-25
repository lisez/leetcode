#!/usr/bin/env bash

script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)

main() {
  local fn
  fn=$(echo "${1//./}" | tr " " "_")
  touch "${script_dir}/../algorithms/${fn}.ts"
}

main "$@"
