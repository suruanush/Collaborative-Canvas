const StateManager = require("./state-manager");

const room = {
  users: {},            // store every user with colors
  state: new StateManager()
};

module.exports = room;


