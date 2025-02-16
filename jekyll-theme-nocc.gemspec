# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-nocc"
  spec.version       = "2.0.1"
  spec.authors       = ["Carles Loriente"]
  spec.email         = ["7197733+carlesloriente@users.noreply.github.com"]

  spec.summary       = "A responsive dual theme using Bootstrap 5 for Jekyll created by Carles Loriente. Featuring a homepage, about page, tags cloud page, gallery of images page, examples post pages, post comments powered by Disqus, and contact page form powered by Formspree."
  spec.homepage      = "https://github.com/carlesloriente/jekyll-theme-nocc/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_plugins|posts|_includes|_sass|LICENSE|README|_config\.yml|404\.html|503\.html|about\.html|contact\.html|gallery\.html|tags\.html)!i) }

  spec.metadata = {
    "bug_tracker_uri"   => "https://github.com/carlesloriente/jekyll-theme-nocc/issues",
    "documentation_uri" => "https://github.com/carlesloriente/jekyll-theme-nocc/#readme",
    "homepage_uri"      => "https://bootstrap-theme.notesoncloudcomputing.com",
    "source_code_uri"   => "https://github.com/carlesloriente/jekyll-theme-nocc",
    "wiki_uri"          => "https://github.com/carlesloriente/jekyll-theme-nocc/wiki",
    "plugin_type"       => "theme"
  }

  spec.add_runtime_dependency "jekyll", "~> 4.4"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.17"
  spec.add_runtime_dependency "jekyll-last-modified-at", "~> 1.3.2"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  spec.add_runtime_dependency "jekyll-redirect-from", "~> 0.16"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.8"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
  spec.add_runtime_dependency "base64", "~> 0.2"

end