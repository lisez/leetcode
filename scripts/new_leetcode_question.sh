#!/usr/bin/env bash

script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)

main() {

  local qname="$1"
  local ft="$2"
  local fn
  fn=$(echo "${qname//./}" | tr " " "_")

  case "$ft" in
  ts | js)
    p="${script_dir}/../ecmascript/${fn}.ts"
    ;;
  *)
    echo "Unknown file type: $ft"
    exit 1
    ;;
  esac

  if [[ -f "$p" ]]; then
    echo "File already exists: $p"
    exit 1
  fi
  touch "$p"
}

main "$@"
