// import React from "react"

// const foo = <div />

// console.log(foo)



// Library




// Application

const c = createjs
const canvas = document.createElement("canvas")

Object.assign(document.body.style, {
  margin: "0px"
})

document.body.appendChild(canvas)

Object.assign(canvas.style, {
  position: "absolute",
  top: "100px",
  left: "100px",
  backgroundColor: "rgba(255,255,255,0.5)"
  // backgroundColor: "white"
})



const stage = new c.Stage(canvas)
const root = new lib.kiss2()
stage.addChild(root)
stage.update()

const main = root.main

main.gotoAndStop(6)

// const circle = document.createElement("div")
// document.body.appendChild(circle)
// Object.assign(circle.style, {
//   position: "fixed",
//   top: "-70px",
//   left: "-70px",
//   width: "140px",
//   height: "140px",
//   backgroundColor: "rgba(0, 0, 0, 0.1)",
//   borderRadius: "50%",
//   // transformOrigin: "-70px -70px"
//   // transform: "translate(-70px, -70px)"
// })

// const innerDot = document.createElement("div")
// circle.appendChild(innerDot)
// Object.assign(innerDot.style, {
//   position: "relative",
//   width: "10px",
//   height: "10px",
//   top: "10%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   borderRadius: "50%",
//   backgroundColor: "hsla(0, 50%, 0%, 0.2)"
// })

// const tree = main.tree

c.Ticker.setFPS(120)
c.Ticker.addEventListener("tick", stage)

const scrollpane = document.createElement("div")

Object.assign(scrollpane.style, {
  // height: `${window.innerHeight * 1.2}px`,
  height: "3000px",
  background: "url('assets/bg.png')",
  padding: "0px",
  margin: "0px",
  // backgroundColor: "red"
})

document.body.appendChild(scrollpane)


// const trackDIV = () => {
//   Object.assign(circle.style, {
//     // top: `${tree.y + main.y}px`,
//     // left: `${tree.x + main.x}px`,
//     transform: `
//       translate(${tree.x + main.x}px, ${tree.y + main.y}px)
//       rotate(${tree.rotation}deg)
//       scale(${tree.scaleX}, ${tree.scaleY})`
//     // transform: `rotate(${tree.rotation}deg)`,
//   })
// }

const sizeAnimation = (canvas, mc) => {
  const {devicePixelRatio: dpr} = window
  const size = 200
  // Size the canvas scale
  Object.assign(canvas.style, {
    width: `${size}px`,
    height: `${size}px`,
  })
  // Size the actual canvas bitmap
  Object.assign(canvas, {
    width: size * dpr,
    height: size * dpr,
  })
  // Position the main movie clip
  // mc.x = window.innerWidth / 2
  // mc.y = window.innerHeight / 2


  // const {innerHeight, innerWidth} = window
  // const scaler = innerHeight > innerWidth
  //   ? (window.innerWidth/100) * 0.5
  //   : (window.innerHeight/100) * 0.5

  // mc.x = mc.y = 50 * size * dpr
  // mc.x = 0
  // mc.y = 0

  mc.scaleX = mc.scaleY = size / 100
  // mc.scaleX = mc.scaleY = scaler
  // mc.scaleX = mc.scaleY = 3
  stage.scaleX = stage.scaleY = dpr

Object.assign(scrollpane.style, {
  // height: `${window.innerHeight * 1.5}px`,
  height: "3000px",
  // background: "url('bg.png')",
  // padding: "0px",
  // margin: "0px",
  backgroundColor: "#eee"
})

  // trackDIV()
}


sizeAnimation(canvas, main)
window.addEventListener("resize", () => {
  sizeAnimation(canvas, main)
})





// DOM circle that chases createjs object





window.addEventListener("scroll", ()=> {
  // console.log("scrolling!!!")
  // console.log("scrollpane height:", scrollpane.style.height)

  const winHeight = window.innerHeight
  const scrollpaneHeight = parseInt(scrollpane.style.height, 10)
  const scrollPos = document.body.scrollTop
  const paneHeightOffset = scrollpaneHeight - winHeight
  const scrollPercent = scrollPos / paneHeightOffset
  // let targetFrame = (main.totalFrames * scrollPercent) - 1
  let targetFrame = Math.floor(scrollPos / 5) + 6

  console.log(targetFrame)

  targetFrame = targetFrame > main.totalFrames - 1 
    ? main.totalFrames - 1
    : targetFrame

  // targetFrame = targetFrame > main.totalFrames - 1 
  //   ? main.totalFrames - 4
  //   : targetFrame

  // main.gotoAndStop(targetFrame)
  main.gotoAndStop(targetFrame)

  // trackDIV()

})


























