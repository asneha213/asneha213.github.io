---
layout: page
title: Blog
eyebrow: Essays & notes
blurb: Writing about science, the night sky, probability, research, and academic life.
permalink: /blog/
wide: true
---
<div class="blog-list">{% for post in site.posts %}<article class="blog-card"><time>{{ post.date | date: '%-d %B %Y' }}</time><h2><a href="{{ post.url }}">{{ post.title }}</a></h2><p>{{ post.excerpt | strip_html | truncatewords:34 }}</p><a class="text-link" href="{{ post.url }}">Read essay →</a></article>{% endfor %}</div>
