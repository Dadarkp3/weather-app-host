import Container from "shared_ui_remote/Container";
import Title from "shared_ui_remote/Title";
import Paragraph from "shared_ui_remote/Paragraph";
import SunWithClouds from "../../assets/cloud.webp";

export default function AboutPage() {
  return (
    <Container>
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10">
        {/* 📄 Text content */}
        <div className="w-full lg:w-1/2">
          <Title>About Weather App</Title>
          <Paragraph>
            The Weather App is a modern web application that provides real-time
            weather forecasts using public APIs. Built with performance and
            modularity in mind, it leverages Microfrontend architecture and
            atomic design to deliver a seamless experience.
          </Paragraph>
          <Paragraph>
            This project is powered by <strong>React</strong>,{" "}
            <strong>Module Federation</strong>, and{" "}
            <strong>Tailwind CSS</strong> created using Create-mf-app. The UI
            components are shared across apps to ensure consistency and
            reusability.
          </Paragraph>
          <Paragraph>
            We aim to make checking the weather simple, fast, and accessible —
            with a beautiful and responsive design on all devices.
          </Paragraph>
        </div>

        {/* 🌤️ Image block */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={SunWithClouds} // substitua pelo seu path
            alt="Weather Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </Container>
  );
}
