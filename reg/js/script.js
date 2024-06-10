let reg = 'login';

$('.reg-div div').click(function () {
  $('.reg-div div').removeClass('bgs')
  $(this).addClass('bgs')
  $('form > div input').val('')
  $('form > div label').removeClass('labelup')
  $('form > div').removeClass('start-div end-div')
  if ($(this).text() == 'အကောင့်ဝင်ရန်') {
    reg = 'login';
    $('#demo-img').attr('src', '../../images/login.gif')
    $('#demo-txt').text('𝐉𝐉 မှပြန်လည်ကြိုဆိုပါသည်။')
    $('#submit').text('အကောင့်ဝင်မယ်')
    $('form').addClass('login-form')
    $('form > #phone-div').addClass('start-div')
    $('form > #password-div').addClass('end-div')
  } else {
    reg = 'signup';
    $('#demo-img').attr('src', '../../images/signup.gif')
    $('#demo-txt').text('𝐉𝐉 မှလှိုက်လှဲစွာကြိုဆိုပါသည်။')
    $('#submit').text('အကောင့်ဖွင့်မယ်')
    $('form').removeClass('login-form')
    $('form > #name-div').addClass('start-div')
    $('form > #ref-div').addClass('end-div')
  }
})

$('#submit').click(function () {
  let phone = $('#phone').val().trim()
  let password = $('#password').val().trim()
  if (reg == 'login') {
    if (phoneCheck(phone) == true) {
      if (passwordCheck(password) == true) {
        let data = {
          phone: phone,
          password: password,
        }
        console.log(data)
      } else {
        top_alert('မှန်ကန်မှုမရှိသောစကားဝှက်')
      }
    } else {
      top_alert('မှန်ကန်မှုမရှိသောဖုန်း')
    }
  } else {
    let name = $('#name').val().trim()
    let c_password = $('#confirm-password').val().trim()
    let ref = $('#ref').val().trim()
    if (nameCheck(name) == true) {
      if (phoneCheck(phone) == true) {
        if (passwordCheck(password) == true) {
          if (password == c_password) {
            if (refCheck(ref) == true) {
              let data = {
                name: name,
                phone: phone,
                password: password,
                ref: ref,
              }
              console.log(data)
            } else {
              top_alert('မှန်ကန်မှုမရှိသောမိတ်ဆက်ကုဒ်')
            }
          } else {
            top_alert('စကားဝှက်နှစ်ခုတူညီမှုမရှိပါ')
          }
        } else {
          top_alert('မှန်ကန်မှုမရှိသောစကားဝှက်')
        }
      } else {
        top_alert('မှန်ကန်မှုမရှိသောဖုန်း')
      }
    } else {
      top_alert('မှန်ကန်မှုမရှိသောအမည်')
    }
  }
})