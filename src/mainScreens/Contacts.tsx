import React from "react";
import { FlatList } from "react-native";
import ContactListItem from "../components/ContactListItem";

const chats = [
  {
    id: "1",
    user: {
      id: "u7",
      name: "A",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    },
    lastMessage: {
      id: "m6",
      text: "I think I have a solution for tha.",
      createdAt: Date.now(),
    },
  },
  {
    id: "2",
    user: {
      id: "u8",
      name: "B",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    },
    lastMessage: {
      id: "m7",
      text: "How are you doing?",
      createdAt: Date.now(),
    },
  },
  {
    id: "3",
    user: {
      id: "u9",
      name: "C",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    },
    lastMessage: {
      id: "m8",
      text: "Dear, what did you eat, today?",
      createdAt: "2023-05-27T15:40:00.000Z",
    },
  },
  {
    id: "4",
    user: {
      id: "u9",
      name: "D",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    },
    lastMessage: {
      id: "m8",
      text: "What about our podcast?",
      createdAt: "2022-09-27T15:40:00.000Z",
    },
  },
  {
    id: "5",
    user: {
      id: "u9",
      name: "E",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    },
    lastMessage: {
      id: "m8",
      text: "Do I have to send you any more details?",
      createdAt: "2021-09-27T15:40:00.000Z",
    },
  },
];

const ContactsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ContactListItem user={item.user} />}
      style={{ backgroundColor: "white" }}
    />
  );
};

export default ContactsScreen;
