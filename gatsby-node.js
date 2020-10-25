const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
	{
		allMarkdownRemark(limit: 1000) {
			edges {
				node {
					id
					frontmatter {
						template
						title
						blurbs {
							title
							body
						}
					}
					fields {
						slug
					}
				}
			}
		}
	}
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const mdFiles = result.data.allMarkdownRemark.edges;

    mdFiles.forEach(page => {
      const id = page.node.id;
      createPage({
        // page slug set in md frontmatter
        path: page.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(page.node.frontmatter.template)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });
  });
  // });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

	if (node.internal.type === 'MarkdownRemark') {
		const value = createFilePath({ node, getNode });

		// Set the /pages/home as root
		let slug = value === '/pages/home/' ? '/' : value;

		createNodeField({
			// Name of the field you are adding
			name: "slug",
			// Individual MarkdownRemark node
			node,
			// Genereated valur based on the filepath
			value: `${slug}`,
		});
	}
};
