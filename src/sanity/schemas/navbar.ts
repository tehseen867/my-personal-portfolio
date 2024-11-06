import { Rule } from 'sanity';

const navbar= {
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().max(100),
    },
  ],
};
export default navbar
