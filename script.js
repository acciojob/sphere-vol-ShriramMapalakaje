function volume_sphere() {
    
    event.preventDefault();

    const radiusInput = document.getElementById('radius').value;
    const volumeField = document.getElementById('volume');
    
  
    const r = parseFloat(radiusInput);


    if (isNaN(r) || r < 0) {
        volumeField.value = 'NaN';
    } else {
       
        const volume = (4 / 3) * Math.PI * Math.pow(r, 3);
        
       
        volumeField.value = volume.toFixed(4);
    }
}



window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
