let TIMES = 80
let MYBALANCE = 800000
let IS_OPEN_2D = 'open'
let HOLIDAYS = []

const getHolidays = () => {
  $.ajax({
    url: 'https://backend.yadanarcity.com/api/lv/holiday_list',
    type: 'GET',
    data: "",
    success: function (r) {
      HOLIDAYS = r.data
    }
  })
}
getHolidays()

live()
const live_id = setInterval(function () {
  live()
}, 3000)

let bro = [01, 12, 23, 34, 45, 56, 67, 78, 89, 90]
let ee = [00, 02, 04, 06, 08, 20, 22, 24, 26, 28, 40, 42, 44, 46, 48, 60, 62, 64, 66, 68, 80, 82, 84, 86, 88]
let oo = [11, 13, 15, 17, 19, 31, 33, 35, 37, 39, 51, 53, 55, 57, 59, 71, 73, 75, 77, 79, 91, 93, 95, 97, 99]
let eo = [01, 03, 05, 07, 09, 21, 23, 25, 27, 29, 41, 43, 45, 47, 49, 61, 63, 65, 67, 69, 81, 83, 85, 87, 89]
let oe = [10, 12, 14, 16, 18, 30, 32, 34, 36, 38, 50, 52, 54, 56, 58, 70, 72, 74, 76, 78, 90, 92, 94, 96, 98]
let double = ['00', '11', '22', '33', '44', '55', '66', '77', '88', '99'];

const closeTime = session => {
  if (session == '11:00 AM') {
    return '10:55 AM'
  } else if (session == '12:00 PM') {
    return '11:55 PM'
  } else if (session == '03:00 PM') {
    return '02:55 PM'
  } else {
    return '04:25 PM'
  }
}

const count = () => {
  let count = $('.num-parent .num-selected').length
  if (count > 0) {
    $('.count').removeClass('d-none')
    $('.count').text(count)
    $('#r').removeClass('ban')
  } else {
    $('.count').addClass('d-none')
    $('#r').addClass('ban')
  }
}

const limit = () => {
  let limit = 50000
  let amount = 5000
  let nums = $('.num-parent .num')
  for (let i = 0; i < nums.length; i++) {
    let percentage  = (amount / limit) * 100;
    nums[i].style.setProperty('--limit-deg', i + '%');
    nums[i].style.setProperty('--limit', limit);
    nums[i].style.setProperty('--limit-amount', amount);
  }
}

const singleQuickBet = arr => {
  for (let i = 0; i < arr.length; i ++) {
    let number =  arr[i] < 10 ? '0' + '' + arr[i] : arr[i]
    let limit = $('.num-parent .num')[parseInt(number, 10)].style.getPropertyValue('--limit-deg')
    if (limit == '100%') {
      continue
    } else {
      $('.num')[parseInt(number, 10)].classList.add('num-selected')
    }
  }
}

