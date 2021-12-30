import { Apartment, sortResults } from "./sort";
import { mapId } from "./utils";

test("只有ID时按照ID降序", () => {
  const passing: Apartment[] = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  const result = sortResults(passing);

  const expectIdSort = [3, 2, 1];

  expect(mapId(result)).toEqual(expectIdSort);
});

test("房间有大小时排名在前", () => {
  const passing: Apartment[] = [
    {
      id: 1,
    },
    {
      id: 2,
      size: 10,
    },
    {
      id: 3,
    },
  ];
  const result = sortResults(passing);

  const expectIdSort = [2, 3, 1];

  expect(mapId(result)).toEqual(expectIdSort);
});

test("有大小的房间按照房间大小排序", () => {
  const passing: Apartment[] = [
    {
      id: 1,
    },
    {
      id: 2,
      size: 20,
    },
    {
      id: 3,
    },
    {
      id: 4,
      size: 10,
    },
  ];
  const result = sortResults(passing);

  const expectIdSort = [2, 4, 3, 1];

  expect(mapId(result)).toEqual(expectIdSort);
});

test("房间大小相同的按照id排序", () => {
  const passing: Apartment[] = [
    {
      id: 1,
    },
    {
      id: 2,
      size: 10,
    },
    {
      id: 3,
    },
    {
      id: 4,
      size: 10,
    },
  ];
  const result = sortResults(passing);

  const expectIdSort = [4, 2, 3, 1];

  expect(mapId(result)).toEqual(expectIdSort);
});

test("房间有价格时排名在前", () => {
  const passing: Apartment[] = [
    {
      id: 1,
      price: 10,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  const result = sortResults(passing);

  const expectIdSort = [1, 3, 2];

  expect(mapId(result)).toEqual(expectIdSort);
});

test("房间有价格时按照价格升序", () => {
  const passing: Apartment[] = [
    {
      id: 1,
      price: 10,
    },
    {
      id: 2,
      price: 20,
    },
    {
      id: 3,
    },
  ];
  const result = sortResults(passing);

  const expectIdSort = [1, 2, 3];

  expect(mapId(result)).toEqual(expectIdSort);
});

test("房间有价格并且有大小时价格升序", () => {
  const passing: Apartment[] = [
    {
      id: 1,
      price: 20,
      size: 40,
    },
    {
      id: 2,
      price: 10,
      size: 10,
    },
    {
      id: 3,
    },
  ];
  const result = sortResults(passing);

  const expectIdSort = [2, 1, 3];

  expect(mapId(result)).toEqual(expectIdSort);
});
