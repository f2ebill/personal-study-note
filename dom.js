(function(window,document){

	function dom(eles){
		if(arguments.length === 0){
			this.elements = [];
		}else{
			this.elements = document.querySelectorAll(eles[0]);
		}
		
		// for(var i = 0; i < eles.length; i++){
		// 	var ele = document.getElementById(eles[i]);
		// 	this.elements.push(ele);
		// }
	};

	dom.prototype = {
		extend:function(obj){

			for(var i in obj){
				this[i] = obj[i]
			}


		},

		each:function(callback){
			for(var i = 0; i < this.elements.length; i ++){
				callback.call(this.elements[i],i,this.elements[i])
			}
		},

		css: function (style,value){
				if(arguments.length == 1){
					return window.getComputedStyle(this.elements[0])[style];
				}else{
					this.each(function(n,v){
						v.style[style] = value;
						// this.elements[0].style[style] = value;
					})
					
					return this;
				}
			},

		attr:function(name,value){
			if(arguments.length == 1){
				return this.elements[0].getAttribute(name);
			}else{
				this.each(function(n,v){
					v.setAttribute(name,value);
				})
				
				return this;
			}
		},

		prop:function(name,value){

		}

	};



	// //增

	/*
	HTMLElement .classList 原型对象
	DOMTokenList {
		
		add:增加，如不传入参数不操作
		remove:删除，如不传入参数不操作
		toggle:有删除 没有增加
		contains:是否包含
		item:索引


	}

	*/



	dom.prototype.extend({
		test:function(){
			console.log(this);
		},
		addClass:function(className){
			if(arguments.length === 0){
				return this;
			}
			var that = this;
			var nameList = className.split(/\s+/);
			this.each(function(n,v){
				var list = v.classList;
				// nameList.each(function(name,item){
				// 	list.add(item)
				// })
				for(var i = 0; i < nameList.length; i++){
					list.add(nameList[i]);
				}
	
			})
		},
		removeClass:function(className){

			if(arguments.length === 0){
				this.each(function(n,v){
					v.className = '';
				})
				
			}else{

				
				var nameList = className.split(/\s+/);
				this.each(function(n,v){
					var list = v.classList;
					// nameList.each(function(name,item){
					// 	list.add(item)
					// })
					for(var i = 0; i < nameList.length; i++){
						list.remove(nameList[i]);
					}
		
				})

			}

			return this;
		},
		toggleClass:function(className){
			if(arguments.length !== 0){
				var nameList = className.split(/\s+/);
				this.each(function(n,v){
					var list = v.classList;
					// nameList.each(function(name,item){
					// 	list.add(item)
					// })
					for(var i = 0; i < nameList.length; i++){
						list.toggle(nameList[i]);
					}
		
				})
			}
			return this;
		},
		html:function(string){
			if(arguments.length == 0){
				return this.elements[0].innerHTML;
			}else{

				this.each(function(n,v){
					v.innerHTML = string;
				})
				return this;

			}
		},
		remove:function(){
			if(arguments.length === 0){
				this.each(function(n,v){
					v.parentNode.removeChild(v)	
				})
			}
		},
		empty:function(){

			this.each(function(n,v){

			})
		}
	}) 


	window.$ = function(){
		return new dom(arguments)
	}

})(window,document)








