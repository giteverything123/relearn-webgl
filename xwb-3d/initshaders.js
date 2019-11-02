module.exports = function(gl,vertexShaderText,fragmentShaderText){
  let vertShdr,fragShdr;
  if(!gl) {
    alert('您还未传入参数是gl的webgl上下文');
    return -1;
  }
  if(!vertexShaderText) {
    alert('您的顶点着色器代码没有传入');
    return -1;
  } else {
    vertShdr = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShdr,vertexShaderText);
    gl.compileShader(vertShdr);
    if(!gl.getShaderParameter(vertShdr,gl.COMPILE_STATUS)){
      /*gl.getShaderParameter方法可以获取指定的着色器中的信息
       *第1个参数指定的是需要获取信息的着色器
       *第2个参数是传入的参数，其可以有3种信息，如下:
       *1.<gl.SHADER_TYPE>,返回是顶点着色器(gl.VERTEX_SHADER)还是片元着色器(gl.FRAGMENT_SHADER)
      *2.<gl.DELETE_STATUS>返回着色器是否被删除成功（true/false）
       *3.<gl.COMPILE_STATUS>返回着色器是否被编译成功(true/false)
      **/

    }
  }
}