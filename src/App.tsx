import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Heart,
  Rocket,
  GitCommitHorizontal,
  Lightbulb,
  Activity,
  type LucideIcon,
} from 'lucide-react';
import { tokens } from './tokens';
import { reveal, revealGroup } from './motion';
import Lab from './Lab';

type Work = {
  emoji: string;
  bg: string;
  name: string;
  description: string;
  badge: string;
  badgeClass: string;
};

const works: Work[] = [
  {
    emoji: '📝',
    bg: '#ffe3f0',
    name: 'Pastel Notes',
    description: 'ふわふわ書けるマークダウンメモ。Obsidian 連携つき。',
    badge: '公開中',
    badgeClass: 'badge-mint',
  },
  {
    emoji: '🍡',
    bg: '#efe9ff',
    name: 'Mochi Timer',
    description: 'もちもち動くポモドーロタイマー。休憩がたのしくなる。',
    badge: '開発中',
    badgeClass: 'badge-lemon',
  },
  {
    emoji: '🌙',
    bg: '#e0f7ec',
    name: 'Yume Gallery',
    description: '夢日記をパステルなギャラリーに変換するジェネレーター。',
    badge: '実験中',
    badgeClass: 'badge-lavender',
  },
];

type Stat = {
  icon: LucideIcon;
  color: string;
  value: string;
  label: string;
};

const stats: Stat[] = [
  { icon: Rocket, color: tokens.sakura, value: '12', label: '公開プロジェクト' },
  { icon: GitCommitHorizontal, color: tokens.lavender, value: '3,400+', label: '今年のコミット' },
  { icon: Lightbulb, color: tokens.peach, value: '280', label: 'アイデアメモ' },
  { icon: Activity, color: tokens.mint, value: '99.9%', label: 'ワクワク稼働率' },
];

const stack = [
  ['React', tokens.sakura],
  ['TypeScript', tokens.lavender],
  ['Vite', tokens.peach],
  ['Framer Motion', tokens.mint],
  ['Convex', tokens.sky],
  ['Ollama', tokens.sakura],
  ['Obsidian', tokens.lavender],
  ['GitHub', tokens.peach],
  ['Claude Code', tokens.mint],
  ['Figma', tokens.sky],
] as const;

