mav = 0.13

if(100 < mav*1000 < 500){
    console.log("1")
} 

else if(-500 < mav*1000 <= -100){
    console.log("2")
}
else if(-500 >= mav*1000){
    console.log("3")
}
else if(500 <= mav*1000){
    console.log("4")
}

else if(0 < mav*1000 < 100){
    console.log("5")
}  
else if(-100 < mav*1000 < 0){
    console.log("6")
}
