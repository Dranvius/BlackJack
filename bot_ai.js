
export class BotAI {
  constructor() {
    const t = parseFloat(localStorage.getItem('bot_threshold'));
    this.threshold = isNaN(t) ? 17 : t;
    try {
      this.history = JSON.parse(localStorage.getItem('bot_history')) || [];
    } catch (e) {
      this.history = [];
    }
  }

  decide(sum) {
    return sum < this.threshold;
  }

  logGame(playerSum, botSum, winner) {
    this.history.push({ player: playerSum, bot: botSum, winner, threshold: this.threshold.toFixed(2) });
    localStorage.setItem('bot_history', JSON.stringify(this.history));
    this.adjustThreshold(winner);
  }

  adjustThreshold(winner) {
    if (winner === 'bot') {
      this.threshold = Math.min(20, this.threshold + 0.1);
    } else if (winner === 'player') {
      this.threshold = Math.max(15, this.threshold - 0.1);
    }
    localStorage.setItem('bot_threshold', this.threshold.toFixed(2));
  }

  async exportCSV() {
    const header = 'playerSum,botSum,winner,threshold';
    const rows = this.history.map(r => `${r.player},${r.bot},${r.winner},${r.threshold}`);
    const csv = [header, ...rows].join('\n');
    if (typeof window !== 'undefined') {
      const blob = new Blob([csv], { type: 'text/csv' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'blackjack_history.csv';
      a.click();
    } else {
      const { writeFileSync } = await import('fs');
      writeFileSync('blackjack_history.csv', csv);
    }
  }
}
