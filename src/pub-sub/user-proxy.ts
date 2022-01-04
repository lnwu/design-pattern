type Notify = (user: User) => void;

class User {
  name: string;
  status: "offline" | "online";
  followers: { user: User; notify: Notify }[];

  constructor(name: string) {
    this.name = name;
    this.status = "offline";
    this.followers = [];
  }

  subscribe(user: User, notify: Notify) {
    user.followers.push({ user, notify });
  }

  online() {
    this.status = "online";
  }
}

export const createProxyUser = (name: string) => {
  const user = new User(name);

  const proxyUser = new Proxy(user, {
    set: (target, prop: keyof User, value) => {
      target[prop] = value;
      if (prop === "status") {
        notifyStatusHandlers(target, value);
      }
      return true;
    },
  });

  const notifyStatusHandlers = (user: User, status: "online" | "offline") => {
    if (status === "online") {
      user.followers.forEach(({ notify }) => {
        notify(user);
      });
    }
  };

  return proxyUser;
};
