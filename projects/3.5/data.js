const getRestaurantData = () => {
    return {
        kabob: {
            inStock: 6,
            price: 11.50,
            details: [rice, salad, bread, yogurt]
        },
        manto: {
            inStock: 3,
            price: 7.25,
            details: []
        },
        kabuli: {
            inStock: 1,
            price: 16.80,
            details: [salad, chilis, bread]
        },
        bolani: {
            inStock: 4,
            price: 4.50,
            details: [chutney]
        },
        bamya: {
            inStock: 0,
            price: 12.00,
            details: [chutney]
        },
        karahi: {
            inStock: 11,
            price: 15.50,
            details: [rice, bread, yogurt]
        },
    }
}



module.exports = getRestaurantData;