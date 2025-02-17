# Jekyll Theme: NOCC Bootstrap Jekyll Theme

This README provides instructions for installing and configuring the NOCC Bootstrap Jekyll Theme.

## Introduction

**Are you tired of outdated Bootstrap themes?**

**Say hello to NOCC 🎉**: A Modern Bootstrap 5 Theme!

It comes in three powerful options:

- **💎 [Theme Jekyll Nocc](https://rubygems.org/gems/jekyll-theme-nocc)**: A Ruby gem that brings the power of NOCC directly to your Jekyll project.
- **🌟 [Nocc Bootstrap Theme](https://www.npmjs.com/package/nocc-bootstrap-theme)**: An NPM Package that brings the power of NOCC directly to your NodeJS project.
- **🌐 [Full Site Bundle for Jekyll](https://github.com/carlesloriente/bootstrap-theme-jekyll)**: A complete static website showcasing NOCC's seamless integration. Featuring a beautifully designed homepage, dynamic tag cloud, image gallery, and more.

> **&#9432;** NOCC is a complete replacement for Bootstrap 5.3.3

## Table of contents

- [Jekyll Theme: NOCC Bootstrap Jekyll Theme](#jekyll-theme-nocc-bootstrap-jekyll-theme)
  - [Introduction](#introduction)
  - [Table of contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
    - [1. Add the theme to your Gemfile](#1-add-the-theme-to-your-gemfile)
    - [2. Specify the theme in your \_config.yml](#2-specify-the-theme-in-your-_configyml)
    - [3. Install the theme](#3-install-the-theme)
  - [Setting up the theme](#setting-up-the-theme)
    - [1. Modify \_config.yml](#1-modify-_configyml)
    - [2. Modify index.markdown](#2-modify-indexmarkdown)
  - [How to enable](#how-to-enable)
    - [Tags section](#tags-section)
    - [Contact form](#contact-form)
    - [Gallery section](#gallery-section)
  - [Contributing](#contributing)
  - [Creator](#creator)
  - [Thanks](#thanks)
  - [Copyright and License](#copyright-and-license)

## Features

1. **Use of the latest Bootstrap 5 library**
2. **Fully Responsive and Dual Color (light and dark)**
3. **CSS and JS files are minimized by default**
4. **Self-hosted Google web fonts**
5. **Demo site built-in**

## Installation

### 1. Add the theme to your Gemfile

Add the following line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-theme-nocc"
```

### 2. Specify the theme in your _config.yml

Add the following line to your Jekyll site's _config.yml file:

```yaml
theme: jekyll-theme-nocc
```

### 3. Install the theme

Execute the following command in your terminal:

```bash
bundle
```

Alternatively, you can install it directly using gem:

```bash
gem install jekyll-theme-nocc
```

## Setting up the theme

### 1. Modify _config.yml

Edit your Jekyll site's _config.yml file.  It's recommended to add the following plugins after the jekyll-feed plugin if you're using it, to avoid potential conflicts:

```yaml
plugins:
  - jekyll-feed
  - jekyll-paginate
  - jekyll-redirect-from
```

Next, add the following configuration options to your _config.yml file, replacing the placeholder values with your own:

```yaml
author: Your Name
author_url: "https://www.yoururl.com"
timezone: "Europe/Madrid" # Timezone for your site
full_description: >
  A long description of your site.  This can span multiple lines.
gh_repository: https://github.com/yourusername/yourrepo
encoding: "utf-8"
locale: "en-US" # Language and locale
lang: "en" # Language code
email: "your_email_address"
permalink: pretty # URL structure for posts

# Site Manifest (for PWA support)
name: "Site name"
short_name: "NAME"
language: "en"
lang_direction: "ltr"
color: "#FFFFFF" # Background color for manifest

# Social Profiles
linkedin_username: your_linkedin_username

# Google Analytics (Optional)
google_analytics: "G-XXXXXXXXXX" # Your Google Analytics tracking ID
google_site_verification: "YOUR_GOOGLE_SITE_VERIFICATION_TOKEN" # Optional: For Google Search Console verification.
google_adsense_account: "ca-pub-XXXXXXXXXXXXXXXX" # Optional: Your AdSense account ID
google_tag_id: "GTM-XXXXXXX" # Optional: Your Google Tag Manager ID

# Disqus Comments (Optional)
disqus_shortname: your_disqus_shortname # Leave blank to disable comments site-wide.  You can disable comments on individual posts by adding `comments: false` to the post's YAML front matter.

# Formspree Contact Form
formemail: "your_formemail_address" # Your Formspree email address (see "How to enable the contact form" section)

# Theme Information (Please do not remove these)
theme_version           : v2.0.2
theme_name              : NOCC Bootstrap Jekyll Theme
theme_repo              : https://github.com/carlesloriente/jekyll-theme-nocc/
theme_url               : https://bootstrap-theme.notesoncloudcomputing.com/
theme_author            : Carles Loriente
theme_author_url        : https://www.notesoncloudcomputing.com/about/
theme_download          : https://github.com/carlesloriente/jekyll-theme-nocc/archive/refs/heads/main.zip
theme_package           : https://rubygems.org/gems/jekyll-theme-nocc
theme_logo              : "/assets/vendor/nocc-bootstrap-theme/images/nocc/nocc_logo.webp"

exclude: ["AUTHORS.md", "CODE_OF_CONDUCT.md", "CONTRIBUTING.md", "CODEOWNERS", "LICENSE", "README.md", "SECURITY.md", "WORKFLOW.md", "Gemfile", "Gemfile.lock", "vendor/bundle/", "vendor/cache/", "vendor/gems/", "vendor/ruby/"]
```

### 2. Modify index.markdown

Edit your `index.markdown` file and add the following front matter parameters after `layout: home`:

```markdown
background: '/assets/images/bg-index.webp'
carousel:
  - '/assets/images/bg-index.webp'
  - '/assets/images/bg-index-2.webp'
  - '/assets/images/bg-index-3.webp'
```

## How to enable

### Tags section

**1. Create a new file named tags.markdown in your site's root directory**.

**2. Add the following content to tags.markdown**:

```markdown
---
title: Tags list
layout: tags_index
permalink: /tags/
description: A tag cloud from posts
categories: tags
background: '/assets/images/bg-gallery.webp'
tagsindex: true
---
```

**3. To add tags to your posts, include the tags front matter parameter in your post files**:

```markdown
tags:
- firsttag
- secondtag
- another-tag
```

### Contact form

This theme uses Formspree to handle contact form submissions.

1. Create a Formspree account: Sign up for a free account at [FormSpree](https://formspree.io/).

2. Create a new form in your Formspree account.

3. Create a new file named `contact.html` in your site's root directory.

4. Add the contact form code: Add the following content to contact.html, replacing `YOUR_FORM_ID` with the ID from your Formspree form (you'll find it in the Formspree form's setup instructions):

```html
---
layout: page
title: Contact
permalink: /contact/
description: Contact me form
categories: contact me
background: '/assets/images/bg-contact.webp'
form: true
---

    <p>Want to get in touch? Send me a message!</p>
    <form name="sentMessage" id="contactForm" novalidate>
      <div class="control-group">
        <div class="form-group floating-label-form-group controls">
          <label>Name</label>
          <input type="text" class="form-control" placeholder="Name" id="name" required data-bs-validation-required-message="Please enter your name.">
          <p class="help-block text-danger"></p>
        </div>
      </div>
      <div class="control-group">
        <div class="form-group floating-label-form-group controls">
          <label>Email Address</label>
          <input type="email" class="form-control" placeholder="Email Address" id="email" required data-bs-validation-required-message="Please enter your email address.">
          <p class="help-block text-danger"></p>
        </div>
      </div>
      <div class="control-group">
        <div class="form-group floating-label-form-group controls">
          <label>Message</label>
          <textarea rows="5" class="form-control" placeholder="Message" id="message" required data-bs-validation-required-message="Please enter a message."></textarea>
          <p class="help-block text-danger"></p>
        </div>
      </div>
      <br>
      <div id="success"></div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary float-end" id="sendMessageButton">Send</button>
      </div>
    </form>
```

Configure `formemail` in `_config.yml`: While the form submits directly to Formspree, you should still set the formemail option in your `_config.yml` file. This is used by the theme for other purposes, even if not directly related to the contact form itself.

You can use a service like Firefox Relay to protect your actual email address.

```yaml
formemail               : "form@email.com"
```

### Gallery section

1. Create the gallery directory: Create a directory named `gallery` inside your `assets/images` directory.

2. Add images: Place all the images you want to display in the gallery section into the newly created `gallery` directory.

3. Create a new file named `gallery.html` in your site's root directory.

4. Add the following content to gallery.html:

```html
---
layout: images_gallery
title: Gallery
description: A gallery of images used in the article header.
categories: gallery images
background: '/assets/images/bg-gallery.webp'
---
```

This will automatically display all images found in the `assets/images/gallery` directory.  The `images_gallery` layout handles the display logic. No further configuration is usually required.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/carlesloriente/jekyll-theme-nocc. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## Creator

**[Carles Loriente](https://www.linkedin.com/in/carles-loriente/)** is the creator and maintainer of the NOCC Bootstrap theme.

- [Linkedin](https://www.linkedin.com/in/carles-loriente)
- [Twitter](https://twitter.com/godarthvader)
- [GitHub](https://github.com/carlesloriente)

## Thanks

[Bootstrap 5](https://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

## Copyright and License

Copyright (c) 2025 Carles Loriente. Code released under the[MIT License](https://opensource.org/licenses/MIT).
