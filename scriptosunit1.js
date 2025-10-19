const leftImages = [
  'https://i.pinimg.com/236x/7b/f8/58/7bf858f4cf91634b5ca9a34065c01692.jpg',
  'https://i.pinimg.com/236x/b5/cd/72/b5cd72b183f072632509126fde4818bd.jpg',
  'https://i.pinimg.com/736x/58/c4/38/58c43830365d8fb2eab1a612a64d7c4e.jpg'
];

const rightImages = [
  'https://img.freepik.com/free-photo/aesthetic-anime-character-gaming_23-2151560679.jpg?semt=ais_hybrid&w=740&q=80',
  'https://img.freepik.com/free-photo/aesthetic-anime-character-gaming_23-2151560685.jpg?semt=ais_hybrid&w=740&q=80',
  'https://backiee.com/static/wallpapers/1920x1080/386745.jpg'
];

let leftIndex = 0;
let rightIndex = 0;

setInterval(() => {
  leftIndex = (leftIndex + 1) % leftImages.length;
  document.getElementById("leftImage").src = leftImages[leftIndex];
}, 3000); // Change every 5 sec

setInterval(() => {
  rightIndex = (rightIndex + 1) % rightImages.length;
  document.getElementById("rightImage").src = rightImages[rightIndex];
}, 3000);
