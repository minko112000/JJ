let login = true

const dreams = [
  {
    title: 'ထီပေါက်သည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['09', '83'],
    threed: ['136', '986'],
  },
  {
    title: 'ချီးပုံကို အိမ်မက်မြင်မက်မူ',
    twod: ['94', '31', '37'],
    threed: ['494', '420', '955'],
  },
  {
    title: 'ထမင်းစားနေသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['36', '67', '73', '83', '90'],
    threed: ['654'],
  },
  {
    title: 'ဂန္ဓမာပန်းကို အိမ်မက်မြင်မက်မူ',
    twod: ['36', '35', '56'],
    threed: ['356', '535', '656'],
  },
  {
    title: 'ဆံပင်ရှည်လာသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['36', '98', '05'],
    threed: ['520'],
  },
  {
    title: 'သုဘရာဇာကို အိမ်မက်မြင်မက်မူ',
    twod: ['44', '45', '46'],
    threed: ['446', '445', '465'],
  },
  {
    title: 'ကားပျောက်သည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['14', '75'],
    threed: ['146', '476', '760'],
  },
  {
    title: 'ခွေးကချီးစားနေသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['42', '45', '46'],
    threed: ['245', '246', '541'],
  },
  {
    title: 'စကားဝါပန်းကို အိမ်မက်မြင်မက်မူ',
    twod: ['86', '87', '79'],
    threed: ['798', '886', '662'],
  },
  {
    title: 'ချီးစားနေသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['32', '67', '65'],
    threed: ['525', '726', '556'],
  },
  {
    title: 'အိမ်သာတွင်းပြည့်နေသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['19', '56', '57'],
    threed: ['197', '579', '189'],
  },
  {
    title: 'ပန်းခူးရသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['77'],
    threed: ['296', '782', '735'],
  },
  {
    title: 'ဆံပင်လက်ခံရရှိသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['87', '91', '69', '73'],
    threed: [],
  },
  {
    title: 'ရေတံခွန်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['19', '22', '26'],
    threed: ['226', '219', '269'],
  },
  {
    title: 'ကိုယ်သေနေသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['07', '04'],
    threed: [],
  },
  {
    title: 'ဖန်ခွက်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['08', '80'],
    threed: ['264', '577'],
  },
  {
    title: 'လူသားစားနေသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['41', '42'],
    threed: [],
  },
  {
    title: 'ငါး သို့မဟုတ် ငါးဖမ်းနေသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['88', '28', '78', '58'],
    threed: ['788'],
  },
  {
    title: 'ဗိုက်မှာသေနတ်ပြစ်ခံရသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['17', '72', '08'],
    threed: ['758', '465'],
  },
  {
    title: 'မိုးရေကို အိမ်မက်မြင်မက်မူ',
    twod: ['29', '21', '26'],
    threed: ['269', '221', '662'],
  },
  {
    title: 'တံခါးပေါက်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['24', '28'],
    threed: ['124', '128', '248'],
  },
  {
    title: 'ရေသောက်နေသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['22', '29'],
    threed: ['269', '229', '209', '916'],
  },
  {
    title: 'အပြေးပြိုင်ပြီးအနိုင်ရသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['43', '05', '27', '61', '26', '73', '21'],
    threed: ['269', '229', '209', '916'],
  },
  {
    title: 'ကြောင်သေနေသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['57', '51', '59'],
    threed: ['968', '139', '425'],
  },
  {
    title: 'လူနာများကို အိမ်မက်မြင်မက်မူ',
    twod: ['16', '91', '84', '32', '25', '46', '88'],
    threed: [],
  },
  {
    title: 'သရဲအိမ်မှာဆော့ကစားနေသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['98', '80', '90'],
    threed: ['980', '989', '098'],
  },
  {
    title: 'ရည်းစားဟောင်းမင်္ဂလာဆောင်သည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['00', '26', '77'],
    threed: ['556'],
  },
  {
    title: 'မျက်လုံးမှသွေးထွက်နေသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['05', '44', '46', '52'],
    threed: ['634'],
  },
  {
    title: 'ကြက်သားစားနေသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['19', '09', '29'],
    threed: ['209', '719', '289'],
  },
  {
    title: 'မြေကြီးစားနေသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['46', '64', '53'],
    threed: ['480', '239'],
  },
  {
    title: 'ဆင်လမ်းလျှောက်သည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['43', '52', '79', '84'],
    threed: ['428', '561'],
  },
  {
    title: 'အဆိပ်သောက်သုံးသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['01', '08', '14', '70', '92'],
    threed: ['296'],
  },
  {
    title: 'ရေကြီးနေသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['17', '20', '27', '60'],
    threed: [],
  },
  {
    title: 'ကလေးပွေ့ချီရသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['17', '13', '33'],
    threed: ['377', '311', '513'],
  },
  {
    title: 'အိပ်ပျောက်သည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['27', '36', '85', '06'],
    threed: ['858', '281'],
  },
  {
    title: 'ခေါင်းလျှော်နေသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['43', '61', '78'],
    threed: ['255', '783', '620'],
  },
  {
    title: 'ရေထဲပြုတ်ကျသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['35', '38', '82'],
    threed: ['722', '349'],
  },
  {
    title: 'ပျားရည်စားရသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['38', '33'],
    threed: [],
  },
  {
    title: 'စံပယ်ပန်းကို အိမ်မက်မြင်မက်မူ',
    twod: ['11', '14', '26'],
    threed: ['226', '112', '261'],
  },
  {
    title: 'မိကျောင်းများကို အိမ်မက်မြင်မက်မူ',
    twod: ['23', '26', '33'],
    threed: ['476'],
  },
  {
    title: 'အိမ်သာထဲပြုတ်ကျသည်ကို အိမ်မက်မြင်မက်မူ',
    twod: ['06', '68', '02'],
    threed: ['026', '832', '816'],
  },
]

