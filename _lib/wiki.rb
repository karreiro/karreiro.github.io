# frozen_string_literal: true

class Wiki
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def dir
    "wiki/#{name.downcase}"
  end

  def index
    "#{dir}/index.md"
  end

  def index_content
    today = Time.now.strftime('%Y-%m-%d')

    <<~JEKYLL
      ---
      layout: wiki
      title: #{name}
      last_updated: #{today}
      ---
    JEKYLL
  end
end
