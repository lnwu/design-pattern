import { User } from "./user";
import { createUser } from "./user-prototype";

test("should notify followers when user is online", () => {
  const user1 = new User("user1");
  const user2 = new User("user2");

  const mockNotify = jest.fn();

  user1.subscribe(user2, mockNotify);

  user2.online();

  expect(mockNotify).toBeCalledWith(user2);
});

test("should notify followers when user is online for multiple users", () => {
  const user1 = new User("user1");
  const user2 = new User("user2");
  const user3 = new User("user3");

  const mockNotifyUser1 = jest.fn();
  const mockNotifyUser2 = jest.fn();

  user1.subscribe(user3, mockNotifyUser1);
  user2.subscribe(user3, mockNotifyUser2);

  user3.online();

  expect(mockNotifyUser1).toBeCalledWith(user3);
  expect(mockNotifyUser2).toBeCalledWith(user3);
});

test("should notify followers when user is online for user prototypes", () => {
  const user1 = createUser("user1");
  const user2 = createUser("user2");
  const user3 = createUser("user3");

  const mockNotifyUser1 = jest.fn();
  const mockNotifyUser2 = jest.fn();

  user1.subscribe(user3, mockNotifyUser1);
  user2.subscribe(user3, mockNotifyUser2);

  user3.online();

  expect(mockNotifyUser1).toBeCalledWith(user3);
  expect(mockNotifyUser2).toBeCalledWith(user3);
});
