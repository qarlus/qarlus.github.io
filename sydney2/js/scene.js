(() => {
    const scene = document.documentElement?.classList?.contains("scene")
        ? document.documentElement
        : document.querySelector(".scene");

    if (!scene) return;

    const baseWidth = 960;
    const baseHeight = 540;
    const centerX = baseWidth / 2;
    const centerY = baseHeight / 2;
    const maxWorldWidth = 2320;
    const maxWorldHeight = 770;

    function updateViewBox() {
        const viewportWidth = window.innerWidth || baseWidth;
        const viewportHeight = window.innerHeight || baseHeight;
        const viewportAspect = viewportWidth / viewportHeight;
        const baseAspect = baseWidth / baseHeight;
        let x = 0;
        let y = 0;
        let width = baseWidth;
        let height = baseHeight;

        if (viewportAspect > baseAspect) {
            const extraHeight = Math.min(0.34, (viewportAspect - baseAspect) * 0.16);
            height = baseHeight * (1 + extraHeight);
            width = height * viewportAspect;
        } else if (viewportAspect < baseAspect) {
            height = Math.min(760, baseWidth / viewportAspect);
            width = height * viewportAspect;
        }

        if (width > maxWorldWidth) {
            width = maxWorldWidth;
            height = width / viewportAspect;
        }

        if (height > maxWorldHeight) {
            height = maxWorldHeight;
            width = height * viewportAspect;
        }

        x = centerX - width / 2;
        y = centerY - height / 2;
        scene.setAttribute("viewBox", `${x} ${y} ${width} ${height}`);
    }

    updateViewBox();
    window.addEventListener("resize", updateViewBox, { passive: true });

    const cometPaths = [
        "M826 62L690 106",
        "M736 34L622 72",
        "M144 68L292 112",
        "M552 28L430 82",
        "M892 132C830 102 774 92 705 104",
        "M72 122C136 90 206 82 284 98",
        "M510 46C462 26 414 28 362 52",
        "M914 48C842 58 786 88 724 142",
        "M210 36C285 58 352 58 426 32",
        "M640 118L780 72",
        "M410 152C488 118 560 112 636 132",
        "M52 72L178 34"
    ];

    const shuffledComets = [...cometPaths].sort(() => Math.random() - 0.5);
    document.querySelectorAll(".shooting-star").forEach((comet, index) => {
        comet.setAttribute("d", shuffledComets[index % shuffledComets.length]);

        const length = Math.ceil(comet.getTotalLength());
        const duration = 38 + Math.random() * 52;
        const phase = Math.random() * duration * -1;
        const opacity = 0.58 + Math.random() * 0.34;

        comet.style.setProperty("--star-dash", `${length}`);
        comet.style.animationDuration = `${duration.toFixed(2)}s`;
        comet.style.animationDelay = `${phase.toFixed(2)}s`;
        comet.style.strokeOpacity = opacity.toFixed(2);
    });
})();
