export const ASSETMGR = {
    methods: {
        addAsset: (source, type, name, parent) => {
            fetch('/data/items.json')
                .then(response => response.json())
                .then(data => {
                    const dataFetched = data[source][type][name];

                    // Create a new div element
                    const asset = document.createElement("div");

                    // Loop through the styles in dataFetched and apply them to the asset
                    for (let style in dataFetched) {
                        if (dataFetched.hasOwnProperty(style)) {
                            // Apply styles to the asset div
                            asset.style[style] = dataFetched[style];
                        }
                        asset.id = name;
                    }

                    // Append the asset to the parent
                    document.querySelector(parent).appendChild(asset);
                })
                .catch(error => console.error('Error loading asset:', error));
        }
    }
};
