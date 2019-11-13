'use strict'
function mediaEad (notaV1, notaV2) {

  let v1 = parseFloat(document.getElementById("notaV1").value)
  let v2 = parseFloat(document.getElementById("notaV2").value)

  if (isNaN(v1) && isNaN(v2)) {
    let mensagemDeErro = "Você não inseriu a nota da V1 nem a da V2."
    alert(`${mensagemDeErro}`)
  } else if (isNaN(v1)|| isNaN(v2)) {
      if (isNaN(v1) == true) {
        let mensagemDeErro = "Você não inseriu a nota da V1."
        alert(`${mensagemDeErro}`)
      } else if (isNaN(v2)) {
        let mensagemDeErro = "Você não inseriu a nota da V2."
        alert(`${mensagemDeErro}`)
      }
  } else if (podeSerNotadaV1(v1) && podeSerNotadaV2(v2)) {
        v1 += (v2 * 0.2)
        let media = (v1 + v2)/2
        return exibirMedia(v1, v2, media), vaiPraV3(media)
  } else {
    let mensagemDeErro = "Verifique as notas inseridas."
    alert(`${mensagemDeErro}`)
    return
  }

}

function exibirMedia (notaV1, notaV2, mediaResultado){
  mediaFinal.innerHTML = `A sua nota da V1 é:  ${notaV1.toFixed(2)}<br>`
  mediaFinal.innerHTML += `A sua nota da V2 é: ${notaV2.toFixed(2)}<br>`
  mediaFinal.innerHTML += `A sua média é:      ${mediaResultado.toFixed(2)}<br>`

  if (vaiPraV3(mediaResultado)) {
    mediaFinal.innerHTML += `Com a média ${mediaResultado.toFixed(2)} você precisará fazer a V3. <br> Clique na aba "Formulário V3" para agendar sua avaliação.<br>`
  }
}

function vaiPraV3(mediaParaTeste) {

  if (mediaParaTeste < 7) {
    return true
  } else {
    return false
  }

}

function podeSerNotadaV1 (numeroV1) {
  if (numeroV1 >= 0 && numeroV1 <= 8) {
  return true
  } else {
    return false
  }
}

function podeSerNotadaV2 (numeroV2) {
  if (numeroV2 >= 0 && numeroV2 <= 10) {
  return true
  } else {
    return false
  }
}

function notaV2 (notaV1, mediaDesejada) {

  let v1 = parseFloat(document.getElementById("notaV1").value)
  mediaDesejada = parseFloat(document.getElementById("mediaDesejada").value)


  if (isNaN(v1) && isNaN(mediaDesejada)) {
    let mensagemDeErro = "Você não inseriu a nota da V1 nem a média desejada."
    alert(`${mensagemDeErro}`)
  } else if (isNaN(v1)|| isNaN(mediaDesejada)) {
      if (isNaN(v1)) {
        let mensagemDeErro = "Você não inseriu a nota da V1."
        alert(`${mensagemDeErro}`)
      } else if (isNaN(mediaDesejada)) {
        let mensagemDeErro = "Você não inseriu a média desejada."
        alert(`${mensagemDeErro}`)
      }
  } else if (podeSerNotadaV1(v1) && podeSerNotadaV2(mediaDesejada)) {

        let v2 = ((mediaDesejada * 2) - v1)/1.2

        if (v2 <= 10) {
          v1 += v2 * 0.2
          return exibirMediaDesejada(v1, v2, mediaDesejada)
        } else {
          let mensagemDeErro = "A média desejada não pode ser obtida com essa nota de V1."
          alert(`${mensagemDeErro}`)
        }

  } else {
    let mensagemDeErro = "Verifique as notas inseridas."
    alert(`${mensagemDeErro}`)
    return
  }

}

function exibirMediaDesejada (notaV1, notaV2, mediaResultado){
  mediaFinal.innerHTML = `A sua nota da V1 é:   ${notaV1.toFixed(2)}<br>`
  mediaFinal.innerHTML += `Para chegar na média ${mediaResultado.toFixed(2)} você precisará de ${notaV2.toFixed(2)} na V2 <br>`

  if (vaiPraV3(mediaResultado)) {
    mediaFinal.innerHTML += `Com a média ${mediaResultado.toFixed(2)} você precisará fazer a V3. <br> Clique na aba "Formulário V3" para agendar sua avaliação.<br>`
  }
}
