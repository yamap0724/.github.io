document.addEventListener("DOMContentLoaded", function () {
  // 画像が表示されるように、各sectionにanimate-visibleクラスを追加します
  document.querySelectorAll('.animate').forEach(function (element) {
    element.classList.add('animate-visible');
  });
});