const indexhtml = 'index.html'

const currentUrl = window.location.origin + '/'

const  reverseString = str => {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

const results2D = e => {
  loading('../images/brand.png', 1)
  e.html('')
  $.ajax({
    url: 'https://backend.shwemyanmar2d.com/api/lv/twod-result',
    type: 'GET',
    data: "",
    success: function (r) {
      let results = r.data
      for (let i = 0; i < results.length; i ++) {
        e[0].innerHTML += `
            <div class="result-box b mt-3 shadow-sm bgs">
              <h6 class="bgp p-3 text-center c">${results[i].date}</h6>
              <div class="d-flex live-session-box mt-2 bb c">
              <small class="c py-2">11:00 AM</small>
              <div class="c">
                <span class="c">Set</span>
                <span class="c">${results[i].set_1100}</span>
              </div>
              <div class="c">
                <span class="c">Value</span>
                <span class="c">${results[i].val_1100}</span>
              </div>
              <div class="c">
                <span class="c">2D</span>
                <span class="c text-warning">${results[i].result_1100}</span>
              </div>
            </div>
              <div class="d-flex live-session-box mt-3 bb c">
              <small class="c py-2">12:00 PM</small>
              <div class="c">
                <span class="c">Set</span>
                <span class="c">${results[i].set_1200}</span>
              </div>
              <div class="c">
                <span class="c">Value</span>
                <span class="c">${results[i].val_1200}</span>
              </div>
              <div class="c">
                <span class="c">2D</span>
                <span class="c text-warning">${results[i].result_1200}</span>
              </div>
            </div>
              <div class="d-flex live-session-box mt-3 bb c">
              <small class="c py-2">03:00 PM</small>
              <div class="c">
                <span class="c">Set</span>
                <span class="c">${results[i].set_300}</span>
              </div>
              <div class="c">
                <span class="c">Value</span>
                <span class="c">${results[i].val_300}</span>
              </div>
              <div class="c">
                <span class="c">2D</span>
                <span class="c text-warning">${results[i].result_300}</span>
              </div>
            </div>
              <div class="d-flex live-session-box mt-3 c">
              <small class="c py-2">04:30 PM</small>
              <div class="c">
                <span class="c">Set</span>
                <span class="c">${results[i].set_430}</span>
              </div>
              <div class="c">
                <span class="c">Value</span>
                <span class="c">${results[i].val_430}</span>
              </div>
              <div class="c">
                <span class="c">2D</span>
                <span class="c text-warning">${results[i].result_430}</span>
              </div>
            </div>
            </div>
        `
      }
      loading(0)
    }
  })
}

const result3D = e => {
  loading('../images/brand.png', 1)
  e.html('')
  $.ajax({
    url: 'https://api.thai2d3dgame.com/api/result/GetList3dResult?searchKey=&pageNumber=1&rowsOfPage=40',
    type: 'GET',
    data: "",
    success: function (r) {
      let result = r.results
      for (let i = 0; i < result.length; i ++) {
        e[0].innerHTML += (`
                <div class="bgs spb b tsh live-session-box shadow-sm mt-4 text-light c">
                  <div class="c">
                    <span class="c">Date</span>
                    <span class="c">${result[i].for_date_time_Str}</span>
                  </div>
                  <div class="c">
                    <span class="c">3D</span>
                    <span class="c text-warning">${result[i].number}</span>
                  </div>
                </div>
        `)
      }
      loading(0)
    }
  })
}

const live = () => {
  $.ajax({
    url: 'https://luke.2dboss.com/api/luke/twod-result-live',
    type: 'GET',
    data: "",
    success: function (r) {
      if (r.message == 'success') {
        $('#current-date').text(r.data.current_date + ' ' + r.data.current_time)
        $('#live-num').text(r.data.live)
        $('#live-set').text(r.data.live_set)
        $('#live-val').text(r.data.live_val)
        $('.set_1100').text(r.data.set_1100)
        $('.val_1100').text(r.data.val_1100)
        $('.result_1100').text(r.data.result_1100)
        $('.set_1200').text(r.data.set_1200)
        $('.val_1200').text(r.data.val_1200)
        $('.result_1200').text(r.data.result_1200)
        $('.set_300').text(r.data.set_300)
        $('.val_300').text(r.data.val_300)
        $('.result_300').text(r.data.result_300)
        $('.set_430').text(r.data.set_430)
        $('.val_430').text(r.data.val_430)
        $('.result_430').text(r.data.result_430)
      }
    }
  })
}

const loading = (url, l) => {
  if (l == 1) {
    $('#container').prepend(`
      <div class="c loading">
        <div id="loading" class="c"><img class="p-2 bgp" src="${url}"></div>
      </div>
    `)
  } else {
    $('.loading').remove()
  }
}

const top_alert = (content, br = '#bb2124') => {
  $('#container').css({
    opacity: .5
  })
  let sts
  (br == '#bb2124')? sts = 'error' : sts = 'success';
  Swal.fire({
    backdrop: false,
    position: 'center',
    icon: sts,
    text: content,
    color: br,
    showConfirmButton: false,
    timer: 3000
  })
  setTimeout(function() {
    $('#container').css({
      opacity: 1
    })
  }, 3000);
}

const hidePhone = phone => {
  return phone.slice(0, 6) + '...'
}

const nameCheck = name => {
  if (name.length > 3) {
    return name.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/) ? false : true;
  } else {
    return false
  }
}

