import { Rule } from "sanity";

const heroSection= {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
       options: {
    hotspot: true // Enables the user to select the focal point of the image
  }
    },
    {
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
      validation: (Rule:Rule) => Rule.required().min(10).max(100),
    },
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      validation: (Rule:Rule) => Rule.required().min(10).max(100),
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
      validation: (Rule:Rule) => Rule.max(200),
    },
  ],
};

export default heroSection  