const dream = search => {
  $('#dream-page .wrapper .dreams').html('')
  let limit_sx_index = 0
  for (let i = 0; i < dreams.length; i ++) {
    if (search == '') {
      $('#dream-page .wrapper .dreams')[0].innerHTML += `
        <span class="mt-3 dream-content d-flex px-3">${dreams[i].title}</span>
        <div class="d-flex dream-content limit-sx py-2 px-3"></div>
      `
      for (let j = 0; j < dreams[i].twod.length; j ++) {
        $('#dream-page .wrapper .dreams .limit-sx')[i].innerHTML += `
          <b class="c dream-num-${dreams[i].twod[j]} dream-num shadow-sm me-2 b bgp rounded-circle pointer">${dreams[i].twod[j]}</b>
        `
      }
    } else {
      if (dreams[i].title.includes(search)) {
        $('#dream-page .wrapper .dreams')[0].innerHTML += `
          <span class="mt-3 dream-content d-flex px-3">${dreams[i].title}</span>
          <div class="d-flex dream-content limit-sx py-2 px-3"></div>
        `
        for (let j = 0; j < dreams[i].twod.length; j ++) {
          $('#dream-page .wrapper .dreams .limit-sx')[limit_sx_index].innerHTML += `
            <b class="c dream-num-${dreams[i].twod[j]} dream-num shadow-sm me-2 b bgp rounded-circle pointer">${dreams[i].twod[j]}</b>
          `
        }
        limit_sx_index += 1
      }
    }
  }
  
  $('.dream-num').click(function () {
    let number = $(this).text()
    let index = parseInt($(this).text(), 10)
    let cl = $(this).text()
    let limit = $('.num-parent .num')[index].style.getPropertyValue('--limit-deg')
    if (limit == '100%') {
      top_alert(number + ' ' + 'သည်ထိုးငွေပြည့်သွားပါပြီ')
    } else {
      if ($(this).hasClass('num-selected')) {
        $(this).removeClass('num-selected')
        $(`.dream-num-${cl}`).removeClass('num-selected')
        $('.num')[index].classList.remove('num-selected')
      } else {
        $(this).addClass('num-selected')
        $(`.dream-num-${cl}`).addClass('num-selected')
        $('.num')[index].classList.add('num-selected')
      }
      count()
    }
  })
  
  $('.dream-num').removeClass('num-selected')
  let nums = $('.num-parent .num-selected')
  for (let i = 0; i < nums.length; i ++) {
    $(`.dream-num-${nums[i].innerText}`).addClass('num-selected')
  }
}

const totalBetMoney = () => {
  let total_money = $('.bet-amount')
  let total_bet_money = 0
  for (let i = 0; i < total_money.length; i ++) {
    total_bet_money += parseInt(total_money[i].value, 10)
  }
  $('#total-bet-money').text(total_bet_money + ' ကျပ်')
}

const betAction = () => {
  $('.bet-edit').click(function () {
    $(this).addClass('d-none')
    $(this).parent().children('.bet-save').removeClass('d-none')
    $(this).parent().parent().children('input').attr('disabled', false)
    $(this).parent().parent().children('input').focus()
  })
  
  $('.bet-save').click(function () {
    let number = $(this).parent().parent().children('.bet-number').val().trim()
    let amount = $(this).parent().parent().children('.bet-amount').val().trim()
    if (number.length == 2) {
      if (amount < 100) {
        top_alert('အနည်းဆုံးငွေပမာဏ ၁၀၀ ကျပ်')
      } else {
        let limit = $('.num-parent .num')[parseInt(number, 10)].style.getPropertyValue('--limit-deg')
        if (limit == '100%') {
          top_alert(number + ' ' + 'သည်ထိုးငွေပြည့်သွားပါပြီ')
        } else {
          $(this).addClass('d-none')
          $(this).parent().children('.bet-edit').removeClass('d-none')
          $(this).parent().parent().children('input').attr('disabled', true)
          totalBetMoney()
          top_alert('ပြုပြင်မှုပြီးပါပြီ', '#22e622')
        }
      }
    } else {
      top_alert('မှန်ကန်မှုမရှိသောဂဏန်း')
    }
  })
  
  $('.bet-delete').click(function () {
    let number = $(this).parent().parent().remove()
    totalBetMoney()
  })
}

const close2D = e => {
  loading('../images/brand.png', 1)
  e.html('')
  for (let i = 0; i < HOLIDAYS.length; i ++) {
    e[0].innerHTML += `
      <div class="bgs rounded shadow-sm p-2 mt-3">
        <small class="c py-2 bb">${HOLIDAYS[i].date}</small>
        <b class="c py-2">${HOLIDAYS[i].name}</b>
      </div>
  `
  }
  loading(0)
}