const phoneCheck = phone => {
  if (phone.length == 11 || phone.length == 10) {
    return true
  } else {
    return false
  }
}

const passwordCheck = password => {
  if (password.length >= 8) {
    return true
  } else {
    return false
  }
}

const refCheck = ref => {
  if (ref.length == 0 || ref.length == 9) {
    return true
  } else {
    return false
  }
}

$('.tab-icon').click(function () {
  if (login == false) {
    location.href = currentUrl + 'reg/' + indexhtml
  } else {
    let id = $(this).attr('id')
    $('.tab-icon').addClass('opacity-50')
    $(this).removeClass('opacity-50')
    $('.page').addClass('d-none')
    $(`#${id}-page`).removeClass('d-none')
  }
})

$('.fa-copy').click(function () {
  $(this).removeClass('fa-copy')
  $(this).addClass('fa-check-double')
  $(this).removeClass('text-warning')
  $(this).css('color', '#22e622')
  $('.fa-check-double').css('pointerEvents', 'none')
  setTimeout(() => {
    $('.fa-check-double').addClass('fa-copy')
    $('.fa-copy').removeClass('fa-check-double')
    $(this).addClass('text-warning')
    $('.fa-copy').css('pointerEvents', 'auto')
  }, 3000);
})

$('.back').click(function () {
  history.back()
})

$('form > div input').keyup(function () {
  if ($(this).val().trim() != '') {
    $(this).parent().children('label').addClass('labelup')
  } else {
    $(this).parent().children('label').removeClass('labelup')
  }
})

$('.eye').click(function () {
  if ($(this).hasClass('fa-eye')) {
    $(this).removeClass('fa-eye')
    $(this).addClass('fa-eye-slash')
    $(this).parent().children('input').attr('type', 'text')
  } else {
    $(this).addClass('fa-eye')
    $(this).removeClass('fa-eye-slash')
    $(this).parent().children('input').attr('type', 'password')
  }
})

$('.search-bar input').keyup(function () {
  let value = $(this).val().trim()
  if (value != '') {
    $(this).parent().children('i').removeClass('fa-search')
    $(this).parent().children('i').addClass('fa-xmark')
  } else {
    $(this).parent().children('i').addClass('fa-search')
    $(this).parent().children('i').removeClass('fa-xmark')
  }
})

$('.search-bar i').click(function () {
  if ($(this).hasClass('fa-xmark')) {
    $(this).parent().children('i').addClass('fa-search')
    $(this).parent().children('i').removeClass('fa-xmark')
    $(this).parent().children('input').val('')
  }
})