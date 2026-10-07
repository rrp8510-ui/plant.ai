// plants-data.js - Comprehensive Botanical & Gardening Knowledge Base for SproutAI

const PLANT_CATEGORIES = [
  { id: 'all', name: 'All Plants', icon: '🌿' },
  { id: 'vegetables', name: 'Vegetables & Edibles', icon: '🥕' },
  { id: 'herbs', name: 'Herbs & Aromatics', icon: '🌱' },
  { id: 'houseplants', name: 'Houseplants & Tropicals', icon: '🪴' },
  { id: 'flowers', name: 'Flowers & Pollinators', icon: '🌸' },
  { id: 'fruits', name: 'Fruits & Berries', icon: '🍓' },
  { id: 'succulents', name: 'Succulents & Cacti', icon: '🌵' }
];

const PLANTS_DATABASE = [
  {
    id: 'tomato',
    name: 'Heirloom Tomato',
    scientificName: 'Solanum lycopersicum',
    family: 'Solanaceae (Nightshade family)',
    category: 'vegetables',
    icon: '🍅',
    imagePlaceholder: 'linear-gradient(135deg, #ef4444, #b91c1c)',
    summary: 'A warm-season staple prized for rich, tangy-sweet fruit. Requires sturdy trellising and deep root soaking.',
    difficulty: 'Moderate',
    petSafety: 'Toxic to pets (foliage and stems contain solanine)',
    features: {
      matureHeight: '4 to 8 feet (indeterminate varieties)',
      matureSpread: '2 to 3 feet',
      growthRate: 'Rapid (70-85 days from transplant to harvest)',
      foliageType: 'Deciduous, pinnately compound, glandular hairs with pungent aroma',
      bloomTime: 'Late spring through summer until first fall frost',
      lifespan: 'Annual (perennial in USDA zones 10-11)'
    },
    environment: {
      sunlight: 'Full Sun (minimum 6-8+ hours of direct unfiltered light daily)',
      soilType: 'Rich, well-draining loamy soil amended with aged compost or worm castings',
      soilPh: '6.2 - 6.8 (slightly acidic to neutral)',
      hardinessZones: 'USDA 4 - 11 (grown as warm-season annual)',
      temperatureRange: '70°F - 85°F (21°C - 29°C) daytime; night temperatures above 55°F (13°C)',
      humidity: '40% - 70% (high humidity combined with poor airflow invites blight)'
    },
    maintenance: {
      watering: {
        frequency: 'Deep watering 2-3 times per week; 1-2 inches of water weekly',
        knuckleTest: 'Top 2 inches of soil must be slightly dry before re-watering',
        technique: 'Water at soil level via drip irrigation or soaker hose; NEVER wet foliage to prevent fungal spores'
      },
      fertilization: {
        npkRatio: 'Balanced 5-5-5 at planting, then switch to high-phosphorus 5-10-10 or tomato formula when blossoms appear',
        schedule: 'Every 2-3 weeks during active fruiting',
        organicAdvice: 'Top-dress with bone meal and crushed eggshells for calcium to prevent blossom end rot'
      },
      pruning: {
        instructions: 'Pinch off "suckers" (side shoots growing in the 45-degree crotch between main stem and leaves) to direct energy into fruit. Remove bottom 12 inches of foliage to prevent soil-splash pathogens.'
      },
      pestsAndDiseases: [
        { name: 'Tomato Hornworm', treatment: 'Hand-pick caterpillars into soapy water; encourage parasitic braconid wasps.' },
        { name: 'Early & Late Blight', treatment: 'Mulch soil with clean straw, spray preventative copper fungicide or diluted neem oil, prune infected lower leaves immediately.' },
        { name: 'Blossom End Rot', treatment: 'Maintain consistent soil moisture and supply calcium; avoid erratic dry-wet drought cycles.' }
      ],
      propagation: 'Easily propagated via seeds started indoors 6-8 weeks before last spring frost, or rooted sucker cuttings in water.',
      companions: {
        good: ['Sweet Basil (repels hornworms & enhances flavor)', 'Marigolds (deter root-knot nematodes)', 'Borage', 'Carrots'],
        bad: ['Fennel', 'Potatoes (cross-transmit blight)', 'Brassicas (cabbage, broccoli)']
      }
    },
    touchGrassTip: 'Go outside and prune the bottom 3 foliage branches touching the mulch. Inhale the aromatic terpene perfume from the crushed leaves.'
  },
  {
    id: 'monstera',
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    family: 'Araceae (Aroid family)',
    category: 'houseplants',
    icon: '🪴',
    imagePlaceholder: 'linear-gradient(135deg, #059669, #047857)',
    summary: 'The iconic Swiss Cheese plant celebrated for magnificent fenestrated leaves and vigorous climbing aerial roots.',
    difficulty: 'Easy',
    petSafety: 'Toxic to cats and dogs (insoluble calcium oxalate crystals cause oral irritation)',
    features: {
      matureHeight: '6 to 10+ feet indoors with moss pole support; 20+ feet in tropical outdoor canopy',
      matureSpread: '3 to 5 feet',
      growthRate: 'Moderate to fast in bright indirect light',
      foliageType: 'Broad glossy evergreen cordate leaves developing dramatic perforations (fenestrations)',
      bloomTime: 'Rare indoors; produces white spadix and edible fruit in native tropical habitat',
      lifespan: 'Perennial evergreen'
    },
    environment: {
      sunlight: 'Bright, indirect sunlight. Avoid harsh direct midday rays which scorch foliage.',
      soilType: 'Chunky, airy aroid mix (equal parts orchid bark, perlite, coco coir, and worm castings)',
      soilPh: '5.5 - 7.0 (slightly acidic)',
      hardinessZones: 'USDA 10 - 12 (grown as houseplant elsewhere)',
      temperatureRange: '65°F - 85°F (18°C - 29°C); never expose to drafts under 50°F (10°C)',
      humidity: '60% - 80% preferred; tolerates average household humidity (40-50%)'
    },
    maintenance: {
      watering: {
        frequency: 'Every 1 to 2 weeks; reduce significantly in winter months',
        knuckleTest: 'Allow top 50-75% of pot soil to dry out completely before saturating',
        technique: 'Thoroughly drench until water runs out bottom drainage holes; discard standing saucer runoff'
      },
      fertilization: {
        npkRatio: 'Balanced liquid houseplant fertilizer (20-20-20 diluted to half strength)',
        schedule: 'Monthly throughout spring and summer; withhold feeding during winter dormancy',
        organicAdvice: 'Add worm casting tea or mild kelp meal extract for lustrous leaf gloss'
      },
      pruning: {
        instructions: 'Trim yellowing or damaged lower foliage with sterile shears. Train aerial roots into moss pole or tuck them into the soil mix.'
      },
      pestsAndDiseases: [
        { name: 'Spider Mites', treatment: 'Wipe leaves top and bottom with warm soapy water or insecticidal soap spray.' },
        { name: 'Scale & Mealybugs', treatment: 'Spot-treat with cotton swab dipped in 70% isopropyl alcohol.' },
        { name: 'Root Rot (Pythium)', treatment: 'Ensure drainage holes are unobstructed; repot into chunkier bark substrate and trim black mushy roots.' }
      ],
      propagation: 'Stem cuttings with at least one active node and aerial root rooted in moist sphagnum moss, water, or perlite.',
      companions: {
        good: ['Pothos', 'Philodendron', 'Bird of Paradise (creates shared microclimate humidity)'],
        bad: ['Desert cacti (conflicting humidity requirements)']
      }
    },
    touchGrassTip: 'Wipe both sides of each Monstera leaf with a damp microfiber cloth to remove dust and maximize photosynthetic efficiency.'
  },
  {
    id: 'basil',
    name: 'Genovese Sweet Basil',
    scientificName: 'Ocimum basilicum',
    family: 'Lamiaceae (Mint family)',
    category: 'herbs',
    icon: '🌱',
    imagePlaceholder: 'linear-gradient(135deg, #10b981, #047857)',
    summary: 'Essential aromatic herb with sweet, spicy anise notes. Continuous leaf harvesting encourages bushy, prolific branching.',
    difficulty: 'Easy',
    petSafety: 'Non-toxic to cats and dogs (completely pet safe)',
    features: {
      matureHeight: '18 to 24 inches',
      matureSpread: '12 to 18 inches',
      growthRate: 'Very fast (harvest ready in 30 days)',
      foliageType: 'Lush tender emerald green leaves with prominent veins',
      bloomTime: 'Summer (pinch flowers immediately to maintain leaf sweet essential oils)',
      lifespan: 'Tender annual'
    },
    environment: {
      sunlight: 'Full Sun (6 to 8 hours daily); tolerates light afternoon shade in searing southern climates',
      soilType: 'Moist, rich, well-draining garden soil enriched with aged compost',
      soilPh: '6.0 - 7.0',
      hardinessZones: 'USDA 4 - 10 (grown as summer annual; dies at first touch of frost)',
      temperatureRange: '70°F - 90°F (21°C - 32°C); sensitive to cold temperatures below 50°F (10°C)',
      humidity: '40% - 60%'
    },
    maintenance: {
      watering: {
        frequency: 'Every 2-3 days in ground; daily or every other day in terracotta containers',
        knuckleTest: 'Water when top 1 inch feels dry; keep soil consistently moist but never soggy',
        technique: 'Water early morning at the base; avoid wetting delicate leaves in direct afternoon sun'
      },
      fertilization: {
        npkRatio: 'Mild all-purpose organic fertilizer (5-5-5) or organic fish emulsion',
        schedule: 'Every 4 weeks; over-fertilizing degrades the potency of aromatic essential oils',
        organicAdvice: 'Light side-dressing of compost once mid-season is usually sufficient'
      },
      pruning: {
        instructions: 'Regular "pinching": Prune the top growing tip just above a pair of leaf nodes. This triggers two new lateral branches, doubling your harvest volume and preventing premature flowering.'
      },
      pestsAndDiseases: [
        { name: 'Fusarium Wilt', treatment: 'Plant certified wilt-resistant seed varieties; rotate planting beds annually.' },
        { name: 'Downy Mildew', treatment: 'Ensure wide plant spacing (12+ inches) for air circulation; avoid overhead watering.' },
        { name: 'Japanese Beetles', treatment: 'Hand-pick into soapy water in early morning when beetles are sluggish.' }
      ],
      propagation: 'Roots effortlessly from 4-inch stem tip cuttings placed in a glass of water on a sunny windowsill in 5-7 days.',
      companions: {
        good: ['Tomatoes', 'Bell Peppers', 'Oregano', 'Marigolds'],
        bad: ['Rue', 'Sage (drier soil preference)', 'Fennel']
      }
    },
    touchGrassTip: 'Pinch the top two leaf nodes off your basil stems right now to double your leaf harvest for dinner tonight.'
  },
  {
    id: 'lavender',
    name: 'English Lavender',
    scientificName: 'Lavandula angustifolia',
    family: 'Lamiaceae (Mint family)',
    category: 'herbs',
    icon: '🪻',
    imagePlaceholder: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
    summary: 'A resilient Mediterranean sub-shrub with silvery needle-like foliage and intoxicatingly fragrant purple flower spikes.',
    difficulty: 'Easy (once established)',
    petSafety: 'Toxic to pets in high quantities (contains linalool and linalyl acetate)',
    features: {
      matureHeight: '2 to 3 feet',
      matureSpread: '2 to 4 feet',
      growthRate: 'Slow to moderate',
      foliageType: 'Evergreen to semi-evergreen, narrow gray-green aromatic needles',
      bloomTime: 'Late spring through mid-summer',
      lifespan: 'Long-lived perennial (10-15+ years with proper drainage)'
    },
    environment: {
      sunlight: 'Full Sun (minimum 6-8+ hours of intense unfiltered direct sun daily)',
      soilType: 'Lean, gritty, rocky, sharply draining soil (loves gravel and crushed limestone)',
      soilPh: '6.5 - 7.8 (neutral to alkaline; hates acidic heavy clay)',
      hardinessZones: 'USDA 5 - 9 (very cold hardy if root zone stays dry)',
      temperatureRange: '60°F - 85°F (15°C - 30°C); cold hardy down to -10°F (-23°C) with good drainage',
      humidity: 'Low to moderate; dislikes humid, sultry, stagnant air'
    },
    maintenance: {
      watering: {
        frequency: 'Deeply once every 1-2 weeks when young; mature plants are extremely drought-tolerant',
        knuckleTest: 'Allow soil to dry out almost completely between waterings',
        technique: 'Drip at roots. Mulch with light gravel or pea stones—NEVER wood bark mulch (retains rot-causing moisture)'
      },
      fertilization: {
        npkRatio: 'Minimal to none. High nitrogen creates leggy foliage and eliminates flower blooms.',
        schedule: 'A single tablespoon of bone meal or crushed limestone in spring',
        organicAdvice: 'Too much fertilizer kills lavender; lean soil replicates native Mediterranean cliffs'
      },
      pruning: {
        instructions: 'Prune annually in late summer after blooms fade: shear back one-third of current year green growth. NEVER cut into old brown woody stems without green buds, as old wood will not re-sprout.'
      },
      pestsAndDiseases: [
        { name: 'Root Rot (Phytophthora)', treatment: 'Preventative only: add 30% coarse sand/perlite to heavy soil or plant in raised mounds.' },
        { name: 'Spittlebugs', treatment: 'Blast off with a sharp jet of plain water from the garden hose.' }
      ],
      propagation: 'Semi-hardwood heel cuttings taken in late summer dipped in rooting hormone and placed in sandy perlite.',
      companions: {
        good: ['Rosemary', 'Thyme', 'Roses', 'Echinacea / Coneflower'],
        bad: ['Hostas (require shade and rich moisture)', 'Ferns']
      }
    },
    touchGrassTip: 'Walk over, gently brush your hands through the lavender canopy, and pause to inhale the grounding linalool aromatics.'
  },
  {
    id: 'snake_plant',
    name: 'Snake Plant / Mother-in-Law\'s Tongue',
    scientificName: 'Dracaena trifasciata (Sansevieria)',
    family: 'Asparagaceae',
    category: 'houseplants',
    icon: '🗡️',
    imagePlaceholder: 'linear-gradient(135deg, #15803d, #14532d)',
    summary: 'Virtually indestructible architectural houseplant with upright sword-like variegated leaves. Supreme air-purifying qualities.',
    difficulty: 'Very Easy (Beginner-friendly)',
    petSafety: 'Toxic to dogs and cats if chewed (saponins cause nausea and salivation)',
    features: {
      matureHeight: '2 to 4 feet indoors',
      matureSpread: '1 to 2 feet clump',
      growthRate: 'Slow to moderate',
      foliageType: 'Stiff, erect, sword-shaped succulent leaves with yellow borders and silver banding',
      bloomTime: 'Rare indoors; sweet-scented greenish-white nocturnal flower spikes when rootbound',
      lifespan: 'Perennial succulent lasting decades'
    },
    environment: {
      sunlight: 'Extremely versatile: thrives in bright indirect light, tolerates low shade, adapts to direct sun',
      soilType: 'Sharply draining cactus/succulent potting mix amended with perlite and pumice',
      soilPh: '5.5 - 7.5',
      hardinessZones: 'USDA 9 - 11',
      temperatureRange: '65°F - 85°F (18°C - 29°C); keep away from cold drafts below 50°F (10°C)',
      humidity: '30% - 50% (thrives in arid indoor winter radiator air)'
    },
    maintenance: {
      watering: {
        frequency: 'Every 2 to 4 weeks in summer; once every 6 to 8 weeks in winter',
        knuckleTest: 'Soil must be 100% bone dry to the bottom of the pot before adding water',
        technique: 'Pour water around the pot perimeter; avoid getting water trapped in the central leaf rosette'
      },
      fertilization: {
        npkRatio: 'Mild cactus fertilizer (10-10-10 or 8-8-8) diluted to quarter strength',
        schedule: 'Twice a year: once in mid-spring and once in mid-summer',
        organicAdvice: 'Very low nutrient demand; excess fertilizer causes leaf flop'
      },
      pruning: {
        instructions: 'Cut old, damaged, or floppy leaves off at soil level using a sterile knife. Does not require regular trimming.'
      },
      pestsAndDiseases: [
        { name: 'Overwatering / Rhizome Rot', treatment: 'Stop watering immediately! Unpot, cut away any soggy mushy rhizomes, let dry 48 hrs, repot in fresh dry cactus mix.' },
        { name: 'Mealybugs', treatment: 'Wipe off with rubbing alcohol swab.' }
      ],
      propagation: 'Division of rhizomes during repotting (fastest), or 3-inch leaf cuttings in water/perlite (note: leaf cuttings revert variegated margins to solid green).',
      companions: {
        good: ['ZZ Plant', 'Pothos', 'Aloe Vera'],
        bad: ['Moisture-loving calatheas or maidenhair ferns']
      }
    },
    touchGrassTip: 'Dust the upright leaves and check the drainage hole: if bone dry, give it a modest drink, then forget about it for a month.'
  },
  {
    id: 'garlic',
    name: 'Hardneck Garlic',
    scientificName: 'Allium sativum var. ophioscorodon',
    family: 'Amaryllidaceae (Onion family)',
    category: 'vegetables',
    icon: '🧄',
    imagePlaceholder: 'linear-gradient(135deg, #d97706, #92400e)',
    summary: 'The king of autumn planting. Plant individual cloves in October chill to harvest succulent scapes in June and colossal heads in July.',
    difficulty: 'Easy',
    petSafety: 'Toxic to dogs and cats (contains thiosulfate; keep bulbs away from pets)',
    features: {
      matureHeight: '2 to 3 feet tall slender strap leaves',
      matureSpread: '6 inches',
      growthRate: 'Slow overwintering; rapid spring surge (240-270 days to maturity)',
      foliageType: 'Upright, linear, glaucous green leaves emerging from a central stiff flower stalk (scape)',
      bloomTime: 'Produces curling edible scapes in June',
      lifespan: 'Biennial grown as cool-season annual'
    },
    environment: {
      sunlight: 'Full Sun (minimum 6+ hours daily)',
      soilType: 'Deep, loose, fertile, crumbly loam rich in organic compost (heavy clay stunts bulb size)',
      soilPh: '6.0 - 7.0',
      hardinessZones: 'USDA 3 - 9 (hardneck varieties require cold winter vernalization to form individual cloves)',
      temperatureRange: 'Overwinters under snow; roots thrive at 40°F - 60°F; optimal spring growth at 65°F - 75°F',
      humidity: 'Moderate'
    },
    maintenance: {
      watering: {
        frequency: '1 inch of water weekly during active spring foliage growth; cease watering completely 2-3 weeks before harvest',
        knuckleTest: 'Keep soil evenly moist in spring; let soil dry down in July to cure papery bulb wrappers',
        technique: 'Ground level soaker; mulch with 4-6 inches of clean straw or shredded leaves in October'
      },
      fertilization: {
        npkRatio: 'High-nitrogen blood meal or alfalfa meal in early spring when shoots emerge (10-0-0)',
        schedule: 'Top-dress in October at planting with bone meal, then feed every 3 weeks from April until scapes appear',
        organicAdvice: 'Stop all fertilizer once scapes curl in June to let energy consolidate into bulbs'
      },
      pruning: {
        instructions: 'Snap off curling garlic scapes in late spring as soon as they make one full 360-degree loop. This forces 30% more energy downward into bulb swelling. Sauté the scapes in butter!'
      },
      pestsAndDiseases: [
        { name: 'Onion Maggot', treatment: 'Crop rotation; cover planting beds with floating row cover in early spring.' },
        { name: 'White Rot (Sclerotium)', treatment: 'Plant certified disease-free seed garlic; never plant alliums in infected beds for 8 years.' }
      ],
      propagation: 'Vegetative clove planting. Separate largest outer cloves from head 24 hours prior to planting.',
      companions: {
        good: ['Tomatoes', 'Peppers', 'Roses (deters black spot and aphids)', 'Strawberries'],
        bad: ['Legumes (beans and peas—garlic stunts their nitrogen fixation)', 'Asparagus']
      }
    },
    touchGrassTip: 'Now is prime October planting time! Loosen a 4-foot garden trench, press cloves 2 inches deep pointy-end-up, and blanket with 4 inches of straw.'
  },
  {
    id: 'spinach',
    name: 'Cold-Hardy Winter Spinach',
    scientificName: 'Spinacia oleracea',
    family: 'Amaranthaceae',
    category: 'vegetables',
    icon: '🥬',
    imagePlaceholder: 'linear-gradient(135deg, #16a34a, #15803d)',
    summary: 'Supreme nutrient-dense leafy green that thrives in frosty conditions. Frost converts leaf starches into natural antifreeze sugars.',
    difficulty: 'Easy',
    petSafety: 'Safe in moderation (contains oxalates; safe for dogs in small treats)',
    features: {
      matureHeight: '8 to 12 inches',
      matureSpread: '8 to 12 inches rosette',
      growthRate: 'Rapid (35-45 days from seed to baby greens harvest)',
      foliageType: 'Crinkled (savoy) or smooth deep-green succulent leaves in basal rosette',
      bloomTime: 'Bolts and flowers quickly when temperatures exceed 75°F (24°C)',
      lifespan: 'Cool-season annual'
    },
    environment: {
      sunlight: 'Full Sun to Partial Shade (3 to 6 hours sunlight; benefits from afternoon shade in warm zones)',
      soilType: 'Rich, moisture-retentive, loose garden loam high in organic matter',
      soilPh: '6.5 - 7.0 (spinach is extremely sensitive to acidic soil below 6.0)',
      hardinessZones: 'USDA 2 - 10 (survives temperatures down to 15°F / -9°C unprotected, or single digits under row cover)',
      temperatureRange: '45°F - 65°F (7°C - 18°C) is ideal; seeds germinate in soil as cold as 35°F (2°C)',
      humidity: 'Moderate'
    },
    maintenance: {
      watering: {
        frequency: 'Consistent, shallow watering 2-3 times per week',
        knuckleTest: 'Keep top 1 inch moist; dry soil triggers premature bolting (flowering)',
        technique: 'Gentle mist or soaker hose; avoid splashing mud onto lower savoy leaves'
      },
      fertilization: {
        npkRatio: 'High-nitrogen organic feed (fish emulsion or worm casting tea)',
        schedule: 'Side-dress when seedlings reach 2 inches tall; feed once more mid-growth',
        organicAdvice: 'Heavy feeder of nitrogen; amend bed with composted manure 2 weeks prior to sowing'
      },
      pruning: {
        instructions: '"Cut-and-come-again" harvesting: Snip outer leaves 1 inch above soil crown, allowing tender central heart to continue generating new foliage.'
      },
      pestsAndDiseases: [
        { name: 'Leafminers', treatment: 'Use floating row covers immediately after seeding to prevent flies from laying eggs under leaves; crush visible white egg trails.' },
        { name: 'Downy Mildew', treatment: 'Select resistant cultivars (e.g. Bloomsdale, Space, Tyee); space plants 6 inches apart.' },
        { name: 'Slugs', treatment: 'Beer traps, crushed oyster shell borders, or organic iron phosphate pellets.' }
      ],
      propagation: 'Direct seed sowing 1/2 inch deep spaced 2-3 inches apart. Thin to 6 inches.',
      companions: {
        good: ['Strawberries', 'Radishes', 'Peas', 'Brassicas', 'Onions'],
        bad: ['Fennel', 'Potatoes']
      }
    },
    touchGrassTip: 'Sow a quick row of spinach seed in your autumn garden bed today. In 4 weeks, you will be picking crisp, naturally frost-sweetened leaves.'
  },
  {
    id: 'sunflower',
    name: 'Mammoth Russian Sunflower',
    scientificName: 'Helianthus annuus',
    family: 'Asteraceae (Daisy family)',
    category: 'flowers',
    icon: '🌻',
    imagePlaceholder: 'linear-gradient(135deg, #eab308, #ca8a04)',
    summary: 'A towering architectural annual with giant golden flower heads up to 14 inches across. Magnet for bumblebees and goldfinches.',
    difficulty: 'Very Easy',
    petSafety: 'Non-toxic to dogs and cats (100% pet safe)',
    features: {
      matureHeight: '10 to 14 feet tall',
      matureSpread: '3 to 4 feet',
      growthRate: 'Explosive (75-90 days from seed to majestic bloom)',
      foliageType: 'Large, coarse, heart-shaped, bristly leaves',
      bloomTime: 'Mid-summer through autumn frost',
      lifespan: 'Annual'
    },
    environment: {
      sunlight: 'Full Sun (minimum 6-8+ hours of direct blistering sunlight daily)',
      soilType: 'Tolerant of most soils; prefers deep, well-draining nutrient-rich loam with room for taproot',
      soilPh: '6.0 - 7.5',
      hardinessZones: 'USDA 2 - 11',
      temperatureRange: '70°F - 85°F (21°C - 29°C); seedlings withstand light spring chill',
      humidity: 'Moderate'
    },
    maintenance: {
      watering: {
        frequency: 'Deep weekly watering; needs 1 inch of water weekly while establishing',
        knuckleTest: 'Once roots reach 3-4 feet deep, sunflowers are remarkably drought-tolerant',
        technique: 'Water deeply around the root zone 1-2 feet out from the main stalk'
      },
      fertilization: {
        npkRatio: 'Balanced organic fertilizer (5-5-5) at planting; dilute liquid feed when bud forms',
        schedule: 'Do not overfeed with high nitrogen or stalks will become brittle in heavy winds',
        organicAdvice: 'Heavy potash/potassium demand to support massive flower heads'
      },
      pruning: {
        instructions: 'Stake tall mammoth varieties against strong autumn winds. In late autumn, leave spent flower heads standing on stalk: wild birds feast on the seeds all winter.'
      },
      pestsAndDiseases: [
        { name: 'Birds / Squirrels (on seeds)', treatment: 'Cover maturing flower heads with cheesecloth or paper bags if harvesting seeds for personal snacks.' },
        { name: 'Powdery Mildew', treatment: 'Ensure wide spacing; spray with 1 tbsp baking soda + 1 tsp horticultural oil per gallon of water.' }
      ],
      propagation: 'Direct sow seeds 1 inch deep outdoors after last spring frost.',
      companions: {
        good: ['Corn', 'Squash', 'Cucumbers (sunflowers provide natural shade and windbreak)'],
        bad: ['Potatoes (allelopathic chemicals in sunflower hulls inhibit potato tuber development)']
      }
    },
    touchGrassTip: 'Leave standing sunflower stalks in your autumn garden. Watch migratory finches land directly on the heads to strip seeds.'
  },
  {
    id: 'fiddle_leaf_fig',
    name: 'Fiddle Leaf Fig',
    scientificName: 'Ficus lyrata',
    family: 'Moraceae (Fig family)',
    category: 'houseplants',
    icon: '🎻',
    imagePlaceholder: 'linear-gradient(135deg, #15803d, #166534)',
    summary: 'Dramatic interior tree featuring large violin-shaped, heavily veined leathery leaves. Craves steady light and consistent routines.',
    difficulty: 'Moderate to Challenging',
    petSafety: 'Toxic to pets (irritating sap contains ficin and ficusin crystals)',
    features: {
      matureHeight: '6 to 10 feet indoors (up to 40 feet in tropical outdoors)',
      matureSpread: '3 to 5 feet canopy',
      growthRate: 'Moderate (1-2 feet per year under high light)',
      foliageType: 'Large violin-shaped leathery evergreen leaves up to 15 inches long',
      bloomTime: 'Does not flower indoors',
      lifespan: 'Long-lived perennial tree'
    },
    environment: {
      sunlight: 'Bright, consistent, filtered indirect sunlight. Needs 4-6 hours of luminous exposure. Hates being moved.',
      soilType: 'Rich, well-draining potting soil amended with perlite and pine bark chips',
      soilPh: '6.0 - 7.0',
      hardinessZones: 'USDA 10 - 12',
      temperatureRange: '65°F - 75°F (18°C - 24°C); drops leaves if exposed to air conditioner vents or drafty windows',
      humidity: '50% - 65% (group with other plants or use a pebble tray in dry heated winter rooms)'
    },
    maintenance: {
      watering: {
        frequency: 'Every 7 to 10 days in warm months; every 14 days in winter',
        knuckleTest: 'Allow top 2-3 inches of soil to dry before watering. Never let it sit in standing saucer water.',
        technique: 'Water until 15% trickles through drainage holes. Brown crispy leaf edges = underwatered; brown spots in leaf centers = overwatered!'
      },
      fertilization: {
        npkRatio: 'High-nitrogen houseplant fertilizer (3-1-2 ratio)',
        schedule: 'Monthly from March through September; zero fertilizer in late autumn and winter',
        organicAdvice: 'Top-dress with worm castings annually in early spring'
      },
      pruning: {
        instructions: 'Notch the main trunk with a sterile razor above a dormant leaf node to stimulate branching. Wipe large leaves monthly to clean dust and prevent pests.'
      },
      pestsAndDiseases: [
        { name: 'Root Rot (Brown Center Spots)', treatment: 'Severe danger: reduce watering, ensure drainage pot has holes, repot in fresh airy soil if soggy.' },
        { name: 'Spider Mites', treatment: 'Shower leaves with room-temperature water; treat with cold-pressed neem oil.' },
        { name: 'Leaf Drop', treatment: 'Caused by sudden environmental changes (moving rooms, drafts, uneven watering). Keep plant location stable.' }
      ],
      propagation: 'Air-layering or stem tip cuttings with 2 leaves rooted in perlite/water under high humidity dome.',
      companions: {
        good: ['Rubber Tree (Ficus elastica)', 'Schefflera', 'Pothos'],
        bad: ['Drought-adapted desert cacti']
      }
    },
    touchGrassTip: 'Rotate your Fiddle Leaf Fig a quarter-turn today so all leaf sides receive balanced light, and gently dust the top foliage.'
  },
  {
    id: 'rosemary',
    name: 'Tuscan Rosemary',
    scientificName: 'Salvia rosmarinus',
    family: 'Lamiaceae (Mint family)',
    category: 'herbs',
    icon: '🌿',
    imagePlaceholder: 'linear-gradient(135deg, #047857, #065f46)',
    summary: 'Resilient evergreen needle herb steeped in piney camphor aroma. Craves blistering sun, poor gritty soil, and dry roots.',
    difficulty: 'Easy',
    petSafety: 'Non-toxic to cats and dogs (completely pet safe)',
    features: {
      matureHeight: '3 to 5 feet upright shrub',
      matureSpread: '3 to 4 feet',
      growthRate: 'Moderate',
      foliageType: 'Evergreen needle-like aromatic leaves with white downy undersides',
      bloomTime: 'Late winter through spring (tiny pale blue blossoms)',
      lifespan: 'Perennial woody shrub (15-20+ years)'
    },
    environment: {
      sunlight: 'Full Sun (6 to 8+ hours direct sun essential)',
      soilType: 'Lean, rocky, gritty, sandy soil with impeccable drainage',
      soilPh: '6.0 - 7.5 (neutral to slightly alkaline)',
      hardinessZones: 'USDA 7 - 10 (needs indoor wintering or heavy protection in zones 6 and colder)',
      temperatureRange: '60°F - 80°F (15°C - 27°C); tolerates brief light freezes down to 20°F (-6°C)',
      humidity: 'Low humidity; susceptible to powdery mildew in stagnant humid air'
    },
    maintenance: {
      watering: {
        frequency: 'Allow top 2-3 inches of soil to dry out completely between waterings',
        knuckleTest: 'Feel the bottom drainage hole if in a container; rosemary prefers being slightly underwatered than overwatered',
        technique: 'Water at base; never leave pot resting in a saucer of standing water'
      },
      fertilization: {
        npkRatio: 'Very light; organic fish emulsion once in early spring',
        schedule: 'Avoid heavy synthetic fertilizers which cause floppy, flavorless growth',
        organicAdvice: 'Add a sprinkle of agricultural lime if growing in acidic native soil'
      },
      pruning: {
        instructions: 'Harvest green tips frequently for cooking. Prune back by half in late spring to stimulate bushy new shoots and prevent leggy, bare wooden stems.'
      },
      pestsAndDiseases: [
        { name: 'Powdery Mildew', treatment: 'Place in outdoor breeze; avoid overhead misting; spray dilute potassium bicarbonate.' },
        { name: 'Root Rot', treatment: 'Repot into terracotta pot with 40% coarse pumice/perlite.' }
      ],
      propagation: 'Semi-hardwood cuttings (3-5 inches) rooted in coarse sand or water in 3-4 weeks.',
      companions: {
        good: ['Sage', 'Thyme', 'Carrots (rosemary fragrance repels carrot rust fly)', 'Cabbage'],
        bad: ['Basil (requires far more water)', 'Mint (mint roots take over)']
      }
    },
    touchGrassTip: 'Clip a 3-inch sprig of rosemary from your garden. Bruise it between your fingers and breathe in the invigorating camphor terpenes.'
  },
  {
    id: 'strawberry',
    name: 'Everbearing Garden Strawberry',
    scientificName: 'Fragaria × ananassa',
    family: 'Rosaceae (Rose family)',
    category: 'fruits',
    icon: '🍓',
    imagePlaceholder: 'linear-gradient(135deg, #ef4444, #dc2626)',
    summary: 'Prolific runner-producing berry plant yielding sweet crimson fruits from spring through the first autumn frosts.',
    difficulty: 'Easy',
    petSafety: 'Non-toxic to cats and dogs (safe treat in moderation)',
    features: {
      matureHeight: '8 to 12 inches',
      matureSpread: '12 to 24 inches via stolons (runners)',
      growthRate: 'Fast; establishes deep crowns in first season',
      foliageType: 'Trifoliate serrated evergreen to semi-evergreen leaves',
      bloomTime: 'Spring through early autumn',
      lifespan: 'Short-lived perennial (productive for 3-4 years; renew bed with daughter runners)'
    },
    environment: {
      sunlight: 'Full Sun (minimum 6-8 hours daily for maximum sugar brix content)',
      soilType: 'Rich, loamy, slightly acidic soil loaded with compost and aged leaf mold',
      soilPh: '5.5 - 6.5',
      hardinessZones: 'USDA 4 - 9 (winter-hardy under a blanket of straw mulch)',
      temperatureRange: '60°F - 80°F (15°C - 27°C); requires 200-300 chill hours under 45°F to set fruit',
      humidity: 'Moderate'
    },
    maintenance: {
      watering: {
        frequency: '1 to 1.5 inches of water weekly; increase during berry swelling',
        knuckleTest: 'Keep soil evenly moist, like a wrung-out sponge; shallow root systems dry out quickly',
        technique: 'Drip lines under clean straw mulch. Keeping berries elevated off wet soil prevents gray mold (botrytis).'
      },
      fertilization: {
        npkRatio: 'Balanced organic fertilizer (5-5-5) or 10-10-10',
        schedule: 'Feed in early spring as new leaves unfold, and once more in late summer after primary fruit crop',
        organicAdvice: 'Heavy compost dressing in autumn protects crown from winter heaving'
      },
      pruning: {
        instructions: 'Snip off runners (daughter clones) during the first fruiting season to channel all photosynthetic energy into colossal berries. Pinch off dead brown leaves in late autumn.'
      },
      pestsAndDiseases: [
        { name: 'Gray Mold (Botrytis cinerea)', treatment: 'Mulch with clean straw so berries never touch damp soil; ensure good spacing between crowns.' },
        { name: 'Slugs & Birds', treatment: 'Use lightweight bird netting once berries blush red; set beer saucer traps for slugs.' },
        { name: 'Tarnished Plant Bug', treatment: 'Causes deformed "cat-faced" berries; encourage beneficial predatory insects like lacewings.' }
      ],
      propagation: 'Rooting daughter runners directly into small pots of soil pinned with a bobby pin.',
      companions: {
        good: ['Borage (attracts pollinating bees & enhances flavor)', 'Bush Beans', 'Spinach', 'Thyme'],
        bad: ['Tomatoes, Potatoes, Eggplants (susceptible to Verticillium wilt fungus)']
      }
    },
    touchGrassTip: 'Rake a fresh 2-inch bed of clean straw under your strawberry crowns to tuck them in for winter dormancy.'
  },
  {
    id: 'aloe_vera',
    name: 'Medicinal Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    family: 'Asphodelaceae',
    category: 'succulents',
    icon: '🪴',
    imagePlaceholder: 'linear-gradient(135deg, #10b981, #059669)',
    summary: 'Renowned succulent with thick, fleshy serrated leaves filled with cooling, skin-soothing translucent gel.',
    difficulty: 'Very Easy',
    petSafety: 'Toxic to dogs and cats (contains aloin in yellow leaf latex which causes vomiting/diarrhea)',
    features: {
      matureHeight: '1 to 2 feet',
      matureSpread: '1 to 2 feet clump (frequently produces "pups")',
      growthRate: 'Slow to moderate',
      foliageType: 'Thick, lanceolate, fleshy green-gray leaves with soft marginal teeth',
      bloomTime: 'Late winter to spring outdoors (tall spikes of yellow tubular blossoms)',
      lifespan: 'Perennial succulent lasting 12-20+ years'
    },
    environment: {
      sunlight: 'Bright indirect light or gentle morning sun. Blistering midday sun can turn foliage brown/red from stress.',
      soilType: 'Porous, sharply draining cactus/succulent mix (50% potting soil, 50% pumice/perlite)',
      soilPh: '6.0 - 7.5',
      hardinessZones: 'USDA 9 - 11 (grown outdoors year-round); indoors anywhere with bright windows',
      temperatureRange: '55°F - 80°F (13°C - 27°C); dies instantly if exposed to freezing frost under 32°F (0°C)',
      humidity: 'Low to average household humidity'
    },
    maintenance: {
      watering: {
        frequency: 'Every 2-3 weeks in summer; once a month or less in winter',
        knuckleTest: 'Wait until the entire pot is bone dry. Wrinkled leaves indicate slight thirst; mushy brown leaves indicate fatal overwatering.',
        technique: 'Soak pot thoroughly until water flows out bottom, then discard runoff completely. Never let water sit in leaf crown.'
      },
      fertilization: {
        npkRatio: 'Diluted 10-40-10 or 10-10-10 succulent fertilizer',
        schedule: 'Feed once in spring and once in mid-summer at quarter-strength',
        organicAdvice: 'Avoid heavy organic amendments that hold excess moisture'
      },
      pruning: {
        instructions: 'Harvest outer, mature bottom leaves with a sterile sharp knife close to the base. The plant will rapidly self-seal the wound with sap.'
      },
      pestsAndDiseases: [
        { name: 'Root / Stem Rot', treatment: 'The #1 killer: cut away rot, let the remaining healthy top callous for 5 days in shade, then place into dry perlite to re-root.' },
        { name: 'Mealybugs', treatment: 'Dab with cotton swab dipped in rubbing alcohol.' }
      ],
      propagation: 'Separate "pups" (baby offshoots growing at the base of the mother plant) when they reach 3-4 inches tall with their own roots.',
      companions: {
        good: ['Jade Plant (Crassula ovata)', 'Haworthia', 'Sansevieria'],
        bad: ['Ferns and water-loving tropicals']
      }
    },
    touchGrassTip: 'Check the base of your aloe plant for baby "pups". Gently separate one into a small terracotta pot to gift to a neighbor.'
  }
];

