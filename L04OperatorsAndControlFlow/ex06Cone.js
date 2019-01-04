function getConeVolumeAndArea(radius, height) {
    let volume = (1 / 3) * Math.PI * radius * radius * height;
    let slantHeight = Math.sqrt(radius * radius + height * height);
    let lateralSurface = Math.PI * radius * slantHeight;
    let baseSurface = Math.PI * radius * radius;
    let totalSurface = lateralSurface + baseSurface;

    console.log(volume);
    console.log(totalSurface);
}

getConeVolumeAndArea(3, 5);
getConeVolumeAndArea(3.3, 7.8);