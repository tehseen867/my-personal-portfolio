import { Rule } from 'sanity';

const convinceSection= {
  name: 'convinceSection',
  title: 'Convince Section',
  type: 'document',
  fields: [
    {
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().max(100),
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().max(50),
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().max(200),
    },
    {
      name: 'buttonText',
      title: 'Button text',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().max(20),
    },
  ],
};
export default convinceSection