export default function App() {
  const [route, setRoute] = useState(() => window.location.hash);

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const isLab = route.startsWith('#/lab');

  useEffect(() => {
    if (isLab) {
      window.scrollTo(0, 0);
    } else if (route.length > 1 && !route.startsWith('#/')) {
      document.getElementById(route.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [route, isLab]);

  return (
    <div className="page" id="top">
      <div className="blob-layer" aria-hidden="true">
        <div className="blob blob-pink" />
        <div className="blob blob-lavender" />
        <div className="blob blob-mint" />
      </div>

      <header className="nav">
        <div className="container inner">
          <a className="logo" href="#top">
            <span className="logo-mark" aria-hidden="true">
              <Heart size={18} fill="currentColor" />
            </span>
            <span>devepopment</span>
          </a>
          <nav className="nav-links">
            <a className="nav-link" href="#works">
              つくったもの
            </a>
            <a className="nav-link" href="#stats">
              すうじ
            </a>
            <a className="nav-link" href="#stack">
              スタック
            </a>
          </nav>
          <a className="secondary-button" style={{ padding: '10px 20px', fontSize: 14 }} href="#contact">
            <Sparkles size={16} color={tokens.sakura} />
            いっしょにつくる
          </a>
        </div>
      </header>

      {isLab ? (
        <Lab />
      ) : (
        <>
      <section className="hero">
        <div className="container">
          <motion.div variants={revealGroup} initial="hidden" animate="show">
            <motion.div variants={reveal} className="hero-overline">
              <span className="heart">♥</span>
              PERSONAL DEV LAB ── キラキラ営業中
            </motion.div>
            <motion.h1 variants={reveal} className="hero-title">
              つくる楽しさに、
              <br />
              <span className="highlight">ときめき</span>を。
            </motion.h1>
            <motion.p variants={reveal} className="hero-subtitle">
              パステルカラーとぷにぷに動くモーションでつくる、個人開発のポートフォリオ&実験ラボ。
              かわいいは正義、出荷は芸術。
            </motion.p>
            <motion.div variants={reveal} className="hero-actions">
              <button className="primary-button" type="button">
                <Sparkles size={18} />
                作品を見る
              </button>
              <a className="secondary-button" href="#/lab">
                ラボをのぞく
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          >
            <span className="deco" style={{ top: -28, left: '8%' }}>🍓</span>
            <span className="deco" style={{ top: -16, right: '12%', animationDelay: '-1.2s' }}>⭐</span>
            <span className="deco" style={{ bottom: -22, left: '18%', animationDelay: '-2.4s' }}>☁️</span>
            <span className="deco" style={{ bottom: -10, right: '6%', animationDelay: '-3.1s' }}>🌙</span>
            <div className="code-window">
              <div className="code-titlebar">
                <span className="code-dot" style={{ background: tokens.sakura }} />
                <span className="code-dot" style={{ background: tokens.lemon }} />
                <span className="code-dot" style={{ background: tokens.mint }} />
                <span className="code-filename">devepopment.config.ts</span>
              </div>
              <div className="code-body">
                <span className="tok-kw">import</span> {'{ createSite }'} <span className="tok-kw">from</span>{' '}
                <span className="tok-str">"@deve/pop"</span>;{'\n\n'}
                <span className="tok-kw">const</span> site = <span className="tok-fn">createSite</span>({'{'}
                {'\n'}  theme: <span className="tok-str">"kawaii-future"</span>,{'\n'}
                {'  '}palette: [<span className="tok-str">"#ff8fc7"</span>, <span className="tok-str">"#a78bfa"</span>,{' '}
                <span className="tok-str">"#5fe3ad"</span>],{'\n'}
                {'  '}motion: {'{'} squish: <span className="tok-kw">true</span>, float:{' '}
                <span className="tok-kw">true</span> {'}'},{'\n'}
                {'}'});{'\n\n'}
                site.<span className="tok-fn">deploy</span>(); <span className="tok-cm">// ✨ きらきら</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" id="works">
        <div className="container">
          <motion.div
            variants={revealGroup}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.h2 variants={reveal} className="section-title">
              つくったもの
            </motion.h2>
            <motion.p variants={reveal} className="section-lead">
              小さくつくって、かわいく出荷。最近のプロジェクトたち。
            </motion.p>
            <div className="works-grid">
              {works.map((work) => (
                <motion.div variants={reveal} className="card" key={work.name}>
                  <div className="card-emoji" style={{ background: work.bg }}>
                    {work.emoji}
                  </div>
                  <h3>{work.name}</h3>
                  <p>{work.description}</p>
                  <span className={`badge ${work.badgeClass}`}>{work.badge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" id="stats">
        <div className="container">
          <motion.div
            className="stat-grid"
            variants={revealGroup}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {stats.map(({ icon: Icon, color, value, label }) => (
              <motion.div variants={reveal} className="stat" key={label}>
                <div className="stat-icon">
                  <Icon size={22} color={color} />
                </div>
                <div className="stat-number">{value}</div>
                <div className="stat-label">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="marquee-section" id="stack">
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...stack, ...stack].map(([tool, color], i) => (
              <span className="chip" key={`${tool}-${i}`}>
                <Sparkles size={16} color={color} />
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section" id="contact">
        <div className="container">
          <motion.div
            className="panel"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <h2>いっしょに、かわいい未来をつくろう</h2>
            <p>新しいプロジェクトの相談やコラボ、いつでも歓迎です。</p>
            <button className="cta-button" type="button">
              <Heart size={18} fill="currentColor" />
              話しかけてみる
            </button>
          </motion.div>
        </div>
      </section>
        </>
      )}

      <footer className="footer">
        <div className="container">
          <div>
            <span style={{ fontWeight: 800, color: tokens.ink }}>devepopment</span>
            <span> · 2026 · made with ♥ and pastel</span>
          </div>
          <a href="#top">うえにもどる ↑</a>
        </div>
      </footer>
    </div>
  );
}
