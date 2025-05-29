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
![Captura de Tela 2025-05-29 às 09 47 35](https://github.com/user-attachments/assets/0abc483a-6793-4a96-ad73-b264c99b3df9)
![Captura de Tela 2025-05-29 às 13 31 42](https://github.com/user-attachments/assets/684745ef-02c2-470c-96c1-d4a23a88172d)
![Captura de Tela 2025-05-29 às 15 01 42](https://github.com/user-attachments/assets/b482e1c1-6359-4707-bcfc-f9644d8ea40e)
![Captura de Tela 2025-05-29 às 15 01 59](https://github.com/user-attachments/assets/da4f5043-aa9b-4e83-98ed-1386911fe901)
![Captura de Tela 2025-05-29 às 15 09 22](https://github.com/user-attachments/assets/f5c8214a-758e-4291-87e0-801fe646d2c5)
![Captura de Tela 2025-05-29 às 15 09 30](https://github.com/user-attachments/assets/0edd7b9e-dde8-4ff6-a988-2fe393cea913)
![Captura de Tela 2025-05-29 às 15 09 49](https://github.com/user-attachments/assets/03a2a66d-889a-4009-a051-62de5d642b9d)
![Captura de Tela 2025-05-29 às 15 10 17](https://github.com/user-attachments/assets/48bf3e63-12e2-41f5-9743-d9c6653b8c5d)


