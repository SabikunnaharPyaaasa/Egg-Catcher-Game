var INITIALIZED_2 = false;
var HelloWorldLayer2 = cc.Layer.extend({
   // field:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size


        var size = cc.winSize;
        //Background field
        var field = new cc.Sprite.create(res.field_png);
        field.setAnchorPoint(cc.p(0.5,0.5));
        field.setPosition(cc.p(size.width/2,size.height/2));
        //field.setTag(1);
        this.addChild(field,1);

        //music
       cc.audioEngine.playMusic(res.Main_Music, false);

        //Egg
        var score = 0;
        
        var egg1 = new cc.Sprite.create(res.egg1_png);
        egg1.setAnchorPoint(cc.p((randomIntFromInterval(8, -8)),-8));
        egg1.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(egg1,1);
        egg1.setTag(0);
        egg1.setOpacity(0);

        var egg0_action = cc.FadeIn.create(randomIntFromInterval(.1, 6));
        var egg1_action = cc.Repeat.create(cc.MoveBy.create(2,cc.p(0.5,-105)),5); 
        var egg1_action2 = cc.FadeOut.create(1); 
        var sequence_border1 = cc.Sequence.create(egg0_action, egg1_action,egg1_action2);
        egg1.runAction(sequence_border1);

        var egg2 = new cc.Sprite.create(res.egg1_png);
        egg2.setAnchorPoint(cc.p((randomIntFromInterval(8, -8)),-8));
        egg2.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(egg2,1);
        egg2.setTag(0);
        egg2.setOpacity(0);
        var egg2_action1 = cc.FadeIn.create(randomIntFromInterval(9, 15));
        var egg2_action2 = cc.Repeat.create(cc.MoveBy.create(2,cc.p(0.5,-105)),5);
        var egg2_action3 = cc.FadeOut.create(1); 
        var egg2_sequence = cc.Sequence.create(egg2_action1, egg2_action2,egg2_action3);
        egg2.runAction(egg2_sequence);

        var egg3 = new cc.Sprite.create(res.egg1_png);
        egg3.setAnchorPoint(cc.p((randomIntFromInterval(8, -8)),-8));
        egg3.setPosition(cc.p(size.width/2,size.height/2));
        egg3.setTag(0);
        this.addChild(egg3,1);
        var egg3_action1 = cc.FadeIn.create(randomIntFromInterval(17, 23));
        var egg3_action2 = cc.Repeat.create(cc.MoveBy.create(2,cc.p(0.5,-105)),5);
        var egg3_action3 = cc.FadeOut.create(1); 
        var egg3_sequence = cc.Sequence.create(egg3_action1, egg3_action2,egg3_action3);
        egg3.runAction(egg3_sequence);

        //Blue egg

        var eggBlue = new cc.Sprite.create(res.eggBlue_png);
        eggBlue.setAnchorPoint(cc.p((randomIntFromInterval(8, -8)),-8));
        eggBlue.setPosition(cc.p(size.width/2,size.height/2));
        eggBlue.setTag(0);
        this.addChild(eggBlue,1);
        eggBlue.setOpacity(0);
        var eggBlue_action1 = cc.FadeIn.create(randomIntFromInterval(0, 5));
        var eggBlue_action2 = cc.Repeat.create(cc.MoveBy.create(2,cc.p(0.5,-100)),4);
        var eggBlue_action3 = cc.FadeOut.create(.1); 
        var eggBlue_sequence = cc.Sequence.create(eggBlue_action1, eggBlue_action2,eggBlue_action3);
        eggBlue.runAction(eggBlue_sequence);
        
        
        
    
      
        var eggBlue0 = new cc.Sprite.create(res.eggBlue_png);
        eggBlue0.setAnchorPoint(cc.p((randomIntFromInterval(8, -8)),-8));
        eggBlue0.setPosition(cc.p(size.width/2,size.height/2));
        eggBlue0.setTag(0);
        this.addChild(eggBlue0,1);
        eggBlue0.setOpacity(0);
        var eggBlue0_action1 = cc.FadeIn.create(randomIntFromInterval(6, 25));
        var eggBlue0_action2 = cc.Repeat.create(cc.MoveBy.create(2,cc.p(0.5,-100)),4);
        var eggBlue0_action3 = cc.FadeOut.create(.1); 
        var eggBlue0_sequence = cc.Sequence.create(eggBlue0_action1, eggBlue0_action2,eggBlue0_action3);
        eggBlue0.runAction(eggBlue0_sequence);
       


        //Green egg1
  
        var eggGreen0 = new cc.Sprite.create(res.eggGreen_png);
        eggGreen0.setAnchorPoint(cc.p((randomIntFromInterval(8, -8)),-8));
        eggGreen0.setPosition(cc.p(size.width/2,size.height/2));
        eggGreen0.setTag(0);
        this.addChild(eggGreen0,1);
        eggGreen0.setOpacity(0);
        var eggGreen0_action1 = cc.FadeIn.create(randomIntFromInterval(2, 10));
        var eggGreen0_action2 = cc.Repeat.create(cc.MoveBy.create(2,cc.p(0.5,-100)),4);
        var eggGreen0_action3 = cc.FadeOut.create(.1); 
        var eggGreen0_sequence = cc.Sequence.create(eggGreen0_action1, eggGreen0_action2,eggGreen0_action3);
        eggGreen0.runAction(eggGreen0_sequence);
        
    

        var eggGreen1 = new cc.Sprite.create(res.eggGreen_png);
        eggGreen1.setAnchorPoint(cc.p((randomIntFromInterval(8, -8)),-8));
        eggGreen1.setPosition(cc.p(size.width/2,size.height/2));
        eggGreen1.setTag(0);
        this.addChild(eggGreen1,1);
        this.getPosition(eggGreen1);
        eggGreen1.setOpacity(0);
       
        var eggGreen1_action1 = cc.FadeIn.create(randomIntFromInterval(12, 20));
        var eggGreen1_action2 = cc.Repeat.create(cc.MoveBy.create(2,cc.p(0.5,-100)),4); 
        var eggGreen1_action3 = cc.FadeOut.create(.1);       
        var eggGreen1_sequence = cc.Sequence.create(eggGreen1_action1, eggGreen1_action2,eggGreen1_action3);
        eggGreen1.runAction(eggGreen1_sequence);
        

        //Red egg

        
        var eggRed = new cc.Sprite.create(res.eggRed_png);
        eggRed.setAnchorPoint(cc.p(randomIntFromInterval((randomIntFromInterval(8, -8)), -8),-10));
        eggRed.setPosition(cc.p(size.width/2,size.height/2));
        eggRed.setTag(0);
        this.addChild(eggRed,1);
        eggRed.setOpacity(0);
        var eggRed_action1 = cc.FadeIn.create(randomIntFromInterval(0.1, 10));
        var eggRed_action2 = cc.Repeat.create(cc.MoveBy.create(2,cc.p(0.5,-107)),4);
        var eggRed_action3 = cc.FadeOut.create(.1);
        var eggRed_sequence = cc.Sequence.create(eggRed_action1, eggRed_action2,eggRed_action3);
        eggRed.runAction(eggRed_sequence);
        

  
        var eggRed0 = new cc.Sprite.create(res.eggRed_png);
        eggRed0.setAnchorPoint(cc.p(randomIntFromInterval((randomIntFromInterval(8, -8)), -8),-10));
        eggRed0.setPosition(cc.p(size.width/2,size.height/2));
        eggRed0.setTag(0);
        this.addChild(eggRed0,1);
        eggRed0.setOpacity(0);
        var eggRed0_action1 = cc.FadeIn.create(randomIntFromInterval(12, 25));
        var eggRed0_action2 = cc.Repeat.create(cc.MoveBy.create(2,cc.p(0.5,-107)),4);
        var eggRed0_action3 = cc.FadeOut.create(.1);
        var eggRed0_sequence = cc.Sequence.create(eggRed0_action1, eggRed0_action2,eggRed0_action3);
        eggRed0.runAction(eggRed0_sequence);

         //Yellow egg
         
         var eggYellow = new cc.Sprite.create(res.eggYellow_png);
         eggYellow.setAnchorPoint(cc.p((randomIntFromInterval(8, -8)),-8));
         eggYellow.setPosition(cc.p(size.width/2,size.height/2));
         eggYellow.setTag(0);
         this.addChild(eggYellow,1);
         eggYellow.setOpacity(0);
         var eggYellow_action1 = cc.FadeIn.create(randomIntFromInterval(.1, 12));
         var eggYellow_action2 = cc.Repeat.create(cc.MoveBy.create(2,cc.p(0.5,-100)),4);
         var eggYellow_action3 = cc.FadeOut.create(.1);
         var eggYellow_sequence = cc.Sequence.create(eggYellow_action1, eggYellow_action2,eggYellow_action3);
         eggYellow.runAction(eggYellow_sequence);
         


   
        //  var eggYellow0 = new cc.Sprite.create(res.eggYellow_png);
        //  eggYellow0.setAnchorPoint(cc.p((randomIntFromInterval(8, -8)),-8));
        //  eggYellow0.setPosition(cc.p(size.width/2,size.height/2));
        //  this.addChild(eggYellow0,1);
        //  eggYellow0.setOpacity(0);
        //  var eggYellow0_action1 = cc.FadeIn.create(randomIntFromInterval(17, 25));
        //  var eggYellow0_action2 = cc.Repeat.create(cc.MoveBy.create(2,cc.p(0.5,-100)),4);
        //  var eggYellow0_sequence = cc.Sequence.create(eggYellow0_action1, eggYellow0_action2);
        //  eggYellow0.runAction(eggYellow0_sequence);
         


        var basket = new cc.Sprite.create(res.basket_png);
        basket.setAnchorPoint(cc.p(0.37,4));
        basket.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(basket,1);
        var basket_action = cc.Repeat.create(cc.MoveBy.create(0.0001,cc.p(-10,0)),2);
        var basket_action1 = cc.Repeat.create(cc.MoveBy.create(0.0001,cc.p(10,0)),2);
     


        var label = new cc.LabelTTF("Score:","Arial");
        label.setFontSize(25);
        label.setAnchorPoint(cc.p(3.5, -4.5));
        label.setPosition(cc.p(size.width /2, size.height /2));
        label.setColor(cc.color(255,0,0));
        this.addChild(label,1);

        if(cc.sys.capabilities.hasOwnProperty('keyboard'))
        {
            cc.eventManager.addListener(
                {
                    event: cc.EventListener.KEYBOARD,
                    onKeyPressed: function(key, event)
                    {
                        cc.log(key.toString());
                       
                        if(key.toString()==37){
                            basket.runAction(basket_action);
                           
                           basket.setPosition(basket.getPositionX(), basket.getPositionY());
                         
                            var rectegg1 = egg1.getBoundingBox();
                            var rectegg2 = egg2.getBoundingBox();
                            var rectegg3 = egg3.getBoundingBox();
                            var recteggBlue = eggBlue.getBoundingBox();
                            var recteggBlue0 = eggBlue0.getBoundingBox();
                            var recteggGreen0 = eggGreen0.getBoundingBox();
                            var recteggGreen1 = eggGreen1.getBoundingBox();
                            var recteggRed = eggRed.getBoundingBox();
                            var recteggRed0 = eggRed0.getBoundingBox();
                            var recteggYellow = eggYellow.getBoundingBox();

                            var rectbasket = basket.getBoundingBox();
                            var egg1x = egg1.getPositionY();
                            var egg2x = egg2.getPositionY();
                            var egg3x = egg3.getPositionY();
                            var eggBluex = eggBlue.getPositionY();
                            var eggBlue0x = eggBlue0.getPositionY();
                            var eggGreen0x = eggGreen0.getPositionY();
                            var eggGreen1x = eggGreen1.getPositionY();
                            var eggRedx = eggRed.getPositionY();
                            var eggRed0x = eggRed0.getPositionY();
                            var eggYellowx = eggYellow.getPositionY();
                            cc.log(eggYellowx);

                            if(eggYellowx<=-173)
                            {
                                eggYellow.setTag(1);
                                eggYellow.removeFromParent();                           
                            }
                            if(eggRed0x<=-200)
                            {
                                eggRed0.setTag(1);
                                eggRed0.removeFromParent();                           
                            }
                            if(eggGreen1x<=-174)
                            {
                                eggGreen1.setTag(1);
                                eggGreen1.removeFromParent();                           
                            }
                            if(eggRedx<=-200)
                            {
                                eggRed.setTag(1);
                                eggRed.removeFromParent();                           
                            }
                            if(eggGreen0x<=-174)
                            {
                                eggGreen0.setTag(1);
                                eggGreen0.removeFromParent();

                            
                            }
                            if(eggBluex<=-174)
                            {
                                eggBlue.setTag(1);
                                eggBlue.removeFromParent();

                            
                            }
                            if(eggBlue0x<=-174)
                            {
                                eggBlue0.setTag(1);
                                eggBlue0.removeFromParent();

                            
                            }
                            if(egg1x<=-298)
                            {
                                egg1.setTag(1);
                                egg1.removeFromParent();
                                
                            
                            }
                            if(egg2x<=-298)
                            {
                                egg2.setTag(1);
                                egg2.removeFromParent();
                                
                            
                            }
                            if(egg3x<=-298)
                            {
                                egg3.setTag(1);
                                egg3.removeFromParent();

                            
                            }
                         
                            if(cc.rectIntersectsRect(rectegg1,rectbasket))
                            {
                                if(egg1.getTag()==0)
                                {
                                    egg1.setTag(1);
                                    cc.log(egg1.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                   
                                    label.setString("Score:" +score);
                                    egg1.removeFromParent();
                                    egg1.setTag(1);
                                
                                }
                               
                            }
                           
                           
                            if(cc.rectIntersectsRect(rectegg2,rectbasket))
                            {
                                if(egg2.getTag()==0)
                                {
                                    egg2.setTag(1);
                                    cc.log(egg2.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                    
                                    label.setString("Score:" +score);
                                    egg2.removeFromParent();
                                    egg2.setTag(1);
                                
                                }
                            }
                         
                            if(cc.rectIntersectsRect(rectegg3,rectbasket))
                            {
                                if(egg3.getTag()==0)
                                {
                                    egg3.setTag(1);
                                    cc.log(egg3.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                   
                                    label.setString("Score:" +score);
                                    egg3.removeFromParent();
                                    egg3.setTag(1);
                                
                                }
                            }

                            if(cc.rectIntersectsRect(recteggBlue,rectbasket))
                            {
                                if(eggBlue.getTag()==0)
                                {
                                    eggBlue.setTag(1);
                                    cc.log(eggBlue.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                   
                                    label.setString("Score:" +score);
                                    eggBlue.removeFromParent();
                                    eggBlue.setTag(1);
                                
                                }
                            }

                            if(cc.rectIntersectsRect(recteggBlue0,rectbasket))
                            {
                                if(eggBlue0.getTag()==0)
                                {
                                    eggBlue0.setTag(1);
                                    cc.log(eggBlue0.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                    
                                    label.setString("Score:" +score);
                                    eggBlue0.removeFromParent();
                                    eggBlue0.setTag(1);
                                
                                }
                            }

                            if(cc.rectIntersectsRect(recteggGreen0,rectbasket))
                            {
                                if(eggGreen0.getTag()==0)
                                {
                                    eggGreen0.setTag(1);
                                    cc.log(eggGreen0.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                    
                                    label.setString("Score:" +score);
                                    eggGreen0.removeFromParent();
                                    eggGreen0.setTag(1);
                                
                                }
                            }

                            if(cc.rectIntersectsRect(recteggGreen1,rectbasket))
                            {
                                if(eggGreen1.getTag()==0)
                                {
                                    eggGreen1.setTag(1);
                                    cc.log(eggGreen1.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                
                                    label.setString("Score:" +score);
                                    eggGreen1.removeFromParent();
                                    eggGreen1.setTag(1);
                                
                                }
                            }

                            if(cc.rectIntersectsRect(recteggRed,rectbasket))
                            {
                                if(eggRed.getTag()==0)
                                {
                                    eggRed.setTag(1);
                                    cc.log(eggRed.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                    
                                    label.setString("Score:" +score);
                                    eggRed.removeFromParent();
                                    eggRed.setTag(1);
                                
                                }
                            }

                            if(cc.rectIntersectsRect(recteggRed0,rectbasket))
                            {
                                if(eggRed0.getTag()==0)
                                {
                                    eggRed0.setTag(1);
                                    cc.log(eggRed0.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                    
                                    label.setString("Score:" +score);
                                    eggRed0.removeFromParent();
                                    eggRed0.setTag(1);
                                
                                }
                            }

                            if(cc.rectIntersectsRect(recteggYellow,rectbasket))
                            {
                                if(eggYellow.getTag()==0)
                                {
                                    eggYellow.setTag(1);
                                    cc.log(eggYellow.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                    
                                    label.setString("Score:" +score);
                                    eggYellow.removeFromParent();
                                    eggYellow.setTag(1);
                                
                                }
                            }
                       
                        }
                        if(key.toString()==39){
                            basket.runAction(basket_action1);
                            basket.setPosition(basket.getPositionX(), basket.getPositionY());
                         
                            var rectegg1 = egg1.getBoundingBox();
                            var rectegg2 = egg2.getBoundingBox();
                            var rectegg3 = egg3.getBoundingBox();
                            var recteggBlue = eggBlue.getBoundingBox();
                            var recteggBlue0 = eggBlue0.getBoundingBox();
                            var recteggGreen0 = eggGreen0.getBoundingBox();
                            var recteggGreen1 = eggGreen1.getBoundingBox();
                            var recteggRed = eggRed.getBoundingBox();
                            var recteggRed0 = eggRed0.getBoundingBox();
                            var recteggYellow = eggYellow.getBoundingBox();

                            var rectbasket = basket.getBoundingBox();
                            var egg1x = egg1.getPositionY();
                            var egg2x = egg2.getPositionY();
                            var egg3x = egg3.getPositionY();
                            var eggBluex = eggBlue.getPositionY();
                            var eggBlue0x = eggBlue0.getPositionY();
                            var eggGreen0x = eggGreen0.getPositionY();
                            var eggGreen1x = eggGreen1.getPositionY();
                            var eggRedx = eggRed.getPositionY();
                            var eggRed0x = eggRed0.getPositionY();
                            var eggYellowx = eggYellow.getPositionY();
                            cc.log(eggYellowx);

                            if(eggYellowx<=-173)
                            {
                                eggYellow.setTag(1);
                                eggYellow.removeFromParent();                           
                            }
                            if(eggRed0x<=-200)
                            {
                                eggRed0.setTag(1);
                                eggRed0.removeFromParent();                           
                            }
                            if(eggGreen1x<=-174)
                            {
                                eggGreen1.setTag(1);
                                eggGreen1.removeFromParent();                           
                            }
                            if(eggRedx<=-200)
                            {
                                eggRed.setTag(1);
                                eggRed.removeFromParent();                           
                            }
                            if(eggGreen0x<=-174)
                            {
                                eggGreen0.setTag(1);
                                eggGreen0.removeFromParent();

                            
                            }
                            if(eggBluex<=-174)
                            {
                                eggBlue.setTag(1);
                                eggBlue.removeFromParent();

                            
                            }
                            if(eggBlue0x<=-174)
                            {
                                eggBlue0.setTag(1);
                                eggBlue0.removeFromParent();

                            
                            }
                            if(egg1x<=-298)
                            {
                                egg1.setTag(1);
                                egg1.removeFromParent();
                                
                            
                            }
                            if(egg2x<=-298)
                            {
                                egg2.setTag(1);
                                egg2.removeFromParent();
                                
                            
                            }
                            if(egg3x<=-298)
                            {
                                egg3.setTag(1);
                                egg3.removeFromParent();

                            
                            }
                         
                            if(cc.rectIntersectsRect(rectegg1,rectbasket))
                            {
                                if(egg1.getTag()==0)
                                {
                                    egg1.setTag(1);
                                    cc.log(egg1.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                   
                                    label.setString("Score:" +score);
                                    egg1.removeFromParent();
                                    egg1.setTag(1);
                                
                                }
                               
                            }
                           
                           
                            if(cc.rectIntersectsRect(rectegg2,rectbasket))
                            {
                                if(egg2.getTag()==0)
                                {
                                    egg2.setTag(1);
                                    cc.log(egg2.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                    
                                    label.setString("Score:" +score);
                                    egg2.removeFromParent();
                                    egg2.setTag(1);
                                
                                }
                            }
                         
                            if(cc.rectIntersectsRect(rectegg3,rectbasket))
                            {
                                if(egg3.getTag()==0)
                                {
                                    egg3.setTag(1);
                                    cc.log(egg3.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                   
                                    label.setString("Score:" +score);
                                    egg3.removeFromParent();
                                    egg3.setTag(1);
                                
                                }
                            }

                            if(cc.rectIntersectsRect(recteggBlue,rectbasket))
                            {
                                if(eggBlue.getTag()==0)
                                {
                                    eggBlue.setTag(1);
                                    cc.log(eggBlue.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                   
                                    label.setString("Score:" +score);
                                    eggBlue.removeFromParent();
                                    eggBlue.setTag(1);
                                
                                }
                            }

                            if(cc.rectIntersectsRect(recteggBlue0,rectbasket))
                            {
                                if(eggBlue0.getTag()==0)
                                {
                                    eggBlue0.setTag(1);
                                    cc.log(eggBlue0.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                    
                                    label.setString("Score:" +score);
                                    eggBlue0.removeFromParent();
                                    eggBlue0.setTag(1);
                                
                                }
                            }

                            if(cc.rectIntersectsRect(recteggGreen0,rectbasket))
                            {
                                if(eggGreen0.getTag()==0)
                                {
                                    eggGreen0.setTag(1);
                                    cc.log(eggGreen0.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                    
                                    label.setString("Score:" +score);
                                    eggGreen0.removeFromParent();
                                    eggGreen0.setTag(1);
                                
                                }
                            }

                            if(cc.rectIntersectsRect(recteggGreen1,rectbasket))
                            {
                                if(eggGreen1.getTag()==0)
                                {
                                    eggGreen1.setTag(1);
                                    cc.log(eggGreen1.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                
                                    label.setString("Score:" +score);
                                    eggGreen1.removeFromParent();
                                    eggGreen1.setTag(1);
                                
                                }
                            }

                            if(cc.rectIntersectsRect(recteggRed,rectbasket))
                            {
                                if(eggRed.getTag()==0)
                                {
                                    eggRed.setTag(1);
                                    cc.log(eggRed.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                    
                                    label.setString("Score:" +score);
                                    eggRed.removeFromParent();
                                    eggRed.setTag(1);
                                
                                }
                            }

                            if(cc.rectIntersectsRect(recteggRed0,rectbasket))
                            {
                                if(eggRed0.getTag()==0)
                                {
                                    eggRed0.setTag(1);
                                    cc.log(eggRed0.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                    
                                    label.setString("Score:" +score);
                                    eggRed0.removeFromParent();
                                    eggRed0.setTag(1);
                                
                                }
                            }

                            if(cc.rectIntersectsRect(recteggYellow,rectbasket))
                            {
                                if(eggYellow.getTag()==0)
                                {
                                    eggYellow.setTag(1);
                                    cc.log(eggYellow.getTag());
                                    score=score+1;
                                    cc.log(score);
                                    cc.log("collided");
                                    
                                    label.setString("Score:" +score);
                                    eggYellow.removeFromParent();
                                    eggYellow.setTag(1);
                                
                                }
                            }
                        }
                }
                },this);
        }

        return true;
    },
    remove: function()
    {
        this.removeChildByTag(1,true);
    }
});

    function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

var HelloWorldScene2 = cc.Scene.extend({
    onEnter:function () {
        this._super();
        
        if (INITIALIZED_2 == false)
        {
            INITIALIZED_2 == true;
            
            var layer = new HelloWorldLayer2();
            this.addChild(layer);
        }
    }
});

