const app = new PIXI.Application();
await app.init({ width: 640, height: 360 });
document.body.appendChild(app.canvas);

const boxHeight = app.canvas.height / 3;
const boxWidth = app.canvas.width / 3;

const boxGraphics = new PIXI.Graphics();
boxGraphics.rect(0, 0, boxWidth, boxHeight);
boxGraphics.stroke({ width: 3, color: 0xffd900 });
const boxTexture = app.renderer.generateTexture(boxGraphics);

const sampleTexture = await PIXI.Assets.load('sample.png');
const sampleTextureAspectRatio = sampleTexture.width / sampleTexture.height;

for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
        const boxSprite = PIXI.Sprite.from(boxTexture);
        boxSprite.anchor.set(0.5);
        boxSprite.position.set((0.5 + column) * boxWidth, (0.5 + row) * boxHeight);

        boxSprite.eventMode = 'static';
        boxSprite.cursor = 'pointer';
        boxSprite.on('pointerdown', () => {
            boxSprite.texture = sampleTexture;
            boxSprite.width = boxWidth;
            boxSprite.height = sampleTextureAspectRatio * (boxWidth);
        });

        app.stage.addChild(boxSprite);
    }
}
