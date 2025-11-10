<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sistema Planetário</title>
<style>
body {
background-color: #000;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
margin: 0;
}

.sun {
width: 100px;
height: 100px;
background-color: yellow;
border-radius: 50%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
justify-content: center;
align-items: center;
font-family: Arial, sans-serif;
font-size: 14px;
color: black;
}

.planet {
width: 20px;
height: 20px;
background-color: blue;
border-radius: 50%;
position: absolute;
top: 50%;
left: 50%;
}

.orbit {
animation: orbit 5s linear infinite;
}

@keyframes orbit {
0% {
transform: translate(-50%, -50%) rotate(0deg) translateX(200px) rotate(0deg);
}
100% {
transform: translate(-50%, -50%) rotate(360deg) translateX(200px) rotate(-360deg);
}
}
</style>
</head>
<body>
<div class="sun">kinghost</div>
<div class="planet orbit"></div>
</body>
</html>
