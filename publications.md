---
layout: page
title: Publications
eyebrow: Research record
blurb: Journal articles, preprints, conference proceedings, and conference abstracts.
permalink: /publications/
wide: true
---
<p class="scholar-reference">For a complete and up-to-date record, visit my <a href="https://scholar.google.com/citations?user=U9ZyH9oAAAAJ&amp;hl=en">Google Scholar profile</a>.</p>
{% assign groups = "journal|Journals,report|Preprints,conference|Conference Proceedings,abstract|Conference Abstracts" | split: "," %}
<div class="publication-groups">{% for group in groups %}{% assign bits=group | split:"|" %}<section class="publication-group"><h2>{{ bits[1] }}</h2><div class="publication-list">{% for paper in site.data.pubs %}{% if paper.type == bits[0] %}<article class="publication"><time class="pub-year">{{ paper.year }}</time><div><p class="pub-meta">{{ paper.venue }}</p><h3>{% if paper.url %}<a href="{{ paper.url }}">{{ paper.title }}</a>{% else %}{{ paper.title }}{% endif %}</h3><p>{{ paper.authors }}</p></div></article>{% endif %}{% endfor %}</div></section>{% endfor %}</div>
