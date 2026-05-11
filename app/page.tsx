"use client";

import { useState } from "react";
import AuthButton from "./components/AuthButton";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyIp = async () => {
    await navigator.clipboard.writeText(
      "connect 185.207.214.198:35000"
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #07111f, #0b1d33, #07111f)",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h1 style={{ color: "#ff7a00" }}>LegacyRust</h1>

        <nav
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Главная
          </a>

          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Магазин
          </a>

          <a
            href="https://discord.com/invite/HJ3tWgNxr8"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Discord
          </a>

          <AuthButton />
        </nav>
      </header>

      <section
        style={{
          textAlign: "center",
          padding: "100px 20px 60px",
        }}
      >
        <h2
          style={{
            fontSize: "64px",
            marginBottom: "20px",
            color: "#ff7a00",
          }}
        >
          LEGACYRUST
        </h2>

        <p
          style={{
            fontSize: "22px",
            opacity: 0.8,
          }}
        >
          Лучший Rust сервер нового поколения
        </p>
      </section>

      <section
        style={{
          padding: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            background: "#101b2d",
            padding: "35px",
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h3
            style={{
              color: "#ff7a00",
              fontSize: "26px",
            }}
          >
            LegacyRust Classic
          </h3>

          <p>IP: 185.207.214.198:35000</p>

          <p>Онлайн: скоро</p>

          <button
            onClick={copyIp}
            style={{
              marginTop: "20px",
              background: "#ff7a00",
              border: "none",
              color: "white",
              padding: "14px 24px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {copied
              ? "IP скопирован!"
              : "Подключиться"}
          </button>

          <p
            style={{
              marginTop: "15px",
              opacity: 0.6,
            }}
          >
            Команда:
            connect 185.207.214.198:35000
          </p>
        </div>
      </section>
    </main>
  );
}