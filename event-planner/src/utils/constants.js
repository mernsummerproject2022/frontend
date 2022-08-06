export const BACKEND_PORT = 3001;
export const BACKEND_URL = `http://localhost:${BACKEND_PORT}`;

export const APPLICATION_JSON = "application/json";

const location = {
  name: "",
  lat: null,
  long: null,
};

const eventType = {
  name: "",
};

export const userReducer = {
  auth: false,
  error: null,
  user: { id: null, email: null },
};

export const eventReducer = {
  events: [],
  myEvents: [],
  event: {
    name: "",
    description: "",
    location,
    dateTime: null,
    deadline: null,
    duration: null,
    maxPlayers: null,
    eventType,
    invites: [],
  },
};

export const inviteReducer = {
    error: null,
};