let money_transfer
let stack = 1
let bank
let withdrawal_bank_address
let money_transfer_data = {}

new Swiper('.swiper', {
  direction: 'horizontal',
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

const walletActionStack = stack => {
  if (stack == 4) {
    $('.next-wallet-action').text('အတည်ပြုမည်')
  } else {
    $('.next-wallet-action').text('▶ ရှေ့သို့')
  }
  if (stack == 2) {
    $('.stack-gp').css('--myVar', '33%')
    setTimeout(function () {
      $('.stack-gp div:nth-child(2)').addClass('bg-warning')
    }, 450)
    $('.stack-gp div:nth-child(3)').removeClass('bg-warning')
    $('.bank-accounts-box').css({
      transform: 'translateX(-110%)'
    })
    $('.bank-address-box').css({
      transform: 'translateX(0)'
    })
    $('.bank-amount-box').css({
      transform: 'translateX(110%)'
    })
    $('.back-wallet-action').removeClass('ban-wallet-action-btn')
  } else if (stack == 3) {
    $('.stack-gp').css('--myVar', '66%')
    setTimeout(function () {
      $('.stack-gp div:nth-child(3)').addClass('bg-warning')
    }, 450)
    $('.stack-gp div:nth-child(4)').removeClass('bg-warning')
    $('.bank-address-box').css({
      transform: 'translateX(-110%)'
    })
    $('.bank-amount-box').css({
      transform: 'translateX(0)'
    })
    $('.bank-confirm-box').css({
      transform: 'translateX(110%)'
    })
  } else if (stack == 4) {
    $('.stack-gp').css('--myVar', '100%')
    setTimeout(function () {
      $('.stack-gp div:nth-child(4)').addClass('bg-warning')
    }, 450)
    $('.bank-amount-box').css({
      transform: 'translateX(-110%)'
    })
    $('.bank-confirm-box').css({
      transform: 'translateX(0)'
    })
  } else {
    $('.bank-accounts-box').css({
      transform: 'translateX(0)'
    })
    $('.bank-address-box').css({
      transform: 'translateX(110%)'
    })
    $('.bank-amount-box').css({
      transform: 'translateX(110%)'
    })
    $('.bank-confirm-box').css({
      transform: 'translateX(110%)'
    })
    $('.stack-gp').css('--myVar', '0')
    $('.stack-gp div:nth-child(2), .stack-gp div:nth-child(3)').removeClass('bg-warning')
    $('.back-wallet-action').addClass('ban-wallet-action-btn')
  }
}

$('.game').click(function () {
  if (login == false) {
    location.href = currentUrl + 'reg/' + indexhtml
  } else {
    let id = $(this).attr('id')
    location.href = `${currentUrl}${id}/${indexhtml}`
  }
})

$('.menu-bar div').click(function () {
  $('.wallet-inner-page').addClass('d-none')
  $('.menu-bar div').addClass('opacity-50')
  $(this).removeClass('opacity-50')
  let id = $(this).attr('id')
  $(`#${id}-page`).removeClass('d-none')
})

$('.deposit, .withdrawal').click(function () {
  bank = undefined
  $('.bank-account').removeClass('bank-account-selected')
  if (stack == 4) {
    $('.back-wallet-action').click()
    $('.back-wallet-action').click()
    $('.back-wallet-action').click()
  } else if (stack == 3) {
    $('.back-wallet-action').click()
    $('.back-wallet-action').click()
  } else if (stack == 2) {
    $('.back-wallet-action').click()
  }
})

$('.deposit').click(function () {
  money_transfer = 'ငွေသွင်း'
  money_transfer_data.action = money_transfer
  $('.wallet-action .title-img-text b').text(money_transfer)
  $('.wallet-action h4 b').text(money_transfer)
})

$('.withdrawal').click(function () {
  money_transfer = 'ငွေထုတ်'
  money_transfer_data.action = money_transfer
  $('.wallet-action .title-img-text b').text(money_transfer)
  $('.wallet-action h4 b').text(money_transfer)
})

$('.bank-account').click(function () {
  $('.bank-account').removeClass('bank-account-selected')
  $(this).addClass('bank-account-selected')
  bank = $(this).children('b').text()
  $('.bank-address-box h4 b').text(bank.replace(' ', ''))
  let img = bank.replace(' ', '').toLowerCase()
  $('#bank-address img, #withdrawal-bank-address img').attr('src', `images/${img.replace('pay', '')}.png`)
})

$('#copy-bank-address').click(function () {
  let address = $('#bank-address b').text()
  navigator.clipboard.writeText(address)
  $(this).addClass('bg-success')
  $(this).removeClass('bg-warning')
  $(this).text('ကူးယူပြီး')
  $(this).css('pointerEvents', 'none')
  setTimeout(function() {
    $('#copy-bank-address').addClass('bg-warning')
    $('#copy-bank-address').removeClass('bg-success')
    $('#copy-bank-address').text('ကူးယူပါ')
    $('#copy-bank-address').css('pointerEvents', 'auto')
  }, 3000);
})

$('#money-transfer-submit').click(function () {
  let digits = $('#digits input').val().trim()
  let amount = $('#amount input').val().trim()
  let receive_address = $('#receive-address input').val().trim()
  let password = $('#password input').val().trim()
  if (money_transfer == 'deposit') {
    if (digits.length == 6) {
      if (amount >= 1000) {
        top_alert('ok')
      } else {
        top_alert('အနည်းဆုံးငွေပမာဏ ၁၀၀၀ကျပ်')
      }
    } else {
      top_alert('မှန်ကန်မှုမရှိသောလုပ်ဆောင်မှုအမှတ်')
    }
  } else {
    if (phoneCheck(receive_address) == true) {
      if (amount >= 1000) {
        if (passwordCheck(password) == true) {
          top_alert('ok')
        } else {
          top_alert('မှန်ကန်မှုမရှိသောစကားဝှက်')
        }
      } else {
        top_alert('အနည်းဆုံးငွေပမာဏ ၁၀၀၀ကျပ်')
      }
    } else {
      top_alert('မှန်ကန်မှုမရှိသောဖုန်း')
    }
  }
})

$('.back-wallet-action').click(function () {
  if (stack == 2) {
    stack = 1
    walletActionStack(stack)
  } else if (stack == 3) {
    stack = 2
    walletActionStack(stack)
  } else if (stack == 4) {
    stack = 3
    walletActionStack(stack)
  }
})

$('.next-wallet-action').click(function () {
  if (stack == 1) {
    if (bank != undefined) {
      if (money_transfer == 'ငွေသွင်း') {
        $('.withdrawal-bank-address').hide()
        $('.bank-address').show()
      } else {
        $('.withdrawal-bank-address').show()
        $('.bank-address').hide()
      }
      money_transfer_data.account = bank
      stack = 2
      walletActionStack(stack)
    } else {
      top_alert(money_transfer + 'လိုသောဘဏ်အမျိုးအစားသတ်မှတ်ပါ')
    }
  } else if (stack == 2) {
    if (money_transfer == 'ငွေထုတ်') {
      withdrawal_bank_address = $('#withdrawal-bank-address input').val().trim()
      if (phoneCheck(withdrawal_bank_address) == true) {
        stack = 3
        walletActionStack(stack)
        money_transfer_data.phone = withdrawal_bank_address
      } else {
        top_alert('မှန်ကန်မှုမရှိသောဖုန်း')
      }
      $('.bank-6digits').hide()
      $('.bank-password').show()
    } else {
      stack = 3
      walletActionStack(stack)
      $('.bank-6digits').show()
      $('.bank-password').hide()
      money_transfer_data.phone = $('#bank-address b').text()
    }
  } else if (stack == 3) {
    let amount = $('#bank-amount').val().trim()
    let digits = $('#bank-6digits').val().trim()
    let password = $('#bank-password').val().trim()
    if (money_transfer == 'ငွေထုတ်') {
      if (amount >= 1000 && passwordCheck(password) == true) {
        stack = 4
        walletActionStack(stack)
        money_transfer_data.amount = amount
        $('.cf1 b').text(money_transfer_data.account)
        $('.cf2 small').text('ငွေလက်ခံမည့်ဘဏ်နံပါတ်')
        $('.cf2 b').text(money_transfer_data.phone)
        $('.cf3').hide()
        $('.cf4 b').text(amount)
      } else {
        if (amount < 1000) {
          top_alert('အနည်းဆုံးငွေပမာဏ ၁၀၀၀ကျပ်')
        } else {
          top_alert('မှန်ကန်မှုမရှိသောစကားဝှက်')
        }
      }
    } else {
      if (digits.length == 6 && amount >= 1000) {
        stack = 4
        walletActionStack(stack)
        money_transfer_data.digits = digits
        money_transfer_data.amount = amount
        $('.cf1 b').text(money_transfer_data.account)
        $('.cf2 small').text('ငွေသွင်းခဲ့သည့်ဘဏ်နံပါတ်')
        $('.cf2 b').text(money_transfer_data.phone)
        $('.cf3 b').text(digits)
        $('.cf3').show()
        $('.cf4 b').text(amount)
      } else {
        if (digits.length != 6) {
          top_alert('မှန်ကန်မှုမရှိသောလုပ်ဆောင်မှုအမှတ်')
        } else {
          top_alert('အနည်းဆုံးငွေပမာဏ ၁၀၀၀ကျပ်')
        }
      }
    }
  } else if (stack == 4) {
    console.log(money_transfer_data)
  }
})

$('.deposit').click()

$('#refcode-copy').click(function () {
  let code = $('#refcode').text()
  navigator.clipboard.writeText(code)
})

$('.reflink').click(function () {
  let code = $('#refcode').text()
  $(this).attr('data', `${currentUrl}reg/index.html?ref=${code}`)
})

$('#reflink-copy').click(function () {
  let link = $(this).attr('data')
  navigator.clipboard.writeText(link)
  top_alert('ကူးယူပြီး', '#22e622')
})

$('#facebook-share').click(function () {
  let link = $(this).attr('data')
  location.href = `https://facebook.com/sharer/sharer.php?u=${link}`
})

$('#telegram-share').click(function () {
  let link = $(this).attr('data')
  location.href = `tg://msg?text=${link} ထီကံစမ်းပြီးဆုကြေးများစွာရယူကြရအောင်`
})

$('.ref-menu > b').click(function () {
  $('.ref-menu > b').addClass('opacity-50')
  $(this).removeClass('opacity-50')
  $('#ref-wrapper > div').addClass('d-none')
  let id = $(this).attr('id')
  $(`#ref-wrapper #${id}-page`).removeClass('d-none')
})

$('.comi-people-detail').click(function () {
  if ($(this).hasClass('fa-angle-down')) {
    $(this).removeClass('fa-angle-down')
    $(this).addClass('fa-angle-up')
    $(this).parent().css({
      height: '225px',
    })
  } else {
    $(this).addClass('fa-angle-down')
    $(this).removeClass('fa-angle-up')
    $(this).parent().css({
      height: '90px',
    })
  }
})

$('.tab-icon').click(function () {
  if ($(this).attr('id') == 'more') {
    $('nav').removeClass('shadow-sm bb')
  } else {
    $('nav').addClass('shadow-sm bb')
  }
})

$('.comi-box div span').click(function () {
  let price = $(this).text().trim()
  let per = $(this).parent().parent().attr('id').replace('comi-box-', '')
  let cur = (price == 20) ? 'diamond' : 'point'
  let data = {
    per: per,
    price: price,
    cur: cur,
  }
  console.log(data)
})