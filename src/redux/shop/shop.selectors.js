import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).msp(key => collections[key])
);

export const selectCollection = collectionURLParam =>
  createSelector(
    [selectCollections],

    collections => collections[collectionURLParam]
  );
