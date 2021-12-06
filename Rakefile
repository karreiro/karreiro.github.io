# frozen_string_literal: true

require "jekyll"
require "rubocop/rake_task"
require "./_lib/wiki"
require "./_lib/wiki_processor"

desc "Build static content; Usage: `rake build`"
task :build do
  sh "bundle exec jekyll build"
end

desc "Start development server; Usage: `rake start`"
task :start do
  sh "bundle exec jekyll serve --incremental"
end

desc 'Create new wiki; Usage: `rake "add_wiki[WIKI_NAME]"`'
task :add_wiki, [:wiki_name] do |_t, args|
  wiki = Wiki.new(args.wiki_name)
  processor = WikiProcessor.new(wiki)
  processor.execute!
end

# == Aliases ==
task b: :build
task s: :start
task :w, [:wiki_name] => :add_wiki

# == RuboCop ==
RuboCop::RakeTask.new
task default: :rubocop
