#!/bin/bash
#
#
# Author: vermacodes
#
# This script installs everything you would need in base image. 
# This will help boot speed.
#

apt update
apt install curl -y
apt install openjdk-19-jre-headless -y
sleep 5s
apt install openjdk-19-jre-headless -y # Installing second time if first fails

# # Install/Configure everything node.
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

# export NVM_DIR="$HOME/.nvm"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
# [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# nvm install lts
# npm config set legacy-peer-deps true
# npm install