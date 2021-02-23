const codes = document.querySelectorAll('.code')
const btn = document.getElementById('btn')

const code1 = document.getElementById('code1')
const code2 = document.getElementById('code2')
const code3 = document.getElementById('code3')
const code4 = document.getElementById('code4')
const code5 = document.getElementById('code5')
const code6 = document.getElementById('code6')

codes[0].focus()

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {

    if (idx < 5 && e.key >= 0 && e.key <= 9) {
      codes[idx].value = '';
      setTimeout(() => codes[idx + 1].focus(), 10);
    } else if (idx > 0 && e.key === 'Backspace') {
      setTimeout(() => codes[idx - 1].focus(), 10);
    } else if (idx === 5 && e.key >= 0 && e.key <= 9) {
      codes[idx].value = '';
      setTimeout(() => codes[idx].focus(), 10);
    }
  });
});

code1.addEventListener('input', getValues)
code2.addEventListener('input', getValues)
code3.addEventListener('input', getValues)
code4.addEventListener('input', getValues)
code5.addEventListener('input', getValues)
code6.addEventListener('input', getValues)

function getValues(){
  let cod1 = code1.value;
  let cod2 = code2.value;
  let cod3 = code3.value;
  let cod4 = code4.value;
  let cod5 = code5.value;
  let cod6 = code6.value;

  let array = [cod1, cod2, cod3, cod4, cod5, cod6]

  let total= array.filter(Boolean).length;

  if( total == 6){
    btn.classList.add('next')
  } else{
    btn.classList.remove('next')
  }
}

