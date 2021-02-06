function isTouching(ob1, ob2){
    if(ob1.x - ob2.x <= ob2.width/2 + ob1.width/2 && 
      ob2.x - ob1.x <= ob2.width/2 + ob1.width/2 &&
      ob1.y - ob2.y <= ob2.height/2 + ob1.height/2 &&
      ob2.y - ob1.y <= ob2.height/2 + ob1.height/2){
      return true
   }
   else{
     return false
   }
  }
  
  function collide(ob1, ob2){
    if(ob1.x- ob2.x <= ob2.width/2 + ob1.width/2 &&
      ob2.x - ob1.x <= ob2.width/2 + ob1.width/2){
        ob1.velocityX = 0
        ob2.velocityX = 0
      }
     if(ob1.y - ob2.y <= ob2.height/2 + ob1.height/2 &&
      ob2.y - ob1.y <= ob2.height/2 + ob1.height/2){
        ob1.velocityY = 0
        ob2.velocityY = 0
      } 
  }

  function bounce(ob1, ob2){
    if(ob1.x- ob2.x <= ob2.width/2 + ob1.width/2 &&
      ob2.x - ob1.x <= ob2.width/2 + ob1.width/2){
        ob1.velocityX = -ob1.velocityX
        ob2.velocityX = -ob2.velocityX
      }
     if(ob1.y - ob2.y <= ob2.height/2 + ob1.height/2 &&
      ob2.y - ob1.y <= ob2.height/2 + ob1.height/2){
        ob1.velocityY = -ob1.velocityY
        ob2.velocityY = -ob2.velocityY
      } 
  }

  function bounceOff(ob1, ob2){
    if(ob1.x- ob2.x <= ob2.width/2 + ob1.width/2 &&
      ob1.y - ob2.y <= ob2.height/2 + ob1.height/2){
      ob1.velocityX = -ob1.velocityX
      ob1.velocityY = -ob1.velocityY
    }
    if(ob2.x - ob1.x <= ob2.width/2 + ob1.width/2 &&
      ob2.y - ob1.y <= ob2.height/2 + ob1.height/2){
        ob2.velocityX = -ob2.velocityX
        ob2.velocityY = -ob2.velocityY
      }
  }