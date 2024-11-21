document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    const welcomePage = document.getElementById("welcomePage");
    const over18Page = document.getElementById("over18Page");
    const under18Page = document.getElementById("under18Page");
    const createDogPage = document.getElementById("createDogPage");
    const dogResult = document.getElementById("dogResult");
  
    // Navigation
    document.getElementById("yesOver18").addEventListener("click", () => {
      switchPage(over18Page);
    });
  
    document.getElementById("noUnder18").addEventListener("click", () => {
      switchPage(under18Page);
    });
  
    document.getElementById("createDogBtnFromOver18").addEventListener("click", () => {
      switchPage(createDogPage);
    });
  
    document.getElementById("createDogBtnFromUnder18").addEventListener("click", () => {
      switchPage(createDogPage);
    });
  
    // Generate Dog
    document.getElementById("generateDog").addEventListener("click", () => {
      const breed = document.getElementById("breed").value;
      const color = document.getElementById("color").value;
      const personality = document.getElementById("personality").value;
      const name = document.getElementById("dogName").value.trim();
  
      if (name === "") {
        alert("Bitte gib einen Namen für deinen Hund ein!");
        return;
      }
  
      const dogImage = getDogImage(breed, color, personality);
      document.getElementById("dogImage").src = dogImage;
      document.getElementById("dogNameDisplay").textContent = name;
      dogResult.classList.remove("hidden");
  
      const stars = Math.ceil(Math.random() * 10);
      document.getElementById("bitchBaronRating").textContent = `Bitchbaron69 vergibt: ${stars} Sterne!`;
    });
  
    document.getElementById("newDogBtn").addEventListener("click", () => {
      location.reload();
    });
  
    function switchPage(pageToShow) {
      pages.forEach(page => page.classList.add("hidden"));
      pageToShow.classList.remove("hidden");
    }
  
    function getDogImage(breed, color, personality) {
      return `images/${breed}_${color}_${personality}.png`;
    }
  });
  