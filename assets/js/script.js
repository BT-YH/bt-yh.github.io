function stopclick(event) {
  // Don't propogate the event to the document
  if (event.stopPropagation) {
    event.stopPropagation(); // W3C model
  } else {
    event.cancelBubble = true; // IE model
  }
}

function pow(a, b) {
  return a ** b;
}

function changeColor() {
  // Choose random color
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var opp_red = 255 - red;
  var opp_green = 255 - green;
  var opp_blue = 255 - blue;
  // color string
  var color0 = "rgb(" + red + "," + green + "," + blue + ")";
  var color1 = "rgb(" + opp_red + "," + opp_green + "," + opp_blue + ")";
  // console.log("Background color:", color0);
  // console.log("Text color:", color1);
  // Set the background color
  document
    .getElementById("colorChanging")
    .style.setProperty("background-color", color0, "important");
  document
    .getElementById("colorChanging-code")
    .style.setProperty("color", color1, "important");
  // Set the text color
  var textColor = getContrastColor(red, green, blue);
  var elements = document.getElementsByClassName("textColorChanging");
  elements[0].style.color = textColor;

  document.documentElement.style.setProperty("--theme-color", color0);
  document.documentElement.style.setProperty("--opposite-color", color1);
  sessionStorage.setItem("themeColor", color0);
  sessionStorage.setItem("oppositeColor", color1);
  sessionStorage.setItem("textColor", textColor);
}

// Function to apply the saved color on page load
function applySavedColor() {
  const themeColor = sessionStorage.getItem("themeColor");
  const oppositeColor = sessionStorage.getItem("oppositeColor");
  const textColor = sessionStorage.getItem("textColor");

  document.documentElement.style.setProperty("--theme-color", themeColor);
  document.documentElement.style.setProperty("--opposite-color", oppositeColor);

  if (themeColor) {
    document
      .getElementById("colorChanging")
      .style.setProperty("background-color", themeColor, "important");
  }
  if (oppositeColor) {
    document
      .getElementById("colorChanging-code")
      .style.setProperty("color", oppositeColor, "important");
  }
  if (textColor) {
    var elements = document.getElementsByClassName("textColorChanging");
    elements[0].style.color = textColor;
  }
}

function applySavedFont() {
  const serifFont = sessionStorage.getItem("serifOption");
  const sansSerifFont = sessionStorage.getItem("sansSerifOption");
  const displayFont = sessionStorage.getItem("displayOption");

  if (serifFont) {
    var serifElements = document.getElementsByClassName("serif");
    for (var i = 0; i < serifElements.length; i++) {
      serifElements[i].style.fontFamily = serifFont;
    }
  }
  if (sansSerifFont) {
    var sansSerifElements = document.getElementsByClassName("sansSerif");
    for (var i = 0; i < sansSerifElements.length; i++) {
      sansSerifElements[i].style.fontFamily = sansSerifFont;
    }
  }
  if (displayFont) {
    document.getElementById("display").style.fontFamily = displayFont;
  }
}

function getContrastColor(red, green, blue) {
  var L1 =
    0.2126 * pow(red / 255, 2.2) +
    0.7152 * pow(green / 255, 2.2) +
    0.0722 * pow(blue / 255, 2.2);
  var contrastRatio = 0;
  if (L1 > 0) {
    contrastRatio = parseInt(String((L1 + 0.05) / 0.05));
  } else {
    contrastRatio = parseInt(String(0.05 / (L1 + 0.05)));
  }
  // If contrast is more than 5, return black
  if (contrastRatio > 5) {
    return "#000000";
  } else {
    // if not, return white
    return "#FFFFFF";
  }
}

function changeFont() {
  // serif
  var serifOptions = [
    "Merriweather",
    "Roboto Slab",
    "Libre Caslon Text",
    "Slabo 27px",
    "Libre Caslon Display",
    "PT Serif",
    "Lora",
    "Playfair Display",
    "Noto Serif",
    "Grenze",
    "Crimson Text",
    "Libre Baskerville",
    "Bree Serif",
    "Source Serif Pro",
    "Arvo",
    "Bitter",
    "EB Garamond",
    "Domine",
    "Vollkorn",
    "Crete Round",
  ];
  var serifElements = document.getElementsByClassName("serif");
  const serifFont =
    serifOptions[Math.floor(Math.random() * serifOptions.length)];
  for (var i = 0; i < serifElements.length; i++) {
    serifElements[i].style.fontFamily = serifFont;
  }

  // sans serif
  var sansSerifOptions = [
    "Blinker",
    "Lato",
    "Lexend Exa",
    "Montserrat",
    "Muli",
    "Noto Sans",
    "Nunito",
    "Open Sans",
    "Open Sans Condensed",
    "Oswald",
    "PT Sans",
    "Poppins",
    "Raleway",
    "Red Hat Display",
    "Red Hat Text",
    "Roboto",
    "Roboto Condensed",
    "Source Sans Pro",
    "Titillium Web",
    "Ubuntu",
  ];
  var sansSerifElements = document.getElementsByClassName("sansSerif");
  const sansSerifFont =
    sansSerifOptions[Math.floor(Math.random() * sansSerifOptions.length)];
  for (var i = 0; i < sansSerifElements.length; i++) {
    sansSerifElements[i].style.fontFamily = sansSerifFont;
  }

  // Display
  var displayOptions = [
    "Abril Fatface",
    "Alfas Slab One",
    "Baloo Bhaina",
    "Bangers",
    "Bowlby One SC",
    "Bungee",
    "Cabin Sketch",
    "Emilys Candy",
    "Faster One",
    "Lobster",
    "Monoton",
    "Mountains of Christmas",
    "Nixie One",
    "Press Start 2P",
    "Righteous",
    "Rye",
    "Saira Stencil One",
    "Shojumaru",
    "Special Elite",
    "Titan One",
  ];
  const displayFont =
    displayOptions[Math.floor(Math.random() * displayOptions.length)];
  document.getElementById("display").style.fontFamily = displayFont;

  sessionStorage.setItem("sansSerifOption", sansSerifFont);
  sessionStorage.setItem("serifOption", serifFont);
  sessionStorage.setItem("displayOption", displayFont);
}
