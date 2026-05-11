"use client";

import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const [copiedIp, setCopiedIp] = useState(false);
  const { data: session } = useSession();

  const copyIp = async () => {
    await navigator.clipboard.writeText("connect 185.207.214.198:35000");
    setCopiedIp(true);
    setTimeout(() => setCopiedIp(false), 2000);
  };

  const copyDiscord = async () => {
    await navigator.clipboard.writeText("https://discord.gg/HJ3tWgNxr8");
    alert("Discord ссылка скопирована!");
  };

  return (
    <main style={mainStyle}>
      <header style={headerStyle}>
        <h1 style={logoStyle}>LegacyRust</h1>

        <nav style={navStyle}>
          <button style={navButton}>Главная</button>
          <button style={navButton}>Магазин</button>
          <button onClick={copyDiscord} style={navButton}>
            Discord
          </button>

          {session ? (
            <div style={profileStyle}>
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt="Steam avatar"
                  width={36}
                  height={36}
                  style={{ borderRadius: "50%" }}
                />
              )}

              <span>{session.user?.name}</span>

              <button onClick={() => signOut()} style={logoutButton}>
                Выйти
              </button>
            </div>
          ) : (
            <button onClick={() => signIn("steam")} style={steamButton}>
              Войти через Steam
            </button>
          )}
        </nav>
      </header>

      <section style={heroStyle}>
        <h2 style={titleStyle}>LEGACYRUST</h2>
        <p style={subtitleStyle}>Лучший Rust сервер нового поколения</p>
      </section>

      <section style={serverSectionStyle}>
        <div style={serverCardStyle}>
          <h3 style={serverTitleStyle}>LegacyRust Classic</h3>

          <p style={textStyle}>IP: 185.207.214.198:35000</p>
          <p style={textStyle}>Онлайн: скоро</p>

          <button onClick={copyIp} style={connectButton}>
            {copiedIp ? "IP скопирован!" : "Подключиться"}
          </button>

          <p style={smallTextStyle}>Команда подключения:</p>

          <code style={codeStyle}>connect 185.207.214.198:35000</code>
        </div>
      </section>
    </main>
  );
}

const mainStyle: React.CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(to bottom, #07111f, #0b1d33, #07111f)",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 40px",
  borderBottom: "1px solid rgba(255,255,255,0.1)",
};

const logoStyle: React.CSSProperties = {
  color: "#ff7a00",
  margin: 0,
  fontSize: "32px",
};

const navStyle: React.CSSProperties = {
  display: "flex",
  gap: "25px",
  alignItems: "center",
};

const navButton: React.CSSProperties = {
  background: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",
};

const steamButton: React.CSSProperties = {
  background: "#22c55e",
  border: "none",
  color: "white",
  padding: "12px 22px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "15px",
};

const logoutButton: React.CSSProperties = {
  background: "#ff7a00",
  border: "none",
  color: "white",
  padding: "10px 16px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
};

const profileStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const heroStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "100px 20px 50px",
};

const titleStyle: React.CSSProperties = {
  fontSize: "72px",
  marginBottom: "20px",
  color: "#ff7a00",
};

const subtitleStyle: React.CSSProperties = {
  fontSize: "24px",
  opacity: 0.8,
};

const serverSectionStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  padding: "30px",
};

const serverCardStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "650px",
  background: "#101b2d",
  padding: "40px",
  borderRadius: "20px",
  border: "1px solid rgba(255,255,255,0.08)",
};

const serverTitleStyle: React.CSSProperties = {
  color: "#ff7a00",
  fontSize: "30px",
  marginBottom: "20px",
};

const textStyle: React.CSSProperties = {
  fontSize: "18px",
};

const connectButton: React.CSSProperties = {
  marginTop: "25px",
  background: "#ff7a00",
  border: "none",
  color: "white",
  padding: "15px 28px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "17px",
  fontWeight: "bold",
};

const smallTextStyle: React.CSSProperties = {
  marginTop: "20px",
  opacity: 0.6,
};

const codeStyle: React.CSSProperties = {
  display: "block",
  marginTop: "10px",
  background: "#07111f",
  padding: "15px",
  borderRadius: "10px",
  color: "#ff7a00",
  fontSize: "16px",
};