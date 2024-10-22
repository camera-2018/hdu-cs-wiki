#!/usr/bin/env bash

# 要处理的文件夹路径
folder_path=$1

# 遍历文件夹中的所有文件
for file in "$folder_path"/*; do
    # 跳过非文件的条目
    if [[ ! -f "$file" ]]; then
        continue
    fi

    # 获取文件名和文件扩展名
    filename=$(basename "$file")
    extension="${filename##*.}"
    name="${filename%.*}"

    # 计算文件的 MD5 校验和
    checksum=$(md5sum "$file" | awk '{print $1}')

    # 构造新的文件名
    new_filename="${name}_${checksum}.${extension}"

    # 重命名文件
    mv "$file" "$folder_path/$new_filename"
done
