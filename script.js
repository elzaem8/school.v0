javascript
function openPage(subject) {
  var content = document.getElementById("content");
  
  function searchWeb() {
    const query = document.getElementById('search').value;
    if (query) {
        window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');
    }
}

// تحديث الصفحة كل 5 دقائق (300000 مللي ثانية)
setInterval(() => {
    location.reload();
}, 900000); // يمكنك تغيير المدة هنا

}
alert("مرحبا بك في موقعنا هنا تستطيع التواصل مع المدرسين لجميع المراحل التعليمية.")