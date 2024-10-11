export const ASSETMGR = {
    methods: {
        addFetchedAsset: function (asset, parent, templates) {
            let fetchedAsset;
            // If a template is provided, fetch the template details
            if (asset.template && templates[asset.template]) {
                const template = templates[asset.template];
                fetchedAsset = document.createElement(template.type);

                // Apply template styles
                Object.keys(template.styles).forEach(style => {
                    fetchedAsset.style[style] = template.styles[style];
                });
            } else {
                // Create the element from the asset itself
                fetchedAsset = document.createElement(asset.type);
            }

            // Apply any specific styles or overrides in the asset itself
            if (asset.styles) {
                Object.keys(asset.styles).forEach(style => {
                    fetchedAsset.style[style] = asset.styles[style];
                });
            }

            // Assign ID and append to parent
            fetchedAsset.id = asset.id;
            document.querySelector(parent).appendChild(fetchedAsset);

            // Recursively handle children
            if (asset.children && asset.children.length > 0) {
                asset.children.forEach(child => {
                    this.addFetchedAsset(child, `#${fetchedAsset.id}`, templates);
                });
            }
        },

        // Revised `addAsset` to fetch and apply templates
        addAsset: (name, parent) => {
            // Fetch the JSON data
            fetch('/data/items.json')
                .then(response => response.json())
                .then(data => {
                    // Fetch templates and asset by name
                    const templates = data.templates;
                    const dataFetched = data.assets.find(asset => asset.id === name);
                    // If asset is found, add it to the parent
                    if (dataFetched) {
                        ASSETMGR.methods.addFetchedAsset(dataFetched, parent, templates);
                    }
                })
                .catch(error => console.error('Error loading asset:', error));
        }
    }
};
