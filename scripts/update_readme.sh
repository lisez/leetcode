#!/usr/bin/env bash

script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
readme_path="$script_dir/../README.md"
langs=("ecmascript")

get_relpath() {
  local base="$1"
  local target="$2"
  realpath --relative-to="$base" "$target"
}

get_title() {
  local path="$1"
  basename "$path" | cut -d. -f1 | sed -E 's/^[0-9]+\.//'
}

main() {
  echo -e "# LeetCode\n" >"$readme_path"
  for lang in "${langs[@]}"; do
    echo -e "## $lang\n" >>"$readme_path"

    local lang_dir="$script_dir/../$lang"

    for file in "$lang_dir"/*; do
      local abs_path
      abs_path=$(realpath "$file")
      local relpath
      relpath=$(get_relpath "$script_dir/../" "$abs_path")

      echo "- [$(get_title "$relpath")]($relpath)" >>"$readme_path"
    done
  done
}

main "$@"
