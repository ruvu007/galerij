const allImages = [
    'https://cdn.motor1.com/images/mgl/RBRkP/s1/mercedes-amg-s65-final-edition.jpg',
    'https://www.motorward.com/wp-content/images/2014/11/mercedes-s65-amg.jpg',
    'https://gcm.moniteurautomobile.be/clients/moniteur/content/medias/images/test_drives/9000/100/20/mercedes-amg-c63-019.jpg',
    'https://media.autoweek.nl/m/sh6yjrnbco4h_800.jpg',
    'https://www.autoblog.nl/gallery/Mercedes/0_Divers/Brabus_GLS_occasion_NL//brabus-gls-850-00001.jpg',
    'https://ag-spots-2017.o.auroraobjects.eu/2017/08/03/other/2880-1800-crop-mercedes-amg-brabus-gle-63-s-coupe-c264703082017112455_1.jpg',
    'https://i.pinimg.com/originals/34/99/c4/3499c4a77ce01b9dae25770733e0e06a.jpg',
    'https://i.ytimg.com/vi/ZM34eIGiIR4/maxresdefault.jpg',
    'https://i.ytimg.com/vi/Ld2dn_MMDnk/maxresdefault.jpg',
    'https://www.autoblog.nl/gallery/0_Tuners/TopCar/Mercedes-AMG_GLE_63_AMG//TOPCAR-mercedes-gle-63-01.jpg',
    'https://media2.autokopen.nl/afbeeldingen/mercedes-amg-gle-53-4matic-300790-1024.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQf6mTsuJ07dXAaUIGpwRFMe9os5e8AfRAY5xy4HqgUkeOZlD63',
    'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/9-mercedes-amg-a35-2018-fd-steering-wheel.jpg?itok=CjYrSYjo',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiPqanez1cLyBzOSOh8OA5CH7ABtnp-Jd7NsUD3w7FUV7MC6Tq',
    'https://i.pinimg.com/originals/18/64/8c/18648cd064d1f0d82a1f62624a52c4b2.png',
    'https://www.autoblog.nl/gallery/Mercedes/0_Divers/JD_Customs_C63_AMG_Estate_2016_occasion/jd-customs-mercedes-amg-c63-amg-estate-occasion-black-2019-001.JPG',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRzifgSzyHxsMUHoQAp-Disq7OeIX0gfUZUlIVMZUuhzHeRHAj',
    'https://www.groenlicht.be/wp-content/uploads/Rijtest-Mercedes-AMG-C63-S-AMG-Break-facelift-2019-7-600x387.jpg',
    'https://i2.wp.com/www.drivessential.com/wp-content/uploads/2019/06/Mercedes-Benz-AMG-CLA35-AMG-4-Matic-geel-2020-2021-15.jpg?resize=1200%2C799',
    'https://i.pinimg.com/originals/bf/d5/54/bfd554856a78ee3c2d65f0a783ec37d3.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlnyQ27Dx59_Jsd9DG7Aw4eKwh6rdOdrRFuqZooDM21VUYSPoK',
    'https://autorai.nl/wp-content/uploads/2019/06/Mercedes-AMG-C-63-S-Max-Verstappen-5.jpg',
    'https://i.pinimg.com/originals/bf/d5/54/bfd554856a78ee3c2d65f0a783ec37d3.jpg',
    'https://img.gocar.be/v7/storage_news/2018/05/150909_mercedes_amg_c63_large.jpg?width=1200&optipress=3',
    ];

const allbox = document.getElementById('box');

function uploadImage(url) {
    let imgdiv = document.createElement('div');
    imgdiv.className = 'imgdiv';
    let mainimg = document.createElement('img');
    mainimg.src = url;
    mainimg.alt = 'Image loading';
    imgdiv.append(mainimg);
    allbox.append(imgdiv);
}

for(let i=allImages.length; i>0; i--) {
    let nmmr = Math.floor(Math.random()*allImages.length)
    uploadImage(allImages[nmmr]);
    allImages.splice(nmmr,1);
}