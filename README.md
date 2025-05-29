# 🌤️ Weather App Host

![logo](https://github.com/user-attachments/assets/7d2cf731-7cd5-482f-bbf2-1fbb920f009d)


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

![Captura de Tela 2025-05-29 às 15 26 28](https://github.com/user-attachments/assets/0d7d7bf9-fd84-468e-9ab3-050d4e0b9e62)
![Captura de Tela 2025-05-29 às 15 32 38](https://github.com/user-attachments/assets/e7c56084-7a48-461a-8f2b-52f64298d2e3)
![Captura de Tela 2025-05-29 às 15 45 31](https://github.com/user-attachments/assets/be76af37-6ee9-42b0-a575-854f5a95a52f)
![Captura de Tela 2025-05-29 às 15 45 40](https://github.com/user-attachments/assets/317c91f7-5ccd-4671-a7f9-d6c83582bab9)
![Captura de Tela 2025-05-29 às 15 45 53](https://github.com/user-attachments/assets/515ef785-57e6-424d-8103-53810a5c83c8)
![Captura de Tela 2025-05-29 às 15 46 07](https://github.com/user-attachments/assets/f21a7eed-11d4-42a5-bb2e-5a862d7ee365)
![Captura de Tela 2025-05-29 às 15 46 25](https://github.com/user-attachments/assets/ab8751ef-ecd1-4dd3-b392-7b5d2e7c2330)


