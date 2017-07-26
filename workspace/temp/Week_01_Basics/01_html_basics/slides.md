![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

## FEWD - Unit 1: HTML BASICS

### Barry Ross

Freelance Web Developer


### Git/GitHub Review
*Independently, please write down your answers on the note card in front of you...*
- What are two examples of things that distinguish GitHub from Git?
- What are 2 reasons developers enjoy using either Git and/or GitHub?
- How are 2 ways that we will be using Git and GitHub in this class? 


### Where are we headed this unit?

Example of solution for upcoming assignment

<iframe src="../../Week_01_Basics/assignment/solution/portfolio.html" width="1000" height="400"></iframe>


### Learning Objectives

By the end of today's class, you will be able to...

- Apply HTML tags like `<html><head><!DOCTYPE html><body>` to a web page and experiment with html tags

- Describe the DOM and draw a simple DOM tree

- Have a better understanding of how the internet displays web pages through the browser

- Create and link to an external style sheet from your HTML file


### Agenda

1. Conceptual overview, history, and role of HTML & CSS in web development

2. Review HTML Tags & CSS Selectors

3. Practice adding structure using HTML (code-along)

4. Practice adding an External Stylesheet to the html (code-along)

5. Lab Time to practice (independent practice)!


### Exit Ticket Review

*Github: Difference between Publish and Commit?*


### Exit Ticket Review
*I'm still not 100% clear on what folder we will be working on and where to upload assignments/project work.*


### Exit Ticket Review
*How do collaborators work with each other on GitHub?*

[GitHub Branches/Forks](https://www.atlassian.com/git/tutorials/comparing-workflows)


### HTML Tag Brainstorm | ~ 5 mins

In groups of 2 or 3:
- find space on a wall and 
- brainstorm a list of `HTML` tags that you remember from the pre-work


### Conceptual Overview

**As developers, we need to...**

- Understand where front-end development fits into the bigger picture

- Understand the components of a site on the front-end (html, css, JS)

- Understand where browsers fit into the bigger picture and how to communicate with them

Note: Why is this important?


### Tim Berners-Lee

#### Understand where front-end development fits into the bigger picture

![TBL ](../../img/extra/tbl.jpg)

Note:
image retrieved from http://images.amazon.com/images/P/0822572737.01.LZZZZZZZ.jpg on 4/11/15


### 1989: TBL invents the Web with HTML as its publishing language 

Tim was trying to solve the problem of loss of information

- **HyperText** existed but only on one computer - *ability to link one document to another*

- **TCP/IP existed** - * a transportation system for data*

- **Domain Name System existed** - * like a phonebook of computer addresses*

Note:
- Tim Berner's-Lee coupled HyperText idea with the TCP/IP protocols
- Credited with creating **HTTP** and **HTML** which conventions for computers to talk to each other and for developers to style websites - to aid global communication http://www.w3.org/People/Raggett/book4/ch02.html


### The Inspiration

- Tim imagined what it would be like to combine HyperText idea with the Internet

- So you could jump from one document on one machine, to another document on another

*What would this look like if everybody could contribute and access these documents?*


### A world wide web
![TBL ](../../img/extra/01/web.png)


### The proposal
<iframe width="1000px" height="400px" src="http://info.cern.ch/Proposal.html"></iframe>


### The Proposal

Tim knew in order for this web to work, there needed to be:
-  a shared method for sending/receiving data across the web
-  a common convention for structuring the data

<div><!-- .element: class="fragment" data-fragment-index="1" -->
<p>...to achieve this, he created `http` and `html`</p>
</div>


### First website | source code

![HTML first](../../img/extra/firstsite-front.png)

Note:
image retrieved from http://info.cern.ch/hypertext/WWW/TheProject.html on 4/16/16


### First website | source code

![HTML firstsource](../../img/extra/firstwebsite-source.png)

Note:
image retrieved from http://info.cern.ch/hypertext/WWW/TheProject.html on 4/16/16


### First web browser

![First Browser](../../img/extra/worldwidewebbrowser.gif)
Note:
image retrieved from http://info.cern.ch/images/screensnap2_24c.gif on 4/12/16


### Birthplace of the web | CERN

![](../../img/extra/01/First_Web_Server.jpg)


### HyperText Markup Language | What is HTML?

**<u>HyperText</u>**: *text which contains links to other texts*

**<u>Markup</u>**: *a semantic way to describe a document separate from its content*

`<h1>Hello!</h1>`

![](../../img/extra/01/image41.png)


### HTML HISTORY | Conventions are crucial!

![HTML History](../../img/unit_1/Timeline_of_web_technologies.jpg)

Note:
image retrieved from http://www.onbile.com/info/wp-content/uploads/2013/09/Timeline-of-web-technologies-639x168.jpg on October 1, 2013.


### Components of the front-end

**<u>HTML</u>**
defines the content (the bones)

**<u>CSS</u>**
assigns the style (the skin)

**<u>JavaScript</u>**
adds the functionality (the brain)

![](../../img/extra/jsvenn.jpg)


### Components of the front-end

![](../../img/extra/htmlcssjsstack.jpg)

Note:
Structure & Content
Flavored of the day: HTML5
Open Standards: W3C (World Wide Consortium - www.w3.org)
CSS (Cascading Style Sheets) = Styling & Layout
JavaScript (ECMAScript) = Behavior


###  Separation of content, structure and style | Major Theme

![](../../img/extra/steel.jpg)


###  Separation of content, structure and style | Major Theme

![](../../img/extra/carpainted.jpg)


###  Separation of content, structure and style | Major Theme

- content (text, images, videos) => **steel**

- content with markup (HTML code) => **frame**

- content with markup & css => **painted vehicle**


### Stop and Jot

Can you think of any other real-world examples where we see a similar separation of content, structure and style?


### **What happens when I "Google" something?**

![](../../img/extra/internet.jpg)

Note:
http://orig08.deviantart.net/6908/f/2010/126/c/1/internet_diagram_by_wes2299.jpg
- You are asking your computer to retrieve a particular **file**, from a particular **server**, using a particular **protocol**
- It requests the IP address from a **D**omain **N**ame **S**ervice server
  - It does this by sending a **packet** of information (destination, origin, subject, content)
- Computer sends it down ethernet or wifi to another computer (likely cable company), then another...until it reaches its destination (**Internet Protocol**), which then sends back a response ( the requested file )
- All information is broken into packets when it leaves and are reassembled when received (**T**ransmission **C**ontrol **P**rotocol)
- Have students CURL http://www.google.com, copy/paste into Sublime, then view in the browser
- Have students CURL another website


### When you click a link

- Your computer requests a resource from a server (a computer with particular software, hardware etc.)

- Your computer receives a response which contains HTML

- Browser reads the HTML and displays it to us

- HTTP is the set of procedures that makes this communication possible

Note: show curl http://www.google.com


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



### Workflow Routine!

  - Pull from Repo

  - Copy the `01__html_basics` folder from **fewd_sm_29** into your **workspace** folder (if it isn't there already from last class)

  - Open up your FEWD project in Sublime on one half of your screen

  - Open up Google Chrome in the other half

NOTE:CFU - have students make a change, and ensure that GitHub is NOT tracking that file...if it is, it means they are working from class repo
Who wants to volunteer to help *___* solve this?

  #### <u>


### Let's start coding!

- Go ahead and open Sublime and Google Chrome

![](../../img/icons/code_along.png)


### GA Press Release Code-Along

![](../../img/icons/code_along.png)


### **Elements** (building blocks) | HTML Anatomy

![HTML Syntax](../../img/unit_1/tags.png)
Note:
- element vs. attribute
- Most tags have opening and closing tag
  - exceptions include those that don't have nested content
    `img, input, br, hr`
- Some tags require an attribute like the <link> tag - we'll use later to bring in a SS


### **Attributes** (additional info about elements) | HTML anatomy

![HTML Syntax](../../img/unit_1/tags_attributes.png)

Note:
Attributes provide additional info about elements


### HTML Elements | headings

```
<h1> . . . </h1> <!-- largest heading -->
<h2> . . . </h2>
<h3> . . . </h3>
<h4> . . . </h4>
<h5> . . . </h5>
<h6> . . . </h6> <!-- smallest heading -->
```
Note:
- Let's took a look at some common tags
- When may we want to use different sized headings?


### HTML Elements | text elements

```
    <p> This is a paragraph </p>

    <code> This is some computer code </code>
```
Note:
- markup is about annotating our content
- notice how the tags are describing the type of content enclosed…this idea is reinforced with HTML5, semantic markup


### HTML Elements | unordered list

```
<ul></ul> -> unordered list element
<li></li> -> list element

<!-- Used together like this... -->

<ul>
	<li>List item 1</li> <!-- an example of one tag in another -->
    <li>List item 1</li>
    <li>List item 1</li>
</ul>
```


### HTML elements | links

```
 <a href="#"> Link </a>
```


### HTML/CSS Basics (review) | HTML anatomy

What is the basic structure of an HTML document?

- `<!DOCTYPE html>`<!-- .element: class="fragment" data-fragment-index="1" -->
- `<html>`<!-- .element: class="fragment" data-fragment-index="2" -->
  - `<head>`<!-- .element: class="fragment" data-fragment-index="3" -->
    - `<title></title>`<!-- .element: class="fragment" data-fragment-index="4" -->
  - `</head>`<!-- .element: class="fragment" data-fragment-index="5" -->
  - `<body>`<!-- .element: class="fragment" data-fragment-index="6" -->
  - `</body>`<!-- .element: class="fragment" data-fragment-index="7" -->
- `</html>`<!-- .element: class="fragment" data-fragment-index="8" -->


### HTML Anatomy

What is the basic structure of an HTML document?
```
<!DOCTYPE html> <!-- tells browser which version of HTML -->
<html>		  <!-- root element of the document -->
  <head>        <!-- important information, but not visible content goes here -->
    <title></title>     <!-- only required element in the head -->
  </head>
  <body>         <!-- contains our visible content -->
   <!-- content goes here -->
  </body>
</html>

```
Note:
Let's add this structure to the FEWD Outline document


### Document Object Model 

#### Stop and Jot!

Take 1 -2 minutes to brainstorm what you remember about the DOM from the reading for today


### What is the DOM?

*The HTML DOM is an application programming interface (api) that defines*:

- The HTML elements as **objects**
- The **properties** of all HTML elements
- The **methods** to access all HTML elements
- The **events** for all HTML elements
---
In other words: The HTML DOM is a standard for how to **get**, **change**, add, **or** **delete** HTML elements.


### Document Object Model

It represents elements as a hierarchy of nodes

![GeneralAssemb.ly](../../img/extra/domtree.gif)


### **Let's explore the DOM**

**Open up the console** **by doing the following:**

View -> Developer Tools -> Console (cmd+option+j on Mac)

Note:
Source - http://www.w3schools.com/js/js_htmldom.asp taken on 4/21/16


### Document Object Model
`<p>The quick brown fox jumped over the lazy dogs.</p>`

`<p>The quick <a href="#">brown fox</a> jumped over the lazy dogs.</p>`


### CSS Review

![GeneralAssemb.ly](../../img/extra/cssselector.png)


### CSS Review

![GeneralAssemb.ly](../../img/extra/cssbrackets.png)


### CSS Review

![GeneralAssemb.ly](../../img/extra/cssproperty.png)


### CSS Review

![GeneralAssemb.ly](../../img/extra/cssvaluepng.png)


![GeneralAssemb.ly](../../img/extra/cssrule.gif)

Note:
Taken from http://www.w3schools.com/css/css_syntax.asp on 4/21/16


### Let's play around with this stuff

| CSS Property          | CSS Value options (choose one) |
| --------------------- | ------------------------------ |
| background            | blue, green,red, yellow, black |
| font-size             | 12px, 16px, 18px, 24px         |
| color  (*font color*) | blue, green, red, yellow black |


## INDEPENDENT PRACTICE!
### Cookie Recipe lab

> Here's the situation...
>
> You have come across your grandma's recipe for chocolate chip cookies...but there is a problem!  The recipe has no structure or styling!
> Your challenge is to:

- Use HTML tags to add structure (use whatever tags you think are best!)
- Use CSS to add style to achieve the desired look described in the readme.md


##Exit Ticket!

Class 1
Topic: HTML Basics
