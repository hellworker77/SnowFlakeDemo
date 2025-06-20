// @ts-nocheck
const canvas = document.getElementById("canvas");
const gfx = arenite.findOptimalRender(canvas)
gfx.render(ctx => {
    arenite.squareDrawer.draw(ctx, arenite.square)
})