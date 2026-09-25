---
layout: default
permalink: /blog/
title: blog
nav: false
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
---

<div class="post">
  <header class="post-header">
    <h1 class="post-title">Notes</h1>
    <p class="post-description">Research notes and occasional writing.</p>
  </header>

  <ul class="post-list">
    {% for post in paginator.posts %}
    <li>
      <h3><a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="post-meta">{{ post.date | date: '%B %-d, %Y' }}</p>
    </li>
    {% endfor %}
  </ul>
</div>
