import { defineField, defineType } from 'sanity';

const hireMe= defineType({
  name: 'hireMe',
  title: 'Hire Me',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'The main heading for the Hire Me section.',
      validation: Rule => Rule.required().max(50).warning('Keep the heading short and impactful.')
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description that encourages visitors to contact you for work opportunities.',
      validation: Rule => Rule.required().min(50).max(200).warning('Keep the description concise.')
    })
  ]
});
export default hireMe
