import { Rule } from "sanity";

// sanity/schema/footer.js
const socialInformation= {
    name: 'socialInformation',
    title: 'Social Information',
    type: 'document',
    fields: [
      {
        name: 'userName',
        title: 'User or Company Name',
        type: 'string',
        validation: (Rule:Rule) => Rule.required(),
      },
      {
        name: 'socialLinks',
        title: 'Social Media Links',
        type: 'object',
        fields: [
          {
            name: 'linkedin',
            title: 'LinkedIn Profile Link',
            type: 'string',
          },
          {
            name: 'instagram',
            title: 'Instagram Profile Link',
            type: 'string',
          },
          {
            name: 'xAccount',
            title: 'X Account Profile Link',
            type: 'string',
          },
          {
            name: 'facebook',
            title: 'Facebook Profile Link',
            type: 'string',
          },
        ],
      },
   
      {
        name: 'contact',
        title: 'Contact Information',
        type: 'object',
        fields: [
          {
            name: 'email',
            title: 'Email Address',
            type: 'string',
            validation: (Rule:Rule)=> Rule.email().required(),
          },
          {
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string',
          },
        ],
      },
    ],
  }
  export default socialInformation