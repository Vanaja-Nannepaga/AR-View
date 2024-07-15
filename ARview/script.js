let selectedModel = '';

document.querySelectorAll('.items img').forEach(item => {
  item.addEventListener('click', () => {
    selectedModel = item.getAttribute('data-model');
    document.querySelectorAll('.items img').forEach(img => img.style.border = 'none');
    item.style.border = '2px solid #ff6b6b';
  });
});

document.getElementById('startAR').addEventListener('click', () => {
  if (selectedModel) {
    const decorEntity = document.getElementById('decorItem');
    decorEntity.setAttribute('gltf-model', selectedModel);
    document.getElementById('selection-container').style.display = 'none';
    document.getElementById('ar-scene').style.display = 'block';

    // Event listener to check if the model has loaded successfully
    decorEntity.addEventListener('model-loaded', () => {
      console.log('Model loaded successfully');
    });

    decorEntity.addEventListener('model-error', (error) => {
      console.error('Error loading model:', error.detail.src);
      alert('Failed to load the selected model. Please try again.');
    });
  } else {
    alert('Please select a decor item first!');
  }
});
