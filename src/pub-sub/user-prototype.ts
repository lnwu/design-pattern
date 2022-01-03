type Notify = (user: User) => void;
type User = {
  name: string;
  status: "offline" | "online";
  followers: { user: User; notify: Notify }[];
  subscribe: (user: User, notify: Notify) => void;
  online: () => void;
};

const baseUser: User = {
  name: "",
  status: "offline",
  followers: [],

  subscribe(user, notify) {
    user.followers.push({ user, notify });
  },
  online() {
    this.status = "online";

    this.followers.forEach(({ notify }) => {
      notify(this);
    });
  },
};

export const createUser = (name: string) => {
  const user: User = Object.create(baseUser);

  user.name = name;
  user.followers = [];

  return user;
};
