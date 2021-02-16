 function DomElement(selector1, selector2, height, width, bg, fontSize, create){
  this.selector1 = selector1;
  this.selector2 = selector2;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.create = create;
};
DomElement.prototype.create = function(){
  console.log(this.height,+' '+ this.width,+' '+ this.bg,+' '+ this.fontSize,+' '+ this.create);
}

let domElement = new DomElement ('.block', '#best', '200px', '300px','red','18px', 'document.createElement("div")');

console.log(domElement);

domElement = document.createElement('div');
domElement.style.cssText = `height: 200px;
width: 300px;
background: red;
fontSize: 18px;
color: blue; `
domElement.innerHTML = '<div class="block">Lorem ipsum dolor sit amet.</div>';
document.body.append(domElement);

