// Arma el mini odontograma de la portada con el arte real del sistema
// (dental-sivar-app/package/public/odontograma/anatomico) y lo pega en index.html.
// Uso: node _odontograma/generar.js
const fs = require('fs');
const path = require('path');
const ARTE = 'C:/Users/Victor Castillo/DentalSaaS/dental-sivar-app/package/public/odontograma/anatomico';
const INDEX = path.join(__dirname, '..', 'index.html');

const interior = f => fs.readFileSync(path.join(ARTE, f), 'utf8')
  .replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '').replace(/<title>[\s\S]*?<\/title>/, '').trim();

// pieza, molde, hallazgo (overlay sobre el diente), superficie marcada, color
const piezas = [
  { n: '1.7', molde: 'molar-sup' },
  { n: '1.6', molde: 'molar-sup', overlay: 'corona', color: '#0043a3' },
  { n: '1.5', molde: 'premolar-sup', sup: 'mesial', color: '#1B84FF' },
  { n: '1.4', molde: 'premolar-sup', sup: 'oclusal', color: '#E5383B' },
  { n: '1.3', molde: 'canino-sup' },
];

const html = `<div class="mini-odonto">
        <div class="mini-cabeza"><span>Odontograma · arcada superior</span><span>FDI</span></div>
        <div class="mini-piezas">
${piezas.map(p => `          <div class="mini-pieza${p.color ? ' marcada' : ''}"${p.color ? ` style="--hallazgo:${p.color}"` : ''}>
            <svg viewBox="0 0 62 120" aria-hidden="true"><g>${interior(`base/${p.molde}.svg`)}</g>${p.overlay ? `<g>${interior(`overlay/${p.overlay}--${p.molde}.svg`)}</g>` : ''}</svg>
            <b>${p.n}</b>
            ${p.sup ? `<svg class="sup" viewBox="0 0 66 66" aria-hidden="true">${interior(`superficie/${p.molde}--${p.sup}.svg`)}</svg>` : '<span class="sup vacia"></span>'}
          </div>`).join('\n')}
        </div>
        <div class="mini-leyenda">
          <span><i style="background:#0043a3"></i>1.6 Corona</span>
          <span><i style="background:#1B84FF"></i>1.5 Resina mesial</span>
          <span><i style="background:#E5383B"></i>1.4 Caries oclusal</span>
        </div>
      </div>`;

let index = fs.readFileSync(INDEX, 'utf8');
const re = /<div class="(piezas|mini-odonto)">[\s\S]*?<!-- \/mini-odonto -->|<div class="piezas">[\s\S]*?<\/div>/;
if (!re.test(index)) throw new Error('no encontré el bloque de piezas en index.html');
index = index.replace(re, html + '<!-- /mini-odonto -->');
fs.writeFileSync(INDEX, index);
console.log('mini odontograma pegado,', html.length, 'caracteres');
