import { Rule } from 'sanity';

const step3= {
  name: 'step3',
  title: 'Step3',
  type: 'document',
  fields: [
  
        {
          name: 'subHeading',
          title: 'Sub Heading',
          type: 'string',
        },
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
 
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',

        },
        {
          name: 'keyPoints',
          title: 'Key Points',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule: Rule) => Rule.min(1).max(3), // Allows 1 to 3 key points
        },
      ],
    
    }
    export default step3