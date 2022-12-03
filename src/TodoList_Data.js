import { nanoid } from "nanoid";
export const todoList_Data = [
  {
    id: `item-${nanoid()}`,
    title: "Go",
    description: "Go to a shop",
    status: "Open",
    creationDate: new Date().toLocaleString(),
    updateDate: new Date().toLocaleString(),
  },
  {
    id: `item-${nanoid()}`,
    title: "Eat",
    description: "Eat some food",
    status: "In Progress",
    creationDate: new Date().toLocaleString(),
    updateDate: new Date().toLocaleString(),
  },
  {
    id: `item-${nanoid()}`,
    title: "Study",
    description: "Do uni task",
    status: "Done",
    creationDate: new Date().toLocaleString(),
    updateDate: new Date().toLocaleString(),
  },
];
