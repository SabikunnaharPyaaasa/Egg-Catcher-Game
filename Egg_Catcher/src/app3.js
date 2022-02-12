var INITIALIZED3 = false;
var HelloWorldLayer3 = cc.Layer.extend({
    field:null,
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
        var btnfield = new cc.Sprite.create(res.btnfield_png);
        btnfield.setAnchorPoint(cc.p(0.5,0.5));
        btnfield.setPosition(cc.p(size.width/2,size.height/2));
       this.addChild(btnfield,1);

        // var menuItem1 = new cc.MenuItemFont(image, play);
        // var menu = new cc.Menu(menuItem1);
        // menu.alignItemsVertically();
        // this.addChild(menu);

        var btnlevel = new cc.Sprite.create(res.btnlevel_png);
        btnlevel.setAnchorPoint(cc.p(0.5,0.5));
        btnlevel.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(btnlevel,1);


        var button = new ccui.Button();
        button.loadTextures(res.btnlevel_png, res.CloseSelected_png);
        button.x = size.width / 2;
        button.y = size.height / 2;
        button.addTouchEventListener(this.touchEvent, this);
        this.addChild(button);

        // var button = new ccui.Button();
        // button.loadTextures(res.play_png,res.field_png);
        // button.x =size.width/2;
        // button.y = size.height/2;
        // button.addTouchEventListener(this.touchEvent, this);
        // this.addChild(button);

        return true;
    },
    touchEvent: function(sender, type) 
     {
        switch(type)
         {
             case ccui.Widget.TOUCH_BEGAN: 
             cc.log("pressed");
             var scene = new HelloWorldScene2();
            cc.director.pushScene(scene);
                    
            break;
        }
    }
});


var HelloWorldScene3 = cc.Scene.extend({
    onEnter:function () {
        this._super();
        
        if (INITIALIZED3 == false)
        {
            INITIALIZED3 == true;
        var layer = new HelloWorldLayer3();
        this.addChild(layer);
        }
    }
});

