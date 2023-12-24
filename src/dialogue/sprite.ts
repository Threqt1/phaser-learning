import { pct } from "../scenes";
import { BaseSprite } from "../sprites";
import { DialogueTexture } from "../textures";

const DIALOGUE_BOX_X = 15
const DIALOGUE_BOX_Y = 75
const DIALOGUE_BOX_SCALE_X = 80
const DIALOGUE_BOX_SCALE_Y = 25
const TEXT_OFFSET_X = 12
const TEXT_OFFSET_Y = 20

export class DialogueSprite {
    sprite: BaseSprite
    text: Phaser.GameObjects.Text

    constructor(scene: Phaser.Scene, mapWidth: number, mapHeight: number) {
        this.sprite = new BaseSprite(scene, pct(mapWidth, DIALOGUE_BOX_X), pct(mapHeight, DIALOGUE_BOX_Y), DialogueTexture.Frames.Box)
            .setDepth(100).setOrigin(0, 0)
        this.sprite.setScale(pct(mapWidth, DIALOGUE_BOX_SCALE_X) / this.sprite.displayWidth, pct(mapHeight, DIALOGUE_BOX_SCALE_Y) / this.sprite.displayHeight)
        this.text = scene.make.text({
            x: this.sprite.x + pct(this.sprite.displayWidth, TEXT_OFFSET_X),
            y: this.sprite.y + pct(this.sprite.displayHeight, TEXT_OFFSET_Y),
            text: "",
            origin: { x: 0, y: 0 },
            style: {
                fontFamily: 'Comic Sans MS',
                color: 'white',
                wordWrap: { width: this.sprite.displayWidth - pct(this.sprite.displayWidth, TEXT_OFFSET_X * 2), useAdvancedWrap: true },
                fixedHeight: this.sprite.displayHeight - pct(this.sprite.displayHeight, TEXT_OFFSET_Y * 2),
                align: "left",
                testString: ""
            }
        }).setDepth(100)
    }

    setText(text: string) {
        this.text.setText(text)
        this.text.style.setTestString(text)
    }

    setVisible(visible: boolean) {
        this.text.setVisible(visible)
        this.sprite.setVisible(visible)
    }
}