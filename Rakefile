#!/usr/bin/env ruby

require 'html-proofer'
require 'mdspell'
require 'rspec/core/rake_task'

task :default => [:server]

task :yarn do 
    sh "yarn install --modules-folder ./_assets/yarn"
end

task :generate do
    system "jekyll"
end

task :build do
    system "jekyll build"
end


task :serve do
    system "jekyll serve --baseurl ''"
end

task :compile do 
    system "bundle exec jekyll build -d public"
end

task :deploy do
    system "set -e"
    system "echo \"Started deploying\""
    system "if [ `git branch | grep gh-pages` ] \
    then \
        git branch -D gh-pages \
    fi \
    git checkout -b gh-pages"

    Rake::Task["yarn"].execute
    Rake::Task["build"].execute
    

    system "find . -maxdepth 1 ! -name '_site' ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;"
    system "mv _site/* ."
    system "rm -R _site/"

    system "git add -fA"
    system "git commit --allow-empty -m $(git log -1 --pretty=%B)"
    system "git push -f -q origin gh-pages"

    system "git checkout -"
    system "yarn install --modules-folder ./_assets/yarn"

    system "echo \"Deployed Successfully!\""

    exit 0
end

task :deploy_to_test => [:generate] do
    sh "rsync -av --rsh='ssh -p 2683' _site/ narendasan@narendasan.comt:public_html/beta/"
end

task :proof do
    RSpec::Core::RakeTask.new(:spec) do |t|
      t.pattern = 'spec/spelling_spec.rb'
    end
    Rake::Task["spec"].execute
end

task :html do
    options = { :assume_extension => true }
    HTMLProofer.check_directory("./_site").run
end

task :test do 
    RSpec::Core::RakeTask.new(:spec)
    Rake::Task["spec"].execute
    options = { :assume_extension => true }
    HTMLProofer.check_directory("./_site").run
end