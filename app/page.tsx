export default function Home() {
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
      {/* HEADER */}
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

        <nav style={{ display: "flex", gap: "20px" }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Главная
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Магазин
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Discord
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "120px 20px",
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
            marginBottom: "40px",
          }}
        >
          Лучший Rust сервер нового поколения
        </p>

        <button
          style={{
            background: "#ff7a00",
            color: "white",
            border: "none",
            padding: "16px 40px",
            borderRadius: "12px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Начать играть
        </button>
      </section>

      {/* SERVERS */}
      <section
        style={{
          padding: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {["Classic", "X2", "MAX3"].map((server) => (
          <div
            key={server}
            style={{
              background: "#101b2d",
              padding: "30px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3 style={{ color: "#ff7a00" }}>{server}</h3>

            <p>Онлайн: 128/300</p>

            <button
              style={{
                marginTop: "20px",
                background: "#ff7a00",
                border: "none",
                color: "white",
                padding: "12px 20px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Подключиться
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}