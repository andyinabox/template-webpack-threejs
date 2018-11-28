#!/bin/bash

TEMPLATE_NAME="template-webpack-threejs"

echo "Setting up template..."

read -p "What is the name of your new project? (kabab-case): " name

sed -i '' "s/$TEMPLATE_NAME/$name/g" package.json
sed -i '' 's/^\s+"setup": "\.\/setup\.sh",$//g' package.json
rm -rf ./.git
git init
yarn install

rm ./setup.sh

echo "Done."