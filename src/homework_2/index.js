// Необходимо написать функции, которые бы принимали ссылку на изображение или canvas и применяла бы к нему один из эффектов.
// Например, инверсия цветов или оттенки серого. Для реализации эффектов, необходимо использовать методы Canvas getImageData/putImageData
// и работа с цветами пикселей. Возвращать такая функция может ссылку на Canvas или ImageData.

// const grayscaled = grayscale('/myImage.jpeg');
// const inversed = inverse(grayscaled);

// function getImageData(canvas) {
//     const ctx = canvas.getContext("2d");
//     const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     const data = imageData.data;
//     return data;
// }

function invert(canvas) {
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }

    ctx.putImageData(imageData, 0, 0);
};

function grayscale(canvas) {
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const gray = Math.floor((data[i] + data[i + 1] + data[i + 2]) / 3);
        data[i] = data[i + 1] = data[i + 2] = gray
    }

    ctx.putImageData(imageData, 0, 0);
};


function sepia(canvas) {
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const red = data[i];
        const green = data[i + 1];
        const blue = data[i + 2];

        data[i] = (red * 0.393) + (green * .769) + (blue * .189);
        data[i + 1] = (red * .349) + (green * .686) + (blue * .168);
        data[i + 2] = (red * .272) + (green * .534) + (blue * .131);
    }

    ctx.putImageData(imageData, 0, 0);
};

function loadImage(src) {
    return new Promise((resolve, reject) => {
        try {
            const img = new Image();
            img.src = src;

            img.onload = () => {
                resolve(img);
            }
        } catch (error) {
            reject(error)
        }
    })
}

function drawOriginalImage(img, canvas) {
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
}

async function main() {
    const img = await loadImage('./world.jpeg');
    const buttonOrig = document.getElementById('orig');
    const buttonGrayscaled = document.getElementById('grayscaled');
    const buttonInverted = document.getElementById('inverted');
    const sepiaButton = document.getElementById('sepia');
    const canvas = document.getElementById('original');

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    drawOriginalImage(img, canvas);

    buttonOrig.addEventListener('click', () => {
        drawOriginalImage(img, canvas);
    })

    buttonGrayscaled.addEventListener('click', () => {
        drawOriginalImage(img, canvas);
        grayscale(canvas);
    })

    buttonInverted.addEventListener('click', () => {
        drawOriginalImage(img, canvas);
        invert(canvas);
    })

    sepiaButton.addEventListener('click', () => {
        drawOriginalImage(img, canvas);
        sepia(canvas);
    })
}

main()
