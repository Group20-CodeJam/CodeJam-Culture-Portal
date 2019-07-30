const path = require('path');
const slash = require('slash');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allContentfulWriter {
          edges {
            node {
              id
            }
          }
        }
      }
    `,
  ).then((result) => {
    if (result.errors) {
      console.log('Error retrieving contentful data', result.errors);
    }

    // Resolve the paths to our template
    const writerTemplate = path.resolve('./src/templates/writer.js');

    // Then for each result we create a page.
    result.data.allContentfulWriter.edges.forEach((edge) => {
      createPage({
        path: `/writer/${edge.node.id}/`,
        component: slash(writerTemplate),
        context: {
          id: edge.node.id,
        },
      });
    });
  })
    .catch((error) => {
      console.log('Error retrieving contentful data', error);
    });
};
