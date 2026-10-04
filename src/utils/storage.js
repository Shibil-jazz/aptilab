const STATS_KEY = 'aptilab_stats_v1';
const BUDDY_KEY = 'aptilab_selected_buddy_v1';

export const INITIAL_STATS = {
  testsCompleted: 0,
  questionsSolved: 0,
  avgAccuracy: 0
};

export const loadStats = () => {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return INITIAL_STATS;
    const parsed = JSON.parse(raw);
    return {
      testsCompleted: parsed.testsCompleted || 0,
      questionsSolved: parsed.questionsSolved || 0,
      avgAccuracy: parsed.avgAccuracy || 0
    };
  } catch (e) {
    return INITIAL_STATS;
  }
};

export const saveStats = (stats) => {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (e) {}
};

export const loadSelectedBuddy = () => {
  try {
    const saved = localStorage.getItem(BUDDY_KEY);
    return saved || 'bear';
  } catch (e) {
    return 'bear';
  }
};

export const saveSelectedBuddy = (buddyId) => {
  try {
    localStorage.setItem(BUDDY_KEY, buddyId);
  } catch (e) {}
};
