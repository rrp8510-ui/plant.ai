// app.js - Main Application Controller for FloraPulse

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Engines
  const advisorEngine = new BotanicalAIAdvisor();
  const questEngine = new QuestEngine();
  const audioEngine = new BioAcousticEngine();

  // State
  let currentCategory = 'all';
  let searchQuery = '';
  let filterSunlight = 'all';
  let filterDifficulty = 'all';
  let filterPetSafety = 'all';
  let activeModalPlant = null;

  // DOM Elements
  const tabButtons = document.querySelectorAll('.nav-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const plantsGrid = document.getElementById('plants-grid-container');
  const categoryPillsContainer = document.getElementById('category-pills-container');
  const searchInput = document.getElementById('plant-search-input');
  const sunlightSelect = document.getElementById('filter-sunlight');
  const difficultySelect = document.getElementById('filter-difficulty');
  const petSafetySelect = document.getElementById('filter-pet-safety');
  
  // Modal Elements
  const modalOverlay = document.getElementById('plant-modal-overlay');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const btnModalAddGarden = document.getElementById('btn-modal-add-garden');
  
  // Chat Elements
  const advisorForm = document.getElementById('advisor-form');
  const advisorInput = document.getElementById('advisor-user-input');
  const chatHistory = document.getElementById('chat-history-container');
  const promptChips = document.querySelectorAll('.prompt-chip');

  // Diagnostic Elements
  const leafDropZone = document.getElementById('leaf-drop-zone');
  const leafFileInput = document.getElementById('leaf-file-input');
  const sampleDiagButtons = document.querySelectorAll('.sample-diag-btn');
  const diagOutput = document.getElementById('diagnostic-output');

  // Pocket Mode Elements
  const btnTogglePocket = document.getElementById('btn-toggle-pocket');
  const btnExitPocket = document.getElementById('btn-exit-pocket');
  const pocketOutdoorTimer = document.getElementById('pocket-outdoor-timer');

  // Calendar Elements
  const selectZone = document.getElementById('select-usda-zone');
  const countdownDays = document.getElementById('frost-countdown-days');
  const countdownLabel = document.getElementById('frost-status-label');
  const octoberTasksContainer = document.getElementById('october-tasks-container');

  // My Garden Elements
  const myGardenGrid = document.getElementById('my-garden-grid');
  const myGardenCounter = document.getElementById('my-garden-counter');
  const btnBrowseToAdd = document.getElementById('btn-browse-to-add');

  /* ========================================================
     1. TAB NAVIGATION
     ======================================================== */
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTabId = btn.getAttribute('data-tab');
      
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      
      btn.classList.add('active');
      const targetPane = document.getElementById(targetTabId);
      if (targetPane) targetPane.classList.add('active');

      if (targetTabId === 'tab-garden') {
        renderMyGarden();
      }
    });
  });

  if (btnBrowseToAdd) {
    btnBrowseToAdd.addEventListener('click', () => {
      const encBtn = document.getElementById('tab-btn-encyclopedia');
      if (encBtn) encBtn.click();
    });
  }

  /* ========================================================
     2. CATEGORY PILLS & FILTERS
     ======================================================== */
  function initCategoryPills() {
    if (!categoryPillsContainer || typeof PLANT_CATEGORIES === 'undefined') return;
    categoryPillsContainer.innerHTML = '';
    
    PLANT_CATEGORIES.forEach(cat => {
      const pill = document.createElement('button');
      pill.className = `category-pill ${cat.id === currentCategory ? 'active' : ''}`;
      pill.id = `pill-cat-${cat.id}`;
      pill.innerHTML = `<span>${cat.icon}</span> <span>${cat.name}</span>`;
      pill.addEventListener('click', () => {
        currentCategory = cat.id;
        document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        renderPlants();
      });
      categoryPillsContainer.appendChild(pill);
    });
  }

  function setupFilterListeners() {
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderPlants();
      });
    }

    if (sunlightSelect) {
      sunlightSelect.addEventListener('change', (e) => {
        filterSunlight = e.target.value;
        renderPlants();
      });
    }

    if (difficultySelect) {
      difficultySelect.addEventListener('change', (e) => {
        filterDifficulty = e.target.value;
        renderPlants();
      });
    }

    if (petSafetySelect) {
      petSafetySelect.addEventListener('change', (e) => {
        filterPetSafety = e.target.value;
        renderPlants();
      });
    }
  }

  /* ========================================================
     3. RENDER PLANTS GRID
     ======================================================== */
  function renderPlants() {
    if (!plantsGrid || typeof PLANTS_DATABASE === 'undefined') return;
    plantsGrid.innerHTML = '';

    const filtered = PLANTS_DATABASE.filter(plant => {
      // Category match
      if (currentCategory !== 'all' && plant.category !== currentCategory) {
        return false;
      }

      // Search match
      if (searchQuery) {
        const matchName = plant.name.toLowerCase().includes(searchQuery);
        const matchSci = plant.scientificName.toLowerCase().includes(searchQuery);
        const matchFamily = plant.family.toLowerCase().includes(searchQuery);
        const matchSummary = plant.summary.toLowerCase().includes(searchQuery);
        if (!matchName && !matchSci && !matchFamily && !matchSummary) return false;
      }

      // Sunlight filter
      if (filterSunlight !== 'all') {
        const sun = plant.environment.sunlight.toLowerCase();
        if (filterSunlight === 'full' && !sun.includes('full sun')) return false;
        if (filterSunlight === 'indirect' && !sun.includes('indirect') && !sun.includes('partial')) return false;
        if (filterSunlight === 'shade' && !sun.includes('shade')) return false;
      }

      // Difficulty filter
      if (filterDifficulty !== 'all') {
        if (!plant.difficulty.toLowerCase().includes(filterDifficulty.toLowerCase())) return false;
      }

      // Pet Safety filter
      if (filterPetSafety === 'safe') {
        if (plant.petSafety.toLowerCase().includes('toxic')) return false;
      }

      return true;
    });

    if (filtered.length === 0) {
      plantsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <h3 style="color: #fff; margin-bottom: 0.3rem;">No Botanical Species Matched</h3>
          <p style="color: var(--text-dim); font-size: 0.9rem;">Try adjusting your search criteria or resetting filters.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(plant => {
      const card = document.createElement('article');
      card.className = 'plant-card';
      card.id = `plant-card-${plant.id}`;

      const isPetSafe = !plant.petSafety.toLowerCase().includes('toxic');
      const petBadge = isPetSafe 
        ? `<span style="color: var(--emerald-400);">🐾 Pet-Safe</span>` 
        : `<span style="color: #f87171;">⚠️ Toxic to Pets</span>`;

      card.innerHTML = `
        <div class="plant-card-header">
          <div class="plant-icon-box" style="background: ${plant.imagePlaceholder};">
            ${plant.icon}
          </div>
          <div class="plant-title-group">
            <h3 class="plant-name">${plant.name}</h3>
            <div class="plant-sci-name">${plant.scientificName}</div>
            <div class="plant-family-tag">${plant.family}</div>
          </div>
        </div>

        <p class="plant-summary">${plant.summary}</p>

        <div class="plant-specs-grid">
          <div class="spec-item">
            <span class="spec-label">Sunlight</span>
            <span class="spec-val">${plant.environment.sunlight.split('(')[0].trim()}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Soil pH</span>
            <span class="spec-val">${plant.environment.soilPh}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Difficulty</span>
            <span class="spec-val">${plant.difficulty}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Pet Profile</span>
            <span class="spec-val">${petBadge}</span>
          </div>
        </div>

        <div class="plant-card-footer">
          <button class="btn-details" data-id="${plant.id}" id="btn-explore-${plant.id}">
            🌿 Explore Plant Care
          </button>
          <button class="btn-add-garden" data-id="${plant.id}" id="btn-add-${plant.id}" title="Add to My Garden">
            ➕
          </button>
        </div>
      `;

      // Event listener for opening detail modal
      card.querySelector('.btn-details').addEventListener('click', () => {
        openPlantModal(plant);
      });

      // Quick add to garden button
      card.querySelector('.btn-add-garden').addEventListener('click', (e) => {
        e.stopPropagation();
        const added = advisorEngine.addToGarden(plant.id);
        if (added) {
          audioEngine.playHarmonicChime();
          showNotification(`Added ${plant.name} to My Garden!`);
          updateGardenCounter();
        } else {
          showNotification(`${plant.name} is already in your garden.`);
        }
      });

      plantsGrid.appendChild(card);
    });
  }

  /* ========================================================
     4. PLANT MODAL
     ======================================================== */
  function openPlantModal(plant) {
    activeModalPlant = plant;
    
    document.getElementById('modal-plant-icon').innerHTML = plant.icon;
    document.getElementById('modal-plant-icon').style.background = plant.imagePlaceholder;
    document.getElementById('modal-plant-name').textContent = plant.name;
    document.getElementById('modal-plant-sci').textContent = plant.scientificName;
    document.getElementById('modal-plant-family').textContent = plant.family;

    document.getElementById('modal-touch-grass-text').textContent = plant.touchGrassTip;

    document.getElementById('modal-feat-height').textContent = plant.features.matureHeight;
    document.getElementById('modal-feat-growth').textContent = plant.features.growthRate;
    document.getElementById('modal-feat-foliage').textContent = plant.features.foliageType;
    document.getElementById('modal-feat-pets').textContent = plant.petSafety;

    document.getElementById('modal-env-sun').textContent = plant.environment.sunlight;
    document.getElementById('modal-env-soil').textContent = plant.environment.soilType;
    document.getElementById('modal-env-ph').textContent = plant.environment.soilPh;
    document.getElementById('modal-env-zones').textContent = plant.environment.hardinessZones;
    document.getElementById('modal-env-temp').textContent = plant.environment.temperatureRange;
    document.getElementById('modal-env-humidity').textContent = plant.environment.humidity;

    document.getElementById('modal-maint-water').textContent = `${plant.maintenance.watering.frequency} — ${plant.maintenance.watering.technique}`;
    document.getElementById('modal-maint-fert').textContent = `${plant.maintenance.fertilization.npkRatio} (${plant.maintenance.fertilization.schedule}). ${plant.maintenance.fertilization.organicAdvice}`;
    document.getElementById('modal-maint-prune').textContent = plant.maintenance.pruning.instructions;

    const pestsList = document.getElementById('modal-pests-list');
    pestsList.innerHTML = plant.maintenance.pestsAndDiseases.map(p => `
      <div style="margin-bottom: 0.35rem;">
        <strong style="color: #fff;">• ${p.name}:</strong> <span>${p.treatment}</span>
      </div>
    `).join('');

    document.getElementById('modal-companions-good').textContent = plant.maintenance.companions.good.join(', ');
    document.getElementById('modal-companions-bad').textContent = plant.maintenance.companions.bad.join(', ');

    modalOverlay.classList.add('active');
  }

  function closePlantModal() {
    modalOverlay.classList.remove('active');
    activeModalPlant = null;
  }

  if (btnCloseModal) {
    btnCloseModal.addEventListener('click', closePlantModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closePlantModal();
    });
  }

  if (btnModalAddGarden) {
    btnModalAddGarden.addEventListener('click', () => {
      if (activeModalPlant) {
        const added = advisorEngine.addToGarden(activeModalPlant.id);
        if (added) {
          audioEngine.playHarmonicChime();
          showNotification(`Added ${activeModalPlant.name} to My Garden!`);
          updateGardenCounter();
        } else {
          showNotification(`${activeModalPlant.name} is already in your garden.`);
        }
      }
    });
  }

  /* ========================================================
     5. AI BOTANICAL ADVISOR CHAT
     ======================================================== */
  function appendChatMessage(sender, htmlContent) {
    if (!chatHistory) return;
    const msg = document.createElement('div');
    msg.className = `chat-message ${sender}`;

    const avatar = sender === 'bot' ? '🌿' : '👤';
    msg.innerHTML = `
      <div class="chat-avatar">${avatar}</div>
      <div class="chat-bubble">
        ${htmlContent}
      </div>
    `;

    chatHistory.appendChild(msg);
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }

  function handleAdvisorQuery(query) {
    if (!query) return;

    // User message
    appendChatMessage('user', `<p>${escapeHTML(query)}</p>`);

    // Bot synthesized response
    setTimeout(() => {
      const response = advisorEngine.askAdvisor(query);
      let content = `<h4>${response.title}</h4><p>${response.summary}</p>`;

      if (response.sections) {
        response.sections.forEach(sec => {
          content += `<h4>${sec.heading}</h4><p style="white-space: pre-line;">${sec.content}</p>`;
        });
      }

      if (response.touchGrassAction) {
        content += `
          <div class="chat-action-box">
            🌱 <strong>Touch Grass Action:</strong> ${response.touchGrassAction}
          </div>
        `;
      }

      appendChatMessage('bot', content);
    }, 250);
  }

  if (advisorForm) {
    advisorForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = advisorInput.value.trim();
      if (!val) return;
      advisorInput.value = '';
      handleAdvisorQuery(val);
    });
  }

  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt');
      handleAdvisorQuery(prompt);
    });
  });

  /* ========================================================
     6. AI LEAF & PLANT DIAGNOSTIC SCANNER
     ======================================================== */
  function renderDiagnosticReport(diag) {
    if (!diagOutput) return;
    diagOutput.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <h4 style="font-size: 1.15rem; color: #fff; margin-bottom: 0.2rem;">${diag.title}</h4>
          <p style="font-size: 0.86rem; color: var(--emerald-400); font-style: italic;">Symptom: ${diag.symptom}</p>
        </div>

        <div style="background: rgba(255, 255, 255, 0.03); padding: 1rem; border-radius: var(--radius-sm); border-left: 3px solid var(--terracotta);">
          <strong style="color: var(--terracotta-light); font-size: 0.85rem; text-transform: uppercase;">Likely Environmental Causes:</strong>
          <ul style="padding-left: 1.2rem; margin-top: 0.4rem; font-size: 0.86rem; color: #cbd5e1;">
            ${diag.likelyCauses.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>

        <div style="background: rgba(16, 185, 129, 0.08); padding: 1rem; border-radius: var(--radius-sm); border-left: 3px solid var(--emerald-400);">
          <strong style="color: var(--emerald-400); font-size: 0.85rem; text-transform: uppercase;">Organic Treatment Protocol:</strong>
          <p style="margin-top: 0.4rem; font-size: 0.88rem; color: #e2e8f0;">${diag.organicRemedy}</p>
        </div>

        <div class="chat-action-box">
          🌱 <strong>Touch Grass Action:</strong> Inspect your plant's soil moisture right now with the knuckle test and verify container drainage holes.
        </div>
      </div>
    `;
  }

  sampleDiagButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const diagId = btn.getAttribute('data-diag');
      const found = AI_GARDEN_DIAGNOSTICS.find(d => d.id === diagId);
      if (found) {
        renderDiagnosticReport(found);
      }
    });
  });

  if (leafDropZone && leafFileInput) {
    leafDropZone.addEventListener('click', () => leafFileInput.click());
    leafFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          // Analyze simulated uploaded leaf image
          const randomDiag = AI_GARDEN_DIAGNOSTICS[Math.floor(Math.random() * AI_GARDEN_DIAGNOSTICS.length)];
          renderDiagnosticReport({
            ...randomDiag,
            title: `Analyzed Sample: ${file.name} (${randomDiag.title})`
          });
          audioEngine.playHarmonicChime();
        };
        reader.readAsDataURL(file);
      }
    });
  }

  /* ========================================================
     7. FROST COUNTDOWN & OCTOBER TASKS
     ======================================================== */
  function updateFrostDate() {
    if (!selectZone || !countdownDays) return;
    const zoneVal = selectZone.value;

    let daysLeft = 11;
    let label = 'Until Average First Killing Fall Frost';

    if (zoneVal === 'Zone 4') {
      daysLeft = 0;
      label = 'First Hard Killing Frosts Currently Active!';
      countdownDays.textContent = 'Active Freeze';
      countdownDays.style.color = '#ef4444';
    } else if (zoneVal === 'Zone 5') {
      daysLeft = 3;
      label = 'Days Left in Primary Frost Window';
      countdownDays.textContent = `${daysLeft} Days`;
      countdownDays.style.color = '#f59e0b';
    } else if (zoneVal === 'Zone 6') {
      daysLeft = 11;
      label = 'Days Remaining to Finish October Planting';
      countdownDays.textContent = `${daysLeft} Days`;
      countdownDays.style.color = '#fbbf24';
    } else if (zoneVal === 'Zone 7') {
      daysLeft = 29;
      label = 'Days Until Light Frost (Peak Warm Soil Planting)';
      countdownDays.textContent = `${daysLeft} Days`;
      countdownDays.style.color = '#34d399';
    } else {
      daysLeft = 49;
      label = 'Extended Autumn Warmth Window';
      countdownDays.textContent = `${daysLeft} Days`;
      countdownDays.style.color = '#10b981';
    }

    if (countdownLabel) countdownLabel.textContent = label;
  }

  if (selectZone) {
    selectZone.addEventListener('change', updateFrostDate);
  }

  function renderOctoberTasks() {
    if (!octoberTasksContainer || typeof OCTOBER_GARDEN_TASKS === 'undefined') return;
    octoberTasksContainer.innerHTML = OCTOBER_GARDEN_TASKS.map(task => `
      <article class="task-card">
        <span class="task-tag ${task.urgency.toLowerCase()}">${task.urgency} Urgency • ${task.category}</span>
        <h4 class="task-title">${task.title}</h4>
        <div style="font-size: 0.78rem; color: var(--amber-400);">⏳ Window: ${task.idealWindow}</div>
        <p class="task-steps"><strong>Action:</strong> ${task.steps}</p>
        <div class="task-benefit">🌱 <strong>Ecological Benefit:</strong> ${task.benefit}</div>
      </article>
    `).join('');
  }

  /* ========================================================
     8. MY GARDEN TRACKER
     ======================================================== */
  function renderMyGarden() {
    if (!myGardenGrid) return;
    const garden = advisorEngine.myGarden;

    if (garden.length === 0) {
      myGardenGrid.innerHTML = `
        <div class="empty-garden-state" style="grid-column: 1/-1;">
          <div class="empty-icon">🪴</div>
          <h3 style="color: #fff; margin-bottom: 0.4rem;">Your Garden is Empty</h3>
          <p style="color: var(--text-dim); max-width: 450px; margin: 0 auto 1.2rem;">
            Explore the Botanical Encyclopedia and click the "➕" button on any plant card to start tracking your outdoor garden bed and houseplants.
          </p>
          <button class="btn-send-chat" id="btn-empty-browse">Browse Plants Now</button>
        </div>
      `;
      const btnEmptyBrowse = document.getElementById('btn-empty-browse');
      if (btnEmptyBrowse) {
        btnEmptyBrowse.addEventListener('click', () => {
          document.getElementById('tab-btn-encyclopedia').click();
        });
      }
      return;
    }

    myGardenGrid.innerHTML = '';
    garden.forEach(plant => {
      const card = document.createElement('article');
      card.className = 'plant-card';
      card.id = `my-garden-card-${plant.id}`;

      card.innerHTML = `
        <div class="plant-card-header">
          <div class="plant-icon-box" style="background: ${plant.imagePlaceholder};">
            ${plant.icon}
          </div>
          <div class="plant-title-group">
            <h3 class="plant-name">${plant.name}</h3>
            <div class="plant-sci-name">${plant.scientificName}</div>
            <div style="font-size: 0.75rem; color: var(--emerald-400); margin-top: 0.2rem;">
              Status: <strong style="color: #fff;">${plant.healthStatus}</strong>
            </div>
          </div>
        </div>

        <div class="plant-specs-grid" style="grid-template-columns: 1fr 1fr;">
          <div class="spec-item">
            <span class="spec-label">Last Watered</span>
            <span class="spec-val" id="val-watered-${plant.id}">${plant.lastWatered}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Last Fed</span>
            <span class="spec-val" id="val-fed-${plant.id}">${plant.lastFertilized}</span>
          </div>
        </div>

        <div style="padding: 0.8rem 1.4rem; font-size: 0.82rem; color: var(--text-dim);">
          💧 <strong>Cadence:</strong> ${plant.maintenance.watering.frequency}
        </div>

        <div class="plant-card-footer" style="gap: 0.5rem;">
          <button class="btn-details" id="btn-water-${plant.id}" style="background: rgba(56, 189, 248, 0.15); border-color: rgba(56, 189, 248, 0.4); color: #7dd3fc;">
            💧 Watered
          </button>
          <button class="btn-details" id="btn-feed-${plant.id}" style="background: rgba(234, 88, 12, 0.15); border-color: rgba(234, 88, 12, 0.4); color: var(--terracotta-light);">
            🌱 Fed
          </button>
          <button class="btn-add-garden" id="btn-remove-${plant.id}" title="Remove from Garden" style="color: #f87171;">
            ✕
          </button>
        </div>
      `;

      card.querySelector(`#btn-water-${plant.id}`).addEventListener('click', () => {
        advisorEngine.waterPlant(plant.id);
        document.getElementById(`val-watered-${plant.id}`).textContent = new Date().toLocaleDateString();
        audioEngine.playHarmonicChime();
        showNotification(`Logged watering for ${plant.name}`);
      });

      card.querySelector(`#btn-feed-${plant.id}`).addEventListener('click', () => {
        advisorEngine.fertilizePlant(plant.id);
        document.getElementById(`val-fed-${plant.id}`).textContent = new Date().toLocaleDateString();
        audioEngine.playHarmonicChime();
        showNotification(`Logged fertilizing for ${plant.name}`);
      });

      card.querySelector(`#btn-remove-${plant.id}`).addEventListener('click', () => {
        advisorEngine.removeFromGarden(plant.id);
        renderMyGarden();
        updateGardenCounter();
        showNotification(`Removed ${plant.name} from My Garden.`);
      });

      myGardenGrid.appendChild(card);
    });
  }

  function updateGardenCounter() {
    if (myGardenCounter) {
      myGardenCounter.textContent = advisorEngine.myGarden.length.toString();
    }
  }

  /* ========================================================
     9. POCKET MODE TOGGLE
     ======================================================== */
  function togglePocketMode(engaged) {
    questEngine.setPocketMode(engaged);
    if (engaged) {
      audioEngine.playHarmonicChime();
    }
  }

  if (btnTogglePocket) {
    btnTogglePocket.addEventListener('click', () => togglePocketMode(true));
  }

  if (btnExitPocket) {
    btnExitPocket.addEventListener('click', () => togglePocketMode(false));
  }

  setInterval(() => {
    if (pocketOutdoorTimer) {
      const mins = Math.floor(questEngine.outdoorSeconds / 60);
      const secs = questEngine.outdoorSeconds % 60;
      pocketOutdoorTimer.textContent = `${mins}m ${secs}s`;
    }
  }, 1000);

  /* ========================================================
     10. NOTIFICATION POPUP
     ======================================================== */
  function showNotification(text) {
    let notif = document.getElementById('flora-notification-toast');
    if (!notif) {
      notif = document.createElement('div');
      notif.id = 'flora-notification-toast';
      notif.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: #047857;
        color: #fff;
        padding: 0.8rem 1.4rem;
        border-radius: var(--radius-md);
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        z-index: 200;
        font-size: 0.88rem;
        font-weight: 500;
        border: 1px solid var(--emerald-400);
        transition: opacity 0.3s ease, transform 0.3s ease;
      `;
      document.body.appendChild(notif);
    }
    notif.textContent = text;
    notif.style.opacity = '1';
    notif.style.transform = 'translateY(0)';

    setTimeout(() => {
      notif.style.opacity = '0';
      notif.style.transform = 'translateY(10px)';
    }, 3200);
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  // Initial runs
  initCategoryPills();
  setupFilterListeners();
  renderPlants();
  renderOctoberTasks();
  updateFrostDate();
  updateGardenCounter();
});
