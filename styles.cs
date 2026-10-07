/* styles.css - FloraPulse Design System (Lush Botanical Dark Theme) */

:root {
  --bg-deep: #080d0a;
  --bg-card: rgba(16, 26, 20, 0.78);
  --bg-card-hover: rgba(22, 36, 28, 0.9);
  --bg-input: rgba(12, 20, 15, 0.85);
  
  --emerald-400: #34d399;
  --emerald-500: #10b981;
  --emerald-600: #059669;
  --emerald-700: #047857;
  
  --amber-400: #fbbf24;
  --amber-500: #f59e0b;
  --amber-600: #d97706;
  
  --terracotta: #ea580c;
  --terracotta-light: #fb923c;
  
  --text-primary: #f0fdf4;
  --text-secondary: #a7f3d0;
  --text-muted: #6ee7b7;
  --text-dim: #94a3b8;
  
  --border-subtle: rgba(16, 185, 129, 0.18);
  --border-focus: rgba(52, 211, 153, 0.55);
  
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  
  --shadow-glow: 0 0 25px rgba(16, 185, 129, 0.15);
  --shadow-card: 0 10px 30px rgba(0, 0, 0, 0.45);
  
  --font-main: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-main);
  background-color: var(--bg-deep);
  background-image: 
    radial-gradient(circle at 15% 10%, rgba(16, 185, 129, 0.12) 0%, transparent 40%),
    radial-gradient(circle at 85% 80%, rgba(234, 88, 12, 0.08) 0%, transparent 45%),
    radial-gradient(circle at 50% 50%, rgba(5, 150, 105, 0.05) 0%, transparent 60%);
  color: var(--text-primary);
  min-height: 100vh;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* App Header */
.app-header {
  border-bottom: 1px solid var(--border-subtle);
  background: rgba(8, 13, 10, 0.85);
  backdrop-filter: blur(20px);
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 1rem 2rem;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.brand-section {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.brand-logo-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, var(--emerald-500), var(--emerald-700));
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

.brand-title {
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  background: linear-gradient(90deg, #ecfdf5, var(--emerald-400));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.brand-tagline {
  font-size: 0.8rem;
  color: var(--text-dim);
  font-weight: 400;
}

.header-badges {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.8rem;
  border-radius: var(--radius-full);
  font-size: 0.78rem;
  font-weight: 500;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.25);
  color: var(--emerald-400);
}

.status-badge.highlight {
  background: rgba(234, 88, 12, 0.12);
  border-color: rgba(234, 88, 12, 0.3);
  color: var(--terracotta-light);
}

.badge-pulse {
  width: 7px;
  height: 7px;
  background-color: var(--emerald-400);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--emerald-400);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
}

/* Touch Grass Screen-Minimizing Banner */
.screen-minimizing-banner {
  background: linear-gradient(90deg, rgba(16, 185, 129, 0.15), rgba(234, 88, 12, 0.12));
  border-bottom: 1px solid var(--border-subtle);
  padding: 0.6rem 2rem;
  font-size: 0.83rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  gap: 1rem;
}

.banner-left {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--text-secondary);
}

.banner-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-pocket-toggle {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-pocket-toggle:hover {
  background: rgba(255, 255, 255, 0.18);
  border-color: var(--emerald-400);
}

/* Main Navigation Tabs */
.nav-tabs-wrapper {
  max-width: 1400px;
  margin: 1.2rem auto 0;
  padding: 0 2rem;
}

.nav-tabs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-subtle);
}

.nav-tab-btn {
  background: transparent;
  border: 1px solid transparent;
  color: var(--text-dim);
  padding: 0.65rem 1.15rem;
  border-radius: var(--radius-md);
  font-family: inherit;
  font-size: 0.92rem;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.nav-tab-btn:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.04);
}

.nav-tab-btn.active {
  color: var(--emerald-400);
  background: rgba(16, 185, 129, 0.12);
  border-color: rgba(16, 185, 129, 0.35);
  font-weight: 600;
}

/* Layout Container */
.main-content {
  max-width: 1400px;
  margin: 1.5rem auto 3rem;
  padding: 0 2rem;
}

.tab-pane {
  display: none;
}

