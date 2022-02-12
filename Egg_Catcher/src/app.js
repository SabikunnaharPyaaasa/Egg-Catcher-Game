var INITIALIZED = false;
var HelloWorldLayer = cc.Layer.extend({
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
        var playview = new cc.Sprite.create(res.playview_png);
        playview.setAnchorPoint(cc.p(0.5,0.5));
        playview.setPosition(cc.p(size.width/2,size.height/2));
       this.addChild(playview,1);

        // var menuItem1 = new cc.MenuItemFont(image, play);
        // var menu = new cc.Menu(menuItem1);
        // menu.alignItemsVertically();
        // this.addChild(menu);

        var play = new cc.Sprite.create(res.play_png);
        play.setAnchorPoint(cc.p(0.5,0.5));
        play.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(play,1);


        var button = new ccui.Button();
        button.loadTextures(res.play_png, res.CloseSelected_png);
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
             var scene = new HelloWorldScene3();
            cc.director.pushScene(scene);
                    
            break;
        }
    }
});


var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        
        if (INITIALIZED == false)
        {
            INITIALIZED == true;
        var layer = new HelloWorldLayer();
        this.addChild(layer);
        }
    }
});

