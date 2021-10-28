# maglu_website

The office website of Lucy Industrial Co.,Ltd. Coded with bootstrap and angular 5.

## Environment Information

```
Angular CLI: 6.2.9
Node: 12.22.7
OS: darwin x64
Angular: 5.2.2
... animations, common, compiler, compiler-cli, core, forms
... http, platform-browser, platform-browser-dynamic
... platform-server, router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.8.9
@angular-devkit/build-angular     0.8.9
@angular-devkit/build-optimizer   0.8.9
@angular-devkit/build-webpack     0.8.9
@angular-devkit/core              0.8.9
@angular-devkit/schematics        0.8.9
@angular/cli                      6.2.9
@angular/language-service         4.0.0
@schematics/angular               0.8.9
@schematics/update                0.8.9
rxjs                              5.5.6
typescript                        2.6.1
webpack                           4.16.4
```

## Setup Develop Environment

### Mac

#### Install HomeBrew

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Install NVM

Now, you system is ready for the installation. Update the Homebrew package list and install NVM.

```sh
brew update
brew install nvm
```

Next, create a directory for NVM in home.

```sh
mkdir ~/.nvm
```

Now, configure the required environment variables. Edit the following configuration file in your home directory

```sh
vim ~/.bash_profile
```

and, add below lines to ~/.bash_profile ( or ~/.zshrc for macOS Catalina or later)

```
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

Press ESC + :wq to save and close your file.

Next, load the variable to the current shell environment. From the next login, it will automatically loaded.

```sh
source ~/.bash_profile
```

That’s it. The NVM has been installed on your macOS system. Go to next step to install Node.js versions with the help of nvm.

### Install Node 12

```sh
nvm install 12
nvm use 12
```

After installing you can verify what is installed with:

```sh
nvm ls
```

## Run

First of all, download project from github

```
git clone https://github.com/zaq258123/maglu_website.git
```

Install modules

```
npm install
```

Run on local host

```
ng serve
```

## Deploy to GitHub Pages

```
ng build --prod --base-href "https://www.maglu.com.tw/"
```

```
npx ngh --message="version x.x.yymmdd" --cname=www.maglu.com.tw
```

[More detials for deploy to github pages](https://josephjsf2.github.io/angular/2019/06/13/deploy-angular-to-gitpage.html)