const close2DCheck = (month, day, h) => {
  let date = month + '-' + day
  let next_day = parseInt(day, 10) + 1
  let next_day_
  (next_day < 10) ? next_day_ =  '0' + next_day : next_day_ =  next_day
  let next_date = month + '-' + next_day_
  let next_date_
  if (next_date == '04-31') {
    next_date_ = '05-01'
  } else {
    next_date_ = next_date
  }
  for (let i = 0; i < HOLIDAYS.length; i++) {
    if (HOLIDAYS[i].date.slice(5, 10) == next_date && h >= 17) {
      return 'close'
    }
    if (HOLIDAYS[i].date.slice(5, 10) == date && h < 17) {
      return 'close'
    }
  }
}

const sessionCheck = () => {
  $.ajax({
    url: 'https://luke.2dboss.com/api/luke/twod-result-live',
    type: 'GET',
    data: "",
    success: function (r) {
      if (r.message == 'success') {
        let day = r.data.date.slice(0, 2)
        let month = r.data.date.slice(3, 5)
        let d = r.data.current_date
        let date
        if (d.includes('Friday')) {
          date = 'Friday'
        } else if (d.includes('Saturday')) {
          date = 'Saturday'
        } else if (d.includes('Sunday')) {
          date = 'Sunday'
        } else {
          date = 'Other'
        }
        let h = r.data.current_time.slice(0, 2)
        let m = r.data.current_time.slice(3, 5)
        let s = r.data.current_time.slice(6, 8)
        if (date == 'Friday' && h >= 17 || date == 'Saturday' || date == 'Sunday' && h < 17) {
          $('#session-box-page').removeClass('d-none')
          $('#session-box').html('<h2 class="text-warning tsh">2D ပိတ်သည်။</h2>')
          if (IS_OPEN_2D == 'open') {
            IS_OPEN_2D = 'close'
          }
        } else {
          if (close2DCheck(month, day, h) == 'close') {
            $('#session-box-page').removeClass('d-none')
            $('#session-box').html('<h2 class="text-warning tsh">2D ပိတ်သည်။</h2>')
            if (IS_OPEN_2D == 'open') {
              IS_OPEN_2D = 'close'
            }
          } else {
            if (IS_OPEN_2D == 'close') {
              IS_OPEN_2D = 'open'
            }
            if (h == 10 && m >= 55 || h >= 12) {
              $('#s1').addClass('ban')
            }
            if (h == 11 && m >= 55 || h >= 13) {
              $('#s2').addClass('ban')
            }
            if (h == 14 && m >= 55 || h >= 15) {
              $('#s3').addClass('ban')
            }
            if (h == 16 && m >= 25 || h >= 17) {
              $('#s4').addClass('ban')
            }
            if (h >= 17) {
              $('#s1, #s2, #s3, #s4').removeClass('ban')
            }
          }
        }
      } else {
        if (IS_OPEN_2D == 'close') {
          $('#session-box-page').removeClass('d-none')
          $('#session-box').html('<h2 class="text-warning tsh">2D ပိတ်သည်။</h2>')
        } else {
          $('#s1, #s2, #s3, #s4').removeClass('ban')
        }
      }
    }
  })
}

$('#bet').click(function () {
  $('.session-time').click()
})

$('.tab-icon').click(function () {
  let id = $(this).attr('id')
  if (id == 'history') {
    $('nav').removeClass('bb shadow-sm')
  } else {
    $('nav').addClass('bb shadow-sm')
  }
})

$('.log-btn').click(function () {
  let id = $(this).attr('id')
  $('.log-btn').addClass('opacity-50')
  $(this).removeClass('opacity-50')
  let left = $(this)[0].offsetLeft + 'px'
  $('.underline').css({
    left: left,
  })
  if (id == 'action3') {
    results2D($('#history-wrapper'))
  } else if (id == 'action4') {
    close2D($('#history-wrapper'))
  }
})

$('.session-time').click(function () {
  $('#session-box-page').removeClass('d-none')
  sessionCheck()
})

