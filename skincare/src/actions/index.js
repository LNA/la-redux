let nextProductId = 0;

// What is a product?
// A product is a skincare product that users would give an A grade rating for based on results.
// If a user would give a skincare product a B rating, it should not be included in the app.
// Things like price and packaging should not be considered when rating a product.




// We are passing in a name, category, descript, and solutions.  What are those?
// Name: The name of the product.
// Category: Products exist in categories such as cleanser, serum, exfoliator.
// Description: Skincare products come with their own descriptions.  Use those.
// Solutions is better than saying problems.
// We want to hepl people find solutions for things like
// pores, hyperpigmentation, acne, dry skin, oily skin, etc.  So,
// solutions will carry a list of all possible solutions the
//


// Your First Test
// Create and action test for GlamGlow Supermud
// https://www.sephora.com/product/super-mud-clearing-treatment-P376409?skuId=1901230&icid2=glamglow_bestsellers_carousel:p376409
//
export const addProduct = (name, category, description, skinType, solutions) => ({
  type: 'ADD_PRODUCT',
  id: nextProductId++,
  category,
  description,
  skinType,
  solutions,
})
