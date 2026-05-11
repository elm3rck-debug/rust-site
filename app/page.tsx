"use client";

import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyIp = async () => {
    try {
      await navigator.clipboard.writeText(
        "connect 185.207.214.198:35000"
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      alert("Не удалось скопировать IP");
    }
  };

  const openDiscord = () => {
    window.location.href = "https://discord.com/invite/HJ3tWgNxr8";
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #07111f, #0b1d33, #07111f)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h1
          style={{
            color: "#ff7a00",
            margin: 0,
          }}
        >
          LegacyRust
        </h1>

        <nav
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
          }}
        >
          <button
            style={navButton}
          >
            Главная
          </button>

          <button
            style={navButton}
          >
            Магазин
          </button>

          <button
            onClick={openDiscord}
            style={navButton}
          >
            Discord
          </button>

          <button
            style={{
              background: "#22c55e",
              border: "none",
              color: "white",
              padding: "12px 22px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Войти через Steam
          </button>
        </nav>
      </header>

      <section
        style={{
          textAlign: "center",
          padding: "100px 20px 50px",
        }}
      >
        <h2
          style={{
            fontSize: "72px",
            marginBottom: "20px",
            color: "#ff7a00",
          }}
        >
          LEGACYRUST
        </h2>

        <p
          style={{
            fontSize: "24px",
            opacity: 0.8,
          }}
        >
          Лучший Rust сервер нового поколения
        </p>
      </section>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "650px",
            background: "#101b2d",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h3
            style={{
              color: "#ff7a00",
              fontSize: "30px",
              marginBottom: "20px",
            }}
          >
            LegacyRust Classic
          </h3>

          <p
            style={{
              fontSize: "18px",
            }}
          >
            IP: 185.207.214.198:35000
          </p>

          <p
            style={{
              fontSize: "18px",
            }}
          >
            Онлайн: скоро
          </p>

          <button
            onClick={copyIp}
            style={{
              marginTop: "25px",
              background: "#ff7a00",
              border: "none",
              color: "white",
              padding: "15px 28px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "17px",
              fontWeight: "bold",
            }}
          >
            {copied ? "IP скопирован!" : "Подключиться"}
          </button>

          <p
            style={{
              marginTop: "20px",
              opacity: 0.6,
            }}
          >
            Команда:
          </p>

          <code
            style={{
              display: "block",
              marginTop: "10px",
              background: "#07111f",
              padding: "15px",
              borderRadius: "10px",
              color: "#ff7a00",
              fontSize: "16px",
            }}
          >
            connect 185.207.214.198:35000
          </code>
        </div>
      </section>
    </main>
  );
}

const navButton: React.CSSProperties = {
  background: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",
};