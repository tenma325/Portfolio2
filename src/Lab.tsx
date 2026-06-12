import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { reveal, revealGroup } from './motion';

type LabCard = {
  emoji: string;
  bg: string;
  title: string;
  body: string;
  badge: string;
  badgeClass: string;
};

const labCards: LabCard[] = [
  {
    emoji: '🎨',
    bg: '#ffe3f0',
    title: 'なりたち',
    body: 'convex.dev のダークなデベロッパーUIの設計分析が出発点。ダーク→ミルクピンク、黒影→カラーグローと、ぜんぶ「反転」して devepopment が生まれました。',
    badge: 'ORIGIN',
    badgeClass: 'badge-lavender',
  },
  {
    emoji: '🍮',
    bg: '#efe9ff',
    title: 'デザイン原則',
    body: '影はかならず色つき。ボタンはぷにっと squish。背景にはブロブが漂う。純黒とビビッド原色は禁止、パステルだけの世界です。',
    badge: 'RULES',
    badgeClass: 'badge-mint',
  },
  {
    emoji: '⚙️',
    bg: '#e0f7ec',
    title: 'つくり',
    body: 'Vite 8 + React 19 + TypeScript + framer-motion。フォントは M PLUS Rounded 1c と、ピクセルの DotGothic16 の2本立て。',
    badge: 'STACK',
    badgeClass: 'badge-lemon',
  },
  {
    emoji: '🤖',
    bg: '#e3f2fd',
    title: 'おともAI',
    body: 'デザインシステムをまるごと覚えこませた Ollama モデル「kawaii-design」が相棒。色に迷ったらすぐ聞けます。',
    badge: 'AI',
    badgeClass: 'badge-lavender',
  },
  {
    emoji: '📓',
    bg: '#fff8dd',
    title: '設計書',
    body: 'フルのデザインシステムは Obsidian に保存。実装側のトークンは src/tokens.css にCSS変数として定義されています。',
    badge: 'DOCS',
    badgeClass: 'badge-mint',
  },
  {
    emoji: '🚀',
    bg: '#ffe9e0',
    title: 'これから',
    body: 'もっとページを、もっとアニメーションを、もっとときめきを。小さくつくって、かわいく出荷しつづけます。',
    badge: 'FUTURE',
    badgeClass: 'badge-lemon',
  },
];

export default function Lab() {
  return (
    <section className="section">
      <div className="container">
        <motion.div variants={revealGroup} initial="hidden" animate="show">
          <motion.div variants={reveal} className="hero-overline">
            <span className="heart">♥</span>
            ABOUT THIS LAB ── このサイトについて
          </motion.div>
          <motion.h1 variants={reveal} className="hero-title">
            devepopment の<span className="highlight">ひみつ</span>
          </motion.h1>
          <motion.p variants={reveal} className="hero-subtitle">
            ここは、個人開発の作品とアイデアを「かわいく」見せるための実験場。
            落ち着いたダークUIのデザインシステムを反転して、パステル × ポップ × 流動性の
            kawaii future として再構築したサイトです。
          </motion.p>
        </motion.div>

        <motion.div
          className="works-grid"
          variants={revealGroup}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {labCards.map((card) => (
            <motion.div variants={reveal} className="card" key={card.title}>
              <div className="card-emoji" style={{ background: card.bg }}>
                {card.emoji}
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <span className={`badge ${card.badgeClass}`}>{card.badge}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="hero-actions"
          style={{ marginTop: 48 }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4, ease: 'easeOut' }}
        >
          <a className="primary-button" href="#/">
            <Heart size={18} fill="currentColor" />
            ホームにもどる
          </a>
        </motion.div>
      </div>
    </section>
  );
}
