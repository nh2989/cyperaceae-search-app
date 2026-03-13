const { useState, useEffect } = React;

function App() {
  const [screen, setScreen] = useState("home");
  const [activeKeyId, setActiveKeyId] = useState(null);
  const [currentNodeId, setCurrentNodeId] = useState("start");
  const [history, setHistory] = useState([]);
  const [result, setResult] = useState(null);

  const activeKey = activeKeyId ? ALL_KEYS[activeKeyId] : null;
  const currentNode = activeKey ? activeKey.nodes[currentNodeId] : null;

  const startKey = (keyId) => {
    setActiveKeyId(keyId);
    setCurrentNodeId("start");
    setHistory([]);
    setResult(null);
    setScreen("key");
  };

  const makeChoice = (option) => {
    const newHistoryItem = {
      nodeId: currentNodeId,
      label: option.label,
      text: option.text
    };
    if (option.result) {
      setHistory(prev => [...prev, newHistoryItem]);
      setResult(option.result);
      setScreen("result");
    } else {
      setHistory(prev => [...prev, newHistoryItem]);
      setCurrentNodeId(option.next);
    }
  };

  const goBack = () => {
    if (history.length === 0) {
      setScreen("home");
    } else {
      const prev = history[history.length - 1];
      setHistory(h => h.slice(0, -1));
      setCurrentNodeId(prev.nodeId);
      setResult(null);
      if (screen === "result") setScreen("key");
    }
  };

  const resetKey = () => {
    setCurrentNodeId("start");
    setHistory([]);
    setResult(null);
    setScreen("key");
  };

  const goHome = () => {
    setScreen("home");
    setActiveKeyId(null);
    setCurrentNodeId("start");
    setHistory([]);
    setResult(null);
  };

  const goSubKey = (subKeyId) => {
    startKey(subKeyId);
  };

  const stepNum = history.length + 1;

  return (
    <>
      <div className="app">
        {/* HEADER */}
        <header className="header">
          <div className="header-inner">
            <span className="header-icon">🌾</span>
            <div style={{ flex: 1 }}>
              <div className="header-title">カヤツリグサ科植物検索表</div>
              <div className="header-sub">Cyperaceae Interactive Key · 星野卓二・正木智美（2014）</div>
            </div>
            {screen !== "home" && (
              <button className="header-btn" onClick={goHome}>🏠 トップ</button>
            )}
          </div>
        </header>

        {/* HOME */}
        {screen === "home" && (
          <div className="home">
            <div className="home-hero">
              <span className="home-plant">🌿</span>
              <div className="home-title">カヤツリグサ科植物検索表</div>
              <div className="home-subtitle">Cyperaceae of Japan — Interactive Dichotomous Key</div>
              <div className="home-desc">
                標本の形質を観察しながら順番に選択することで、属・節を同定します。
                まず「属の検索」からはじめてください。スゲ属（Carex）が同定されたら「節の検索」へ進みます。
              </div>
            </div>

            <div className="key-cards">
              {Object.values(ALL_KEYS).map(key => (
                <div key={key.id} className="key-card" onClick={() => startKey(key.id)}>
                  <div
                    className="key-card-icon"
                    style={{ background: `${key.color}18` }}
                  >
                    {key.id === "genus" ? "🔬" : key.id === "cyperus_species" ? "🌾" : "📐"}
                  </div>
                  <div className="key-card-text">
                    <div className="key-card-title">{key.title}</div>
                    <div className="key-card-en" style={{ color: key.color }}>
                      {key.titleEn}
                    </div>
                    <div className="key-card-desc">{key.desc}</div>
                  </div>
                  <div className="key-card-arrow">›</div>
                </div>
              ))}
            </div>

            <div className="home-info">
              出典：星野卓二・正木智美（2014）「日本カヤツリグサ科植物図譜」全782頁<br />
              スゲ属の検索表は勝山（2005, 2009）を参考
            </div>
          </div>
        )}

        {/* KEY */}
        {screen === "key" && currentNode && activeKey && (
          <div className="key-screen">
            {/* Progress */}
            <div className="progress-bar-wrap">
              <div className="progress-meta">
                <span className="step-badge">ステップ {stepNum}</span>
                <button className="back-link" onClick={goBack}>
                  ← {history.length === 0 ? "トップに戻る" : "前に戻る"}
                </button>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${Math.min(stepNum * 8, 90)}%` }} />
              </div>
            </div>

            {/* Trail */}
            {history.length > 0 && (
              <div className="trail">
                {history.slice(-4).map((h, i) => (
                  <div key={i} className="trail-item">
                    <span className="trail-label">{h.label}</span>
                    <span className="trail-text">{h.text.substring(0, 30)}{h.text.length > 30 ? "…" : ""}</span>
                  </div>
                ))}
                {history.length > 4 && (
                  <div className="trail-item">
                    <span className="trail-text" style={{ color: "#aaa" }}>+{history.length - 4}ステップ</span>
                  </div>
                )}
              </div>
            )}

            {/* Couplet */}
            <div className="couplet-card">
              <div className="couplet-header">
                <span className="couplet-header-text">
                  {activeKey.title} — どちらの特徴に当てはまりますか？
                </span>
              </div>
              <div className="couplet-options">
                {currentNode.options.map((opt, i) => (
                  <div key={i}>
                    <button className="option-btn" onClick={() => makeChoice(opt)}>
                      <span className="option-label">{opt.label}</span>
                      <span className="option-text">{opt.text}</span>
                      <span className="option-arrow">›</span>
                    </button>
                    {opt.candidates && opt.candidates.length > 0 && (
                      <div className="option-candidates">
                        {opt.candidates.map((sp, j) => (
                          <div key={j} className="candidate-chip">
                            <span>{sp.name}</span>
                            <span className="candidate-chip-latin">{sp.latin}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {i < currentNode.options.length - 1 && (
                      <div className="divider">— または —</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* RESULT */}
        {screen === "result" && result && (
          <div className="result-screen">
            <div className="result-card">
              <div className="result-header">
                <div className="result-tag">
                  {activeKeyId === "genus" ? "同定結果 — 属" : "同定結果 — 節"}
                </div>
                <div className="result-name">{result.name}</div>
                <div className="result-latin">{result.latin}</div>
              </div>
              <div className="result-body">
                {/* Page reference */}
                <div className="result-page">
                  <span className="result-page-icon">📖</span>
                  <div className="result-page-text">
                    <div className="result-page-label">図譜ページ</div>
                    <div className="result-page-num">p. {result.page}</div>
                    <div className="result-page-book">
                      星野卓二・正木智美「日本カヤツリグサ科植物図譜」
                    </div>
                  </div>
                </div>

                {/* Trail summary */}
                {history.length > 0 && (
                  <div className="result-trail">
                    <div className="result-trail-title">選択した形質（{history.length}ステップ）</div>
                    <div className="result-trail-items">
                      {history.map((h, i) => (
                        <div key={i} className="result-trail-item">
                          <span className="result-trail-step">{h.label}</span>
                          <span>{h.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="result-actions">
                  {result.subKey && (
                    <button className="btn-primary" onClick={() => goSubKey(result.subKey)}>
                      📐 {result.subKeyLabel || "節の検索へ進む"}
                    </button>
                  )}
                  <button className="btn-secondary" onClick={resetKey}>
                    🔄 最初からやり直す
                  </button>
                  <button className="btn-ghost" onClick={goBack}>
                    ← 一つ前に戻る
                  </button>
                  <button className="btn-ghost" onClick={goHome}>
                    🏠 トップに戻る
                  </button>
                </div>

                <div className="key-info">
                  ※ 種の同定は図譜の各種の記載・図版をご参照ください<br />
                  ※ 選択に迷った場合は「一つ前に戻る」で確認できます
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
