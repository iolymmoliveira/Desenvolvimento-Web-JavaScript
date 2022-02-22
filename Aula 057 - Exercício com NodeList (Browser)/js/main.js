const paragrafos = document.querySelector('.paragrafos');
const pes = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of pes) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#FFFFFF';
}