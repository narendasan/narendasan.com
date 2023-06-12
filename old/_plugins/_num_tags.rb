require 'liquid'
require 'uri'
require 'jekyll'

module NumTags
    def num_tags(posts, tag)
        tags = Array.new
        for post in posts
            tags.push(post.data["tags"])
        end
        tags = tags.flatten 
        num_tag = 0
        for post_tag in tags
            if post_tag == tag
                num_tag += 1
            end
        end
        return num_tag
    end 
end

Liquid::Template.register_filter(NumTags)
