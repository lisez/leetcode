#!/usr/bin/env bash

script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)

main() {
  local fn
  fn=$(echo "${1//./}" | tr " " "_")
  p="${script_dir}/../algorithms/${fn}.ts"
  if [[ -f "$p" ]]; then
    echo "File already exists: $p"
    exit 1
  fi
  touch "$p"
}

main "$@"
