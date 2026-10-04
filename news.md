---
layout: page
title: News
eyebrow: Updates
blurb: Research, publications, talks, and professional milestones.
permalink: /news/
wide: true
compact_intro: true
---
<section class="news-list">{% for item in site.data.news %}<article><span class="year">{{ item.date }}</span><div><h2>{% if item.url %}<a href="{{ item.url }}">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</h2><p>{{ item.description }}</p></div></article>{% endfor %}</section>
