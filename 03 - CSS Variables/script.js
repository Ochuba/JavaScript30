const allInput = document.querySelectorAll(".controls input");
function blur(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix );
    
}

allInput.forEach(input => input.addEventListener('change', blur));
allInput.forEach(input => input.addEventListener('mousemove', blur));
