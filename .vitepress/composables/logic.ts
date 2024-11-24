import { ref } from 'vue';

type Block = {
  x: number;
  y: number;
  mine: boolean;
  flagged: boolean;
  adjacentMines: number;
  revealed: boolean;
};

type GameState = {
  startMS: number;
  endMS?: number;
  mineGenerated: boolean;
  status: 'play' | 'won' | 'lost';
  board: Block[][];
};

const directions: [number, number][] = [
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, 1],
];

export class GamePlay {
  state = ref<GameState>();
  width: number;
  height: number;
  mines: number;

  constructor(width: number, height: number, mines: number) {
    this.width = width;
    this.height = height;
    this.mines = mines;
    this.reset();
  }

  get board(): Block[][] {
    return this.state.value!.board;
  }

  get blocks(): Block[] {
    return this.state.value!.board.flat();
  }

  reset(width: number = this.width, height: number = this.height, mines: number = this.mines): void {
    this.width = width;
    this.height = height;
    this.mines = mines;

    this.state.value = {
      startMS: Date.now(),
      endMS: undefined,
      mineGenerated: false,
      status: 'play',
      board: Array.from({ length: this.height }, (_, y) =>
        Array.from({ length: this.width }, (_, x) => ({
          x,
          y,
          mine: false,
          flagged: false,
          adjacentMines: 0,
          revealed: false,
        })),
      ),
    };
  }

  randomRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  randomInt(min: number, max: number): number {
    return Math.round(this.randomRange(min, max));
  }

  generateMines(state: Block[][], initial: Block): void {
    const placeRandom = (): boolean => {
      const x = this.randomInt(0, this.width - 1);
      const y = this.randomInt(0, this.height - 1);
      const block = state[y][x];
      if (Math.abs(initial.x - block.x) <= 1 && Math.abs(initial.y - block.y) <= 1) return false;
      if (block.mine) return false;
      block.mine = true;
      return true;
    };

    Array.from({ length: this.mines }).forEach(() => {
      let placed = false;
      let attempts = 0;
      const maxAttempts = 1000;
      while (!placed) {
        if (attempts++ > maxAttempts) {
          this.reset();
          break;
        }
        placed = placeRandom();
      }
    });
    this.updateNumbers();
  }

  updateNumbers(): void {
    this.board.forEach((raw) => {
      raw.forEach((block) => {
        if (block.mine) return;
        this.getSiblings(block).forEach((b) => {
          if (b.mine) block.adjacentMines += 1;
        });
      });
    });
  }

  expendZero(block: Block): void {
    if (block.adjacentMines) return;

    this.getSiblings(block).forEach((s) => {
      if (!s.revealed) {
        s.revealed = true;
        this.expendZero(s);
      }
    });
  }

  onRightClick(block: Block): void {
    if (this.state.value!.status !== 'play') return;

    if (block.revealed) return;
    block.flagged = !block.flagged;
  }

  onClick(block: Block): void {
    if (this.state.value!.status !== 'play') return;

    if (!this.state.value!.mineGenerated) {
      this.generateMines(this.board, block);
      this.state.value!.mineGenerated = true;
    }

    if (block.revealed) return;

    if (block.flagged) {
      block.flagged = !block.flagged;
      return;
    }

    block.revealed = true;
    if (block.mine) {
      this.onGameOver('lost');
      return;
    }

    this.expendZero(block);
  }

  getSiblings(block: Block): Block[] {
    return directions
      .map(([dx, dy]) => {
        const x2 = block.x + dx;
        const y2 = block.y + dy;
        if (x2 < 0 || x2 >= this.width || y2 < 0 || y2 >= this.height) return undefined;
        return this.board[y2][x2];
      })
      .filter((b): b is Block => Boolean(b));
  }

  showAllMines(): void {
    this.board.flat().forEach((i) => {
      if (i.mine) i.revealed = true;
    });
  }

  checkGameState(): void {
    if (!this.state.value!.mineGenerated) return;
    const blocks = this.board.flat();

    if (blocks.every((block) => block.revealed || block.flagged || block.mine)) {
      if (blocks.some((block) => block.flagged && !block.mine)) {
        this.onGameOver('lost');
      } else {
        this.onGameOver('won');
      }
    }
  }

  autoExpand(block: Block): void {
    const siblings = this.getSiblings(block);
    const flags = siblings.reduce((a, b) => a + (b.flagged ? 1 : 0), 0);
    const notRevealed = siblings.reduce((a, b) => a + (!b.revealed && !b.flagged ? 1 : 0), 0);
    if (flags === block.adjacentMines) {
      siblings.forEach((i) => {
        if (i.revealed || i.flagged) return;
        i.revealed = true;
        this.expendZero(i);
        if (i.mine) this.onGameOver('lost');
      });
    }
    const missingFlags = block.adjacentMines - flags;
    if (notRevealed === missingFlags) {
      siblings.forEach((i) => {
        if (!i.revealed && !i.flagged) i.flagged = true;
      });
    }
  }

  onGameOver(status: 'won' | 'lost'): void {
    this.state.value!.status = status;
    this.state.value!.endMS = Date.now();
    if (status === 'lost') {
      this.showAllMines();
      setTimeout(() => {
        alert('lost');
      }, 10);
    }
  }
}