const AI_GARDEN_DIAGNOSTICS = [
  {
    id: 'yellow_leaves_chlorosis',
    title: 'Yellowing Leaves (Interveinal Chlorosis)',
    symptom: 'Leaves turning pale yellow between the veins while veins remain dark green.',
    likelyCauses: [
      'Overwatering resulting in root hypoxia (lack of oxygen)',
      'Soil pH too high (>7.2), locking out Iron (Fe) or Magnesium (Mg) absorption',
      'Nitrogen deficiency if bottom older leaves yellow first uniformly'
    ],
    organicRemedy: 'Allow soil to dry out 2 inches down. Check drainage holes. Top-dress with chelated iron or epsom salt spray (1 tbsp per gallon water), and amend with composted manure.'
  },
  {
    id: 'brown_crispy_tips',
    title: 'Brown Crispy Leaf Edges & Tips',
    symptom: 'Dry, papery, brown tips curling upwards along outer foliage margins.',
    likelyCauses: [
      'Low ambient humidity (common in heated winter rooms or arid winds)',
      'Fluoride, chlorine, or dissolved salts in tap water',
      'Underwatering or hydrophobic peat moss soil'
    ],
    organicRemedy: 'Switch to rainwater or filtered water for sensitive aroids. Bottom-water the pot for 30 minutes to re-hydrate hydrophobic root balls. Group plants together to boost local transpiration humidity.'
  },
  {
    id: 'powdery_mildew',
    title: 'Powdery White Mildew Dusting',
    symptom: 'Chalky white, talcum-powder-like spots coating the surface of leaves and stems.',
    likelyCauses: [
      'High relative humidity combined with stagnant, still airflow',
      'Overhead watering wetting the foliage in cool shade'
    ],
    organicRemedy: 'Prune away heavily coated leaves immediately. Spray organic preventative: mix 1 tbsp potassium bicarbonate or baking soda with 1/2 tsp dish soap and 1 quart water; spray in early morning.'
  },
  {
    id: 'leggy_seedlings',
    title: 'Leggy, Floppy Seedlings & Pale Stems',
    symptom: 'Seedlings stretching tall, skinny, and falling over under their own weight.',
    likelyCauses: [
      'Insufficient light intensity: seedlings are stretching toward distant light',
      'Grow lights placed too far away (>4 inches) from canopy'
    ],
    organicRemedy: 'Move grow lights to 2 inches directly above seedlings. Add a gentle oscillating USB fan on low speed: the mechanical air movement stimulates plants to produce auxin, thickening their main stems by 300%!'
  }
];

window.PLANT_CATEGORIES = PLANT_CATEGORIES;
window.PLANTS_DATABASE = PLANTS_DATABASE;
window.AI_GARDEN_DIAGNOSTICS = AI_GARDEN_DIAGNOSTICS;
