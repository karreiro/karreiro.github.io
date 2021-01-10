# frozen_string_literal: true

class WikiProcessor
  attr_reader :wiki

  def initialize(wiki)
    @wiki = wiki
  end

  def execute!
    create_wiki_dir
    create_wiki_index
    show_success_message
  rescue
    show_error_message
  end

  private

  def create_wiki_dir
    Dir.mkdir(wiki.dir)
  end

  def create_wiki_index
    File.new(wiki.index, 'w').puts(wiki.index_content)
  end

  def show_success_message
    puts "\e[32mThe wiki '#{wiki.name}' was successfully created.\e[0m"
  end

  def show_error_message
    puts "\e[31mThe wiki '#{wiki.name}' could not be created.\e[0m"
  end
end
