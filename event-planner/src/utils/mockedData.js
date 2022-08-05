export const events = JSON.stringify([
  {
    id: 0,
    title: "Football time?",
    location: "THE MOON",
    time: "18:00",
    date: "25/07/2022",
  },
  {
    id: 1,
    title: "Football time?",
    location: "THE MOON",
    time: "19:00",
    date: "25/07/2022",
  },
  {
    id: 2,
    title: "Football time?",
    location: "THE MOON",
    time: "20:00",
    date: "25/07/2022",
  },
  {
    id: 3,
    title: "Football time?",
    location: "THE MOON",
    time: "21:00",
    date: "25/07/2022",
  },
  {
    id: 4,
    title: "Football time?",
    location: "THE MOON",
    time: "22:00",
    date: "25/07/2022",
  },
  {
    id: 5,
    title: "Football time?",
    location: "THE MOON",
    time: "23:00",
    date: "25/07/2022",
  },
]);

export const singularEvent = {
  id: 0,
  name: "Football time or som'",
  location: { name: "Above the Dock" },
  time: "18:00",
  dateTime: "2022-08-14",
  description: `Above the quiet dock in mid night,
    Tangled in the tall mast’s corded height,
    Hangs the moon. What seemed so far away
    Is but a child’s balloon, forgotten after play.`,
  duration: 90,
  eventType: "football",
  maxPlayers: 11,
  invites: [
    {
      user: "user0@gmail.com",
      accepted: "accepted",
    },
    {
      user: "user1@gmail.com",
      accepted: "accepted",
    },
    {
      user: "user2@gmail.com",
      accepted: "declined",
    },
    {
      user: "user3@gmail.com",
      accepted: "sent",
    },
    {
      user: "user4@gmail.com",
      accepted: "declined",
    },
    {
      user: "user5@gmail.com",
      accepted: "sent",
    },
    {
      user: "user6@gmail.com",
      accepted: "accepted",
    },
  ],
  owner: true,
  requests: [
    {
      user: "user6@gmail.com",
    },
  ],
};
