---
layout: wiki
title: My .zshrc
last_updated: 2021-01-19
---

```
# ==============================================================================
# === Terminal - config ===
export PS1='%1d$ '
export CLICOLOR=1
export LSCOLORS=ExFxCxDxBxegedabagacad
export LC_ALL=en_US.UTF-8

# === Terminal - Java ===
JAVA_HOME_VERSION=`cat /Users/karreiro/.javaversion`
export JAVA_HOME="/Library/Java/JavaVirtualMachines/$JAVA_HOME_VERSION/Contents/Home"

# === Terminal - Maven ===
export M2_HOME="/usr/local/Cellar/maven/3.6.3_1"
export PATH="$M2_HOME/bin:$PATH"
export MAVEN_OPTS="-Xms8g -Xmx16g"
export JAVA_OPTS=$MAVEN_OPTS

# === Terminal - Brew ===
export PATH="$PATH:/usr/local/sbin"

# === Terminal - RVM ===
[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm"


# ==============================================================================
# === Aliases - apps ===
alias subl='/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl'
alias vscode='/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code >/dev/null 2>&1'
alias idea='open -a "`ls -dt /Applications/IntelliJ\ IDEA*|head -1`"'
alias ia='open -a "iA Writer"'

# === Aliases - directories ===
alias forks='cd /Users/karreiro/Projects/forks'
alias dmn='cd /Users/karreiro/Projects/forks/kie-wb-common/kie-wb-common-dmn'
alias blog='cd /Users/karreiro/Projects/blog'
alias wiki='cd /Users/karreiro/Projects/blog/wiki'

# === Aliases - actions (rb) ===
alias git-date='ruby /Users/karreiro/Dropbox/Work/git-date.rb'
alias git-raw='ruby /Users/karreiro/Dropbox/Work/git-raw.rb'
alias temperature='ruby /Users/karreiro/Dropbox/Work/temperature.rb'
alias bitcoin='ruby /Users/karreiro/Dropbox/Work/bitcoin.rb'
alias killjava='ruby /Users/karreiro/Dropbox/Work/kill_java.rb'

# === Aliases - keyboard training ===
alias kbtraining-rec='ruby /Users/karreiro/Projects/kbtraining/record.rb'
alias kbtraining-list='ruby /Users/karreiro/Projects/kbtraining/see.rb'
alias kbtraining-edit='subl /Users/karreiro/Projects/kbtraining/exercises.yml'

# === Aliases - actions (others) ===
alias beep='/Users/karreiro/Dropbox/Work/beep.sh'
alias kie-help='cat /Users/karreiro/Dropbox/Work/utils.txt'
alias wildfly-start='./standalone.sh -c standalone-full.xml'
alias push='git add . && git commit -m "." && git push -f'
alias keep='git add . && git commit -m "."'
alias reset-master='git fetch upstream && git checkout master && git reset upstream/master --hard'

# === Aliases - env ===
alias python='python3'
alias pip='pip3'
alias pngquant-compress='pngquant -f --ext .png **/*.png'
alias dmn-spec='open /Users/karreiro/Projects/DMN-docs/dtc-19-12-06.pdf'
alias raw='ia /Users/karreiro/Projects/blog/wiki/raw/index.md'

# === Aliases - Java env
alias mci='mvn clean install -T 6 -Denforcer.skip=true -Dcheckstyle.skip=true -DskipTests=true -Dgwt.compiler.skip=true && beep'
alias mcs='mvn clean install -Denforcer.skip=true -Dcheckstyle.skip=true -DskipTests=true && beep'
alias mck='mvn clean install -Pkogito -Denforcer.skip=true -Dcheckstyle.skip=true -DskipTests=true && beep'


# ==============================================================================
# === Functions - Base - formatted echo ===
puts() {
  echo "\n\n🐙 >>> $1\n"
}

# === Functions - Base - free space by cleanling .m2 and targets (from forks) ===
free-space() {
  puts "(1/2) Remove .war, .jar, and .zip from .m2"
  find /Users/karreiro/.m2 -name "*.war" | xargs rm && find /Users/karreiro/.m2 -name "*.jar" | xargs rm && find /Users/karreiro/.m2 -name "*.zip" | xargs rm
  puts "(2/2) Remove target dirs from forks"
  cd /Users/karreiro/Projects/forks
  find . -type d -name target -prune -exec rm -r {} +
}

# === Functions - Base - configure DMN web app on idea ===
dmn-config-on-idea() {
  rm /Users/karreiro/Projects/forks/kie-wb-common/kie-wb-common-dmn/.idea/workspace.xml
  cp /Users/karreiro/Projects/DMN-docs/workspace.xml /Users/karreiro/Projects/forks/kie-wb-common/kie-wb-common-dmn/.idea
}

# === Functions - Java env - switch to Java env ===
switch-java-env() {
  echo "$1" > /Users/karreiro/.javaversion
  source /Users/karreiro/.zshrc
  java -version
}
java8() {
  switch-java-env "jdk1.8.0_191.jdk"
}
java11() {
  switch-java-env "jdk-11.0.7.jdk"
}

# === Functions - Java env - Start DMN dev env ===
dmn-start() {
  puts "(1/2) - Start DMN dev env - Build Stunner"
  cd /Users/karreiro/Projects/forks/kie-wb-common/kie-wb-common-stunner
  mci

  puts "(2/2) - Start DMN dev env - Build DMN"
  cd /Users/karreiro/Projects/forks/kie-wb-common/kie-wb-common-dmn
  mcs
}

# === Functions - Java env - build VSCode plugin for DMN ===
dmn-build-vsix() {

  # SHHH! zsh
  setopt localoptions rmstarsilent

  puts " Build DMN .vsix file"

  puts "(1/5) - Build DMN .vsix file - Build DMN client"
  cd /Users/karreiro/Projects/forks/kie-wb-common/kie-wb-common-dmn
  mci

  puts "(2/5) - Build DMN .vsix file - Build DMN kogito runtime"
  cd /Users/karreiro/Projects/forks/kie-wb-common/kie-wb-common-dmn/kie-wb-common-dmn-webapp-kogito-runtime
  mck

  puts "(3/5) - Build DMN .vsix file - Set environment variables"
  export EXTERNAL_RESOURCE_PATH__dmnEditor=/Users/karreiro/Projects/forks/kie-wb-common/kie-wb-common-dmn/kie-wb-common-dmn-webapp-kogito-runtime/target/kie-wb-common-dmn-webapp-kogito-runtime

  puts "(4/5) - Build DMN .vsix file - Build Kogito Tooling"
  cd /Users/karreiro/Projects/forks/kogito-tooling
  reset-master
  yarn run init
  yarn run build:fast

  puts "(5/5) - Build DMN .vsix file - Move .vsix file to home"
  cd /Users/karreiro/Projects/forks/kogito-tooling/packages/vscode-extension-pack-kogito-kie-editors
  yarn run package:prod
  open /Users/karreiro/Projects/forks/kogito-tooling/packages/vscode-extension-pack-kogito-kie-editors/dist/
}

# === Functions - Java env - build VSCode plugin for SceSim ===
scesim-build-vsix() {

  # SHHH! zsh
  setopt localoptions rmstarsilent

  puts " Build SceSim .vsix file"

  puts "(1/5) - Build SceSim .vsix file - Build drools-wb client"
  cd /Users/karreiro/Projects/forks/drools-wb
  mci

  puts "(2/5) - Build SceSim .vsix file - Build DMN kogito runtime"
  mvn clean install -DskipTests -Denforcer.skip -pl drools-wb-screens/drools-wb-scenario-simulation-editor/drools-wb-scenario-simulation-editor-kogito-runtime -am -T 2 -B

  puts "(3/5) - Build SceSim .vsix file - Set environment variables"
  export EXTERNAL_RESOURCE_PATH__scesimEditor=/Users/karreiro/Projects/forks/drools-wb/drools-wb-screens/drools-wb-scenario-simulation-editor/drools-wb-scenario-simulation-editor-kogito-runtime/target/drools-wb-scenario-simulation-editor-kogito-runtime

  puts "(4/5) - Build SceSim .vsix file - Build Kogito Tooling"
  cd /Users/karreiro/Projects/forks/kogito-tooling
  reset-master
  yarn run init
  yarn run build:fast

  puts "(5/5) - Build SceSim .vsix file - Move .vsix file to home"
  cd /Users/karreiro/Projects/forks/kogito-tooling/packages/vscode-extension-pack-kogito-kie-editors
  yarn run package:prod
  open /Users/karreiro/Projects/forks/kogito-tooling/packages/vscode-extension-pack-kogito-kie-editors/dist/
}

# === Functions - Java env - build intellisense ensemble ===
intellisense-build() {
  git checkout CLIENT_SIDE_FEEL-gwt29-stable-2
  mci
}
intellisense-build-all() {
  forks

  # origin ~> https://github.com/treblereel/gwt-bigmath
  # echo "\n\n\n(1/7) >>> Build gwt-bigmath"
  cd gwt-bigmath
  # intellisense-build

  # origin ~> https://github.com/aranega/antlr4-gwt
  # echo "\n\n\n(2/7) >>> Build antlr4-gwt"
  # cd ../antlr4-gwt
  # intellisense-build

  # origin ~> https://github.com/Rikkola/antlr4-c3-gwt
  # echo "\n\n\n(3/7) >>> Build antlr4-c3-gwt"
  # cd ../antlr4-c3-gwt
  # intellisense-build

  echo "\n\n\n(4/7) >>> Build droolsjbpm-build-bootstrap"
  cd ../droolsjbpm-build-bootstrap
  intellisense-build

  echo "\n\n\n(5/7) >>> Build appformer"
  cd ../appformer
  intellisense-build

  echo "\n\n\n(6/7) >>> Build drools"
  cd ../drools
  intellisense-build

  echo "\n\n\n(7/7) >>> DMN"
  cd ../kie-wb-common
  intellisense-build
}

# === Functions - Git env - checks what was pushed during some period ===
#               - Usage: what-did-we-deliver "2020-07-06" "2020-07-26"
what-did-we-deliver-here() {
  # SHHH! zsh
  setopt localoptions rmstarsilent

  echo "=> $1"
  cd "/Users/karreiro/Projects/forks/$1"
  git checkout -b what-did-we-deliver > /dev/null 2>&1
  git fetch upstream > /dev/null 2>&1
  git reset upstream/master --hard > /dev/null 2>&1
  git log --pretty=format:"%an (%ar): %s" --after="$2" --until="$3" --author="David|Alex|Myriam|Guilherme Car|Daniel |Handrey|Jaime|Kirill|Roger|Toni|Valentino|Wagner|Yeser|Dominik|Jan|Jozef|Lubomir|Liz|Heena|Stetson"
}
what-did-we-deliver() {
  what-did-we-deliver-here "appformer" "$1" "$2"
  what-did-we-deliver-here "drools" "$1" "$2"
  what-did-we-deliver-here "drools-wb" "$1" "$2"
  what-did-we-deliver-here "droolsjbpm-build-bootstrap" "$1" "$2"
  what-did-we-deliver-here "droolsjbpm-integration" "$1" "$2"
  what-did-we-deliver-here "droolsjbpm-knowledge" "$1" "$2"
  what-did-we-deliver-here "errai" "$1" "$2"
  what-did-we-deliver-here "gwt-jsonix-schema-compiler" "$1" "$2"
  what-did-we-deliver-here "jbpm-wb" "$1" "$2"
  what-did-we-deliver-here "kie-docs" "$1" "$2"
  what-did-we-deliver-here "kie-soup" "$1" "$2"
  what-did-we-deliver-here "kie-wb-common" "$1" "$2"
  what-did-we-deliver-here "kogito-runtimes" "$1" "$2"
  what-did-we-deliver-here "kogito-tooling" "$1" "$2"
  what-did-we-deliver-here "lienzo-core" "$1" "$2"
  what-did-we-deliver-here "lienzo-tests" "$1" "$2"
}

# ==============================================================================
```
