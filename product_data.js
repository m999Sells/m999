const products = [
    // SHOES

    // Dunks
    { 
        name: "Chunky Dunky - SB Dunk Low", 
        category: "shoes", 
        sizes: { "10": 0, }, 
        img: "Images/Dunks/CD_SBDL.png" 
    },
    { 
        name: "Concepts Purple Lobster - SB Dunk", 
        category: "shoes", 
        sizes: { "10": 0, }, 
        img: "Images/Dunks/CPL_SBD.png" 
    },
    { 
        name: "Staple Panda Pigeon - SB Dunk Low", 
        category: "shoes", 
        sizes: { "10": 0, }, 
        img: "Images/Dunks/SPP_SBDL.png" 
    },
    { 
        name: "StrangeLove Skateboards - SB Dunk", 
        category: "shoes", 
        sizes: { "10": 0, }, 
        img: "Images/Dunks/SLS_SBD.png" 
    },
    { 
        name: "Why So Sad - SB Dunk", 
        category: "shoes", 
        sizes: { "10": 0, }, 
        img: "Images/Dunks/WSS_SBD.png" 
    },
    //Travis Scotts
    { 
        name: "Fragment x Travis Scott - Jordan 1 Retro High", 
        category: "shoes", 
        sizes: { "10": 0, }, 
        img: "Images/TravisScott/FxTS_J1RH.png" 
    },
    { 
        name: "Travis Scott Mocha - Jordan 1 Retro Low", 
        category: "shoes", 
        sizes: { "10": 0, }, 
        img: "Images/TravisScott/TS_J1RL_M.png" 
    },
    { 
        name: "Travis Scott Medium Olive - Jordan 1 Retro Low", 
        category: "shoes", 
        sizes: { "10": 0, }, 
        img: "Images/TravisScott/TS_J1RL_MO.png" 
    },
    { 
        name: "Travis Scott Olive - Jordan 1 Retro Low", 
        category: "shoes", 
        sizes: { "10": 0, }, 
        img: "Images/TravisScott/TS_J1RL_O.png" 
    },
    { 
        name: "Travis Scott Velvet Brown - Jordan 1 Retro Low", 
        category: "shoes", 
        sizes: { "10": 0, }, 
        img: "Images/TravisScott/TS_J1RL_VB.png" 
    },
    // Jordan 4
    { 
        name: "Thunder - Jordan 4 Retro", 
        category: "shoes", 
        sizes: { "10": 0, }, 
        img: "Images/Jordan4/T_J4R.png" 
    },
    { 
        name: "University Blue - Jordan 4 Retro", 
        category: "shoes", 
        sizes: { "10": 0, }, 
        img: "Images/Jordan4/UB_J4R.png" 
    },
    { 
        name: "Black Cats - Jordan 4 Retro", 
        category: "shoes", 
        sizes: { "10": 0, }, 
        img: "Images/Jordan4/BC_J4R.png" 
    },
    // Yeezy
    { 
        name: "Yeezy Boost 350 v2 - Black Red", 
        category: "shoes", 
        sizes: { "10": 0, }, 
        img: "Images/Yeezy/YB350_BR.png" 
    },
    { 
        name: "Yeezy Boost 350 v2 - Zebra", 
        category: "shoes", 
        sizes: { "10": 0, }, 
        img: "Images/Yeezy/YB350_Z.png" 
    },

    // APPAREL

    // Sp5der
    { 
        name: "Sp5der P*NK V2 - Hoodie", 
        category: "apparel", 
        sizes: { "M": 0, }, 
        img: "Images/Sp5der/SPV2_B_H.png" 
    },
    { 
        name: "Sp5der P*NK v2 - Sweatpants", 
        category: "apparel", 
        sizes: { "M": 0, }, 
        img: "Images/Sp5der/SPV2_B_S.png" 
    },
    { 
        name: "Sp5der Legacy Orange - Hoodie", 
        category: "apparel", 
        sizes: { "M": 0, }, 
        img: "Images/Sp5der/SL_O_H.png" 
    },
    { 
        name: "Sp5der Legacy Orange - Sweatpants", 
        category: "apparel", 
        sizes: { "M": 0, }, 
        img: "Images/Sp5der/SL_O_P.png" 
    },

    // COLLECTABLES

    // KAWS
        // Flayed
    { 
        name: "KAWS Companion Flayed Open Edition - Brown", 
        category: "collectables", 
        sizes: { "M": 0, }, 
        img: "Images/KAWS/CFOE_BR.png" 
    },
    { 
        name: "KAWS Companion Flayed Open Edition - Black", 
        category: "collectables", 
        sizes: { "M": 0, }, 
        img: "Images/KAWS/CFOE_BK.png" 
    },
    { 
        name: "KAWS Companion Flayed Open Edition - Gray", 
        category: "collectables", 
        sizes: { "M": 0, }, 
        img: "Images/KAWS/CFOE_G.png" 
    },
    { 
        name: "KAWS Companion Flayed Open Edition - Blush", 
        category: "collectables", 
        sizes: { "M": 0, }, 
        img: "Images/KAWS/CFOE_B.png" 
    },
        // BFF
    { 
        name: "KAWS BFF Open Edition - Black", 
        category: "collectables", 
        sizes: { "M": 0, }, 
        img: "Images/KAWS/BFFOE_BK.png" 
    },
    { 
        name: "KAWS BFF Open Edition - Pink", 
        category: "collectables", 
        sizes: { "M": 0, }, 
        img: "Images/KAWS/BFFOE_P.png" 
    },
    { 
        name: "KAWS BFF Open Edition - Blue", 
        category: "collectables", 
        sizes: { "M": 0, }, 
        img: "Images/KAWS/BFFOE_B.png" 
    },
        // Astro Boy
    { 
        name: "KAWS Astro Boy - Red", 
        category: "collectables", 
        sizes: { "M": 0, }, 
        img: "Images/KAWS/AB_R.png" 
    },
    { 
        name: "KAWS Astro Boy - Gray", 
        category: "collectables", 
        sizes: { "M": 0, }, 
        img: "Images/KAWS/AB_G.png" 
    },
];

function updateAvailability() {
    products.forEach(product => {
        const totalStock = Object.values(product.sizes).reduce((acc, val) => acc + val, 0);
        product.available = totalStock > 0;
    });
}

updateAvailability();

export default products;
