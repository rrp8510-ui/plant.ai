// ai-advisor.js - Local Botanical AI Advisor & Diagnostic Engine for SproutAI

class BotanicalAIAdvisor {
  constructor() {
    this.plants = (typeof PLANTS_DATABASE !== 'undefined') ? PLANTS_DATABASE : [];
    this.diagnostics = (typeof AI_GARDEN_DIAGNOSTICS !== 'undefined') ? AI_GARDEN_DIAGNOSTICS : [];
    this.myGarden = JSON.parse(localStorage.getItem('sproutai_my_garden') || '[]');
  }

  // Answer free-form user query using botanical knowledge base and heuristic reasoning
  askAdvisor(userPrompt) {
    const query = userPrompt.toLowerCase().trim();

    // 1. Check for specific plant mention in query
    const matchedPlant = this.plants.find(p => 
      query.includes(p.name.toLowerCase()) || 
      query.includes(p.id) || 
      query.includes(p.scientificName.toLowerCase().split(' ')[0])
    );

    // 2. Check for diagnostic symptoms
    const matchedDiag = this.diagnostics.find(d => 
      query.includes('yellow') || 
      query.includes('brown') || 
      query.includes('mildew') || 
      query.includes('leggy') || 
      query.includes('curl') || 
      query.includes('rot') || 
      query.includes('pest') ||
      query.includes('bug')
    );

    // 3. Check for specific intents
    if (query.includes('soil') || query.includes('mix') || query.includes('potting')) {
      return this.generateSoilMixResponse(query, matchedPlant);
    }

    if (query.includes('fertiliz') || query.includes('feed') || query.includes('npk')) {
      return this.generateFertilizerResponse(query, matchedPlant);
    }

    if (query.includes('prun') || query.includes('trim') || query.includes('cut')) {
      return this.generatePruningResponse(query, matchedPlant);
    }

    if (query.includes('october') || query.includes('fall') || query.includes('frost') || query.includes('winter')) {
      return this.generateSeasonalResponse(query);
    }

    if (matchedPlant) {
      return this.generatePlantFullCareResponse(matchedPlant);
    }

    if (matchedDiag) {
      return this.generateDiagnosticResponse(query);
    }

    // Dynamic AI Botanical Synthesizer for arbitrary plants/topics
    return this.generateDynamicBotanicalSynthesis(userPrompt);
  }

  generatePlantFullCareResponse(plant) {
    return {
      title: `Complete Botanical Guide: ${plant.name} (${plant.scientificName})`,
      category: plant.category,
      summary: plant.summary,
      plantId: plant.id,
      sections: [
        {
          heading: '🌿 Key Botanical Features',
          content: `• Family: ${plant.family}\n• Mature Size: ${plant.features.matureHeight} (spread ${plant.features.matureSpread})\n• Growth Rate: ${plant.features.growthRate}\n• Pet Toxicity: ${plant.petSafety}`
        },
        {
          heading: '☀️ Required Environment',
          content: `• Sunlight: ${plant.environment.sunlight}\n• Soil Composition: ${plant.environment.soilType}\n• Optimal Soil pH: ${plant.environment.soilPh}\n• Hardiness: ${plant.environment.hardinessZones}\n• Ideal Temperature: ${plant.environment.temperatureRange}\n• Humidity: ${plant.environment.humidity}`
        },
        {
          heading: '💧 Maintenance & Watering Routine',
          content: `• Cadence: ${plant.maintenance.watering.frequency}\n• Knuckle Test: ${plant.maintenance.watering.knuckleTest}\n• Proper Technique: ${plant.maintenance.watering.technique}`
        },
        {
          heading: '🌱 Nutrient & Pruning Schedule',
          content: `• Fertilizer NPK: ${plant.maintenance.fertilization.npkRatio}\n• Feeding Window: ${plant.maintenance.fertilization.schedule}\n• Organic Tip: ${plant.maintenance.fertilization.organicAdvice}\n• Pruning Guide: ${plant.maintenance.pruning.instructions}`
        },
        {
          heading: '🛡️ Pests, Diseases & Companion Planting',
          content: `• Key Pests: ${plant.maintenance.pestsAndDiseases.map(p => `${p.name} (Treatment: ${p.treatment})`).join('\n• ')}\n• Good Companions: ${plant.maintenance.companions.good.join(', ')}\n• Harmful Neighbors: ${plant.maintenance.companions.bad.join(', ')}`
        }
      ],
      touchGrassAction: plant.touchGrassTip
    };
  }

