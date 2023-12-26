# Markdoc

## What is it?

Dinesh Pandiyan. [Markdoc: What is it and why do I love it?](https://youtu.be/XIw-0fCpP_4?si=H4UzeJHIM2Mprn-p)

This was recorded at a SydJS meetup - find out more at https://www.sydjs.com/. Find out more about KeyStatic at https://keystatic.com/. Video by https://twopats.live/


Markdoc seems to be a superset of mdx. It allows you to write markdown and embed React components in it.

"Content that lives alongside your code"

MDX is a superset of markdown that allows you to write JSX in markdown. Now our content can be coupled with code and be interactive.  Here is an example taken from <https://mdxjs.com/>:


```mdx
import {Chart} from './snowfall.js'
export const year = 2023

# Last year’s snowfall

In {year}, the snowfall was above average.
It was followed by a warm spring which caused
flood conditions in many of the nearby rivers.

<Chart year={year} color="#fcb32c" />
```

Dinesh is saying that mdx is not so human friendly at it looks. It is tightly coupled with your code.
It says that markdoc solves this problem. It allows you to write markdown and embed React components in it.
Here is a markdoc example taken from <https://markdoc.org/>:


Markdoc and MDX are both tools that extend the capabilities of Markdown, a lightweight markup language, but they serve slightly different purposes and have different features. Here's a comparison of the two:

I asked Bard and chat GPT *What is the difference between markdoc and mdx? and here is what they say:

Markdoc is a lightweight Markdown-based documentation authoring framework for creating rich and interactive documentation. It provides a syntax extension to Markdown that allows you to embed various elements, such as code, tables, images, and interactive widgets, into your documentation.

Here are some of the key features of Markdoc:

1. **Rich Syntax:** Markdoc extends Markdown with a set of custom syntax elements for embedding various content types, including code blocks, tables, images, and interactive widgets.

2. **Custom Themes:** Markdoc provides a variety of built-in themes for styling your documentation, and you can also create your own custom themes to match your branding and preferences.

3. **Server-Side Rendering:** Markdoc is designed for server-side rendering, which means that your documentation will be generated dynamically based on the current request and user context.

4. **SEO-Friendly:** Markdoc generates clean and semantic HTML, making your documentation more search engine friendly.

5. **Accessibility:** Markdoc adheres to accessibility guidelines to ensure that your documentation is accessible to users with disabilities.

Markdoc is a powerful tool for creating interactive and engaging documentation. It is particularly well-suited for documenting web applications, APIs, and other technical projects.

If you are looking for a lightweight and flexible documentation authoring framework, Markdoc is a great option to consider.

Regarding MDX it says:

1. **Purpose**: MDX is a JSX-in-Markdown format. It allows you to write JSX (the syntax used in React) directly in your Markdown files, making it a powerful tool for developers working with React-based frameworks.

2. **Features**:
   - **JSX in Markdown**: MDX lets you seamlessly use JSX components within Markdown content. This is particularly useful for embedding interactive or complex components in documentation or content files.
   - **React Integration**: It's closely integrated with React, allowing for the use of React components and hooks within Markdown.
   - **Ecosystem Compatibility**: MDX works well with various tools in the React ecosystem, including Gatsby, Next.js, and Create React App.

3. **Use Case**: Ideal for projects that require a blend of Markdown content and React components, such as interactive documentation, blogs, or educational content.

## Config Driven Content

Markdoc is config driven content. 

1. Content => Parse => AST
2. AST => Transform => R-Tree
3. R-Tree => Render => HTML



## References

* Dinesh Pandiyan. [Markdoc: What is it and why do I love it?](https://youtu.be/XIw-0fCpP_4?si=H4UzeJHIM2Mprn-p)
* [Markdoc: Getting started](https://markdoc.dev/docs/getting-started)
* [Markdoc Sandbox](https://markdoc.dev/sandbox?mode=preview) playground