---
title: "Testbed Code Syntax"
date: 2022-04-22T09:43:20+02:00
draft: false
---

Copyright &copy
Trademark &trade


Ein Link zu [Emojis](https://unicode.org/emoji/charts/full-emoji-list.html/) :smile: 

## Das ist hervorgehobener Text in gelb{style= "background: yellow"}

## Definitions Liste
Justus
: Hippy Web Developer
: technophile


Peter
: Classic SysAdmin
: konservativ

Bob
: Cool Content Master
: vorsichtig


## Tables, task lists, and code blocks
 Name     | Job
 ---------|------
 Justus   | Web Developer
 Peter    | Sys Admin
 Bob      | Layouter

 ---

| Name    | Mantra |
| ---     | ---    |
| Justus  | There must be a better way. |
| Peter   | Play it safe. |
| Bob     | Try everything, but do what you like. |

---

### Table alignment
| Index | Produkt | Verkäufe |
| --:   | :--     | :-:      |
| 1.    | BME280  | 100      |
| 2.    | BNO 055 | 50       |

---
## Taskit website task list
- [x] Get the home page up
- [x] Update Privacy Policy and Terms of Use
- [x] Add the About page
- [x] Start the blog
- [x] Enable Contact Us page
- [ ] It's a long way to go

---

## Code Blöcke
```javascript
var x= 10;
x++;
console.log(x);
```
### mit Highlighting:
```javascript {linenos=true,hl_lines=[2,"4-6"], linenostart=199}
while (!success) {
 tryAgain();
 attempt++;
 if (Dead) {
 break;
 }
}
```
---
__Lorem Ipsum__

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et **3 dolore** magna aliqua. Consectetur adipiscing elit ut aliquam purus sit amet **luctus**.

<img style="float:right; margin: 20px;" src="/image/starterkit.jpg">

1. **Consectetur** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   * Proin nibh nisl condimentum id venenatis
   * Libero id faucibus nisl tincidunt eget nullam non.
     * Lectus vestibulum mattis ullamcorper velit.
     * Odio aenean sed adipiscing diam donec adipiscing tristique.
   * Massa tincidunt dui ut ornare lectus sit ame.
   
2. **Raliquet** Id nibh tortor id  lectus proin nibh nisl condimentum.
3. **Cursus** Est ante in nibh mauris cursus mattis 99.99% .

![Bild](/image/starterkit.jpg)