# 内科クリニック 新規ホームページ制作案

## これまでの対応内容

Obsidian note `内科クリニックの新規ホームページ制作.md` の内容に沿って、内科クリニック向けの新規ホームページを作成しました。

主な対応内容は以下です。

- 内科クリニック向けの5ページ構成サイトを作成
  - トップページ
  - クリニック紹介
  - 診療案内
  - 地図・アクセス
  - Web予約・お問い合わせ
- 緑系・健康的・ナチュラルな印象のデザインに調整
- スマホ・PCのレスポンシブ表示に対応
- Google Mapを配置
- Web予約システムを後日埋め込める枠を設置
- WordPressテーマ化用の下地も作成
- GitHub上のzip配布は中止
- GitHub Pagesで閲覧できる公開URLへ切り替え
- 診療案内や特徴リストの緑アイコンを、CSSアニメーション付きの医療系アイコンへ変更

## 公開URL

以下のURLからサイトを確認できます。

`https://tenma325.github.io/devepopment/`

## GitHubリポジトリ

`https://github.com/tenma325/devepopment`

公開範囲：Public（一般公開）

## 配布について

GitHub Releaseでのzip配布は中止しました。

現在はzip配布ではなく、以下のGitHub Pages URLでサイトを閲覧する運用です。

`https://tenma325.github.io/devepopment/`

## サイトの開き方

### 公開URLで見る

1. ブラウザで `https://tenma325.github.io/devepopment/` を開きます。
2. トップページが表示されます。
3. ヘッダーのメニューから各ページへ移動できます。

確認できるページ：

- トップ
- クリニック紹介
- 診療案内
- アクセス
- Web予約・お問い合わせ

### ローカルで見る

このリポジトリでは、GitHub Pagesの配信対象を `clinic-site/` にしています。

ローカルで確認する場合：

1. リポジトリをcloneまたはダウンロードします。
2. `clinic-site/index.html` をブラウザで開きます。

各ページのファイル：

- `clinic-site/index.html` — トップページ
- `clinic-site/about.html` — クリニック紹介
- `clinic-site/services.html` — 診療案内
- `clinic-site/access.html` — 地図・アクセス
- `clinic-site/reservation.html` — Web予約・お問い合わせ

## デザイン修正内容

当初、各項目は緑色のシンプルなアイコン表現でしたが、以下のように変更しました。

- 診療カードに医療系アイコンを追加
  - 聴診器
  - ハート
  - 盾
  - 注射器
  - 問診票
  - 体温計
  - メモ
- 特徴リストに丸型の小さなアニメーションアイコンを追加
- CSSアニメーションを追加
  - やわらかいパルス
  - ふわっと浮く動き
  - 光沢が流れるハイライト

## ファイル構成

```text
devepopment/
├── clinic-site/
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   ├── access.html
│   ├── reservation.html
│   └── assets/
│       ├── styles.css
│       └── main.js
├── .github/workflows/deploy.yml
└── README.md
```

## GitHub Pages設定

GitHub Pagesは `.github/workflows/deploy.yml` により、`clinic-site/` を公開対象としてデプロイします。

公開URL：

`https://tenma325.github.io/devepopment/`

## 差し替えが必要な仮情報

実運用前に以下を差し替えてください。

- クリニック名
- 住所
- 電話番号
- 最寄り駅
- 診療時間
- 休診日
- 駐車場案内
- Google Map の実際の埋め込み先
- Web予約サービスの埋め込みコード
- 医師紹介
- ロゴ
- 実写真
- 正式な診療科目

## 注意点

- 現在のGoogle Mapは仮の場所を表示しています。
- Web予約欄は後日埋め込み用のプレースホルダーです。
- WordPressテーマ下地は元リポジトリ `internal-medicine-clinic-hp` 側に残しています。
- この `devepopment` リポジトリでは、GitHub Pagesで表示するための静的サイト一式を `clinic-site/` に配置しています。
