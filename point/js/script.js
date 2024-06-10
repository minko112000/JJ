const price = quantity => {$('#price').text(quantity * 2)}

const del = quantity => {
  if (quantity > 0) {
    $('#del').removeClass('d-none')
  } else {
    $('#del').addClass('d-none')
  }
}

$('#del').click(function () {
  $('#quantity').val(0)
  price(0)
  del(0)
})

$('#quantity').keyup(function () {
  let quantity = $(this).val()
  if (quantity == '') {
    quantity = 0
  }
  price(quantity)
  del(quantity)
})

$('#plus').click(function () {
  let quantity = $('#quantity').val()
  if (quantity == '') {
    quantity = 0
  }
  price(parseInt(quantity, 10) + 1)
  del(parseInt(quantity, 10) + 1)
  $('#quantity').val(parseInt(quantity, 10) + 1)
})

$('#minus').click(function () {
  let quantity = $('#quantity').val()
  if (quantity == '' || quantity == 0) {
    return
  } else {
    price(parseInt(quantity, 10) - 1)
    del(parseInt(quantity, 10) - 1)
    $('#quantity').val(parseInt(quantity, 10) - 1)
  }
})

$('#quantity-gp b').click(function () {
  let quantity = $(this).text().trim()
  $('#quantity').val(quantity)
  price(quantity)
  del(quantity)
})

$('#buy').click(function () {
  let quantity = $('#quantity').val()
  if (quantity > 9999) {
    console.log(quantity)
  } else {
    top_alert('အနည်းဆုံးအမှတ် ၁၀၀၀၀မှတ်')
  }
})