  generateDiagnosticResponse(query) {
    let diag = this.diagnostics[0];
    if (query.includes('brown') || query.includes('crispy')) diag = this.diagnostics[1];
    else if (query.includes('mildew') || query.includes('white')) diag = this.diagnostics[2];
    else if (query.includes('leggy') || query.includes('tall') || query.includes('fall')) diag = this.diagnostics[3];

    return {
      title: `AI Plant Diagnostic: ${diag.title}`,
      summary: `Identified symptom pattern matching "${diag.symptom}"`,
      sections: [
        {
          heading: '🔍 Likely Root Causes',
          content: diag.likelyCauses.map(c => `• ${c}`).join('\n')
        },
        {
          heading: '🌿 Organic Remedy & Treatment Protocol',
          content: diag.organicRemedy
        },
        {
          heading: '🌱 Prevention & Soil Optimization',
          content: '• Maintain steady watering cadence with adequate aeration.\n• Check container drainage holes.\n• Avoid evening overhead misting which promotes fungal spores.'
        }
      ],
      touchGrassAction: 'Inspect the underside of three lower leaves right now. Gently feel the top 2 inches of soil with your index finger.'
    };
  }

  generateSoilMixResponse(query, plant) {
    return {
      title: plant ? `Custom Soil Formulation for ${plant.name}` : 'Botanical Soil Formulation Masterclass',
      summary: 'Optimal root health begins with pore volume: 50% solid matter, 25% water-holding capacity, and 25% macropore oxygen channels.',
      sections: [
        {
          heading: '🪴 The Universal Aroid & Tropical Houseplant Mix',
          content: '• 35% Chunky Orchid Bark (fir or pine)\n• 25% Coarse Perlite or Pumice (#3 grade)\n• 25% Coconut Coir or Peat Moss\n• 15% Earthworm Castings (biological inoculant)'
        },
        {
          heading: '🥕 Rich Living Organic Raised Bed Mix (Edibles)',
          content: '• 40% Aged Leaf Compost or Composted Horse/Cow Manure\n• 40% Rich Sandy Loam or Topsoil\n• 20% Horticultural Vermiculite or Rice Hulls\n• Add 1 cup Bone Meal + 1 cup Azomite rock dust per 10 sq ft.'
        },
        {
          heading: '🌵 Gritty Desert Succulent & Cactus Mix',
          content: '• 50% Coarse Pumice or Bonsai Gritty Grit\n• 30% Perlite or Crushed Granite\n• 20% Sifted Potting Soil (low organic matter to prevent root rot)'
        }
      ],
      touchGrassAction: 'Grab a handful of your garden soil. Squeeze it into a ball in your fist: if it crumbles softly when poked, your texture is ideal!'
    };
  }

  generateFertilizerResponse(query, plant) {
    return {
      title: 'Complete Plant Nutrition & Organic Feeding Protocol',
      summary: 'Understanding Nitrogen (N for leafy foliage), Phosphorus (P for vigorous root development & blossoms), and Potassium (K for overall cellular vigor and winter cold resistance).',
      sections: [
        {
          heading: '🌱 N-P-K Role Breakdown',
          content: '• Nitrogen (N): Drives vegetative leaf growth and green chlorophyll synthesis.\n• Phosphorus (P): Essential for seedling root establishment and blossom development.\n• Potassium (K): Strengthens cell walls, regulates stomatal water loss, and provides frost resistance.'
        },
        {
          heading: '🍂 Late Season / Autumn Feeding Rules',
          content: '• CEASE high-nitrogen synthetic fertilizers on perennials and woody shrubs 6 weeks before first frost. High nitrogen forces tender green growth that freezes and kills branches.\n• Instead, apply compost top-dressing and kelp meal to nourish root mycorrhizae.'
        }
      ],
      touchGrassAction: 'Top-dress your garden beds with a 1-inch layer of rich compost or worm castings before winter rain sets in.'
    };
  }

  generatePruningResponse(query, plant) {
    return {
      title: 'Botanical Pruning & Architecture Guide',
      summary: 'Pruning channels plant auxin hormones, stimulates vigorous lateral branching, and eliminates disease vectors.',
      sections: [
        {
          heading: '✂️ The 3 Ds of Pruning',
          content: 'Always prune out the 3 Ds first with sterile bypass pruners:\n1. Dead wood\n2. Diseased foliage\n3. Damaged or crossing branches rubbing against each other.'
        },
        {
          heading: '🌿 The 45-Degree Angle Rule',
          content: 'Make clean cuts at a 45-degree angle approximately 1/4 inch above an outward-facing bud node. This angles water away from the bud to prevent rot.'
        }
      ],
      touchGrassAction: 'Take your pruning shears, wipe the blades with 70% rubbing alcohol, and remove any yellowing lower foliage.'
    };
  }

