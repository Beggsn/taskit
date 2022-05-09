---
title: "taskit Blog"
date: 2022-04-26T11:33:51+02:00
draft: false
menu:
  main:
    name: Blog
    identifier: blog
    weight: 1
    post: From our editors
  footer: 
    name: Blog
    weight: 100 
    
# Targeting cascading overrides
cascade:
- _target:
    kind: page
  layout: blog
  type: modern
  # Setting the kind section as the list type
- _target:
    kind: section
  type: modern
  layout: list     
---
Der Taskit Blog
============

Kuratierte Inhalte über unsere Teams und Produkte.
