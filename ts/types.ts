// interface
interface User {
  name: string;
  id: number;
}

const lilPump: User = {
  name: 'Lil Pump',
  id: 0
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const lilYutchy: User = new UserAccount('Lil Yutchy', 1);

// function return type declaration
function getAdminUser (): User {
  const admin: User = {
    name: 'Admin',
    id: 999
  };

  return admin;
}

function deleteUser (user: User) {
  console.log(user.name);
}
deleteUser(lilYutchy);

// Composing Types
type SwitchStates = true | false;
type LockStates = 'locked' | 'unlocked';

let checkbox: SwitchStates = false;

function getLength(obj: string | string[]) {
  return obj.length;
}

// Generics

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: Backpack<string>;

const gg: Backpack<string> = {
  add: (obj) => { console.log('add:', obj) },
  get: () => { return 'abc' }
}
gg.add('sss');
gg.get();
