import Markdoc from '@markdoc/markdoc';
import fs from 'fs'

// Call the parse, transform and render Markdoc functions to render your content
const source = fs.readFileSync('example.mdoc', 'utf8');
//console.log(source)

const ast = Markdoc.parse(source);
const content = Markdoc.transform(ast, /* config */);

const html = Markdoc.renderers.html(content);

console.log(html)
