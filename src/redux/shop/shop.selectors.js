import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollection = (collectionUrlParam) => {
  return createSelector([selectShopCollections], (collections) =>
    collections.find(
      (collectionItem) =>
        collectionItem.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
};