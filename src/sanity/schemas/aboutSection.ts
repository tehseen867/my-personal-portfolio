
 const aboutSection= {
    name: 'aboutSection',
    title: 'About Section',
    type: 'document',
    fields: [
      {
        name: 'displaySection',
        title: 'Display Section',
        type: 'object',
        fields: [
              {
                name: 'companyOrUserName',
                title: 'Company or User Name',
                type: 'string',
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text',
              },
              {
                name: 'buttonText',
                title: 'Button Text',
                type: 'string',
              },
        ]},
          {
            name: 'aboutSection',
            title: 'About Section',
            type: 'object',
            fields: [
              {
                name: 'subSubHeading',
                title: 'Sub Sub Heading',
                type: 'string',
              },
              {
                name: 'heading',
                title: 'Heading',
                type: 'string',
              },
              {
                name: 'paragraph',
                title: 'Paragraph',
                type: 'text',
              },
           
            ],
          },
        ],
  };
  export default aboutSection