#!/bin/bash

# 現在の日付を取得 (形式: YYYY-MM-DD)
current_date=$(date +"%Y-%m-%d")

# 出力ファイル名
output_file="TOHO_DOS_Archive_${current_date}.zip"

# 圧縮対象ディレクトリ
source_dir="./TOHO_DOS"

# zip コマンドで圧縮 (高圧縮率)
zip -r -9 "$output_file" "$source_dir"

# 結果の確認
if [ $? -eq 0 ]; then
  echo "圧縮が完了しました: $output_file"
else
  echo "圧縮中にエラーが発生しました。"
fi
