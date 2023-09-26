enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Resource<T> {
  uid: number;
  resourceType: number;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.AUTHOR,
  data: { title: "name of the wind" },
};

const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.PERSON,
  data: { title: "yoshi" },
};

console.log(docOne, docTwo);
