![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

# FEWD
## Lesson 02 - CSS Basics
### Barry Ross

Freelance Web Developer


### Learning Objectives
- Have a better understanding of frontend vs. backend
- Describe the **DOM** and draw a simple **DOM** tree.
- Apply and explain CSS "cascade" including: ***importance***, ***specificity*** and  **inheritance**.
- Predict image paths and apply **relative** paths to ```<img>``` and ```<a>```
- Experiment with ***margin*** and ***border***


### Agenda

*   Framing, exit tickets

*   HTML tag review, Drawing the DOM

*   What tag is it? (exercise)

*   Our first site (code-along)
   * structure
     * css styling
     * page & stylesheet linking

*   Lab time!



### Exit ticket review
<span class="question">How do I add the black border??</span>

```
/* IN OUR CSS */

element {
  border: 2px solid black;
}
```


### Exit ticket review
<span class="question">In CSS, how do you color the bullet point but not the text?</span>

```
<!-- IN OUR HTML -->
<ul>

  <li><span>Item 1</span></li>

</ul>
```

```
/* IN OUR CSS */
ul li {
 color: blue;
}
ul li span {
  color: black;
}
```


### Exit ticket review
<span class="question">I didn't understand the definition and importance of this:</span>
``` 
<meta charset="utf-8"> 
```

This helps to ensure our content displays in other users' browsers how we intend it to

https://bitsofco.de/meta-charset/


### Exit ticket review

<span class="question">Is CSS like jquery where more people are contributing to it on a day to day basis?</span>

https://contribute.jquery.org/

https://www.w3.org/Style/CSS/current-work.en.html


### **Exit ticket review**

<span class="question">How do I add images? </span>

```
<img src="link_to_image.jpg" alt="description of image">
```



## High-level concepts

### **What happens when I "Google" something?**

![](../../img/extra/internet.jpg)


### When you click a link

- Your computer **requests** a **resource** from a server (a computer with particular software, hardware etc.)
- Your computer receives a **response** which contains **HTML**
- Browser reads the HTML and displays it to us
- **HTTP is the set of procedures** that makes this communication possible




### **What is web development?**

- The creation and management of both websites and web-based applications
- Made up of the Front-end and Back-end
- Most Developers will try to convince you that it is magic, but it is mainly editing text files (coding / programming), and solving problems


### What is web development?

![](../../img/extra/01/webd.png)


### What is the front end?

- The Front-end is what the user sees
- It powers the visuals and interactions of the web
- It is meant to be pretty, but doesn't always happen that way
- Made up of HTML, CSS and Javascript


### What is the backend?

- It is what goes on behind the scenes
- Consists of databases, servers etc.
- Lots of different languages can be used:
  - Ruby (Ruby on Rails)
  - PHP
  - Python
  - C++
  - ..and more



### Document Object Model

#### Stop and Jot!

Take 1 -2 minutes to brainstorm what you remember about the DOM from the reading for today


### What is the DOM?

*The HTML DOM is an application programming interface (api) that defines*:

- The HTML elements as **objects**
- The **properties** of all HTML elements
- The **methods** to access all HTML elements
- The **events** for all HTML elements

In other words: The HTML DOM is a standard for how to **get**, **change**, add, **or** **delete** HTML elements.


### Document Object Model

It represents elements as a hierarchy of nodes

![GeneralAssemb.ly](../../img/extra/domtree.gif)


### Drawing the DOM

![](../../img/extra/02/domtree.png)

Note: taken from http://courses.cs.washington.edu/courses/cse190m/11sp/lectures/slides/lecture15-dom-tree.shtml#slide3 on 8/1/16


### Drawing the DOM | your Turn!

This is a sample of some **HTML** you might have  in your document.  What does its DOM tree look like?

```
<p>
	This is a sample of some <b>HTML you might<br>have</b> in your document.
</p>
```

Note:
```
body
-p
-- "this is a "sample of some"
-- b
  --- "html you might"
  ---- br
  ---- "have"
-- "in your document"
```
  http://www.howtocreate.co.uk/tutorials/javascript/dombasics from 4/26/16


### Drawing The DOM
#### HTML

```
<!DOCTYPE html>
<html>
  <head>
    <title>About Me</title>
    <link rel="stylesheet" href="#">
  </head>
  <body>
    <nav>
      <a href="#">Link</a>
    </nav>
    <h1>Joe Johnson</h1>
    <hr>
    <img src="https://www.libstash.com/public/avatars/default.png" alt="Avatar">
    <h3>I Enjoy Life as a Developer</h3>
    <p>I'm Joe Johnson, a Developer based in NYC.</p>
    <p>I Have ten years of experience in the graphic design world, specializing in the creation of responsive websites. </p>
  </body>
</html>
```

Note:
- source: http://eloquentjavascript.net/13_dom.html on 4/25/16
- Show above html on overhead, have students get in groups and do tree for this



### What tag is it?
![GA code-along](../../img/icons/code_along.png)


### Tag Research

Take 5 minutes,

>Go to Mozilla Developer Network and research the following tags:
>
```
<nav>, <img>, <hr>,<footer>
```

-  If you finish before the time is up
> go to a website you regularly visit,
> view its page source (option+command+u), 
> and find 3 `html` elements you have never seen

Note: or 3 new tags you haven't seen or used
Before we dive into using these new tags, we are going to take a few minutes to focus on the DOM.


### What Tag is it?

Open up the <span class="files">`homework-portfolio`</span> assignment in your workspace folder.  

Take 10 mins to **independently** practice looking at a mockup, and create the **structure** (*create the html elements with or without the content*)

---
>If at any point today, you want an extra challenge, there is a bonus challenge in the <span class="files">*css_concert* </span>folder!


### HTML and CSS

![](../../img/icons/code_along.png)
Note:
Review the tags we went over...refer to lesson plan!


### Images

Images are placed using

	<img>


### Images

	<img src="img/imageName.jpg" alt="alternative text">

The **`img`** tag requires a **`src`** attribute, which tells the browser where to find the image.


### Images

How would you write the src?

![](../../img/unit_1/folder_structure.png)

Inside <span class="files">```webroot```</span> (folder the website resides),
a relative path could be used:

>`<img src="images/logo.png">`
><!-- .element: class="fragment" data-fragment-index="1" -->

Note:
ask them to write path on their desk


### Images | Relative Paths

![Parent Folder Structure](../../img/unit_1/folder_structure_parentDirectory.png)

Given this folder structure the, same image would be

>`<img src="../images/logo.png">`<!-- .element: class="fragment" data-fragment-index="1" -->

Note:
that ```..``` means to go up a directory, and can be used repeatedly: `../..` would go up two directories.


### Images | Site-root relative

	<img src="/images/logo.png">

Note:
	Site-root relative URLs start with a `/`, so if we imagine that our `webroot` directory was stored on a server such that the `webroot/index.html` file is accessible at `http://example.com/index.html`, then placing the logo image could be done from any html page with: ```<img src="/images/logo.png">```

	The benefit here is that this same ```src``` path works on any html page, no matter what its location, so the same ```img``` tag can be used on both the ```webroot/index.html``` page and the ```webroot/about/index.html``` page.

	The downside is that the path only works if the project is stored to a proper location for serving.


### Images | Absolute paths

		<img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/397/thumb_User-Experience-Sketching.jpg">

Note:
For linking to images, make sure that you have permission to use the image in this way. Even then, it is often better to host a copy of the same image, rather than link to another server, because it reduces dependency.


### Images | alt attribute

	<img src="puppy.jpg" alt="My cute puppy">


### Images | alt attribute

A piece of text to be used in lieu of the image when the image is unavailable

Note:
Using `alt` attributes has the added benefit of giving search engines more linguistic context about the image as it is used on your page.

Reasons an image may not load:

* There was a connection error, the browser didn't download the image.

* The file was not found, perhaps because the image got moved elsewhere and the page wasn't updated yet to reflect the change.

* The user is running a text-based browser such as an older phone with a WAP-style browser, or a non-graphical browser like lynx.

* The user is using a screen reader because she has low vision, which will read the `alt` text aloud or present it through a braille reader.



### Working with images | file formats

There are three main image file formats:

**.png**
**.gif**
**.jpg**


### Image file formats | .png

- Supports transparency and semi-transparency, great for logos, icons, and repeating background tiles.

- Almost always preferable to a **`gif`**, unless semi-transparency is not needed, and the **`gif`** format is significantly smaller.


### Image file formats | .gif

*	Can have basic transparency, typically a  **`png`** is used instead.


### Image file formats | .jpeg

- No transparency, can be stored at different compression levels with varying amounts of "lossy-ness"

- Typically the best format for photos. (Try to balance between photo quality and file size.)



## CSS Review 


### CSS Review | Benefits
- **Global changes** - multiple pages can share same stylesheets

- **Adaptable design** - allows same content to have different styles, based on rendering method (screen, print)

- **Adaptable design** - same content can appear differently on different size screens (desktop, tablet, phone)

- **Accessibility** - users can override site's style (need larger font, different colors etc)


###CSS Syntax

![](../../img/unit_1/css_syntax.png)

###CSS Syntax

![](../../img/extra/cssrule.gif)


### Where does the CSS go? 
* **Inline**
* In the **`head`**
* In an **external** file

CSS should go in a separate file. We have been working with external files, though we could also put it in two other locations


### Where does the CSS go? | `<head>`

We could put it directly in the **head** of our HTML file
```
	<head>
		<style type="text/css">
		body{
			color:red;
		}
		</style>
	</head>
```
### Where does the CSS go? | inline

Or directly on an element using the 'style' attribute

This method is called <span class="green">**"inline"**</span> because the css is in the line of html code

	<body style="color:red;">

	</body>


### Where does the CSS go? | exernal file

Its **best practice** to put CSS in its own file and link to it from the `<head>`

	<head>
	<link rel="stylesheet" href="style.css">
	</head>

Note:
"The `link` tag needs two attributes: `rel="stylesheet"` and an `href` attribute.

The `href` attribute value works very similarly to linking to an image, or to another page.

---


### CSS Break Down

This whole thing is called a <span class="green">**rule**</span>

```
p {
	color: red;
	font-weight: bold;
}
```

*  The `p` is called a **selector**, and it's followed by a set of <span class="green">**declarations**</span> in a <span class="green">**declaration block**</span>.

*  The <span class="green">**selector**</span> specifies what parts of the HTML document should be styled by the declaration.

*  This <span class="green">**selector**</span> will style all `p` elements on the page


### CSS Break Down
The <span class="green">**declaration block**</span> here is:

```
{
	color: red;
	font-weight: bold;
}
```

<span class="green">**Declarations**</span> go inside curly braces.


### CSS Break Down | Declarations

This example has two declarations. Here's the first:

```
color: red;
```

Every declaration is a **property** followed by a **value**, separated by a colon, ending in a semicolon.

In this declaration, we are setting the `color` **property** to the **value** `red`.


### CSS Break Down

Let's look at the second declaration:

```
font-weight: bold;
```

Note:

What style **property** are we specifying here?

What **value** are we setting that **property** to?

Try writing a new set of styles for another element, like an `h1`.



###CSS Break Down
Linking multiple pages to an external file allows us to re-use the rules on multiple pages


### **Cascading** Style Sheets
#### So far, we have seen HTML be styled by:
1. **user-agent** (the browser)
2. **user** (e.g. larger font for somebody with poor eyesight)
3. **author** of the website (you)
   - in the html file directly (within the ```<head></head>``` tags)
   - external .css file
   - inline  `<p style="color:blue;">My paragraph text</p>`

These are called **origins**

Note:
These are called origins
<link> or @import for external


### The Cascade

***<span class="question">If css rules can be defined all over the place, how does the  browser know which to use?***

Note:
https://www.w3.org/Style/CSS/specs.en.html


### What style gets applied?

```
<!DOCTYPE html>
<html>
<head>
	<style>
    p {
      color: red;
    }

    p {
      color: lightgreen;
    }
	</style>
  <title>Sample CSS Page</title>
</head>
<body>
	<p>This is a paragraph</p>
</body>
</html>
```
This is a paragraph (displayed as light green)

because the second style comes after the first


### What style gets applied?

```
<!DOCTYPE html>
<html>
<head>
	<style>

		p {
		  color: red;
		}

		p span {
		color:green;
		}

		p {
		  color: blue;
		}

	</style>
	<title>Sample CSS Page</title>
</head>
<body>
	<p>This is a <span>paragraph</span></p>
</body>
</html>
```
This is a paragraph (displayed as green) Because the second style is more specific than the others


### Why is this this case?  
The CSS specification describes a priority scheme, called ***The Cascade***, which determines which style rules apply if **more than one rule** matches against a partiular **element**
Note:

https://en.wikipedia.org/wiki/Cascading_Style_Sheets


### "Cascading" Style Sheets (CSS)
The **CSS cascade** is the **process** that **determines what style gets applied** to what element.  A **weight is assigned** to **each declaration** by factoring in:

- **importance** (...I know we haven't yet)
- **origin** (user-agent, user, author)
- **specificity** (previous example)
- **the source order** (we just saw an example of this)


### Normal vs Important Declarations
**!important** declarations written like this

```

p {
  color: blue!important;  //This rule is applied because it is !important
}

p {
  color: red;
}
```


### "Cascading" Style Sheets (CSS)
The **CSS cascade** is the **process** that **determines what style gets applied** to what element.  A **weight is assigned** to **each declaration** by factoring in:

- importance
- origin (user-agent, user, author)
- specificity
- the source order (makes sense)


### Cascading" Style Sheets (CSS)
This ***weight*** is used to determine exactly, and without ***conflict***, which style **declarations** should be applied to a specific ***element***:

the ***declaration with the highest weight takes precedence***

Note: taken from http://www.sitepoint.com/web-foundations/cascade/ on 10/15/15


### The CSS Cascade
![css cascade](../../img/extra/csscascade.jpg)

Note:
http://www.gdsw.at/languages/html/webstyle/wsg3/figures/5-site-structure/5-5-700.jpg


### Importance/origin

Rules can have **!important** added to the end of them, this makes them higher priority.
Order of priority:

---

1. **user-agent** declarations
2. **normal** declarations in **user** style sheets
3. **normal** declarations in **author** style sheets
4. **!important** declarations in **author** style sheets
5. **!important** declarations in **user** style sheets

Note: taken from http://www.smashingmagazine.com/2010/04/css-specificity-and-inheritance/ on 10/15/15


### Conflict resolution!
#### Browser goes through **4 steps** to determine which declaration "**wins**"

1. **Identifies** all declarations that apply to a **specific element**

2. **sorts** declarations according to their levels of  **importance** and **origins**

3. **sorts** declarations with the **same level** of importance and origin by **selector** **specificity**

4. **If** declarations have the **same level** of importance, origin, and specificity, it **sorts them by the order in which they're specified** and **the last declaration wins**

Note:
http://www.sitepoint.com/web-foundations/cascade/


### Inheritance

**Inheritance** is a mechanism that's separate from the cascade:
- **inheritance applies to the DOM** (Document Object Model) tree
- the **cascade** deals with the **css rules**.

However, CSS properties set on an element via the cascade **can be inherited** by that element's child elements.

- Not all properties are inherited (e.g. borders), but some are (e.g. color).

The list is availabe at http://developer.mozilla.org

Note: http://reference.sitepoint.com/css/inheritance


### Inheritance example

```
<!DOCTYPE html>
<html>
<head>
  body {
    color: red;
  }

  <title>Sample CSS Page</title>
</head>
<body>
	<p>This is a paragraph</p>
</body>
</html>
```
This is a paragraph (displayed as red)

Which properties are inheritable?

![](../../img/extra/color.png)

Note:
taken from https://developer.mozilla.org/en-US/docs/Web/CSS/color on 4/22/14


### Challenge time!
Open the <span class="files">`css_cascade`</span> folder in today's files



### Cascading Style Sheets (CSS) | Colors

Colors can be specified in CSS in a variety of ways:

![](../../img/unit_1/color.png)

Note:
* keyword
* hex codes
* rgb
* hsl
* rgba
* hsla


###Color Keywords

These are used less frequently, but are handy for basic colors like `black` and `white`. There are several

See [here](http://msdn.microsoft.com/en-us/library/ie/aa358802.aspx) for more


###Hex Codes (RGB)

![Hex Color explanation](../../img/unit_1/hex_colors.png)

Note:
* they use hexadecimal, or base-16, to describe the color values for red, green, and blue.
* Each of the 3 color values is expressed by two hexadecimal digits, from `00` (no color) to `FF` (full color), and are written in the order red, green, then blue, after an initial `#` sign.
* Hex values can be abbreviated to only 3 digits if each digits is doubled. So `#FFFFFF` (white) can be expressed more succinctly as `#FFF`, and `#000000` (black) can be expressed as `#000`. `#FA6198`, however, cannot be abbreviated without altering the color.


### RGB Color Values
#### ```rgb(0,0,0)```

*	The first value is red, the second green, the third blue.

Note:
* Each value can range from 0 to 255, which expresses the same number of color steps as 00 to FF in base-16.

* FF in base-16 is equivalent to 255 in base-10.

* In RGB, `rgb(0,0,0)` is black, `rgb(255,255,255)` is white, `rgb(255,0,0)` is red, etc.

* White-space is allowed *inside* the parentheses, so `rgb(255, 0, 0)` will do just as well.



![](../../img/unit_1/rgba_color.png)

### RGBa Colors
*	RGBa works identically to RGB, expect that it takes a 4th value called the "alpha".
*	This is a value between 0 and 1 which will be used to determine a color's opacity on the page


### RGBa Colors
0 is completely transparent, and 1 being solid. 0.5 or .5 is 50% opacity.

Thus, __rgba(0,0,0,.25)__ is black at 25% opacity and __rgba(255, 255, 255, 0.8)__ is white at 80% opacity.

The alpha value can be in decimal form but cannot use a percentage. When a decimal is used, the leading zero is optional.


### HSL Colors
*	Similar notation to RGB values, but specify colors using hue, saturation, and lightness.


### HSLa
*	As with RGBa, HSLa is exactly like HSL for the first 3 values, but takes a 4th alpha-channel value.

Note:
### HSL Colors

**Hue** is expressed as a degree angle measure, with red being at 0, green at 120, and blue at 240. Note that the degree unit is implied, and that the angle wraps around, so 360 also refers to red, and -120 is the same as 240 (blue).

**Saturation** is expressed as a percentage, with 100% being a fully saturated color, and 0% being a shade of gray (no hue).

**Lightness** is also expressed as a percentage, 0% being black, and 100% being white. 50% lightness is the "normal" color range: anything above 50% gives a white tint, anything below 50% gives a black shade.

As an example, red is ```hsl(0, 100%, 50%)```, which is equivalent to ```#FF0000```.

Note that changing the opacity allows whatever colors are "behind" an element to shine through, which can alter the visible color significantly, especially at lower opacities.



![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Lab Time
*	Your Portfolio!


#### **Exit Ticket!**

Lesson #: 3

Topic: CSS Basics


