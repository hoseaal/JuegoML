import { Start } from "./Start.js";
import { Explain } from "./exp.js";
import { Cap1a } from "./cap1-a.js";
import { Cap1b } from "./cap1-b.js";
import { Cap1c } from "./cap1-c.js"
import { Cap1d } from "./cap1-d-.js";
import { Cap1e } from "./cap1-e.js";
import { Cap1f } from "./cap1-f.js";
import { Cap2a } from "./cap2-a.js";
import { Cap2b } from "./cap2-b.js";
import { Cap2c } from "./cap2-c.js";
import { Cap2d } from "./cap2-d.js";
import { Cap2e } from "./cap2-e.js";
import { Cap2f } from "./cap2-f.js";
import { Cap2g } from "./cap2-g.js";
import { Cap2h } from "./cap2-h.js";
import { Cap2i } from "./cap2-i.js";
import { Lose } from "./youlose.js";



var config = {
    type: Phaser.AUTO,
    width: 1350,
    height: 600,
    scene: [Start, Explain, Cap1a, Cap1b, Cap1c, Cap1d, Cap1e, Cap1f, Cap2a, Lose, Cap2b, Cap2c, Cap2d, Cap2e, Cap2f, Cap2g, Cap2h, Cap2i]
};

var game = new Phaser.Game(config);

