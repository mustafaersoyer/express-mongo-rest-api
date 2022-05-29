module.exports = [
  {
    script: "server.js",
    name: "server",
    exec_mode: "cluster",
    instances: 2,
  },
  {
    script: "worker.js",
    name: "worker",
  },
];
