import OverlayTabNavigation from "./OverlayTabNavigation"

class OverlayOpener {
  constructor(e, image) {
    this.e = e
    this.image = image
    // console.log("OverlayOpener " + e.target.nodeName + ", " + e.type + ", " + e.code)
  }

  openOverlay() {
    document.body.classList.add("no-scroll")

    let overlayTabNav = new OverlayTabNavigation()
    overlayTabNav.SetTabIndexUnderOverlay("-1", null)

    var elObj

    switch (this.e.target.nodeName) {
      case "A":
      case "BUTTON": //need to get the first child, the DIV
        elObj = this.e.target.children[0]
        break
      default:
        elObj = this.e.target
        break
    }
    if (elObj.children.length == 0) {
      elObj = this.e.target.parentElement
    }

    var imgElem = elObj.children[0]

    var overlayImageDiv = document.querySelector("#lightbox__photo-overlay__image")
    let overlay = document.querySelector(".lightbox__photo-overlay")

    const photoCaptionBoxText = document.querySelector(".album-photos__photo-caption")
    const photoCaptionBox = document.querySelector(".album-photos__photo-caption-box")

    if (imgElem) {
      overlayImageDiv.style = "height:" + window.innerHeight + "px; width:" + window.innerWidth + "px;"

      if (photoCaptionBoxText) {
        if (this.image.caption.length == 0) {
          // swapCaptionBoxBtnIco(TITLEBTNLEFT)
          photoCaptionBox.classList.add("album-photos__photo-caption-box--is-hidden")
          photoCaptionBoxText.innerText = ""
        } else {
          photoCaptionBox.classList.remove("album-photos__photo-caption-box--is-hidden")
          photoCaptionBoxText.innerText = this.image.caption
        }
      }

      let files = this.parseFileName(imgElem.src)

      let srcset = imgElem.dataset["srcset"]
      let orientation = imgElem.dataset["orientation"]
      let portraitsizes = imgElem.dataset["portraitsizes"]
      let srcsetString = ""
      var descriptor
      var sizes = []

      if (srcset) {
        let srcsetArray = srcset.split(";")
        const iterator = srcsetArray.keys()

        if (portraitsizes) {
          let portraitsizesArray = portraitsizes.split(";")
          for (var i = 0; i < portraitsizesArray.length; i++) {
            descriptor = portraitsizesArray[i].split("=")
            sizes.push("(max-height: " + descriptor[0] + "px) " + descriptor[1] + "px")
          }
        }

        for (const key of iterator) {
          let sizesArray = srcsetArray[key].split("=")
          descriptor = sizesArray[1].split("x")
          let srcsetFilename = ""

          srcsetFilename = "../" + files.filter(file => file.id == sizesArray[0])[0].filename

          if (srcsetString.length) {
            srcsetString += ", " + srcsetFilename + " " + descriptor[0] + "w"
          } else {
            srcsetString = srcsetFilename + " " + descriptor[0] + "w"
          }

          if (orientation != "portrait") {
            sizes.push("(max-width: " + descriptor[0] + "px) " + descriptor[0] + "px")
          }
        }

        var filename = imgElem.src.substring(imgElem.src.lastIndexOf("../assets/"))

        overlayImageDiv.innerHTML = `
      <div class='lightbox__photo-overlay--spinner' style='position:absolute;z-index:-1;'></div>
      <div class='lightbox__photo-overlay__selectedImg'>
      <img  src="${filename}" style="max-height:${window.innerHeight}px"
        alt="${this.image.alt}" srcset="${srcsetString}" sizes="${sizes.toString()}" />
        </div>
      `
      }

      overlay.classList.add("lightbox__photo-overlay--visible")
    }
  }

