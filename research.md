---
title: Research
layout: longy
blurb: |
    My research spans the fields of computational cognitive neuroscience, reinforcement learning, and machine learning. Here are my contributions to date.
---

[Look me up on Google Scholar][scholar] for another view on my publications.

[scholar]: https://scholar.google.com/citations?user=U9ZyH9oAAAAJ&hl=en


### Computational Cognitive Neuroscience

<ul>
{% for paper in site.data.pubs %}
    {% if paper.area == 'comp-neuro' %}
        {% include paper_human.html %}
    {% endif %}
{% endfor %}
</ul>
---

### Reinforcement learning

<ul>
{% for paper in site.data.pubs %}
    {% if paper.area == 'rl' %}
        {% include paper_human.html %}
    {% endif %}
{% endfor %}
</ul>

---

### Machine Learning

<ul>
{% for paper in site.data.pubs %}
    {% if paper.area == 'ai' %}
        {% include paper_human.html %}
    {% endif %}
{% endfor %}
</ul>