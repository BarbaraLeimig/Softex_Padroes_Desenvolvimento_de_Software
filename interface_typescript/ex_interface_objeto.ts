interface PersonData {
  name: string;
  weight?: number;
  age: number;
  hairColor?: string;
  height: number;
}

function getPersonDetail(person: PersonData) {
  return `${person.name} ${person.age} ${person.height}`;
}

let johnDoe = {
  name: "John Doe",
  age: 25,
  height: 170,
};

console.log(getPersonDetail(johnDoe));
