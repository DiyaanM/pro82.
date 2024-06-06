var mouse_event="empty"
var last_x,last_y
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var width_line=2
var color="orange" 

canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e)
{
mouse_event="mousedown"
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e)
{
    current_x=e.clientX-canvas.offsetLeft
    current_y=e.clientY-canvas.offsetTop
    if(mouse_event=="mousedown")
        {
            ctx.beginPath()
            ctx.strokeStyle=color
            ctx.lineWidth=width_line
            ctx.arc(current_x,current_y,50,0,360)
        
            ctx.stroke()
        }
        last_x=current_x
        last_y=current_y
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e)
{
mouse_event="mouseup"
}
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e)
{
mouse_event="mouseleave"
}