.tab-pane.active {
  display: block;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Section Header */
.section-header {
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #fff;
  margin-bottom: 0.3rem;
}

.section-subtitle {
  color: var(--text-dim);
  font-size: 0.92rem;
}

/* Controls & Filter Bar */
.filter-bar {
  background: var(--bg-card);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 1.2rem;
  margin-bottom: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.search-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.search-input-wrapper {
  flex: 1;
  min-width: 260px;
  position: relative;
}

.search-input {
  width: 100%;
  background: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 0.75rem 1rem 0.75rem 2.6rem;
  color: #fff;
  font-family: inherit;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}

.search-input:focus {
  border-color: var(--emerald-400);
  box-shadow: 0 0 12px rgba(16, 185, 129, 0.2);
}

.search-icon {
  position: absolute;
  left: 0.9rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-dim);
  font-size: 1rem;
}

.filter-select {
  background: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 0.75rem 1.2rem;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 0.9rem;
  outline: none;
  cursor: pointer;
}

.filter-select:focus {
  border-color: var(--emerald-400);
}

.category-pills {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.category-pill {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-dim);
  padding: 0.4rem 0.9rem;
  border-radius: var(--radius-full);
  font-size: 0.82rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.category-pill:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.category-pill.active {
  background: var(--emerald-600);
  border-color: var(--emerald-400);
  color: #fff;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(16, 185, 129, 0.3);
}

/* Plant Cards Grid */
.plants-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.plant-card {
  background: var(--bg-card);
  backdrop-filter: blur(14px);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  position: relative;
}

.plant-card:hover {
  transform: translateY(-4px);
  border-color: var(--emerald-500);
  box-shadow: var(--shadow-glow);
}

.plant-card-header {
  padding: 1.2rem 1.4rem 0.8rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.plant-icon-box {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
}

.plant-title-group {
  flex: 1;
}

.plant-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
}

.plant-sci-name {
  font-size: 0.82rem;
  color: var(--emerald-400);
  font-style: italic;
}

.plant-family-tag {
  font-size: 0.72rem;
  color: var(--text-dim);
}

.plant-summary {
  padding: 0 1.4rem 0.8rem;
  font-size: 0.86rem;
  color: #cbd5e1;
  flex: 1;
}

.plant-specs-grid {
  padding: 0.8rem 1.4rem;
  background: rgba(0, 0, 0, 0.25);
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  font-size: 0.78rem;
}

.spec-item {
  display: flex;
  flex-direction: column;
}

.spec-label {
  color: var(--text-dim);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.spec-val {
  color: #fff;
  font-weight: 500;
}

.plant-card-footer {
  padding: 1rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
}

.btn-details {
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.35);
  color: var(--emerald-400);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
  font-family: inherit;
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;
  text-align: center;
}

.btn-details:hover {
  background: var(--emerald-500);
  color: #000;
  border-color: var(--emerald-400);
}

.btn-add-garden {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--text-primary);
  width: 38px;
  height: 38px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-add-garden:hover {
  background: var(--terracotta);
  border-color: var(--terracotta-light);
  color: #fff;
}

/* Modal / Plant Drawer */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(4, 8, 6, 0.85);
  backdrop-filter: blur(10px);
  z-index: 100;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal-overlay.active {
  display: flex;
}

.plant-modal-card {
  background: #0d1711;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  max-width: 860px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--border-subtle);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  position: sticky;
  top: 0;
  background: #0d1711;
  z-index: 10;
}

.btn-close-modal {
  background: rgba(255, 255, 255, 0.08);
  border: none;
  color: #fff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.btn-close-modal:hover {
  background: rgba(255, 255, 255, 0.2);
}

.modal-body {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.detail-section {
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1.3rem;
}

.detail-heading {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--emerald-400);
  margin-bottom: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.detail-data-item {
  display: flex;
  flex-direction: column;
}

.detail-data-label {
  font-size: 0.72rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.detail-data-val {
  font-size: 0.9rem;
  color: #fff;
  font-weight: 500;
}

/* Touch Grass Box */
.touch-grass-callout {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(234, 88, 12, 0.15));
  border: 1px solid var(--emerald-500);
  border-radius: var(--radius-md);
  padding: 1.2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.touch-grass-icon {
  font-size: 1.8rem;
}

.touch-grass-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--emerald-400);
  margin-bottom: 0.2rem;
}

.touch-grass-text {
  font-size: 0.88rem;
  color: #e2e8f0;
}

/* AI Botanical Advisor Section */
.advisor-container {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 1.5rem;
}

@media (max-width: 900px) {
  .advisor-container {
    grid-template-columns: 1fr;
  }
}

.advisor-chat-pane {
  background: var(--bg-card);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  height: 650px;
}

.chat-history {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.chat-message {
  display: flex;
  gap: 0.9rem;
  max-width: 92%;
}

.chat-message.user {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.chat-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.1);
}

.chat-message.bot .chat-avatar {
  background: var(--emerald-600);
}

.chat-bubble {
  padding: 1rem 1.3rem;
  border-radius: var(--radius-md);
  font-size: 0.92rem;
  line-height: 1.6;
}

.chat-message.user .chat-bubble {
  background: var(--emerald-700);
  color: #fff;
  border-bottom-right-radius: 4px;
}

.chat-message.bot .chat-bubble {
  background: rgba(18, 30, 23, 0.9);
  border: 1px solid var(--border-subtle);
  color: #e2e8f0;
  border-bottom-left-radius: 4px;
}

.chat-bubble h4 {
  color: var(--emerald-400);
  margin-top: 0.8rem;
  margin-bottom: 0.3rem;
  font-size: 0.96rem;
}

.chat-bubble h4:first-child {
  margin-top: 0;
}

.chat-bubble p, .chat-bubble li {
  margin-bottom: 0.4rem;
}

.chat-bubble ul {
  padding-left: 1.2rem;
}

.chat-action-box {
  margin-top: 0.8rem;
  padding: 0.6rem 0.9rem;
  border-radius: var(--radius-sm);
  background: rgba(16, 185, 129, 0.12);
  border-left: 3px solid var(--emerald-400);
  font-size: 0.84rem;
  color: var(--emerald-300);
}

.chat-input-area {
  padding: 1.2rem;
  border-top: 1px solid var(--border-subtle);
  background: rgba(8, 14, 10, 0.9);
  border-bottom-left-radius: var(--radius-lg);
  border-bottom-right-radius: var(--radius-lg);
}

.chips-row {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.8rem;
}

.prompt-chip {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-dim);
  padding: 0.35rem 0.8rem;
  border-radius: var(--radius-full);
  font-size: 0.78rem;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.prompt-chip:hover {
  background: rgba(16, 185, 129, 0.15);
  border-color: var(--emerald-400);
  color: #fff;
}

.chat-form {
  display: flex;
  gap: 0.8rem;
}

.chat-input {
  flex: 1;
  background: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 0.75rem 1.2rem;
  color: #fff;
  font-family: inherit;
  font-size: 0.95rem;
  outline: none;
}

.chat-input:focus {
  border-color: var(--emerald-400);
}

.btn-send-chat {
  background: var(--emerald-500);
  border: none;
  color: #000;
  font-family: inherit;
  font-weight: 700;
  padding: 0.75rem 1.4rem;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background 0.2s;
}

.btn-send-chat:hover {
  background: var(--emerald-400);
}

/* Advisor Sidebar */
.advisor-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.sidebar-card {
  background: var(--bg-card);
  backdrop-filter: blur(14px);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 1.2rem;
}

.sidebar-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--emerald-400);
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.recipe-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.recipe-item {
  padding: 0.6rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-sm);
  border-left: 2px solid var(--emerald-500);
}

