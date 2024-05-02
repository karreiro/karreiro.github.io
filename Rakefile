# frozen_string_literal: true

require 'jekyll'
require 'rubocop/rake_task'

require_relative '_lib/wiki'
require_relative '_lib/wiki_processor'

desc 'Build static content; Usage: `rake build`'
task :build do
  sh 'bundle exec jekyll build'
end

desc 'Serve static content; Usage: `rake start`'
task :serve do
  sh 'bundle exec jekyll serve --incremental'
end

desc 'Create new wiki; Usage: `rake "add_wiki[WIKI_NAME]"`'
task :add_wiki, [:wiki_name] do |_t, args|
  wiki = Wiki.new(args.wiki_name)
  processor = WikiProcessor.new(wiki)
  processor.execute!
end

RuboCop::RakeTask.new
task default: :rubocop
