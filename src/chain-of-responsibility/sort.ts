export type Apartment = {
  id: number;
  size?: number;
  price?: number;
};
export const sortResults = (apartments: Apartment[]): Apartment[] => {
  return apartments.sort((a, b) => {
    if (a.size && b.size) {
      if (a.price && b.price) {
        return a.price > b.price ? 1 : -1;
      }
      if (a.size === b.size) {
        return a.id > b.id ? -1 : 1;
      }
      return a.size > b.size ? -1 : 1;
    }

    if (a.size) {
      return -1;
    }
    if (b.size) {
      return 1;
    }

    if (a.price && b.price) {
      if (a.price === b.price) {
        return a.id > b.id ? -1 : 1;
      }
      return a.price > b.price ? 1 : -1;
    }

    if (a.price) {
      return -1;
    }
    if (b.price) {
      return 1;
    }

    return a.id > b.id ? -1 : 1;
  });
};
