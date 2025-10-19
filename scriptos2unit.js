const imageElement = document.getElementById("rotating-image");
const images = [
  "https://media.craiyon.com/2025-07-08/D9GKiNsLTVmWQhGLS2MZmw.webp",
  "https://media.craiyon.com/2025-08-21/oVsjg0PLSOONVmKo1TselA.webp",
  "https://media.craiyon.com/2025-07-23/MBH674NESOa-3Apx2yiO-w.webp"
];
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  imageElement.src = images[currentIndex];
}, 4000);

  // Array of image paths for left and right panels
  const leftImages = [
    'https://media.licdn.com/dms/image/v2/D5622AQEA7f5k_IsrpQ/feedshare-shrink_800/feedshare-shrink_800/0/1683140428026?e=2147483647&v=beta&t=rMAjMrMxExjPQ7Bm3N0apiFroy4-bY-OcZMVw_n1MP8',
    'https://blog.finxter.com/wp-content/uploads/2023/07/Finxter_A_20-year_old_programmer_with_hoodie_sitting_in_front_o_660ce19b-d406-45dd-a903-1654b2eaeda9.png',
    'https://media.craiyon.com/2025-04-02/ZzCXsTFtRkaa0LfhGS8fJA.webp'
  ];

  const rightImages = [
    'https://media.craiyon.com/2025-05-13/rqEqtjfKQ5287pOYn4Om5g.webp',
    'https://media.craiyon.com/2025-08-07/Qm6e0cKdSbyT2Yn7wIDsJw.webp',
    'https://media.craiyon.com/2025-04-21/z7K7OuKRT4u9diLUBXtabw.webp'
  ];

  let leftIndex = 0;
  let rightIndex = 0;

  // Function to rotate images
  function rotateImages() {
    // Update left image
    const leftImg = document.getElementById('left-img');
    leftIndex = (leftIndex + 1) % leftImages.length;
    leftImg.src = leftImages[leftIndex];

    // Update right image
    const rightImg = document.getElementById('right-img');
    rightIndex = (rightIndex + 1) % rightImages.length;
    rightImg.src = rightImages[rightIndex];
  }

  // Change images every 5 seconds (5000ms)
  setInterval(rotateImages, 5000);

