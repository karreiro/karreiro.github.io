(function () {
  var showTooltipTimeout, opacityTimeout, contentTimeout;

  var ENABLED_CSS_CLASS = "enabled";
  var DELAY_TO_SHOW = 750;
  var OPACITY_DURATION = 100;

  var tooltip = document.querySelector(".preview.tooltip");
  var tooltipContent = document.querySelector(".preview.tooltip-content");
  var tooltipIframe = document.querySelector(".preview.tooltip-iframe");
  var linkElements = document.querySelectorAll(".wiki a");

  function showTooltip() {
    setTimeout(function () {
      tooltip.classList.add(ENABLED_CSS_CLASS);
    }, 1);
  }

  function hideTooltip() {
    function clearTooltipContent() {
      contentTimeout = setTimeout(function () {
        tooltipContent.innerHTML = "";
      }, OPACITY_DURATION + 1);
    }

    clearTimeout(showTooltipTimeout);

    opacityTimeout = setTimeout(function () {
      tooltip.classList.remove(ENABLED_CSS_CLASS);
      clearTooltipContent();
    }, OPACITY_DURATION);
  }

  function getTooltipDocument() {
    return tooltipIframe.contentWindow.document;
  }

  function getTooltipIframeTitle() {
    return getTooltipDocument().querySelector("h1").textContent;
  }

  function getTooltipIframeContent() {
    var content = getTooltipDocument().querySelector(".content");

    content.querySelectorAll("img").forEach(function (img) {
      var rawSrc = img.getAttribute("src");
      var prefix = tooltipIframe.src.replace(/\/$/, "");
      img.src = prefix + "/" + rawSrc;
    });

    return content.innerHTML.trim();
  }

  function updateTooltipContent() {
    var html = "";
    html += '<div class="title">' + getTooltipIframeTitle() + "</div>";
    html += getTooltipIframeContent() || "Empty page.";
    tooltipContent.innerHTML = html;
  }

  function setTooltipContent(event) {
    tooltipIframe.src = event.target.href;
    tooltipIframe.onload = function () {
      updateTooltipContent();
      showTooltip();
    };
  }

  function setTooltipPosition(event) {
    var link = event.target;
    var linkRect = link.getBoundingClientRect();
    var visibleHeight = window.innerHeight;
    var tooltipHeight = 225;
    var isVisiableBelow =
      linkRect.y + linkRect.height + tooltipHeight < visibleHeight;

    if (isVisiableBelow) {
      tooltip.style.top = linkRect.y + linkRect.height + 5 + "px";
    } else {
      tooltip.style.top = linkRect.y - tooltipHeight - 5 + "px";
    }
    tooltip.style.left = linkRect.x + "px";
  }

  function enableTooltip(event) {
    if (event.target.host !== window.location.host) {
      return;
    }

    clearTimeout(showTooltipTimeout);

    showTooltipTimeout = setTimeout(function () {
      clearHideTooltipTimeouts();
      setTooltipPosition(event);
      setTooltipContent(event);
    }, DELAY_TO_SHOW);
  }

  function clearHideTooltipTimeouts() {
    clearTimeout(opacityTimeout);
    clearTimeout(contentTimeout);
  }

  function setupLinkElement(linkElement) {
    linkElement.addEventListener("mouseleave", hideTooltip);
    linkElement.addEventListener("mouseenter", enableTooltip);
  }

  function setupTooltipElement() {
    tooltip.addEventListener("mouseleave", hideTooltip);
  }

  function setupLinkElements() {
    linkElements.forEach(setupLinkElement);
  }

  setupLinkElements();
  setupTooltipElement();
})();
