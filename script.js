function showSummary() {
    document.getElementById("summary").innerHTML = `
        <h2>Solar System Summary</h2>
        <p>The Solar System consists of the Sun and eight planets that orbit it.
        Gravity keeps them in motion.</p>
        <h3>Use Cases</h3>
        <ul>
            <li>Understanding planetary motion</li>
            <li>Space exploration studies</li>
            <li>Astronomy education</li>
        </ul>
    `;
}

function startQuiz() {
    document.getElementById("quiz").innerHTML = `
        <h2>Quiz</h2>
        <p>Which is the largest planet?</p>
        <button onclick="checkAnswer('Jupiter')">Jupiter</button>
        <button onclick="checkAnswer('Earth')">Earth</button>
        <button onclick="checkAnswer('Mars')">Mars</button>
        <p id="result"></p>
    `;
}

function checkAnswer(answer) {
    const result = document.getElementById("result");
    if (answer === "Jupiter") {
        result.innerHTML = "✅ Correct!";
        result.style.color = "green";
    } else {
        result.innerHTML = "❌ Incorrect. Try again!";
        result.style.color = "red";
    }
}

async function startAR() {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
        container: document.querySelector("#ar-container"),
        imageTargetSrc: "./assets/targets.mind"
    });

    const { renderer, scene, camera } = mindarThree;

    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    scene.add(light);

    const anchor = mindarThree.addAnchor(0);
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ffcc });
    const cube = new THREE.Mesh(geometry, material);
    anchor.group.add(cube);

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    });
}