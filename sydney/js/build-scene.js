const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const partialDir = path.join(root, "assets", "svg");
const outputPath = path.join(root, "assets", "cinnamoroll-scene.svg");

function partial(fileName) {
    return fs.readFileSync(path.join(partialDir, fileName), "utf8").trim();
}

const scene = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="../css/scene.css"?>
<svg xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    class="scene"
    viewBox="0 0 960 540"
    role="img"
    aria-labelledby="scene-title scene-desc"
    preserveAspectRatio="xMidYMid slice"
>
    <title id="scene-title">Sydney Cinnamoroll cloud animation</title>
    <desc id="scene-desc">
        A custom pastel SVG scene with Cinnamoroll resting on clouds under a moonlit sky.
    </desc>

${partial("defs.svg")}

${partial("background.svg")}

${partial("clouds-back.svg")}

${partial("cinnamoroll.svg")}

${partial("clouds-front.svg")}

${partial("sparkles.svg")}

    <script type="application/ecmascript" href="../js/scene.js" xlink:href="../js/scene.js"></script>
</svg>
`;

fs.writeFileSync(outputPath, scene, "utf8");
