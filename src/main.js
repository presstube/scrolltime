// import React from "react"

// const foo = <div />

// console.log(foo)



// Library

const sizeAnimation = (canvas, movieClip) => {
  // Size the canvas scale
  Object.assign(canvas.style, {
    width: `${window.innerWidth}px`,
    height: `${window.innerHeight}px`,
  })
  // Size the actual canvas bitmap
  Object.assign(canvas, {
    width: window.innerWidth,
    height: window.innerHeight,
  })
  // Position the main movie clip
  movieClip.x = window.innerWidth / 2
  movieClip.y = window.innerHeight / 2
}



// Application

const c = createjs
const canvas = document.createElement("canvas")

Object.assign(document.body.style, {
  margin: "0px"
})

document.body.appendChild(canvas)

Object.assign(canvas.style, {
  position: "fixed",
  top: "0px",
  left: "0px",
})



const stage = new c.Stage(canvas)
const root = new lib.timelineanimation()
stage.addChild(root)
stage.update()

const main = root.main

main.gotoAndStop(0)

sizeAnimation(canvas, main)
window.addEventListener("resize", () => {
  sizeAnimation(canvas, main)
})

const tree = main.tree

c.Ticker.setFPS(30)
c.Ticker.addEventListener("tick", stage)

const scrollpane = document.createElement("div")

Object.assign(scrollpane.style, {
  height: "3000px",
  background: "url('bg.png')",
  padding: "0px",
  margin: "0px",
})

document.body.appendChild(scrollpane)



// DOM node that chases createjs object

const node = document.createElement("div")
document.body.appendChild(node)
Object.assign(node.style, {
  position: "fixed",
  top: "0",
  left: "0",
  width: "20px",
  height: "20px",
  backgroundColor: "gray"
})


window.addEventListener("scroll", ()=> {
  // console.log("scrolling!!!")
  // console.log("scrollpane height:", scrollpane.style.height)

  const winHeight = window.innerHeight
  const scrollpaneHeight = parseInt(scrollpane.style.height, 10)
  const scrollPos = document.body.scrollTop
  const paneHeightOffset = scrollpaneHeight - winHeight
  const scrollPercent = scrollPos / paneHeightOffset
  const targetFrame = (main.totalFrames * scrollPercent) - 1

  main.gotoAndStop(targetFrame)

  Object.assign(node.style, {
    top: `${tree.y + main.y}px`,
    left: `${tree.x + main.x}px`,
    transform: `rotate(${tree.rotation}deg)`,
  })


  // console.log(winHeight, scrollpaneHeight, scrollPos, paneHeightOffset, scrollPercent)

})


























