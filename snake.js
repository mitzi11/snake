// Create field
function Field(fieldHeight, fieldWidth){
    this.fieldWidth = fieldWidth;
    this.fieldHeight = fieldHeight;
}

// instance field
var field = new Field(800,600);

// are coordinates in field
function inField(Field, x, y){
    //in
    if(x>0 && y>0){
    if(x<field.fieldWidth && y<field.fieldHeight){
        console.log("snake is in the field");
        console.log(x,y);
    }
    else{
        console.log("it's greater");
        console.log(field.fieldWidth);
    }
    }


    // //out
    // if(x>field.fieldWidth && 0<y<field.fieldHeight){
    //     console.log("snake is in the field");
    // }

    // //bound
    // return -1,0,1;
}

inField(800,600,100,200);

// this is a new branch
