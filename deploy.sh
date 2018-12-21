#!/usr/bin/env bash
set -eo pipefail

# Push our latest revision to GitHub
git push origin master

# Clean rebuild
npm install
npm run build

# Create deploy environment inside of .deploy directory
mkdir .deploy
cd .deploy
git init
git remote add origin git@github.com:litecoinz-project/litecoinz-web-wallet.git
git checkout -b website

# Add built site files
cp -r ../dist/* .
echo "wallet.litecoinz.org" >> CNAME
git add .
git commit -m 'Publish'
git push -f origin website

# Cleanup .deploy directory after a successful push
cd .. && rm -rf .deploy