$('#session-box b').click(function () {
  $('#session-box b').removeClass('bg-success')
  $(this).addClass('bg-success')
  let session = $(this).text()
  $('.session-time b').text(session)
  $('.close-time b').text(closeTime(session))
  $('#session-box-page').addClass('d-none')
  $('.num').removeClass('num-selected r rr')
  count()
  limit()
})

$('#r').click(function () {
  $('.num-selected').addClass('r')
  let nums = $('.r')
  for (let i = 0; i < nums.length; i++) {
    let index = parseInt(reverseString(nums[i].innerText), 10)
    let limit = $('.num-parent .num')[index].style.getPropertyValue('--limit-deg')
    if (limit == '100%') {
      $('.num')[parseInt(nums[i].innerText, 10)].classList.remove('r')
      continue
    } else {
      $('.num')[index].classList.add('num-selected')
      if (!$('.num')[index].classList.contains('r')) {
        $('.num')[index].classList.add('rr')
      }
      $('.rr').removeClass('r')
      if (index == 0 || index == 11 || index == 22 || index == 33 || index == 44 || index == 55 || index == 66 || index == 77 || index == 88 || index == 99) {
          $('.num')[index].classList.remove('r')
        }
    }
  }
  count()
})

$('#quick').click(function () {
  $('#quick-page').removeClass('d-none')
})

$('.limit-sx b').click(function () {
  $('#quick-page').addClass('d-none')
  $('#dream-page').addClass('d-none')
})

$('.single-double-num b').click(function () {
  let target = $(this).attr('data')
  if (target == 'big') {
    for (let i = 50; i < 100; i ++) {
      let limit = $('.num-parent .num')[i].style.getPropertyValue('--limit-deg')
      if (limit == '100%') {
        continue
      } else {
        $('.num')[parseInt(i, 10)].classList.add('num-selected')
      }
    }
    let scroll = $('.num-parent')[0].scrollHeight / 2
    $('.num-parent').scrollTop(scroll - 60)
  } else if (target == 'small') {
    for (let i = 0; i < 50; i ++) {
      let number =  i < 10 ? '0' + '' + i : i
      let limit = $('.num-parent .num')[i].style.getPropertyValue('--limit-deg')
      if (limit == '100%') {
        continue
      } else {
        $('.num')[parseInt(number, 10)].classList.add('num-selected')
      }
    }
    $('.num-parent').scrollTop(0)
  } else if (target == 'e') {
      for (let i = 0; i < 100; i ++) {
        let num = i % 2
        if (num == 0) {
          let number =  i < 10 ? '0' + '' + i : i
          let limit = $('.num-parent .num')[i].style.getPropertyValue('--limit-deg')
          if (limit == '100%') {
            continue
          } else {
            $('.num')[parseInt(number, 10)].classList.add('num-selected')
          }
        }
      }
  } else if (target == 'o') {
    for (let i = 0; i < 100; i ++) {
      let num = i % 2
      if (num != 0) {
        let number =  i < 10 ? '0' + '' + i : i
        let limit = $('.num-parent .num')[i].style.getPropertyValue('--limit-deg')
        if (limit == '100%') {
          continue
        } else {
          $('.num')[parseInt(number, 10)].classList.add('num-selected')
        }
      }
    }
  } else {
    if (target == 'bro') {
      singleQuickBet(bro)
    } else if (target == 'ee') {
      singleQuickBet(ee)
    } else if (target == 'oo') {
      singleQuickBet(oo)
    } else if (target == 'eo') {
      singleQuickBet(eo)
    } else if (target == 'oe') {
      singleQuickBet(oe)
    } else if (target == 'double') {
      singleQuickBet(double)
    }
  }
  count()
})

$('.patee-num b').click(function () {
  let point = $(this).text()
  for (let i = 0; i < 100; i ++) {
    let number =  i < 10 ? '0' + '' + i : i
    if (number.toString().includes(point.toString())) {
        let limit = $('.num-parent .num')[i].style.getPropertyValue('--limit-deg')
        if (limit == '100%') {
          continue
        } else {
          $('.num')[parseInt(number, 10)].classList.add('num-selected')
        }
    }
  }
  count()
})

