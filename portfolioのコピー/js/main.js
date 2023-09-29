

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal__title");
  const modalDescription = document.getElementById("modal__description");
  const closeBtn = document.querySelector(".close__btn");

  const planDetails = {
    'Basic Plan': 'ミックス、マスタリング、音声修正を含めたベーシックなプランです。<br><br>  納期:1週間<br>修正回数:2回まで',
    'Pro Plan': 'ミックス、マスタリング、音声修正を含めた、ご納得頂けるまで何度でも修正可能なプランです。<br><br>納期:無期限<br>修正回数：無制限'
   
  };

  document.querySelectorAll(".details__btn").forEach((button) => {
    button.addEventListener("click", () => {
      const plan = button.getAttribute("data__plan");
      modalTitle.textContent = `${plan} 詳細`;
      modalDescription.innerHTML = planDetails[plan];
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});




$(document).ready(function(){
  $(".accordion").click(function(){
      $(this).toggleClass('active');
      var panel = $(this).next();
      if(panel.css('maxHeight') && panel.css('maxHeight') !== '0px'){
          panel.css('maxHeight', '0px');
      } else {
          panel.css('maxHeight', panel[0].scrollHeight + 'px');
      }
  });
});

$(document).ready(function() {
  $('.drawer').drawer();
});

  
  
  
  