export const mfConfig = {
  name: "weather_app_host",
  exposes: {},
  remotes: {
    shared_ui_remote: "shared_ui_remote@http://localhost:8081/remoteEntry.js",
  },
  shared: {
    react: { singleton: true, eager: true },
    "react-dom": { singleton: true, eager: true },
    zustand: { singleton: true, eager: true },
    tailwindcss: { singleton: true, eager: true },
  },
};
