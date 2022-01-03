type Notify = (user: User) => void;

export class User {
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

    this.followers.forEach(({ notify }) => {
      notify(this);
    });
  }
}
