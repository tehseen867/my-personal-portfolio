import { Rule } from 'sanity';

const processSection= {
  name: 'processSection',
  title: 'Process Section',
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
  ],
};
export default processSection