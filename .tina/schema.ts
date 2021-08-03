import { defineSchema } from '@tinacms/cli'

export default defineSchema({
  collections: [
    {
      label: 'Blog Posts',
      name: 'posts',
      path: '_posts',
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
        },
        {
          type: 'string',
          label: 'Excerpt',
          name: 'excerpt',
        },
        {
          type: 'string',
          label: 'Cover Image',
          name: 'coverImage',
        },
        {
          type: 'string',
          label: 'Date',
          name: 'date',
        },
        {
          type: 'object',
          label: 'Author',
          name: 'author',
          fields: [
            {
              type: 'string',
              label: 'Name',
              name: 'name',
            },
            {
              type: 'string',
              label: 'Picture',
              name: 'picture',
            },
          ],
        },
        {
          type: 'object',
          label: 'OG Image',
          name: 'ogImage',
          fields: [
            {
              type: 'string',
              label: 'Url',
              name: 'url',
            },
          ],
        },
        {
          type: 'string',
          label: 'Body',
          name: 'body',
          isBody: true,
          ui: {
            component: 'markdown'
          }
        },
      ],
    },
  ],
})