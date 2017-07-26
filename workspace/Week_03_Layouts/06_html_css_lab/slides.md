![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Design to CSS/HTML

###Barry Ross

Freelance Web Developer


### Exit ticket review

<span class="question">Still having some trouble determining when/the proper way to use `<div>` versus `<section>` versus `<span>`</span>
- `<section>` is one of many semantic elements.  Use this as a container for content that is a main section of particular page (like a blog section, photo gallery section)
- `<div>` is a non-semantic, block-level element.  Use this when you want a structural container for content, and no semantic element seems appropriate
- `<span>` is a non-semantic, inline-level element.  Use this when you want a wrapper for content, so you can style it, but you don't want it to force the content to start on a new line
  - typically used to wrap a handful of words inside of a sentence (`<p>` tag) that you may want to style separate from the rest of the surrounding text

```
<p>My paragraph text here...I want to <span>style this differently</span> </p>
```
   


### Exit ticket review

<span class="question">When do you use CSS grid vs flex model? What is the point of using grid over flex and just creating divs/sections?</span>
- With CSS Grid, we can think in terms of both rows & columns 
  - Great for an entire site (where you can define the layout even before you know all of your content!)
  - Photo gallery thumbnails (in rows and columns)
  
- With CSS Flex, we have to think in terms of a single row or a single column 
  - Inside of the header on a page (to align the logo and navbar)
  - To align items within a navigation bar
  - If a single portion of your site has a row of elements and you the easily divid the available space among them
  


### Exit ticket review

<span class="question">Is a <!DOCTYPE html> html or html5? I'm not sure if we have been using html5 or not.  </span>
Yes, `<!DOCTYPE html>` **IS** the HTML5 doctype!
 


### Exit ticket review

<span class="question">What is the difference between a section and a div?</span>
- a `<section>` is a semantic element...it not only acts as a container for content, but describes its role or function on the page (picture a fully designed, labeled cereal box)

- a `<div>` is simply a container, which doesn't describe the content or role on the page (like a cereal box with no pictures, writing, colors, graphics on it)
  


### Exit ticket review

<span class="question">What is the relationship between grids+flexbox and bootstrap?</span>
- CSS Grid is a set of CSS properties and a new mode of laying out items
- CSS Flexbox is a set of CSS properties and a new mode of laying out items
- Bootstrap is a frontend framework 
  - It has a "grid system" for layouts, but the CSS of this "under the hood" is using the css `float` property


## Positioning basics
---
**static:** the default position (*what we've been working with*)

**absolute**: explicitly positioned relative to the element's closest positioned (*not static*) ancestor

**relative**: explicitly positioned relative to where it would normally be.  Other elements act like it is in its initial position.

**fixed**: like absolute, but relative to the top-left corner of the window
