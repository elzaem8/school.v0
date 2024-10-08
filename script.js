javascript
function openPage(subject) {
  var content = document.getElementById("content");
  
  if (subject === 'math') {
    content.innerHTML = `
      <h2>معلومات مادة الرياضيات</h2>
      <p>اسم المدرس: محمد أحمد</p>
      <p>تخصص المدرس: الرياضيات</p>
      <p>خبرة المدرس: 10 سنوات</p>
      <p>أهمية المادة: تعتبر من أهم المواد التعليمية في الحياة اليومية</p>
      <p>أماكن عمل المدرس: المدرسة الثانوية العامة</p>
      <p>للتواصل مع المدرس عبر الواتساب: 0123456789</p>
    `;
  } else if (subject === 'science') {
    // إضافة معلومات مادة العلوم هنا
  
  } else if (subject === 'social') {
    // إضافة معلومات مادة الدراسات هنا
  
  } else if (subject === 'arabic') {
    // إضافة معلومات مادة اللغة العربية هنا
  
  } else if (subject === 'english') {
    // إضافة معلومات مادة اللغة الإنجليزية هنا
  }
}
