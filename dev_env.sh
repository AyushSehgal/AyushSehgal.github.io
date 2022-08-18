#!/bin/sh
echo "-----------------------------------"
echo "Welcome to Ayush's Dev Environment"
echo "-----------------------------------"
echo ""
echo ""


# CLI Tools
echo "1. Command Line Tools"
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo "Homebrew install complete"
echo "-----------------------------------"

brew install python 
echo "Python install complete"
echo "-----------------------------------"
brew install anaconda

brew install speedtest-cli
echo "Internet Speedtest install complete"
echo "-----------------------------------"

echo "2. Shortcuts"
echo "Press 1 if your default shell is bash, 2 if it is zsh"
read option
if [ $option == 1 ]
then
    echo "alias gc="git commit -m"" >> ~/.bashrc
    echo "aias gs="git status"" >> ~/.bashrc
    echo "function cl { cd "$@" && ls }" >> ~/.bashrc
    echo "function mkdirc { mkdir "$@" && cd "$@" }" >> ~/.bashrc
    echo "function remove_file { rm "$@" && echo ""$@" removed successfully" }" >> ~/.bashrc
    echo "function remove_dir { rm -r "$@" echo ""$@" removed successfully" }" >> ~/.bashrc
    echo "function hello { echo "hello Ayush" }" >> ~/.bashrc
    source ~/.bashrc
else 
    echo "alias gc="git commit -m"" >> ~/.zshrc
    echo "aias gs="git status"" >> ~/.zshrc
    echo "function cl { cd "$@" && ls }" >> ~/.zshrc
    echo "function mkdirc { mkdir "$@" && cd "$@" }" >> ~/.zshrc
    echo "function remove_file { rm "$@" && echo ""$@" removed successfully" }" >> ~/.zshrc
    echo "function remove_dir { rm -r "$@" echo ""$@" removed successfully" }" >> ~/.zshrc
    echo "function hello { echo "hello Ayush" }" >> ~/.zshrc
    source ~/.zshrc
fi
echo "configs complete"
echo "-----------------------------------"