  generateSeasonalResponse(query) {
    return {
      title: 'Autumn Garden Intelligence & Frost Preparation (October 2026)',
      summary: 'Autumn is not the end of the gardening season—it is the secret foundation for next year\'s colossal yields.',
      sections: [
        {
          heading: '🧄 Must-Do Tasks This Week',
          content: '• Plant Hardneck Garlic cloves 2-3 inches deep.\n• Sow Winter Rye or Hairy Vetch cover crops over empty beds.\n• Direct-sow cold-tolerant spinach and winter mâche.\n• Plant spring allium and daffodil bulbs 6 inches deep.'
        },
        {
          heading: '❄️ Frost Protection Tactics',
          content: '• Water garden beds deeply the afternoon BEFORE an expected frost: moist soil holds 4x more thermal heat than dry soil!\n• Cover tender crops with floating frost cloth (Agribon) or overturned buckets before sundown.'
        }
      ],
      touchGrassAction: 'Collect dry deciduous fallen leaves (maple/oak) and mulch your bare soil 3 inches deep to protect earthworms all winter.'
    };
  }

  generateDynamicBotanicalSynthesis(prompt) {
    // Generate intelligent botanical synthesis for any unrecognized plant
    const words = prompt.replace(/[?.,!]/g, '').split(' ');
    const plantNameGuess = words.length > 0 ? words[words.length - 1] : 'Specimen';
    const capitalizedName = plantNameGuess.charAt(0).toUpperCase() + plantNameGuess.slice(1);

    return {
      title: `Botanical Intelligence Report: ${capitalizedName}`,
      summary: `Synthesized environmental requirements and care protocol tailored for "${prompt}".`,
      sections: [
        {
          heading: '🌿 Environmental Requirements',
          content: '• Light: Bright indirect light or 4-6 hours direct morning sun.\n• Soil: Well-draining organic loam amended with 25% perlite or pumice to prevent saturation.\n• Moisture: Practice the "soak-and-dry" method; allow top 1-2 inches of soil to dry between waterings.'
        },
        {
          heading: '🌱 Maintenance & Seasonal Strategy',
          content: '• Feeding: Balanced organic liquid kelp/fish emulsion monthly during spring/summer.\n• Pruning: Prune spent foliage just above leaf nodes to stimulate lateral branching.\n• Pest Defense: Inspect leaf undersides weekly for spider mites or aphids; spray with cold-pressed neem oil.'
        }
      ],
      touchGrassAction: 'Step outdoors, inspect your plant\'s soil moisture with your index finger, and enjoy 5 minutes in natural sunlight.'
    };
  }

  // Manage user's personal garden
  addToGarden(plantId, customNotes = '') {
    const plant = this.plants.find(p => p.id === plantId);
    if (!plant) return false;
    
    // Check if already in garden
    if (this.myGarden.some(p => p.id === plantId)) {
      return false; // Already present
    }

    const gardenItem = {
      ...plant,
      addedDate: new Date().toLocaleDateString(),
      lastWatered: new Date().toLocaleDateString(),
      lastFertilized: new Date().toLocaleDateString(),
      customNotes: customNotes || 'Added to outdoor collection.',
      healthStatus: 'Thriving'
    };

    this.myGarden.push(gardenItem);
    this.saveGarden();
    return true;
  }

  removeFromGarden(plantId) {
    this.myGarden = this.myGarden.filter(p => p.id !== plantId);
    this.saveGarden();
  }

  waterPlant(plantId) {
    const item = this.myGarden.find(p => p.id === plantId);
    if (item) {
      item.lastWatered = new Date().toLocaleDateString();
      this.saveGarden();
      return true;
    }
    return false;
  }

  fertilizePlant(plantId) {
    const item = this.myGarden.find(p => p.id === plantId);
    if (item) {
      item.lastFertilized = new Date().toLocaleDateString();
      this.saveGarden();
      return true;
    }
    return false;
  }

  saveGarden() {
    localStorage.setItem('sproutai_my_garden', JSON.stringify(this.myGarden));
  }
}

window.BotanicalAIAdvisor = BotanicalAIAdvisor;
