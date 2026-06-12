# devepopment — kawaii future dev lab

パステル × kawaii future な個人開発ポートフォリオ&実験ラボ。
ダークなデベロッパーUI(Convex 風)を出発点に、**色を反転**して「ミルクピンク × ラベンダー × ミント」の世界線で再構築しました。

> サイト名: **devepopment** (development × pop)
> Tagline: つくる楽しさに、ときめきを。

## ✨ 特徴

- **Kawaii Future デザインシステム** — `src/tokens.css` / `src/tokens.ts` にトークン集約
  - ミルクピンク `#fff7fb` 背景、Berry 紫 `#3d2b50` テキスト(純黒禁止)
  - 影は **カラーグロー** のみ。黒影は使わない
  - 角丸 16–32px の **ぷにぷに** シェイプ
  - すべてのインタラクションは **squish**(hover `scale(1.06)` / active `scale(0.94)`、イージング `cubic-bezier(0.34, 1.56, 0.64, 1)`)
  - 常時アニメ: blob-morph / float / gradient-pan / marquee-scroll / sparkle
  - `prefers-reduced-motion: reduce` で必ず無効化
- **2 ページ構成** — ハッシュルーティング(`#/lab`)で軽量に
  - `/` : ホーム(ヒーロー / つくったもの / すうじ / スタック / CTA)
  - `/lab` : ラボ(サイトのなりたち・デザイン原則・これから)
- **AI 連携** — Ollama に専用の `kawaii-design` モデルを登録して、デザイン相談が可能(下記参照)

## 🛠 スタック

- Vite 8 / React 19 / TypeScript
- framer-motion 12(ページ内アニメーション)
- lucide-react(アイコン)
- フォント: **M PLUS Rounded 1c**(本文/見出し)+ **DotGothic16**(ピクセルアクセント)
- Ollama(任意の AI アシスタント連携)

## 🚀 開発

```bash
npm install
npm run dev          # 開発サーバー (Vite)
npm run build        # プロダクションビルド (tsc -b && vite build)
npm run preview      # ビルド結果のプレビュー (http://localhost:4173)
npm run lint         # ESLint
```

> ℹ️ Vite preview は既定で IPv6 `::1` のみ LISTEN します。`http://[::1]:4173/` を使ってください。
> 旧 IPv4 で見たい場合は `npm run preview -- --host` または `vite.config.ts` で `server.host` を設定してください。

## 🤖 Ollama 連携(任意)

`Modelfile` を同梱しています。デザインシステムをまるごと覚えたローカル LLM アシスタントです。

```bash
# ベースモデルを取得(例: gemma4:12b)
ollama pull gemma4:12b

# Modelfile からモデルを作成
ollama create kawaii-design -f Modelfile

# 実行
ollama run kawaii-design
```

質問例:

> プライマリボタンの背景色とホバー時の動きを一行で教えて

→ `背景はさくら (#ff8fc7) を使用し、ホバー時に cubic-bezier(0.34, 1.56, 0.64, 1) のイージングを伴う scale(1.06) のスクイッシュ (squish) を適用します。`

## 🎨 カラーパレット(抜粋)

| 用途 | 名前 | 値 |
| :--- | :--- | :--- |
| 背景 | ミルク | `#fff7fb` |
| プライマリ | さくら | `#ff8fc7` |
| リンク/フォーカス | ラベンダー | `#a78bfa` |
| 成功 | ミント | `#5fe3ad` |
| CTA | ピーチ | `#ffab76` |
| テキスト | インク(ベリー紫) | `#3d2b50` |

詳細は [`src/tokens.css`](./src/tokens.css) を参照。

## 📂 ディレクトリ構成

```
kawaii-site/
├── Modelfile              # Ollama 用デザインシステム
├── index.html
├── package.json
├── src/
│   ├── App.tsx            # ホーム(ルーティング含む)
│   ├── Lab.tsx            # ラボページ
│   ├── main.tsx
│   ├── motion.ts          # framer-motion variants
│   ├── tokens.css         # CSS 変数(SSOT)
│   ├── tokens.ts          # TS トークン
│   └── index.css          # グローバル + 全コンポーネント
└── README.md
```

## 📝 開発プロセス

Obsidian Vault の `Projects/Kawaii Future Design System` に設計の Single Source of Truth を保存しています。
開発セッションログは `★devepopment.md` を参照。

---

© 2026 devepopment — made with ♥ and pastel
