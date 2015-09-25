# locOWL-hack-day
Temple's Local Hack Day.

#### If pushing to this repo
~~~
git subtree push --prefix _site origin gh-pages
~~~

Only push the _site subtree.  WE have to build it not github pages.

#### To work on this
* install ruby
* install ruby-devkit
* pull repo down
* run bundler
* get this problem V


You have to manually edit jekyll-assets-autoprefixer gem.

~~~
gem environment
~~~
Will show your installation path.  Navigate to:
~~~
<Gem Install Path>\jekyll-assets-autoprefixer-1.0.0.pre.alpha3\lib\jekyll\assets\autoprefixer.rb
~~~
Open with text editor and copy pasta this in there:
~~~
# 3rd-party
require "jekyll/assets"
require "autoprefixer-rails"

# internal
require "jekyll/assets/autoprefixer/version"

module Jekyll
  module Assets
    module Autoprefixer
      CONFIG_FILES = %w(autoprefixer.yml _autoprefixer.yml)

      class << self
        def setup!
          ::Jekyll::Assets.configure do |assets|
            config  = read_config(assets)

            ::AutoprefixerRails.install(assets, config)
          end
        end

        private

        def read_config(assets)
          config_file = CONFIG_FILES
            .map { |f| Pathname.new(assets.site.source).join f }
            .find(&:exist?)

          return {} unless config_file

          YAML.load_file(config_file).reduce({}) do |h, (k, v)|
            h.update k.to_sym => v
          end
        end
      end

      setup!
    end
  end
end
~~~

You should be good to go from here on out.