  parseFileName(fqFilename) {
    var filename = fqFilename.substring(fqFilename.lastIndexOf("assets/"))
    let files = []

    if (filename.lastIndexOf("-thumbnail") > 0) {
      files = [
        { id: "213", filename: filename.replace("thumbnail", "213") },
        { id: "240", filename: filename.replace("thumbnail", "240") },
        { id: "262", filename: filename.replace("thumbnail", "262") },
        { id: "270", filename: filename.replace("thumbnail", "270") },
        { id: "288", filename: filename.replace("thumbnail", "288") },
        { id: "295", filename: filename.replace("thumbnail", "295") },
        { id: "320", filename: filename.replace("thumbnail", "320") },
        { id: "324", filename: filename.replace("thumbnail", "324") },
        { id: "360", filename: filename.replace("thumbnail", "360") },
        { id: "393", filename: filename.replace("thumbnail", "393") },
        { id: "405", filename: filename.replace("thumbnail", "405") },
        { id: "432", filename: filename.replace("thumbnail", "432") },
        { id: "448", filename: filename.replace("thumbnail", "448") },
        { id: "456", filename: filename.replace("thumbnail", "456") },
        { id: "504", filename: filename.replace("thumbnail", "504") },
        { id: "512", filename: filename.replace("thumbnail", "512") },
        { id: "576", filename: filename.replace("thumbnail", "576") },
        { id: "597", filename: filename.replace("thumbnail", "597") },
        { id: "608", filename: filename.replace("thumbnail", "608") },
        { id: "640", filename: filename.replace("thumbnail", "640") },
        { id: "672", filename: filename.replace("thumbnail", "672") },
        { id: "720", filename: filename.replace("thumbnail", "720") },
        { id: "768", filename: filename.replace("thumbnail", "768") },
        { id: "787", filename: filename.replace("thumbnail", "787") },
        { id: "860", filename: filename.replace("thumbnail", "860") },
        { id: "885", filename: filename.replace("thumbnail", "885") },
        { id: "896", filename: filename.replace("thumbnail", "896") },
        { id: "912", filename: filename.replace("thumbnail", "912") },
        { id: "932", filename: filename.replace("thumbnail", "932") },
        { id: "960", filename: filename.replace("thumbnail", "960") },
        { id: "961", filename: filename.replace("thumbnail", "961") },
        { id: "968", filename: filename.replace("thumbnail", "968") },
        { id: "1026", filename: filename.replace("thumbnail", "1026") },
        { id: "1067", filename: filename.replace("thumbnail", "1067") },
        { id: "1082", filename: filename.replace("thumbnail", "1082") },
        { id: "1180", filename: filename.replace("thumbnail", "1180") },
        { id: "1200", filename: filename.replace("thumbnail", "1200") },
        { id: "1235", filename: filename.replace("thumbnail", "1235") },
        { id: "1280", filename: filename.replace("thumbnail", "1280") },
        { id: "1290", filename: filename.replace("thumbnail", "1290") },
        { id: "1368", filename: filename.replace("thumbnail", "1368") },
        { id: "1389", filename: filename.replace("thumbnail", "1389") },
        { id: "1413", filename: filename.replace("thumbnail", "1413") },
        { id: "1440", filename: filename.replace("thumbnail", "1440") },
        { id: "1442", filename: filename.replace("thumbnail", "1442") },
        { id: "1586", filename: filename.replace("thumbnail", "1586") },
        { id: "1590", filename: filename.replace("thumbnail", "1590") },
        { id: "1600", filename: filename.replace("thumbnail", "1600") },
        { id: "1707", filename: filename.replace("thumbnail", "1707") },
        { id: "1784", filename: filename.replace("thumbnail", "1784") },
        { id: "1852", filename: filename.replace("thumbnail", "1852") },
        { id: "1864", filename: filename.replace("thumbnail", "1864") },
        { id: "1920", filename: filename.replace("thumbnail", "1920") },
        { id: "1973", filename: filename.replace("thumbnail", "1973") },
        { id: "2097", filename: filename.replace("thumbnail", "2097") },
        { id: "2120", filename: filename.replace("thumbnail", "2120") },
        { id: "2160", filename: filename.replace("thumbnail", "2160") },
        { id: "2220", filename: filename.replace("thumbnail", "2220") },
        { id: "2379", filename: filename.replace("thumbnail", "2379") },
        { id: "2430", filename: filename.replace("thumbnail", "2430") },
        { id: "2560", filename: filename.replace("thumbnail", "2560") },
        { id: "2796", filename: filename.replace("thumbnail", "2796") },
        { id: "2880", filename: filename.replace("thumbnail", "2880") },
        { id: "2960", filename: filename.replace("thumbnail", "2960") },
        { id: "3060", filename: filename.replace("thumbnail", "3060") },
        { id: "3240", filename: filename.replace("thumbnail", "3240") },
        { id: "3540", filename: filename.replace("thumbnail", "3540") },
        { id: "3840", filename: filename.replace("thumbnail", "3840") }
      ]
    } else if (filename.lastIndexOf("-test") > 0) {
      files = [
        { id: "213", filename: filename.replace("test", "test-213") },
        { id: "240", filename: filename.replace("test", "test-240") },
        { id: "262", filename: filename.replace("test", "test-262") },
        { id: "270", filename: filename.replace("test", "test-270") },
        { id: "288", filename: filename.replace("test", "test-288") },
        { id: "295", filename: filename.replace("test", "test-295") },
        { id: "320", filename: filename.replace("test", "test-320") },
        { id: "324", filename: filename.replace("test", "test-324") },
        { id: "330", filename: filename },
        { id: "360", filename: filename.replace("test", "test-360") },
        { id: "393", filename: filename.replace("test", "test-393") },
        { id: "405", filename: filename.replace("test", "test-405") },
        { id: "432", filename: filename.replace("test", "test-432") },
        { id: "448", filename: filename.replace("test", "test-448") },
        { id: "456", filename: filename.replace("test", "test-456") },
        { id: "504", filename: filename.replace("test", "test-504") },
        { id: "512", filename: filename.replace("test", "test-512") },
        { id: "552", filename: filename.replace("test", "test-552") },
        { id: "576", filename: filename.replace("test", "test-576") },
        { id: "597", filename: filename.replace("test", "test-597") },
        { id: "608", filename: filename.replace("test", "test-608") },
        { id: "640", filename: filename.replace("test", "test-640") },
        { id: "672", filename: filename.replace("test", "test-672") },
        { id: "700", filename: filename.replace("test", "test-700") },
        { id: "720", filename: filename.replace("test", "test-720") },
        { id: "768", filename: filename.replace("test", "test-768") },
        { id: "787", filename: filename.replace("test", "test-787") },
        { id: "828", filename: filename.replace("test", "test-828") },
        { id: "860", filename: filename.replace("test", "test-860") },
        { id: "885", filename: filename.replace("test", "test-885") },
        { id: "896", filename: filename.replace("test", "test-896") },
        { id: "912", filename: filename.replace("test", "test-912") },
        { id: "932", filename: filename.replace("test", "test-932") },
        { id: "960", filename: filename.replace("test", "test-960") },
        { id: "961", filename: filename.replace("test", "test-961") },
        { id: "968", filename: filename.replace("test", "test-968") },
        { id: "1026", filename: filename.replace("test", "test-1026") },
        { id: "1067", filename: filename.replace("test", "test-1067") },
        { id: "1068", filename: filename.replace("test", "test-1068") },
        { id: "1080", filename: filename.replace("test", "test-1080") },
        { id: "1082", filename: filename.replace("test", "test-1082") },
        { id: "1180", filename: filename.replace("test", "test-1180") },
        { id: "1200", filename: filename.replace("test", "test-1200") },
        { id: "1235", filename: filename.replace("test", "test-1235") },
        { id: "1280", filename: filename.replace("test", "test-1280") },
        { id: "1290", filename: filename.replace("test", "test-1290") },
        { id: "1368", filename: filename.replace("test", "test-1368") },
        { id: "1389", filename: filename.replace("test", "test-1389") },
        { id: "1413", filename: filename.replace("test", "test-1413") },
        { id: "1440", filename: filename.replace("test", "test-1440") },
        { id: "1442", filename: filename.replace("test", "test-1442") },
        { id: "1500", filename: filename.replace("test", "test-1500") },
        { id: "1586", filename: filename.replace("test", "test-1586") },
        { id: "1590", filename: filename.replace("test", "test-1590") },
        { id: "1600", filename: filename.replace("test", "test-1600") },
        { id: "1707", filename: filename.replace("test", "test-1707") },
        { id: "1784", filename: filename.replace("test", "test-1784") },
        { id: "1824", filename: filename.replace("test", "test-1824") },
        { id: "1852", filename: filename.replace("test", "test-1852") },
        { id: "1864", filename: filename.replace("test", "test-1864") },
        { id: "1920", filename: filename.replace("test", "test-1920") },
        { id: "1973", filename: filename.replace("test", "test-1973") },
        { id: "2097", filename: filename.replace("test", "test-2097") },
        { id: "2120", filename: filename.replace("test", "test-2120") },
        { id: "2160", filename: filename.replace("test", "test-2160") },
        { id: "2220", filename: filename.replace("test", "test-2220") },
        { id: "2240", filename: filename.replace("test", "test-2240") },
        { id: "2379", filename: filename.replace("test", "test-2379") },
        { id: "2430", filename: filename.replace("test", "test-2430") },
        { id: "2560", filename: filename.replace("test", "test-2560") },
        { id: "2760", filename: filename.replace("test", "test-2760") },
        { id: "2796", filename: filename.replace("test", "test-2796") },
        { id: "2880", filename: filename.replace("test", "test-2880") },
        { id: "2960", filename: filename.replace("test", "test-2960") },
        { id: "3060", filename: filename.replace("test", "test-3060") },
        { id: "3240", filename: filename.replace("test", "test-3240") },
        { id: "3540", filename: filename.replace("test", "test-3540") },
        { id: "3840", filename: filename.replace("test", "test-3840") }
      ]
    } else {
      console.log("The filename must contain -thumb in order to display in this lightbox: " + filename)
    }
    return files
  }
}

export default OverlayOpener
