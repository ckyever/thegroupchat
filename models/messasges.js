const getCurrentUTCDateTime = () => {
  return new Date().toISOString();
};

const messages = [
  {
    text: "First!",
    user: "ckyzo",
    added: "2020-07-01T23:42:13.787Z",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mi vitae ligula euismod auctor eu sed turpis. In sollicitudin tortor eu finibus semper. Cras tempor euismod suscipit. Aliquam ultricies lorem nunc, non aliquam est volutpat vel. In porttitor augue eget massa tempus, vel consectetur tellus vestibulum. Etiam sodales iaculis quam sit amet tristique. Nam sodales id odio id viverra.",
    user: "Chanpan",
    added: "2025-10-01T11:02:53.787Z",
  },
  {
    text: "Who asked?",
    user: "MF DOOM",
    added: "2025-11-18T23:42:13.787Z",
  },
  {
    text: "HAHAHA 😂",
    user: "Ninajirachi",
    added: "2025-11-19T22:42:13.787Z",
  },
  {
    text: "Number one. Steady hand. One day, Yakuza boss need new heart. I do operation. But mistake! Yakuza boss die! Yakuza very mad! I hide fishing boat, come to America. No English, no food, no money. Darryl give me job. Now I have house, American car and new woman. Darryl save life.",
    user: "Joji",
    added: getCurrentUTCDateTime(),
  },
  {
    text: "sybau",
    user: "Clairo",
    added: getCurrentUTCDateTime(),
  },
];

function postMessage(text, username) {
  messages.push({ text: text, user: username, added: getCurrentUTCDateTime() });
}

export { messages, postMessage };
