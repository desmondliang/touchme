/**
 * @author Desmond Liang
 * desmondliang.com
 */


$(document).ready(function() {	
	var app={
		demo:{
			setCycle:function(){
				this.swipeDemo=$('#demo_container').cycle({
					next:"#next_demo",
					prev:"#prev_demo",
					timeout:0,
					fx:'scrollHorz'
				});
			},
			demo_swiping:null,
			demo_rotation:null
				
		}
	}

	app.demo.setCycle();
	
	app.demo.demo_rotation=$(".rotatable").touchme({
		gestureChange: function(e){
			e.target.style.webkitTransform =
			        'rotate(' + e.rotation+ 'deg) scale(' + e.scale  + ')';
		}
	});

	app.demo.demo_pickup=$(".grabable").touchme({
		isScalable:false, 
		isRotateble:true,
		gestureChange:function(e){
			if(e.scale<1){//picku
				e.target.style.webkitTransform="rotateX(-"+((1-e.scale)*100)+"deg) skewY(-"+((1-e.scale)*20)+"deg) translateZ(200px)";
			}
		}, 
		inMotion:function(e){
				e.target.style.top="0";
				e.target.style.left="0";			
		},
		
		onGestureEnd:function(e){

			e.target.style.webkitTransform="rotateX(0deg) skewY(0deg) translateZ(0px)";
		}		
	});
		
	app.demo.demo_swiping=$("#demo_swiping").touchme({
		isDetectHorizontalMovement:true,
		isDetectVecticalMovement:true,
		isDetectDiagonalMovement:true,
		wipeRight: function(target) {
			$("#demo_swiping img#right").fadeIn('normal',function(){
				$(this).fadeOut('fast');
			});
		},
		wipeLeft: function(target) {
			$("#demo_swiping img#left").fadeIn('normal',function(){
				$(this).fadeOut('fast');
			});
		},
		wipeUp: function(target){
			$("#demo_swiping img#up").fadeIn('normal',function(){
				$(this).fadeOut('fast');
			});
		},
		wipeDown: function(target){
			$("#demo_swiping img#down").fadeIn('normal',function(){
				$(this).fadeOut('fast');
			});		
		},
		wipeDownRight: function(target) {
			$("#demo_swiping img#downright").fadeIn('normal',function(){
				$(this).fadeOut('fast');
			});
		},
		wipeUpLeft: function(target) {
			$("#demo_swiping img#upleft").fadeIn('normal',function(){
				$(this).fadeOut('fast');
			});	
		},
		wipeUpRight: function(target){
			$("#demo_swiping img#upright").fadeIn('normal',function(){
				$(this).fadeOut('fast');
			});			
		},
		wipeDownLeft: function(target){
			$("#demo_swiping img#downleft").fadeIn('normal',function(){
				$(this).fadeOut('fast');
			});			
		}

	});
	
	

});

function updateOrientation()
{
    switch(window.orientation){
        case -90:
        case 90:

        break;

        case 0:
        case 180:
        break;
    }
}
