---
title: Linting
tags: typescript
categories: []
author: Indika N.
date: 2019-02-18 11:58:00
permalink: what-is-linting
---

Have you ever worried about code quality, programming style of your team. Do you need to review the source code time to time? Isn't it a additional overhead?

## What is Linting?

Linting is the process of checking the source code for Programmatic and Stylistic (formatting) errors. Linting is helpful in identifying some common and uncommon mistakes that are made during coding.

A **Lint** or a **Linter** is a program that supports linting.

<!--more-->

{% note success %}
### Linter will take care of
{% code %}
  formatting discrepancy
  non-adherence to coding standards and conventions
  pinpointing possible logical errors in your program
{% endcode %}
{% endnote %}

{% extlink JSLint https://www.npmjs.com/package/jslint %}, {% extlink TSLint https://www.npmjs.com/package/tslint %}, {% extlink CSSLint https://www.npmjs.com/package/csslint %} are some linters.

## Automate Linting

If you have been developing software for some time you have probably noticed that there are lots of things that can go wrong, no matter how hard you try there is always something you might forget because after all, we are only humans.

How can you assure that your team will test the code quality with linters?

The best strategy is automate the linter by configuring it in the **pre-commit** hook.