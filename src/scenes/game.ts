import { Scene } from "phaser"
import { Player, NPC } from "../sprites/game"
import { loadTilemap, SceneEnums, scaleAndConfigureCamera } from "."

export class GameScene extends Scene {
    constructor() {
        super(SceneEnums.SceneNames.Game)
    }

    create() {
        let { collisionsLayer: collisions, map, playerDepth } = loadTilemap(this, "test")

        this.sprites.initialize()

        let player = new Player(this, 30, 130)
        let npc1 = new NPC(this, 100, 150)
        let npc2 = new NPC(this, 150, 150)

        this.sprites.addControllables(player)
        this.sprites.addInteractables(npc1, npc2)
        this.sprites.addSprites(player.sprite, npc1.sprite, npc2.sprite)
        this.sprites.physicsBodies.setDepth(playerDepth)

        scaleAndConfigureCamera(this, map, player.sprite)

        this.sprites.makeCollisionsWithLayer(collisions)
    }

    update() {
    }
}