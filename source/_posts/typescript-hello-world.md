---
title: Typescript Hello World
tags: typescript
categories: []
author: Indika N.
date: 2019-02-08 18:58:00
permalink: ts-hello-world
---

You should have {% extlink Node.js https://nodejs.org/ %} installed on your machine to follow the steps.

## Quick Start

### initiate npm project

```bash
$ cd typescript-hello
$ npm init -y
```

### install typescript and ts-node

```bash
$ npm install --save-dev typescript ts-node
```

<!--more-->

or use the short version

```bash
$ npm i -D typescript ts-node
```

### create hello.ts file

```typescript
let hello: string = "hello world!";
console.log(hello);
console.log(`printing [${hello}]`);
```

### run this command

```bash
$ ts-node hello.ts
```

if everything goes right, you can see the following output on your terminal

```bash
hello world!
printing [hello world!]
```
