---
title: "Test bed: code and syntax"
date: 2022-04-22T09:43:20+02:00
draft: false
categories: [Development]
---



Copyright&copy;

Trademark&trade;

Ein Link zu allen [Emojis](https://unicode.org/emoji/charts/full-emoji-list.html/) :smile: 

## Das ist hervorgehobener Text in gelb{style= "background: yellow"}
{{< divider >}}
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

{{< divider >}}
## Tables, task lists, and code blocks
 Name     | Job
 ---------|------
 Justus   | Web Developer
 Peter    | Sys Admin
 Bob      | Layouter

{{< divider >}}

| Name    | Mantra |
| ---     | ---    |
| Justus  | There must be a better way. |
| Peter   | Play it safe. |
| Bob     | Try everything, but do what you like. |

{{< divider >}}

### Table alignment
| Index | Produkt | Verkäufe |
| --:   | :--     | :-:      |
| 1.    | BME280  | 100      |
| 2.    | BNO 055 | 50       |

{{< divider >}}
## Taskit website task list
- [x] Get the home page up
- [x] Update Privacy Policy and Terms of Use
- [x] Add the About page
- [x] Start the blog
- [x] Enable Contact Us page
- [ ] It's a long way to go

{{< divider >}}

## Code Blöcke
```javascript
var x= 10;
x++;
console.log(x);
```
{{< divider >}}
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
{{< divider >}}
__Lorem Ipsum__

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et **3 dolore** magna aliqua. Consectetur adipiscing elit ut aliquam purus sit amet **luctus**.

<img style="float:right; margin: 10px;" src="/image/starterkit.jpg">

1. **Consectetur** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   * Proin nibh nisl condimentum id venenatis. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
   * Libero id faucibus nisl tincidunt eget nullam non. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
     * Lectus vestibulum mattis ullamcorper velit. Duis autem vel eum iriure dolor
     * Odio aenean sed adipiscing diam donec adipiscing tristique. zzril delenit augue duis dolore te feugait nulla facilisi. 
   * Massa tincidunt dui ut ornare lectus sit ame. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.  
   
2. **Raliquet** Id nibh tortor id  lectus proin nibh nisl condimentum. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.  
3. **Cursus** Est ante in nibh mauris cursus mattis 99.99%. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

{{< divider >}}
__Youtube Shortcode__
{{< youtube id="nLAVanlu5js" >}}


__Build-In Shortcodes__

* relref - Provides the relative link to the file in the Hugo website. This shortcode works similar to ref.
* figure - Renders an image with a caption.
* tweet - Renders a Tweet with the given ID.
* instagram - Embeds an Instagram image with the given ID.
* vimeo - Renders a Vimeo video with the given ID.
* youtube - Renders a YouTube video with the given ID.
* highlight - Adds syntax highlighting for the provided source code.
* param - Prints a passed parameter (useful for debugging purposes as well)

