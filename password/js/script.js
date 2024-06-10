$('#change-password').click(function () {
  let old = $('#old-password').val().trim()
  let newp = $('#new-password').val().trim()
  let rep = $('#repeat-password').val().trim()
  if (passwordCheck(old) == true && passwordCheck(newp) == true && passwordCheck(rep) == true) {
    if (newp == rep) {
      let data = {
        op: old,
        np: newp,
        rp: rep,
      }
      console.log(data)
    } else {
      top_alert('စကားဝှက်အသစ်နှစ်ခုတူညီအောင်ထည့်ပါ')
    }
  } else {
    top_alert('မှန်ကန်မှုမရှိသောစကားဝှက်')
  }
})