$('.top-num b').click(function () {
  let point = $(this).text()
  for (let i = 0; i < 100; i ++) {
    let number =  i < 10 ? '0' + '' + i : i
    if (number.toString().slice(0, 1) == point) {
        let limit = $('.num-parent .num')[i].style.getPropertyValue('--limit-deg')
        if (limit == '100%') {
          continue
        } else {
          $('.num')[parseInt(number, 10)].classList.add('num-selected')
        }
    }
  }
  count()
})

$('.end-num b').click(function () {
  let point = $(this).text()
  for (let i = 0; i < 100; i ++) {
    let number =  i < 10 ? '0' + '' + i : i
    if (number.toString().slice(1, 2) == point) {
        let limit = $('.num-parent .num')[i].style.getPropertyValue('--limit-deg')
        if (limit == '100%') {
          continue
        } else {
          $('.num')[parseInt(number, 10)].classList.add('num-selected')
        }
    }
  }
  count()
})

$('.num20 b').click(function () {
  let start = parseInt($(this).text().slice(0, 2), 10)
  let end = parseInt($(this).text().slice(3, 5), 10)
  if (start == 0) {
    $('.num-parent').scrollTop(0)
  } else if (start == 20) {
    let scroll = $('.num-parent')[0].scrollHeight / 4
    $('.num-parent').scrollTop(scroll - 150)
  } else if (start == 40) {
    let scroll = $('.num-parent')[0].scrollHeight / 3
    $('.num-parent').scrollTop(scroll)
  } else if (start == 60) {
    let scroll = $('.num-parent')[0].scrollHeight / 2
    $('.num-parent').scrollTop(scroll)
  } else if (start == 80) {
    let scroll = $('.num-parent')[0].scrollHeight
    $('.num-parent').scrollTop(scroll)
  }
  for (let i = start; i <= end; i ++) {
    let number =  i < 10 ? '0' + '' + i : i
    let limit = $('.num-parent .num')[parseInt(number, 10)].style.getPropertyValue('--limit-deg')
    if (limit == '100%') {
      continue
    } else {
      $('.num')[parseInt(number, 10)].classList.add('num-selected')
    }
  }
  count()
})

$('.inner-page-hide').click(function () {
  $('.inner-page').addClass('d-none')
})

$('#dream').click(function () {
  $('#dream-page').removeClass('d-none')
  dream($('#dream-2d-search input').val().trim())
})

$('#dream-2d-search input').keyup(function () {
  let value = $(this).val().trim()
  dream(value)
})

$('#dream-2d-search i').click(function () {
  dream('')
})

$('#del-num').click(function () {
  $('.num, .dream-num').removeClass('num-selected r rr')
  count()
})

$('#bet-slip').click(function () {
  let amount = $('#amount').val().trim()
  if ($('.count').hasClass('d-none')) {
    top_alert('ထီဂဏန်းမသတ်မှတ်ရသေးပါ')
  } else {
    if (amount < 100) {
      top_alert('အနည်းဆုံးငွေပမာဏ ၁၀၀ ကျပ်')
    } else {
      loading('../images/brand.png', 1)
      setTimeout(function() {
        let nums = $('.num-parent .num-selected')
        for (let i = 0; i < nums.length; i++) {
          if (i == nums.length - 1) {
            loading('', 0)
            $('#slip-page').removeClass('d-none')
          }
          $('#slip-table')[0].innerHTML += `
                  <div class="num-row c">
                    <input disabled class="text-center bet-number tsh" type="number" placeholder="ဂဏန်း" value="${nums[i].innerText}">
                    <input disabled class="text-center bet-amount tsh" type="number" placeholder="ငွေပမာဏ" value="${amount}">
                    <b class="c bet-times">${TIMES}</b>
                    <b class="c">
                      <i class="fa-solid bet-save text-success pointer fa-check-double d-none me-2"></i>
                      <i class="fa-solid bet-edit text-info pointer fa-edit me-2"></i>/
                      <i class="fa-solid bet-delete text-danger pointer fa-trash ms-2"></i>
                    </b>
                  </div>
          `
        }
        $('#slip-table')[0].innerHTML += `
                <div class="num-row c spa">
                  <span class="c">စုစုပေါင်းထိုးငွေ</span>
                  <b id="total-bet-money" class="c ms-2">--</b>
                </div>
        `
        totalBetMoney()
        betAction()
      }, 1);
    }
  }
})

