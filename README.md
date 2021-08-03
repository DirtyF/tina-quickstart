# A statically generated blog example using Next.js, Markdown and Tina Cloud

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

The content can be managed collaboratively from the site thanks to [TinaCMS](https://tina.io).

## Preview

<img width="1888" alt="CleanShot 2021-08-03 at 23 44 15@2x" src="https://user-images.githubusercontent.com/103008/128090401-e6cd63d8-836e-42dc-b85f-8f1d37c3fed6.png">

https://tina-quickstart-sigma.vercel.app/

### Full guide to get this starter running with Tina Cloud

- [Add TinaCMS to Next.js Blog Starter](https://tina.io/guides/tina-cloud/add-tinacms-to-existing-site/overview/)

# Notes

This blog-starter uses [Tailwind CSS](https://tailwindcss.com). To control the generated stylesheet's filesize, this example uses Tailwind CSS' v2.0 [`purge` option](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) to remove unused CSS.
