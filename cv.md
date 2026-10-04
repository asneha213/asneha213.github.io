---
layout: page
title: Curriculum Vitae
eyebrow: Experience & education
blurb: Academic training, research experience, honors, teaching, talks, and service.
permalink: /cv/
wide: true
---
<section class="cv-section"><h2>Education</h2>{% for item in site.data.cv.education %}<article class="cv-item"><div><h3>{{ item.school }}</h3><p>{{ item.degree }}</p>{% if item.note %}<p>{{ item.note }}</p>{% endif %}</div><time>{{ item.dates }}</time></article>{% endfor %}</section>
<section class="cv-section"><h2>Professional experience</h2>{% for item in site.data.cv.jobs %}<article class="cv-item"><div><h3>{{ item.title }}</h3><p>{{ item.where }}</p>{% if item.note %}<p>{{ item.note }}</p>{% endif %}</div><time>{{ item.dates }}</time></article>{% endfor %}</section>
<section class="cv-section"><h2>Honors</h2><ul>{% for item in site.data.cv.honors %}<li>{{ item }}</li>{% endfor %}</ul></section>
<section class="cv-section"><h2>Teaching</h2>{% for group in site.data.cv.teaching %}<h3>{{ group.where }}</h3><ul>{% for item in group.classes %}<li>{{ item }}</li>{% endfor %}</ul>{% endfor %}</section>
<section class="cv-section"><h2>Mentoring</h2><ul>{% for item in site.data.cv.mentoring %}<li>{{ item }}</li>{% endfor %}</ul></section>
<section class="cv-section"><h2>Talks</h2>{% for item in site.data.cv.talks %}<article class="cv-item"><div><h3>“{{ item.title }}”</h3><p>{{ item.where }} · {{ item.type }}</p></div><time>{{ item.year }}</time></article>{% endfor %}</section>
<section class="cv-section"><h2>Service</h2><ul>{% for item in site.data.cv.service %}<li>{{ item }}</li>{% endfor %}</ul></section>
<section class="cv-section"><h2>Patent</h2>{% for item in site.data.cv.patents %}<article><h3>{{ item.title }}</h3><p>{{ item.inventors }} · {{ item.id }}</p></article>{% endfor %}</section>
<section class="cv-section"><h2>Community outreach</h2><ul>{% for item in site.data.cv.outreach %}<li>{{ item }}</li>{% endfor %}</ul></section>
