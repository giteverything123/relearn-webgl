let canvas0 = document.getElementById('canvas0');
let ctx0 = canvas0.getContext('2d');
ctx0.font = '28px serif';
ctx0.fillStyle = '#333333';
ctx0.fillText('平行投影',50,120);
ctx0.fillText('或',90,160);
ctx0.fillText('透视投影',50,200);
ctx0.strokeRect(20,70,170,160);
ctx0.beginPath();
ctx0.moveTo(200,140);
ctx0.lineTo(500,140);
ctx0.stroke();
ctx0.fillStyle = 'red';
ctx0.font = '24px serif';
ctx0.fillText('通过',340,130);
ctx0.fillStyle = '#333333';
ctx0.font = '28px serif';
ctx0.fillText('投影规范话来实现',510,146);