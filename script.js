function Before() {
    document.getElementById("BeforeButton").style.backgroundColor = "#390a0a";
    document.getElementById("DuringButton").style.backgroundColor = "black";
    document.getElementById("AfterButton").style.backgroundColor = "black";
    document.getElementById("whatContents").style.visibility = "visible";
    document.getElementById("whatContents").innerHTML = "<b>1.</b> You must be prepared by making sure you have a fire extinguisher, first aid kit,</br>a battery-powered radio, a flashlight, and extra batteries at home.</br><b>2.</b> You should then know how to turn off the gas, water and electricity in your home.</br><b>3.</b> No heavy objects on shelves because it may fall down to a person.</br><b>4.</b> You should make a plan with your family so you can know where to meet when there is an earthquake.</br><b>5.</b> Learn also the earthquake plan of your workplace, or your school so you can know where is the emergency exit.</br>";
    document.getElementById("whatimage").style.visibility = "visible";
    document.getElementById("whatimage").src = "FirstAidKit.jpg";
}
function During() {
    document.getElementById("BeforeButton").style.backgroundColor = "black";
    document.getElementById("DuringButton").style.backgroundColor = "#390a0a";
    document.getElementById("AfterButton").style.backgroundColor = "black";
    document.getElementById("whatContents").style.visibility = "visible";
    document.getElementById("whatContents").innerHTML = "<b>1.</b> You must first stay calm and do the drop, cover, and hold.</br><b>2.</b> Stay inside if you are indoors, stand against a wall near the center of the building,</br>stand in a doorway, or crawl under heavy furniture.Stay away from windows and outside doors.</br><b>3.</b> If you are outside stay outside. Stay in the open, away from power lines or anything that might fall.</br>Stay away from buildings.</br><b>4.</b> Dont use matches, candles, or any flame.</br><b>5.</b> Dont use elevators and escalators.</br><b>6.</b> Lastly if you are inside the car, stop the car and stay inside and wait until the earthquake ends. "
    document.getElementById("whatimage").style.visibility = "visible";
    document.getElementById("whatimage").src = "dropcoverandhold.jpg";
}
function After() {
    document.getElementById("BeforeButton").style.backgroundColor = "black";
    document.getElementById("DuringButton").style.backgroundColor = "black";
    document.getElementById("AfterButton").style.backgroundColor = "#390a0a";
    document.getElementById("whatContents").style.visibility = "visible";
    document.getElementById("whatContents").innerHTML = "<b>1.</b> Check yourself first if you are injured.</br><b>2.</b> If you are in your home check your water, gas, and electric lines for damage.</br><b>3.</b> Listen to the news for information.</br><b>4.</b> Avoid damaged buildings. Be careful around broken glass and debris.</br><b>5.</b> Avoid beaches because of possible tsunamis.</br><b>6.</b> If youre at school or work, follow the emergency plan. Lastly expect aftershocks ";
    document.getElementById("whatimage").style.visibility = "visible";
    document.getElementById("whatimage").src = "EvacPlan.jpg";
}

function Remove() {
    document.getElementById("BeforeButton").style.backgroundColor = "black";
    document.getElementById("DuringButton").style.backgroundColor = "black";
    document.getElementById("AfterButton").style.backgroundColor = "black";
    document.getElementById("whatContents").style.visibility = "hidden";
    document.getElementById("whatimage").style.visibility = "hidden";
}
