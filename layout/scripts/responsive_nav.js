class StickyNavigation {
    constructor() {
      this.currentId = null;
      this.currentTab = null;
      this.tabContainerHeight = 70;
      let self = this;
      $(".et-hero-tab").click(function (e) {
        // console.log(e);
        self.onTabClick(e, $(this));
      });
      $(window).scroll(() => {
        this.onScroll();
      });
      $(window).resize(() => {
        this.onResize();
      });
    }
  
    onTabClick(event, element) {
      // event.preventDefault();
      // let scrollTop =
      //   $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
      // $("html, body").animate({ scrollTop: scrollTop }, 600);
    }
  
    onScroll() {
      this.checkTabContainerPosition();
      this.findCurrentTabSelector();
    }
  
    onResize() {
      if (this.currentId) {
        this.setSliderCss();
      }
    }
  
    checkTabContainerPosition() {
      let offset =
        $(".et-hero-tabs").offset().top +
        $(".et-hero-tabs").height() -
        this.tabContainerHeight;
      if ($(window).scrollTop() > offset) {
        $(".et-hero-tabs-container").addClass("et-hero-tabs-container--top");
      } else {
        $(".et-hero-tabs-container").removeClass("et-hero-tabs-container--top");
      }
    }
  
    findCurrentTabSelector(element) {
      let newCurrentId;
      let newCurrentTab;
      let self = this;
      $(".et-hero-tab").each(function () {
        // if($(this).className)
        // console.log();
        if ($(this).attr("class").split(/\s+/).includes("deactivate")) return;
        let id = $(this).attr("href");
  
        let offsetTop = $(id).offset().top - self.tabContainerHeight;
        let offsetBottom =
          $(id).offset().top + $(id).height() - self.tabContainerHeight;
        if (
          $(window).scrollTop() > offsetTop &&
          $(window).scrollTop() < offsetBottom
        ) {
          newCurrentId = id;
          newCurrentTab = $(this);
        }
      });
      if (this.currentId != newCurrentId || this.currentId === null) {
        this.currentId = newCurrentId;
        this.currentTab = newCurrentTab;
        this.setSliderCss();
      }
    }
  
    setSliderCss() {
      let width = 0;
      let left = 0;
      if (this.currentTab) {
        width = this.currentTab.css("width");
        left = this.currentTab.offset().left;
      }
      $(".et-hero-tab-slider").css("width", width);
      $(".et-hero-tab-slider").css("left", left);
    }
  }
  
  new StickyNavigation();
  
  const resNavLabel = document.querySelector("#nav-check");
  const navLinks = [...document.querySelectorAll(".nav-links>li>a")];
  const navLinksDiv = document.querySelector(".nav-links");
  const navLinksClassName = navLinksDiv.className;
  
  navLinks.splice(0, 1);
  
  navLinks.forEach((e) => {
    e.addEventListener("click", (e) => {
      navLinksDiv.className = navLinksClassName;
    });
  });
  // console.log(resNavLabel);
  resNavLabel.addEventListener("click", (e) => {
    console.log(e.target.checked);
    if (e.target.checked) navLinksDiv.className += " nav-vis ";
    else navLinksDiv.className = navLinksClassName;
  });
  
  // navLinks.slice(0, 1);
  
  // function abc(e) {
  //   console.log();
  //   if (e.target.value) navLinks.className = navLinksClassName + " nav-vis ";
  //   else navLinks.className = navLinksClassName;
  //   console.log("s");
  // }