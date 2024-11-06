import { Rule } from "sanity";

const skills= {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
      {
        name: 'skillName',
        title: 'Skill Name',
        type: 'string',
        validation: (Rule:Rule) => Rule.required().max(50),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
    ],
  };
  export default skills
  