$('.num').click(function () {
  let limit = $(this)[0].style.getPropertyValue('--limit-deg')
  if (limit == '100%') {
    let number = $(this).text()
    top_alert(number + ' ' + 'သည်ထိုးငွေပြည့်သွားပါပြီ')
  } else {
    if ($(this).hasClass('num-selected')) {
      if ($(this).hasClass('r')) {
        let index = parseInt(reverseString($(this).text()), 10)
        $('.num')[index].classList.remove('rr')
      }
      if ($(this).hasClass('rr')) {
        let index = parseInt(reverseString($(this).text()), 10)
        $('.num')[index].classList.remove('r')
      }
      $(this).removeClass('num-selected r rr')
    } else {
      $(this).addClass('num-selected')
    }
    count()
  }
})

$('#bet-slip-hide').click(function () {
  $('#del-num').click()
  $('#slip-table').html('')
})

$('#add-num').click(function () {
  $('#slip-table').scrollTop(0)
  $('#slip-table').prepend(`
          <div class="num-row c">
            <input disabled class="text-center bet-number tsh" type="number" placeholder="ဂဏန်း" value="">
            <input disabled class="text-center bet-amount tsh" placeholder="ငွေပမာဏ" type="number" value="">
            <b class="c bet-times">${TIMES}</b>
            <b class="c">
              <i class="fa-solid bet-save text-success pointer fa-check-double d-none me-2"></i>
              <i class="fa-solid bet-edit text-info pointer fa-edit me-2"></i>/
              <i class="fa-solid bet-delete text-danger pointer fa-trash ms-2"></i>
            </b>
          </div>
  `)
  betAction()
  $('.num-row')[1].querySelector('.bet-edit').click()
})

$('#bet-confirm').click(function () {
  if (parseInt($('#total-bet-money').text(), 10) < 100) {
    top_alert('ထိုးဂဏန်းမရှိသေးပါ')
  } else {
    if (parseInt($('#total-bet-money').text(), 10) <= MYBALANCE) {
      let rows = $('.num-row')
      let nums = $('.num-parent .num')
      let arr = []
      for (let i = 1; i < rows.length - 1; i++) {
        if (rows[i].querySelector('.bet-edit').classList.contains('d-none')) {
          let scroll = rows[i].offsetTop - 125
          $('#slip-table').scrollTop(scroll)
          let number = rows[i].querySelector('.bet-number').value
          top_alert(number + ' ' + 'ဂဏန်းပြုပြင်မှုမပြီးသေးပါ')
          return
        } else {
          let number = rows[i].querySelector('.bet-number').value
          let amount = rows[i].querySelector('.bet-amount').value
          let limit = nums[parseInt(number, 10)].style.getPropertyValue('--limit');
          let limit_amount = nums[parseInt(number, 10)].style.getPropertyValue('--limit-amount');
          let to_bet = limit - limit_amount
          if (to_bet < amount) {
            top_alert(number + ' ' + 'သည်ထိုးငွေ' + to_bet + 'ကျပ်သာကျန်ပြီ')
            return
          } else {
            let obj = {
              number: number,
              amount: amount,
              times: rows[i].querySelector('.bet-times').innerText
            }
            arr.push(obj)
          }
        }
      }
      console.log(arr)
    } else {
      top_alert('လက်ကျန်ငွေမလုံလောက်ပါ')
    }
  }
})