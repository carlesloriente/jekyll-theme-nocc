# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "nocc-bootstrap-jekyll-theme"
  spec.version       = "1.0.0"
  spec.authors       = ["Carles Loriente"]
  spec.email         = ["7197733+carlesloriente@users.noreply.github.com"]

  spec.summary       = "Write a short summary, because Rubygems requires one."
  spec.homepage      = "https://github.com/carlesloriente/nocc-bootstrap-jekyll-theme/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.metadata = {
    "bug_tracker_uri"   => "https://github.com/carlesloriente/nocc-bootstrap-jekyll-theme/issues",
    "documentation_uri" => "https://github.com/carlesloriente/nocc-bootstrap-jekyll-theme/#readme",
    "homepage_uri"      => "https://bootstrap-theme.notesoncloudcomputing.com",
    "source_code_uri"   => "https://github.com/carlesloriente/nocc-bootstrap-jekyll-theme",
    "wiki_uri"          => "https://github.com/carlesloriente/nocc-bootstrap-jekyll-theme/wiki",
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