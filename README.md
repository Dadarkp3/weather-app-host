# 🌤️ Weather App Host

> **Tags:** `react` `module-federation` `rspack` `tailwindcss` `zephyr` `create-mf-app` `microfrontend` `gitactions`

This is the **host** application of the Weather App, built using `create-mf-app`. It controls routing and page-level logic, and dynamically loads UI components from `weather-app-remote` via **Module Federation**.

---

## 🚀 Tech Stack

- **Framework:** React 19
- **Bundler:** Rspack
- **Transpiler:** Babel
- **Styling:** Tailwind CSS
- **Architecture:** Microfrontend via Module Federation
- **CI/CD:** GitHub Actions + Zephyr

---

## 🧩 Microfrontend Architecture

This app serves as the **Host** and consumes federated modules from `weather-app-remote`. These are dynamically imported at runtime and rendered inside layout or page components.

### Remote Components Consumed

- `Navbar`
- `Footer`
- `ForecastDayCard`

---

## 📁 Project Structure

```

/src
├─ layouts/
├─ pages/
├─ hooks/
├─ pages/
├─ presentation/
└─ assets/

```

---

## 🔗 Module Federation

```js
// host webpack.config.js (via create-mf-app)
remotes: {
  shared_ui_remote: "shared_ui_remote@http://localhost:PORT/remoteEntry.js",
}
```

---

## 📜 Scripts

```bash
pnpm install      # Install dependencies
pnpm start        # Start dev server
pnpm build        # Build for production
pnpm test         # Run tests (if configured)
```

---

## 🚀 Deployment

Deployed with **Zephyr Cloud**:

## 📃 License

MIT

Got it! Here’s the updated section you can add to both `README.md` files to include space for images of your app:

---

### 📸 App Preview
