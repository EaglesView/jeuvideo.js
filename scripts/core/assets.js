export const ASSETMGR = {
    methods: {
        addFetchedAsset: function (asset, parent) {
            const fetchedAsset = document.createElement(asset.typeOf);
            // Apply styles to the asset div
            for (let style in asset) {
                if (asset.hasOwnProperty(style) && style !== "children" && style !== "typeOf") {
                    fetchedAsset.style[style] = asset[style];
                }
            }

            // Set the asset's ID if provided
            fetchedAsset.id = asset.id;

            // Append the asset to the parent element only once
            document.querySelector(parent).appendChild(fetchedAsset);

            // Recursively add child assets if they exist
            if (asset.children && Object.keys(asset.children).length > 0) {
                for (let childKey in asset.children) {
                    if (asset.children.hasOwnProperty(childKey)) {
                        const child = asset.children[childKey];
                        this.addFetchedAsset(child, `#${fetchedAsset.id}`);
                    }
                }
            }
        },

        addAsset: (source, type, name, parent) => {
            fetch('/data/items.json')
                .then(response => response.json())
                .then(data => {
                    const dataFetched = data[source][type][name];
                    ASSETMGR.methods.addFetchedAsset(dataFetched, parent);
                })
                .catch(error => console.error('Error loading asset:', error));
        }
    }
};