.recipe-name {
  font-weight: 600;
  font-size: 0.86rem;
  color: #fff;
}

.recipe-desc {
  font-size: 0.76rem;
  color: var(--text-dim);
}

/* AI Diagnostic Scanner */
.scanner-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

@media (max-width: 850px) {
  .scanner-grid {
    grid-template-columns: 1fr;
  }
}

.scanner-left, .scanner-right {
  background: var(--bg-card);
  backdrop-filter: blur(14px);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.drop-zone {
  border: 2px dashed rgba(16, 185, 129, 0.35);
  border-radius: var(--radius-md);
  padding: 2.5rem 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background: rgba(0, 0, 0, 0.2);
}

.drop-zone:hover {
  border-color: var(--emerald-400);
  background: rgba(16, 185, 129, 0.05);
}

.drop-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.drop-text {
  font-size: 0.92rem;
  color: #e2e8f0;
}

.drop-sub {
  font-size: 0.78rem;
  color: var(--text-dim);
}

.sample-diagnostics-bar {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.sample-diag-btn {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 0.7rem 1rem;
  color: #fff;
  text-align: left;
  font-family: inherit;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sample-diag-btn:hover {
  background: rgba(16, 185, 129, 0.12);
  border-color: var(--emerald-400);
}

/* Seasonal Frost Calendar */
.calendar-banner {
  background: linear-gradient(135deg, rgba(234, 88, 12, 0.18), rgba(16, 185, 129, 0.15));
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 1.8rem;
  margin-bottom: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.zone-selector-box {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.frost-countdown-box {
  text-align: right;
}

.countdown-digits {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--amber-400);
  line-height: 1;
}

.countdown-label {
  font-size: 0.8rem;
  color: var(--text-dim);
}

.tasks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.2rem;
}

.task-card {
  background: var(--bg-card);
  backdrop-filter: blur(14px);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.task-tag {
  align-self: flex-start;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
}

.task-tag.high {
  background: rgba(234, 88, 12, 0.2);
  color: var(--terracotta-light);
  border: 1px solid rgba(234, 88, 12, 0.4);
}

.task-tag.medium {
  background: rgba(245, 158, 11, 0.2);
  color: var(--amber-400);
  border: 1px solid rgba(245, 158, 11, 0.4);
}

.task-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
}

.task-steps {
  font-size: 0.86rem;
  color: #cbd5e1;
}

.task-benefit {
  font-size: 0.8rem;
  color: var(--emerald-400);
  background: rgba(16, 185, 129, 0.08);
  padding: 0.5rem 0.8rem;
  border-radius: var(--radius-sm);
}

/* My Garden Section */
.my-garden-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.empty-garden-state {
  background: var(--bg-card);
  border: 1px dashed var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 4rem 2rem;
  text-align: center;
  color: var(--text-dim);
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 0.8rem;
}

/* Manifesto Tab */
.manifesto-card {
  background: var(--bg-card);
  backdrop-filter: blur(14px);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 1.7;
}

.manifesto-card h3 {
  font-size: 1.35rem;
  color: var(--emerald-400);
  margin-top: 1rem;
}

.manifesto-card p {
  color: #e2e8f0;
}

.manifesto-card ul {
  padding-left: 1.5rem;
  color: #cbd5e1;
}

.manifesto-card li {
  margin-bottom: 0.5rem;
}

.code-block-box {
  background: #030704;
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: var(--radius-md);
  padding: 1.2rem;
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 0.86rem;
  color: #86efac;
  overflow-x: auto;
}

/* Pocket Mode Engaged (OLED Stealth Screen-Zero Mode) */
body.pocket-mode-engaged {
  background: #000000 !important;
  color: #22c55e !important;
}

body.pocket-mode-engaged .app-header,
body.pocket-mode-engaged .nav-tabs-wrapper,
body.pocket-mode-engaged .plants-grid,
body.pocket-mode-engaged .advisor-container,
body.pocket-mode-engaged .scanner-grid,
body.pocket-mode-engaged .calendar-banner,
body.pocket-mode-engaged .manifesto-card {
  display: none !important;
}

.pocket-mode-screen {
  display: none;
  min-height: 100vh;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

body.pocket-mode-engaged .pocket-mode-screen {
  display: flex;
}

.pocket-pulse-ring {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 2px solid #15803d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  animation: radar 3s infinite ease-out;
}

@keyframes radar {
  0% { transform: scale(0.95); opacity: 0.6; box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
  50% { transform: scale(1.05); opacity: 1; box-shadow: 0 0 25px 10px rgba(34, 197, 94, 0.2); }
  100% { transform: scale(0.95); opacity: 0.6; box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
}

.pocket-title {
  font-size: 1.8rem;
  color: #4ade80;
  margin-bottom: 0.5rem;
}

.pocket-sub {
  color: #166534;
  font-size: 1rem;
  max-width: 450px;
  margin-bottom: 2rem;
}

.btn-exit-pocket {
  background: #052e16;
  border: 1px solid #16a34a;
  color: #4ade80;
  padding: 0.8rem 1.8rem;
  border-radius: var(--radius-full);
  font-family: inherit;
  font-size: 0.95rem;
  cursor: pointer;
}
